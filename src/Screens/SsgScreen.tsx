import { Post } from '@/types/types'

async function loadData(): Promise<Post[]> {
	return fetch('https://jsonplaceholder.typicode.com/posts')
		.then(res => res.json())
		.then((data: Post[]) => data.slice(0, 5))
}

export default async function SsgScreen() {
	const posts = await loadData()

	return (
		<div className='max-w-3xl mx-auto p-5'>
			<h1 className='mb-4 text-3xl font-bold text-center'>SSG Page</h1>
			<p className='mb-3'>
				Эта страница генерируется один раз во время сборки и не обновляется до
				следующего билда.
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
