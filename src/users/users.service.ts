import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

// dto
import { CreateUserDto } from './dto/create-user.dto'

// models
import { User, UserDocument } from './schemas/user.schema'
import { UserAlbum, UserAlbumDocument } from './schemas/user-album.schema'

// services
import { FilesService, FileType } from "src/files/files.service"

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User.name) private userModel: Model<UserDocument>,
        @InjectModel(UserAlbum.name) private userAlbumModel: Model<UserAlbumDocument>,
        private filesService: FilesService
    ) {}

    async createUser(dto: CreateUserDto, avatar): Promise<User> {
        console.log(avatar)

        if(avatar) {
            const filePath = this.filesService.createFile(FileType.AVATAR, avatar)

            dto.avatar = filePath
        }

        const newUser = new this.userModel(dto)
        let savedUser = await newUser.save()

        const newUserAlbum = await this.createUserAlbum(savedUser)

        savedUser.album = newUserAlbum
        savedUser = await savedUser.save()

        return savedUser
    }

    async createUserAlbum(user: User): Promise<UserAlbum> {
        const newAlbum = new this.userAlbumModel()
        newAlbum.owner = user

        return await newAlbum.save()
    }

    async getUsers(query: any): Promise<User[]> {
        return await this.userModel.find({}, {}, { limit: +query.limit || 10, skip: +query.offsetc || 0 }).populate('album').exec()
    }

    async getUserByEmail(email: string): Promise<User> {
        return await this.userModel.findOne({ email }).populate('album').exec()
    }
}
