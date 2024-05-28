import { useState, useEffect } from "react";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("DARK_MODE"))
  );

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  const handleModeChange = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("DARK_MODE", !darkMode);
  };

  return (
    <button onClick={handleModeChange} className="dark-mode-toggle">
      {darkMode ? (
        <>
          <i className="fa-solid fa-sun"></i> {"Light Mode"}
        </>
      ) : (
        <>
          <i className="fa-solid fa-moon"></i> {"Dark Mode"}
        </>
      )}
    </button>
  );
};

export default DarkModeToggle;
