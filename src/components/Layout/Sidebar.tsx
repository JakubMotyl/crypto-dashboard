import { useEffect, useState, type ReactElement } from "react";

interface navLinksProps {
  icon: ReactElement;
  name: string;
}

const navLinks: navLinksProps[] = [
  {
    icon: <i className="fa-solid fa-chart-simple"></i>,
    name: "Market",
  },
  {
    icon: <i className="fa-solid fa-wallet"></i>,
    name: "Portfolio",
  },
  {
    icon: <i className="fa-solid fa-arrows-spin"></i>,
    name: "Transfer",
  },
  {
    icon: <i className="fa-solid fa-sack-dollar"></i>,
    name: "Funds",
  },
  {
    icon: <i className="fa-solid fa-money-bill-transfer"></i>,
    name: "Transactions",
  },
  {
    icon: <i className="fa-solid fa-gear"></i>,
    name: "Settings",
  },
];

export default function Sidebar() {
  const [darkMode, setDarkMode] = useState<boolean>(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    // console.log(darkMode);
  }, [darkMode]);

  return (
    <nav className="h-full w-fit flex flex-col">
      {/* Logo */}
      <div className="flex items-center gap-3 p-item h-20">
        <div className="text-[1.5rem] text-white">
          <i className="fa-brands fa-think-peaks"></i>
        </div>
        <div>
          <span className="text-lg font-semibold text-white">CryptoTrade</span>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex flex-col justify-between p-container flex-1 w-full">
        <ul className="flex flex-col space-y-2">
          {navLinks.map((item, index) => (
            <li
              key={index}
              className={`p-item cursor-pointer w-full flex items-center md:justify-start justify-center gap-3 rounded-2xl duration-200 ${
                item.name === "Market"
                  ? "text-white bg-[#1F243A]"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <span>{item.icon}</span>
              <span className="md:block hidden">{item.name}</span>
            </li>
          ))}
        </ul>
        <div className="flex items-center md:justify-between justify-center w-full">
          {/* Light label */}
          <p
            className={`text-sm duration-300 md:block hidden ${
              !darkMode ? "text-white" : "text-gray-400"
            }`}
          >
            Light
          </p>

          {/* Toggle */}
          <div
            className="relative h-7 w-16 flex items-center border border-gray-400 rounded-2xl cursor-pointer"
            onClick={() => setDarkMode((prev) => !prev)}
          >
            <div
              className={`absolute left-1 h-5 w-5 bg-[#4A90E2] rounded-full transition-transform duration-300 ${
                darkMode ? "translate-x-[34px]" : "translate-x-0"
              }`}
            />
          </div>

          {/* Dark label */}
          <p
            className={`text-sm duration-300 md:block hidden ${
              darkMode ? "text-white" : "text-gray-400"
            }`}
          >
            Dark
          </p>
        </div>
      </div>
    </nav>
  );
}
