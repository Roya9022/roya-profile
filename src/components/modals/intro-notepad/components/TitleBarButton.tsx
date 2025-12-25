import { WIN_OUTSET } from '../../../../constants/icons';

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
      w-4 h-4 md:w-5 md:h-5 bg-[#C0C0C0] flex items-center justify-center 
      ${WIN_OUTSET} 
      active:shadow-none active:translate-x-px active:translate-y-px
      ${className}
    `}>
      <Icon className='w-2 h-2 md:w-3 md:h-3' />
    </button>
  );
};
export default TitleBarButton;
