export default function Main() {
	return (
		<div className='p-5 mx-auto'>
			<h1 className='text-3xl font-bold mb-4 text-center'>Test Task 001</h1>
			<p className='mb-3 text-center'>
				JSONPLACEHOLDER сегодня по какой-то причине недоступен. Для страницы CSR
				сделал API постов, но загрузка получается долгой, потому что сначала
				идёт запрос к jsonplaceholder, и только после неудачи — запрос идет к
				внутреннему API. Поэтому требуется немного подождать.
			</p>
		</div>
	)
}
