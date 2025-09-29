'use client'

import { useEffect, useState } from 'react'

import { Post } from '@/types/types'

import { getRequestPath } from '@/utils/getRequestPath'

const { requestPath } = getRequestPath()

export default function CsrScreen() {
	const [posts, setPosts] = useState<Post[]>([])
	const [loading, setLoading] = useState(true)
	const [hasError, setHasError] = useState(false)

	useEffect(() => {
		setLoading(true)
		setHasError(false)

		// Первым делом запрашиваем внешний ресурс
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then(response => {
				if (!response.ok) {
					throw new Error('Не удалось получить данные с внешнего API')
				}
				return response.json()
			})
			.then((data: Post[]) => {
				setPosts(data.slice(0, 5))
			})
			.catch(() => {
				// Если внешний API недоступен, идём на внутренний
				fetch(`${requestPath}/api/posts`)
					.then(response => {
						if (!response.ok) {
							throw new Error('Не удалось получить данные с внутреннего API')
						}
						return response.json()
					})
					.then((data: Post[]) => {
						setPosts(data.slice(0, 5))
					})
					.catch(() => {
						console.error('Ошибка при обращении к внутренним данным.')
						setHasError(true) // Сообщаем о произошедшей ошибке
					})
					.finally(() => {
						setLoading(false) // Завершение загрузки
					})
			})
	}, [])

	return (
		<div className='max-w-3xl mx-auto p-5'>
			<h1 className='mb-4 text-3xl font-bold text-center'>CSR Page</h1>
			<p className='mb-3'>Эта страница рендерится на клиентской стороне:</p>
			{loading ? (
				<p className='text-center'>Загрузка...</p>
			) : hasError ? (
				<p className='text-center'>Нет доступных данных.</p>
			) : (
				<ul className='list-disc list-inside space-y-1'>
					{posts.length > 0 ? (
						posts.map(post => <li key={post.id}>{post.title}</li>)
					) : (
						<p className='text-center'>Нет доступных данных.</p>
					)}
				</ul>
			)}
		</div>
	)
}
