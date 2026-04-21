const Button = ({ onClick, label, disabled }: { onClick: () => void; label: string; disabled?: boolean }) => {
	const bgColor = disabled ? 'bg-gray-500' : 'bg-blue-700 hover:bg-blue-600';
	const cursor = disabled ? 'cursor-not-allowed' : 'cursor-pointer';
	return (
		<button className={`${bgColor} text-white font-bold py-2 px-4 rounded-md ${cursor} w-full`} type="button" onClick={onClick} disabled={disabled}>
			{label}
		</button>
	)
}

export default Button;