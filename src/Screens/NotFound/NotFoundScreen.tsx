import React from 'react'

import { BackButton } from '@/components/common/BackButton'

const NotFoundScreen: React.FC = () => {
	return (
		<>
			<div className='min-h-[400px] space-y-4 px-4 flex flex-col items-center justify-center text-center'>
				<h2 className='text-2xl font-semibold'>
					<span>😕</span>
					<br />
					Ничего не найдено
				</h2>

				<p>К сожалению данная страница отсутствует.</p>

				<BackButton />
			</div>
		</>
	)
}

export default NotFoundScreen
