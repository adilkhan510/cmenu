import CMenu from "./components/CMenu";

export default function Home() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <div
        className="absolute inset-0 transition-opacity duration-500 hover:opacity-50"
        style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "25px 25px",
        }}
      ></div>
      <CMenu />

      <section className="relative flex flex-col items-center justify-center text-center h-screen px-4">
        <h1 className="text-6xl font-extrabold mb-6 text-white leading-tight">
          Welcome to{" "}
          <span className="text-blue-500 from-yellow-500 to-purple-300 bg-gradient-to-r bg-clip-text text-transparent">
            CMenu
          </span>
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl">
          A powerful command palette for your app.{" "}
          <span className="font-bold">cmd+k</span> to open the menu.
        </p>
        <div className="flex items-center justify-center gap-4 mb-8">
          <span className="text-gray-300 text-sm font-semibold bg-blue-500/10 px-2 py-1 rounded-lg inline-flex items-center gap-1">
            <span className="text-blue-500">🚧</span> currently in beta
          </span>
        </div>
        <a
          href="https://github.com/adilkhan510/cmenu"
          className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-purple-300 text-gray-800 rounded-lg font-semibold hover:from-yellow-600 hover:to-purple-400 transition duration-300 shadow-lg"
        >
          GitHub
        </a>
      </section>
    </div>
  );
}
