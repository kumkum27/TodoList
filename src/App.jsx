import React, { useState, useEffect } from "react";
import Todo from "./components/Todo";
import { Moon, Sun, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function Appp() {
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
    <div className={`min-h-screen ${theme === "light" ? "bg-gradient-to-br from-blue-100 to-purple-100" : "bg-gradient-to-br from-gray-900 to-purple-900"} transition-all duration-500 flex flex-col items-center justify-between`}>
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

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mt-12 mb-4"
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2 flex items-center justify-center"
        >
          <CheckCircle2 className="mr-2" size={36} />
          TaskMaster
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-xl text-gray-600 dark:text-gray-300"
        >
          Your Personal Productivity Hub
        </motion.p>
      </motion.div>

      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md mx-auto mt-2"
        >
          <Todo />
        </motion.div>
      </AnimatePresence>

      <div className="h-16"></div>
    </div>
  );
}

export default App;
