import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ThemeSwitcher = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <motion.button
      className="theme-switcher"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => setIsDark(!isDark)}
    >
      {isDark ? '☀️' : '🌙'}
    </motion.button>
  );
};

export default ThemeSwitcher; 