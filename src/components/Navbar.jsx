import { useEffect, useState } from "react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved ? saved === "dark" : false;
  });

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "light";
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <nav className="navbar">
      <h2>Inventory Manager</h2>
      <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
    </nav>
  );
}
