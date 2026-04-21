const Input = (props: { value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; error?: boolean; errorMessage?: string; placeholder?: string }) => {
  const { value, onChange, error, errorMessage, placeholder } = props;
  return (
    <div>
      <input
        className="border border-gray-500 rounded-md p-2 mb-1 w-full"
        placeholder={placeholder}
        type="text"
        value={value}
        onChange={onChange}
      />
      <p className="text-red-700 text-sm h-6 mb-1 w-auto">
        {error && errorMessage}
      </p>
    </div>
  );
};

export default Input;