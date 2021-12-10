import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import * as path from 'path'
import * as fs from 'fs'
import * as uuid from 'uuid'

// utils
import { PUBLIC_URL } from 'src/main'

export enum FileType {
    AUDIO = 'audio',
    IMAGE = 'image',
    AVATAR = 'avatar'
}

@Injectable()
export class FilesService {
    createFile(type: FileType, file) {
        try {
            const fileExt = file.originalname.split('.').pop()
            const fileName = uuid.v4() + '.' + fileExt
            const filePath = path.resolve(__dirname, '..', 'static', type)

            if(!fs.existsSync(filePath)) fs.mkdirSync(filePath, { recursive: true })

            fs.writeFileSync(path.resolve(filePath, fileName), file.buffer)

            return PUBLIC_URL + '/' + type + '/' + fileName
        }
        catch(err) {
            throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    deleteFile(filename: string) {
        // fs.
    }
}
