interface RetroFieldsetProps {
  label?: string;
  children: React.ReactNode;
  className?: string;
}

const RetroFieldset: React.FC<RetroFieldsetProps> = ({ label, children, className = '' }) => {
  const borderStyles = `relative border-2 border-white border-b-[#808080] border-r-[#808080] shadow-[inset_1px_1px_0_0_#808080]`;

  if (!label) {
    return <div className={`${borderStyles} p-2.5 md:p-4  ${className}`}>{children}</div>;
  }

  return (
    <fieldset className={`${borderStyles} p-2.5 md:p-4 pt-2 md:pt-6 ${className}`}>
      <legend className='absolute -top-3 left-3 bg-[#C0C0C0] px-2 text-sm font-bold uppercase'>{label}</legend>
      {children}
    </fieldset>
  );
};

export default RetroFieldset;
