import { Post } from '@/types/types'

export default async function IsrScreen() {
	// Получаем данные для ISR внутри компонента с revalidate
	const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
		next: { revalidate: 30 },
	})
	const data: Post[] = await res.json()
	const posts = data.slice(0, 5)

	return (
		<div className='max-w-3xl mx-auto p-5'>
			<h1 className='mb-4 text-3xl font-bold text-center'>ISR Page</h1>
			<p className='mb-3'>
				Эта страница использует инкрементальную статическую регенерацию:
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
