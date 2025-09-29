import { Post } from '@/types/types'

import { getRequestPath } from '@/utils/getRequestPath'

const { requestPath } = getRequestPath()

async function loadData(): Promise<Post[]> {
	try {
		const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
			cache: 'no-store',
		})

		if (!res.ok) {
			throw new Error('Не удалось получить данные с внешнего API')
		}

		const data: Post[] = await res.json()
		return data.slice(0, 5)
	} catch {
		// В случае ошибки пробуем внутренний API
		try {
			const resLocal = await fetch(`${requestPath}/api/posts`, {
				cache: 'no-store',
			})

			if (!resLocal.ok) {
				throw new Error('Не удалось получить данные с внутреннего API')
			}

			const localData: Post[] = await resLocal.json()
			return localData.slice(0, 5)
		} catch (error) {
			console.error('Ошибка получения данных для SSR:', error)
			return [] // Возвращаем пустой массив при ошибках
		}
	}
}

export default async function SsrScreen() {
	const posts = await loadData()

	return (
		<div className='max-w-3xl mx-auto p-5'>
			<h1 className='mb-4 text-3xl font-bold text-center'>SSR Page</h1>
			<p className='mb-3'>
				Эта страница рендерится на сервере и доставляется клиенту уже готовой.
			</p>
			{posts.length > 0 ? (
				<ul className='list-disc list-inside space-y-1'>
					{posts.map(post => (
						<li key={post.id}>{post.title}</li>
					))}
				</ul>
			) : (
				<p className='text-center'>Нет доступных данных.</p>
			)}
		</div>
	)
}
