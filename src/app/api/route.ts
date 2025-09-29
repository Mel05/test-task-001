// import { NextResponse } from 'next/server'
// import fs from 'fs'
// import path from 'path'

// export async function POST(request: Request) {
// 	const formData = await request.formData()
// 	const text = formData.get('text')
// 	const file = formData.get('file')

// 	if (file && !(file instanceof File)) {
// 		return NextResponse.json(
// 			{ success: false, error: 'Invalid file type' },
// 			{ status: 400 }
// 		)
// 	}

// 	if (file instanceof File) {
// 		// Путь до папки uploads в корне проекта
// 		const uploadsDir = path.join(process.cwd(), 'uploads')

// 		// Создаём папку, если её нет
// 		if (!fs.existsSync(uploadsDir)) {
// 			fs.mkdirSync(uploadsDir)
// 		}

// 		// Получаем содержимое файла как ArrayBuffer
// 		const arrayBuffer = await file.arrayBuffer()

// 		// Конвертируем в Buffer для fs
// 		const buffer = Buffer.from(arrayBuffer)

// 		// Полный путь для сохранения файла
// 		const filePath = path.join(uploadsDir, file.name)

// 		// Записываем файл (если файл с таким именем есть — перезапишет)
// 		fs.writeFileSync(filePath, buffer)
// 	}

// 	return NextResponse.json({
// 		success: true,
// 		receivedText: typeof text === 'string' ? text : null,
// 		receivedFile: file instanceof File ? file.name : null,
// 	})
// }

import { NextResponse } from 'next/server'

export async function POST(request: Request) {
	const formData = await request.formData()
	const text = formData.get('text')
	const file = formData.get('file')

	if (file && !(file instanceof File)) {
		return NextResponse.json(
			{ success: false, error: 'Invalid file type' },
			{ status: 400 }
		)
	}

	// Просто возвращаем имя файла, без сохранения
	return NextResponse.json({
		success: true,
		receivedText: typeof text === 'string' ? text : null,
		receivedFile: file instanceof File ? file.name : null,
	})
}
