import { ReactElement } from "react";
import {
  SiFramer,
  SiTailwindcss,
  SiApple,
  SiVercel,
  SiX,
  SiTesla,
  SiArchlinux,
  SiDeno,
  SiFlutter,
  SiGithub,
  SiNike,
  SiDiscord,
} from "react-icons/si";

export type Command = {
  icon: ReactElement;
  text: string;
  action: () => void;
};

export const commands: Command[] = [
  {
    icon: <SiFramer />,
    text: "Framer Motion",
    action: () => window.open("https://framer.com/motion", "_blank"),
  },
  {
    icon: <SiTailwindcss />,
    text: "TailwindCSS",
    action: () => window.open("https://tailwindcss.com", "_blank"),
  },
  {
    icon: <SiApple />,
    text: "Apple",
    action: () => window.open("https://apple.com", "_blank"),
  },
  {
    icon: <SiArchlinux />,
    text: "Arch Linux",
    action: () => window.open("https://apple.com", "_blank"),
  },
  {
    icon: <SiVercel />,
    text: "Vercel",
    action: () => window.open("https://vercel.com", "_blank"),
  },
  {
    icon: <SiTesla />,
    text: "Tesla",
    action: () => window.open("https://tesla.com", "_blank"),
  },
  {
    icon: <SiDeno />,
    text: "Deno",
    action: () => window.open("https://deno.land", "_blank"),
  },
  {
    icon: <SiDiscord />,
    text: "Discord",
    action: () => window.open("https://discord.com", "_blank"),
  },
  {
    icon: <SiFlutter />,
    text: "Flutter",
    action: () => window.open("https://flutter.dev/", "_blank"),
  },
  {
    icon: <SiGithub />,
    text: "GitHub",
    action: () => window.open("https://github.com/", "_blank"),
  },
  {
    icon: <SiNike />,
    text: "Nike",
    action: () => window.open("https://nike.com/", "_blank"),
  },
  {
    icon: <SiX />,
    text: "X",
    action: () => window.open("https://x.com", "_blank"),
  },
];
