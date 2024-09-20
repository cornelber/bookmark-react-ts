import { useCallback, useEffect, useState } from 'react';

const useToggleMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Memoize the function to prevent unnecessary re-renders
  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prevState) => !prevState);
  }, []); // toggleMenu doesn't get recreated on every render

  useEffect(() => {
    document.documentElement.style.overflowY = isMenuOpen ? "hidden" : "";

    return () => {
      document.documentElement.style.overflowY = '';
    };
  }, [isMenuOpen]);

  return { isMenuOpen, toggleMenu };
};

export default useToggleMenu;