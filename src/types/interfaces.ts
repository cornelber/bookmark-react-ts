export interface ButtonProps {
    text: string;
    btnType?: 'primary' | 'secondary' | 'accent';
    className?: string;
}

export interface NavbarItemProps {
    to: string;
    label: string;
    isMobile?: boolean;
    isButton?: boolean;
    isOnDark?: boolean;
}