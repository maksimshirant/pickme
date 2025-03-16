import { FC } from 'react';
import st from './Button.module.scss';

interface ButtonProps {
   children: string;
   onClick?: () => void;
   disabled?: boolean;
   className?: string;
}

const Button: FC<ButtonProps> = ({ children, onClick, disabled, className }) => {
   return (
      <button
         onClick={onClick}
         disabled={disabled}
         className={`${st.btn} ${className || ''}`}
      >
         {children}
      </button>
   );
};

export default Button;
