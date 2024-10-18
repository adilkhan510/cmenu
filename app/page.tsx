import CMenu from "./components/CMenu";
import {
  HiOutlineMagnifyingGlass,
  HiOutlineKey,
  HiOutlineCog,
} from "react-icons/hi2";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100">
      <CMenu />
      <section className="flex flex-col items-center justify-center text-center py-24 px-4">
        <h1 className="text-6xl font-extrabold mb-6 text-gray-900 leading-tight">
          Welcome to <span className="text-blue-600">CMenu</span>
        </h1>
        <p className="text-2xl text-gray-700 mb-12 max-w-2xl">
          A powerful command palette for your app. Search, navigate, and execute
          actions with ease. <span className="font-bold">cmd+k</span> to open
          the menu.
        </p>
        <p className="text-lg text-gray-700 mb-12 max-w-2xl">
          <span className="font-bold text-blue-600">Note:</span> This is a demo
          version.
        </p>
        <div className="space-x-4">
          <a
            href="/docs"
            className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition duration-300 opacity-50 cursor-not-allowed"
          >
            Get Started
          </a>
          <a
            href="https://github.com/adilkhan510/cmenu"
            className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition duration-300"
          >
            GitHub
          </a>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-16 text-gray-900">
            Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <HiOutlineMagnifyingGlass className="h-16 w-16 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-gray-900 leading-tight ">
                Powerful Search
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Quickly find what you need with our advanced search
                capabilities.
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <HiOutlineKey className="h-16 w-16 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-gray-900 leading-tight">
                Keyboard Shortcuts
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Navigate your app efficiently with customizable keyboard
                shortcuts.
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <HiOutlineCog className="h-16 w-16 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-gray-900 leading-tight">
                Customizable
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Tailor CMenu to fit your app&apos;s unique needs and design.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          &copy; {new Date().getFullYear()} CMenu. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
