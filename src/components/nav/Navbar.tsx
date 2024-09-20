import { NavbarItemProps } from '../../types/interfaces';
import useToggleMenu from '../../hooks/useToggleMenu';
import GenericNavbarList from './GenericNavbarList';
import { BookmarkLogo, SocialIcons } from '../Icons';
import { BurgerNavbarButton } from '../Button';

interface NavbarProps {
  items: NavbarItemProps[];
  isFooter?: boolean;
}

const Navbar = ({ items, isFooter = false }: NavbarProps) => {
  const { isMenuOpen, toggleMenu } = useToggleMenu();

  return (
    <>
      {!isFooter && (
        <div className="container mx-auto py-6 px-6 flex justify-between items-center">
          <BookmarkLogo className='z-50' isOnDark={isMenuOpen} />
          <GenericNavbarList items={items} />
          <BurgerNavbarButton isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </div>
      )}
      {isMenuOpen && !isFooter && (
        <div className="fixed inset-0 bg-secondary-dark/95 z-20 pt-[100px] px-6 pb-6 flex flex-col justify-between">
          <GenericNavbarList items={items} isMobile />
          <SocialIcons wrapperClassName="space-x-10 w-full justify-center" />
        </div>
      )}
      {isFooter && (
        <div className="container mx-auto py-10 md:py-6 px-6 flex justify-between items-center flex-col md:flex-row gap-12">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <BookmarkLogo isOnDark={true} />
            <GenericNavbarList items={items} isFooter className="flex gap-8 flex-col md:flex-row items-center text-xs uppercase" />
          </div>
          <SocialIcons wrapperClassName="space-x-6" />
        </div>
      )}
    </>
  );
};

export default Navbar;