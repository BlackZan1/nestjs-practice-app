import { Module } from '@nestjs/common' // forwardRef(() => {})
// import { ConfigModule } from '@nestjs/config'
// import { Storage } from '@google-cloud/storage'

// services
import { FilesService } from './files.service'

// controllers
import { FilesController } from './files.controller'

@Module({
  providers: [FilesService],
  controllers: [FilesController],
  imports: [
    // ConfigModule.forRoot({
    //   isGlobal: true,
    //   envFilePath: '.env'
    // }),
    // forwardRef(() => new Storage({
    //   projectId: '',
    //   keyFilename: ''
    // }))
  ],
  exports: [
    FilesService
  ]
})
export class FilesModule {}
