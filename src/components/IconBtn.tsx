interface IconBtnProp {
  icon?: React.ReactNode;
  label?: string;
  onClick?: () => void;
  className?: string;
}

const IconBtn = ({ 
  icon, 
  label, 
  onClick, 
  className = ""
}: IconBtnProp) => {
  return (
    <button 
      className={`${className} flex gap-2 justify-center items-center capitalize `} 
      onClick={onClick}
    > 
      {icon}
      {label}
    </button>
  );
};

export default IconBtn;