import { Injectable } from "@nestjs/common"

@Injectable()
export class AppService {
    getMusic() {
        return [
            { title: 'Out of My Mine', author: 'Dance', id: 1, image: 'https://forpostsevastopol.ru/wp-content/uploads/2019/12/z25520580qqueen.jpg' },
            { title: 'Out of My Mine', author: 'Dance', id: 2, image: 'https://forpostsevastopol.ru/wp-content/uploads/2019/12/z25520580qqueen.jpg' },
            { title: 'Out of My Mine', author: 'Dance', id: 3, image: 'https://forpostsevastopol.ru/wp-content/uploads/2019/12/z25520580qqueen.jpg' },
            { title: 'Out of My Mine', author: 'Dance', id: 4, image: 'https://forpostsevastopol.ru/wp-content/uploads/2019/12/z25520580qqueen.jpg' },
            { title: 'Out of My Mine', author: 'Dance', id: 5, image: 'https://forpostsevastopol.ru/wp-content/uploads/2019/12/z25520580qqueen.jpg' },
            { title: 'Out of My Mine', author: 'Dance', id: 6, image: 'https://forpostsevastopol.ru/wp-content/uploads/2019/12/z25520580qqueen.jpg' }
        ]
    }

    getPlaylists() {
        return [
            { title: 'Sons of Villa', date: 'Uploaded yesterday', id: 1, amount: 99, image: 'https://i.pinimg.com/originals/35/82/21/358221b85dc0c666cbd6bf4961a260db.jpg' },
            { title: 'Sons of Villa', date: 'Uploaded yesterday', id: 2, amount: 99, image: 'https://i.pinimg.com/originals/35/82/21/358221b85dc0c666cbd6bf4961a260db.jpg' },
            { title: 'Sons of Villa', date: 'Uploaded yesterday', id: 3, amount: 99, image: 'https://i.pinimg.com/originals/35/82/21/358221b85dc0c666cbd6bf4961a260db.jpg' },
            { title: 'Sons of Villa', date: 'Uploaded yesterday', id: 4, amount: 99, image: 'https://i.pinimg.com/originals/35/82/21/358221b85dc0c666cbd6bf4961a260db.jpg' },
            { title: 'Sons of Villa', date: 'Uploaded yesterday', id: 5, amount: 99, image: 'https://i.pinimg.com/originals/35/82/21/358221b85dc0c666cbd6bf4961a260db.jpg' },
            { title: 'Sons of Villa', date: 'Uploaded yesterday', id: 6, amount: 99, image: 'https://i.pinimg.com/originals/35/82/21/358221b85dc0c666cbd6bf4961a260db.jpg' }
        ]
    }
}