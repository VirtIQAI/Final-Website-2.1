import React, { ButtonHTMLAttributes } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  children,
  className,
  ...props
}) => {
  const baseStyles = "relative font-medium rounded-lg inline-flex items-center justify-center transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-opacity-50 overflow-hidden";
  
  const variantStyles = {
    primary: "bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-lg shadow-purple-500/20 focus:ring-purple-500 before:absolute before:inset-0 before:bg-gradient-to-r before:from-indigo-600 before:to-purple-500 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300 hover:shadow-xl hover:shadow-purple-500/30 transform hover:-translate-y-0.5",
    secondary: "bg-gray-800 hover:bg-gray-700 text-white focus:ring-gray-500",
    outline: "bg-transparent border border-gray-700 hover:border-purple-500 text-white hover:text-purple-400 focus:ring-purple-500",
  };
  
  const sizeStyles = {
    sm: "text-xs px-3 py-2",
    md: "text-sm px-4 py-2.5",
    lg: "text-base px-6 py-3",
  };
  
  const widthStyles = fullWidth ? "w-full" : "";
  
  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyles} ${className || ''}`;
  
  return (
    <button className={combinedClassName} {...props}>
      <span className="relative z-10">{children}</span>
    </button>
  );
};