import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  items: { title: string; href: string; }[];
}

const MobileMenu = ({ isOpen, onClose, items }: MobileMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="mobile-menu"
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'tween' }}
        >
          <div className="mobile-menu-items">
            {items.map((item) => (
              <a
                key={item.title}
                href={item.href}
                onClick={onClose}
                className="mobile-menu-item"
              >
                {item.title}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu; 