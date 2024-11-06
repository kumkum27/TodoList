import React, { useState, useEffect } from "react";
import { Trash2, Edit2, Check } from "lucide-react";
import { motion } from "framer-motion";

const TodoItem = ({
  task,
  isEditing,
  onDelete,
  onToggle,
  onStartEdit,
  onFinishEdit,
}) => {
  const [editText, setEditText] = useState(task.text);

  useEffect(() => {
    if (isEditing) {
      setEditText(task.text);
    }
  }, [isEditing, task.text]);

  const handleFinishEdit = () => {
    onFinishEdit(editText);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleFinishEdit();
    }
  };

  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 overflow-hidden"
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex items-center p-4">
        {isEditing ? (
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-grow mr-2 p-2 border-b-2 border-blue-300 dark:border-blue-600 focus:border-blue-500 dark:focus:border-blue-700 focus:outline-none transition duration-200 bg-transparent"
            autoFocus
          />
        ) : (
          <div
            className="flex items-center flex-1 cursor-pointer"
            onClick={onToggle}
          >
            <input
              type="checkbox"
              checked={task.completed}
              onChange={onToggle}
              className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 transition duration-200"
            />
            <p
              className={`ml-4 text-lg ${
                task.completed
                  ? "line-through text-gray-500 dark:text-gray-400"
                  : "text-gray-800 dark:text-gray-200"
              } transition duration-200`}
            >
              {task.text}
            </p>
          </div>
        )}
        <div className="flex items-center space-x-2">
          {isEditing ? (
            <motion.button
              onClick={handleFinishEdit}
              className="text-green-500 hover:text-green-700 transition-colors duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Check size={20} />
            </motion.button>
          ) : (
            <motion.button
              onClick={onStartEdit}
              className="text-blue-500 hover:text-blue-700 transition-colors duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Edit2 size={20} />
            </motion.button>
          )}
          <motion.button
            onClick={onDelete}
            className="text-red-500 hover:text-red-700 transition-colors duration-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Trash2 size={20} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default TodoItem;