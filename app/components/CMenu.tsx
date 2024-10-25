"use client";
import { FC, useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiSearch } from "react-icons/fi";
import { Command, commands } from "./commands";

const CMenu: FC = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Command[] | null>();
  const [selected, setSelected] = useState(0);
  const [isOpen, setIsOpen] = useState(true);

  const filter = (query: string): Command[] => {
    return commands.filter((command) => {
      return command.text.toLowerCase().includes(query);
    });
  };

  const navigation = useCallback(
    (event: KeyboardEvent) => {
      if (event.key == "k" && (event.ctrlKey || event.metaKey)) {
        setIsOpen((prev) => !prev);
      }
      if (event.key === "Escape") {
        setIsOpen(false);
      }
      if (results) {
        const length = results.length - 1;
        if (
          event.key === "ArrowUp" ||
          (event.key === "Tab" && event.shiftKey)
        ) {
          event.preventDefault();
          setSelected(() => (selected === 0 ? 0 : selected - 1));
        } else if (event.key === "ArrowDown" || event.key === "Tab") {
          event.preventDefault();
          setSelected(selected === length ? length : selected + 1);
        }
      }
    },
    [results, selected]
  );

  const performAction = useCallback(
    (event: KeyboardEvent) => {
      if (event.key == "Enter" && results) {
        event.preventDefault();
        results[selected].action();
      }
    },
    [selected, results]
  );

  useEffect(() => {
    window.addEventListener("keydown", performAction);

    return () => {
      window.removeEventListener("keydown", performAction);
    };
  }, [selected, performAction]);

  useEffect(() => {
    setSelected(0);
    if (query) {
      setResults(filter(query));
    } else {
      setResults(null);
    }
  }, [query]);

  useEffect(() => {
    window.addEventListener("keydown", navigation);

    return () => {
      window.removeEventListener("keydown", navigation);
    };
  }, [navigation]);
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 flex flex-col items-center z-50 backdrop-blur bg-black/30 w-screen h-screen overflow-hidden select-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(!isOpen)}
        >
          <motion.div
            className="fixed top-[20%] transition-all will-change-[height] shadow-lg border border-solid rounded-lg bg-white p-4 w-[640px] max-w-[90%]"
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.2,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <input
              placeholder="search commands ..."
              type="text"
              autoFocus
              className="mb-2 outline-none border-b border-gray-200 bg-transparent py-5 px-2.5 w-full text-gray-800 text-lg font-inherit"
              onChange={(e) => setQuery(e.target.value)}
              value={query}
            />

            <motion.ul className="flex flex-col transition-all will-change-[height] w-full overflow-x-hidden overflow-y-auto max-h-[320px]">
              <AnimatePresence initial={false}>
                {results?.map((command, index) => (
                  <motion.div
                    key={command.text + index}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    role="option"
                    aria-selected={index === selected}
                    className={`relative cursor-pointer h-12 text-base leading-7 ${
                      index === selected ? "text-blue-600" : "text-gray-600"
                    }`}
                  >
                    <Command
                      command={command}
                      onMouseMove={() => setSelected(index)}
                      selected={index === selected}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CMenu;
