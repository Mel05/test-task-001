'use client'

import { useRouter } from 'next/navigation'

import SvgBackButton from './svg/SvgBackButton'

const BackButton: React.FC = () => {
	const router = useRouter()

	return (
		<div>
			<button
				className='-backbutton mt-3 pl-3 pr-4 py-1.5 flex items-center gap-2 bg-gray-700 hover:bg-gray-500 shadow-sm text-white transition-colors rounded-md cursor-pointer'
				onClick={() => router.back()}
				aria-label='Вернуться назад'
			>
				<SvgBackButton className='w-4 h-4 fill-current text-gray-700' />
				<span className='font-medium'>Вернуться назад</span>
			</button>
		</div>
	)
}

export default BackButton
