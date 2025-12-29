import React from 'react';

interface RetroButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const RetroButton: React.FC<RetroButtonProps> = ({
  children,
  onClick,
  href,
  target,
  rel,
  className = '',
  type = 'button',
}) => {
  const baseStyles = `
    inline-flex items-center justify-center gap-1.5
    px-4 py-1.5 bg-[#C0C0C0] font-bold border-2
    border-t-white border-l-white border-b-[#000000] border-r-[#000000] 
    shadow-[inset_-1px_-1px_0_0_#808080,inset_1px_1px_0_0_#DFDFDF] 
    active:border-t-[#000000] active:border-l-[#000080] active:border-b-white active:border-r-white 
    active:shadow-[inset_1px_1px_0_0_#808080]
    hover:bg-[#DFDFDF] focus:outline-dotted focus:outline-1 focus:outline-black focus:-outline-offset-4
    transition-none cursor-pointer whitespace-nowrap
  `;

  const combinedStyles = `${baseStyles} ${className}`;

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={combinedStyles}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedStyles}>
      {children}
    </button>
  );
};
export default RetroButton;
