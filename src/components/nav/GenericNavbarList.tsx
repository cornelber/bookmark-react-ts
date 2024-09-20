import NavbarItem from './NavbarItem';
import clx from 'classnames';
import { NavbarItemProps } from '../../types/interfaces';

interface GenericNavbarProps {
  items: NavbarItemProps[];
  isMobile?: boolean;
  isFooter?: boolean;
  className?: string;
}

const GenericNavbarList = ({ items, isMobile = false, isFooter = false, className = '' }: GenericNavbarProps) => {
  return (
    <ul className={clx(isMobile ? 'flex flex-col' : isFooter ? 'flex' : 'hidden md:flex space-x-12 items-center', className)}>
      {items.map((item, index) => (
        <NavbarItem key={index} {...item} isOnDark={isFooter} isMobile={isMobile} />
      ))}
    </ul>
  );
};

export default GenericNavbarList;