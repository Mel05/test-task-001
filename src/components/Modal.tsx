'use client'

import { useState, useRef, FormEvent } from 'react'
import TextField from './common/InputField/InputField'

interface UploadResponse {
	success: boolean
	receivedText: string | null
	receivedFile: string | null
}

export default function Modal() {
	const [showModal, setShowModal] = useState(false)
	const [inputText, setInputText] = useState('')
	const [selectedFile, setSelectedFile] = useState<File | undefined>()

	const modalRef = useRef<HTMLDivElement>(null)

	const onBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
		if (e.target === modalRef.current) {
			closeModal()
		}
	}

	const openModal = () => setShowModal(true)
	const closeModal = () => setShowModal(false)

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		if (!inputText.trim() || !selectedFile) return

		const formData = new FormData()
		formData.append('text', inputText)
		formData.append('file', selectedFile)

		const response = await fetch('/api', {
			method: 'POST',
			body: formData,
		})

		if (response.ok) {
			const data: UploadResponse = await response.json()
			console.log(
				`Данные успешно отправлены!\nТекст: ${data.receivedText}\nФайл: ${data.receivedFile}`
			)
			closeModal()
		} else {
			console.log('Ошибка отправки данных.')
		}
	}

	const inputsData = [
		{
			label: 'Текст:',
			type: 'text',
			name: 'text',
			value: inputText,
			placeholder: 'Введите текст...',
			handleChange: (event: React.ChangeEvent<HTMLInputElement>) =>
				setInputText(event.target.value),
		},
		{
			label: 'Выберите файл:',
			type: 'file',
			name: 'file',
			value: '',
			placeholder: 'Выберите файл...',
			handleChange: (event: React.ChangeEvent<HTMLInputElement>) =>
				setSelectedFile(event.target.files?.[0]),
		},
	]

	return (
		<div className='h-16 flex flex-col items-center'>
			<button
				className='-modalbutton px-4 py-2 bg-gray-700 hover:bg-gray-500 shadow-sm text-white rounded-md transition-colors cursor-pointer'
				onClick={openModal}
			>
				Открыть модальное окно
			</button>
			{showModal && (
				<div
					ref={modalRef}
					className='fixed inset-0 z-50 flex items-center justify-center'
					onClick={onBackdropClick}
				>
					<div className='w-full max-w-[450px] md:max-w-[450px] p-6 bg-white shadow-lg border border-gray-300 rounded-xl'>
						<h2 className='mb-4 text-2xl font-bold '>Форма отправки данных</h2>
						<form onSubmit={handleSubmit}>
							{inputsData.map(input => (
								<TextField
									key={input.name}
									label={input.label}
									type={input.type}
									name={input.name}
									value={input.value}
									placeholder={input.placeholder}
									handleChange={input.handleChange}
								/>
							))}
							<div className='flex justify-center'>
								<button
									className='px-4 py-2 bg-gray-700 hover:bg-gray-500 shadow-sm text-white transition-colors rounded-md cursor-pointer'
									type='submit'
								>
									Отправить
								</button>
								<button
									className='ml-2 px-4 py-2 bg-red-700 hover:bg-red-500 shadow-sm text-white transition-colors rounded-md cursor-pointer'
									type='button'
									onClick={closeModal}
								>
									Закрыть
								</button>
							</div>
						</form>
					</div>
				</div>
			)}
		</div>
	)
}
