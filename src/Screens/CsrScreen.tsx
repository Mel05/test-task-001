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
		const fetchPosts = async () => {
			setLoading(true)
			setHasError(false)

			const fetchAndSetPosts = async (url: string) => {
				const response = await fetch(url)
				if (!response.ok)
					throw new Error(`API вернул статус ${response.status}`)
				const data = await response.json()
				setPosts(data.slice(0, 5))
			}

			try {
				await fetchAndSetPosts('https://jsonplaceholder.typicode.com/posts')
			} catch {
				try {
					await fetchAndSetPosts(`${requestPath}/api/posts`)
				} catch {
					setPosts([])
					setHasError(true)
				}
			} finally {
				setLoading(false)
			}
		}

		fetchPosts()
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
