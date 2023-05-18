import { PostType } from './../types/ts';
import path from 'path'
import { promises as fs} from 'fs'



export const getPosts = async () : Promise<PostType[]>=>{
    const filePath = path.join(process.cwd(), "data", "posts.json")
    const data = await fs.readFile(filePath,"utf-8")
    return JSON.parse(data)
}

export const getPost = async (id:string) : Promise<PostType | undefined>=>{
    const posts = await getPosts();
    return posts.find((item)=>item.id === id)
    
}