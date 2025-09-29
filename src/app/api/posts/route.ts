import { NextResponse } from 'next/server'

import { Post } from '@/types/types'

const posts: Post[] = [
	{
		userId: 1,
		id: 1,
		title: 'Post title 1',
		body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	},
	{
		userId: 2,
		id: 2,
		title: 'Post title 2',
		body: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	},
	{
		userId: 3,
		id: 3,
		title: 'Post title 3',
		body: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
	},
	{
		userId: 4,
		id: 4,
		title: 'Post title 4',
		body: 'Duis aute irure dolor in reprehenderit in voluptate velit esse.',
	},
	{
		userId: 5,
		id: 5,
		title: 'Post title 5',
		body: 'Cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.',
	},
	{
		userId: 1,
		id: 6,
		title: 'Post title 6',
		body: 'Sunt in culpa qui officia deserunt mollit anim id est laborum.',
	},
	{
		userId: 2,
		id: 7,
		title: 'Post title 7',
		body: 'Nullam malesuada erat ut turpis. Suspendisse urna nibh.',
	},
	{
		userId: 3,
		id: 8,
		title: 'Post title 8',
		body: 'Curabitur vel sem sit amet dolor hendrerit facilisis.',
	},
	{
		userId: 4,
		id: 9,
		title: 'Post title 9',
		body: 'Praesent dapibus, neque id cursus faucibus, tortor neque egestas.',
	},
	{
		userId: 5,
		id: 10,
		title: 'Post title 10',
		body: 'Vestibulum ante ipsum primis in faucibus orci luctus et.',
	},
]

export async function GET() {
	return NextResponse.json(posts)
}
