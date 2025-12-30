import { WIN_OUTSET } from '@/constants/icons';

interface TitleBarButtonProps {
  Icon: React.ElementType;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
}
const TitleBarButton: React.FC<TitleBarButtonProps> = ({ Icon, onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`
      w-5 h-5 md:w-5 md:h-5 bg-[#C0C0C0] flex items-center justify-center 
      ${WIN_OUTSET} 
      active:shadow-none active:translate-x-px active:translate-y-px
      ${className}
    `}>
      <Icon className='w-2.5 h-2.5 md:w-3 md:h-3 text-black' />
    </button>
  );
};
export default TitleBarButton;
