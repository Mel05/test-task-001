interface ITextFieldData {
	label: string
	type: string
	name: string
	value: string
	placeholder: string
	handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const TextField: React.FC<ITextFieldData> = ({
	label,
	type,
	name,
	value,
	placeholder,
	handleChange,
}) => {
	const id = name

	return (
		<div className='block mb-4'>
			<label className='block mb-2' htmlFor={id}>
				{label}
			</label>
			<input
				className='w-full p-2 text-black border rounded-md '
				id={id}
				type={type}
				name={name}
				value={value}
				placeholder={placeholder}
				onChange={handleChange}
			/>
		</div>
	)
}

export default TextField
