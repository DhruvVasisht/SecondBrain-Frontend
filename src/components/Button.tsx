import { Loader2 } from "lucide-react";
import { ReactElement } from "react";

interface ButtonProps {
  variant: "primary" | "secondary";
  text: string;
  startIcon?: ReactElement;
  fullWidth?: boolean;
  onClick?: () => void;
  loading?: boolean;
}

const variantClasses = {
  primary:
    "bg-blue-600 hover:bg-blue-700 text-white shadow-lg transform hover:scale-105 transition-all disabled:bg-blue-400",
  secondary:
    "bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 shadow-md transform hover:scale-105 transition-all disabled:bg-gray-200 disabled:border-gray-400 disabled:text-gray-500",
};

const defaultStyle =
  "flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm cursor-pointer disabled:cursor-not-allowed";

const Button = ({
  variant,
  text,
  startIcon,
  onClick,
  fullWidth,
  loading,
}: ButtonProps) => {
  return (
    <button
      onClick={loading ? undefined : onClick} 
      disabled={loading}
      className={`${variantClasses[variant]} ${defaultStyle} ${
        fullWidth ? "w-full flex justify-center items-center" : ""
      }`}
    >
      {loading ? (
        <Loader2 className="animate-spin w-5 h-5" />
      ) : (
        <>
          {startIcon}
          {text}
        </>
      )}
    </button>
  );
};

export default Button;
