'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

const Header = () => {
	const pathname = usePathname()

	const links = [
		{ label: 'Main', href: '/' },
		{ label: 'CSR', href: '/csr' },
		{ label: 'ISR', href: '/isr' },
		{ label: 'SSR', href: '/ssr' },
		{ label: 'SSG', href: '/ssg' },
	]

	return (
		<header>
			<div className='-header h-16 px-4 py-2 flex items-center justify-between bg-orange-400'>
				<div className='w-full flex gap-4 justify-between'>
					{links.map(({ label, href }) => (
						<Link
							key={href}
							href={href}
							className={`block py-2 px-4 hover:text-gray-400 transition duration-300 ease-in-out focus:outline-none focus:ring-0 text-white cursor-pointer shadow-2xl ${
								pathname === href ? 'bg-gray-700 text-white rounded-md' : ''
							}`}
							aria-current={pathname === href ? 'page' : undefined}
						>
							{label}
						</Link>
					))}
				</div>
			</div>
			<hr className='h-0.5 bg-zinc-900 border-none' />
		</header>
	)
}

export default Header
