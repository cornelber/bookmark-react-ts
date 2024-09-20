import { Link } from 'react-router-dom';
import clx from 'classnames';
import { NavbarItemProps } from '../../types/interfaces';


const NavbarItem = ({ to, label, isMobile = false, isOnDark = false, isButton = false }: NavbarItemProps) => {
  const linkStyle = clx('uppercase', {
    'link': !isButton,
    'btn btn-accent': isButton,
    'bg-transparent border-white w-full hover:bg-transparent' : isButton && isMobile,
    'text-xs': !isMobile,
    'text-2xl leading-1 tracking-widest text-white': isMobile,
    'text-white': isOnDark,
  });

  const listItemStyle = clx({
    'border-t-[1px] border-white/10 py-[24px] text-center': isMobile
  });

  return (
    <li className={listItemStyle}>
      <Link to={to} className={linkStyle}>
        {label}
      </Link>
    </li>
  );
};

export default NavbarItem;
