import { NestFactory } from "@nestjs/core"

// modules
import { AppModule } from "./app.module"

export const PUBLIC_URL = process.env.NODE_ENV === 'development' ? `http://localhost:${process.env.PORT || 7000}` : ''

async function start() {
    const PORT = process.env.PORT || 7000
    const app = await NestFactory.create(AppModule)
    
    app.enableCors()

    await app.listen(PORT, () => console.log(`Server started: http://localhost:${PORT}`))
}

start()