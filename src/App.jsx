import React, { useState, useEffect } from "react";
import Todo from "./components/Todo";
import { Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.classList.add(savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div className={`min-h-screen ${theme === "light" ? "bg-gradient-to-br from-blue-100 to-purple-100" : "bg-gradient-to-br from-gray-900 to-purple-900"} transition-all duration-500`}>
      <motion.button
        onClick={toggleTheme}
        className={`fixed top-4 right-4 p-2 rounded-full ${
          theme === "light" ? "bg-purple-600 text-white" : "bg-yellow-400 text-gray-900"
        } shadow-lg hover:shadow-xl transition-all duration-300`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {theme === "light" ? <Moon size={24} /> : <Sun size={24} />}
      </motion.button>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="grid py-4 min-h-screen place-items-center"
        >
          <Todo />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default App;