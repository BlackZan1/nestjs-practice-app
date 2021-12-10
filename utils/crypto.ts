import * as bcrypt from 'bcrypt'

export async function hash(value: string, salt: number = 12): Promise<string> {
    console.log(value, salt)

    return await bcrypt.hash(value, salt)
}

export async function compare(value: string, hash: string): Promise<boolean> {
    return await bcrypt.compare(value, hash)
}