import type { Metadata } from 'next'

import { Nunito } from 'next/font/google'

import './globals.css'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Modal from '@/components/Modal'

const nunito = Nunito({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
	title: 'test-task-001',
	description: 'Create by SuperMadMel',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='ru'>
			<body
				className={`${nunito.className} fixed top-0 left-0 right-0 bottom-0 py-10 bg-gray-300 bg-opacity-90 overflow-hidden`}
			>
				<div className='-wraper w-1/2 max-w-[500px] h-full mx-auto bg-white shadow-2xl grid grid-rows-[auto_1fr_auto_auto] border border-gray-300 rounded-xl overflow-hidden'>
					<Header />
					<main className='-main flex justify-center '>{children}</main>
					<Modal />
					<Footer />
				</div>
			</body>
		</html>
	)
}
