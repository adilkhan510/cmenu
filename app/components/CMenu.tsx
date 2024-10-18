"use client";
import { FC, useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiSearch } from "react-icons/fi";
import { Command, commands } from "./commands";

const CMenu: FC = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Command[] | null>();
  const [selected, setSelected] = useState(0);

  const filter = (query: string): Command[] => {
    return commands.filter((command) => {
      return command.text.toLowerCase().includes(query);
    });
  };

  const navigation = useCallback(
    (event: KeyboardEvent) => {
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
        commands[selected].action();
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
    <motion.div
      className="flex items-center justify-center overflow-hidden fixed w-screen h-screen select-none bg-[#e7e7e7e5]"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
    >
      <motion.div
        className="w-[640px] will-change-auto relative bg-white rounded-lg shadow-2xl"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", damping: 20, stiffness: 300 }}
      >
        <div className="h-16 flex items-center text-xl text-gray-400 border-gray-200 border-b">
          <FiSearch className="ml-4" />
          <input
            placeholder="search commands ..."
            type="text"
            autoFocus
            className="ml-4 outline-none w-full will-change-auto text-lg"
            onChange={(e) => setQuery(e.target.value)}
            value={query}
          />
        </div>

        <motion.ul className="flex overflow-y-auto overflow-x-hidden flex-col w-full transition-all will-change-auto max-h-[320px]">
          <AnimatePresence initial={false}>
            {results?.map((command, index) => (
              <motion.div
                key={command.text + index}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
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
  );
};

export default CMenu;
