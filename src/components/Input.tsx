interface InputProps {
  placeholder: string;
  reference?: any;
  password?: boolean; 
}

export function Input({ placeholder, reference, password }: InputProps) {
  return (
    <div>
      <input
        ref={reference}
        placeholder={placeholder}
        type={password ? "password" : "text"} 
        className="px-4 py-2 border rounded mt-2 w-full"
      />
    </div>
  );
}
