type SvgBackButtonProps = {
	className?: string
}

const SvgBackButton: React.FC<SvgBackButtonProps> = ({ className }) => {
	return (
		<svg
			className={className}
			width='10'
			height='10'
			viewBox='0 0 8 14'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			style={{ marginRight: '12px' }}
		>
			<path
				d='M7 13L1 6.93015L6.86175 1'
				stroke='#D3D3D3'
				strokeWidth='3'
				style={{ fill: 'transparent' }}
			/>
		</svg>
	)
}

export default SvgBackButton
