import type { IconBtnProp } from "../features/home/types/types";

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