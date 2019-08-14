import axios from 'axios'

export const getTitle = (id)=>{
    return axios.get('http://localhost:5000/posts/title/'+id)
}
export const getContent = (id)=>{
    return axios.get('http://localhost:5000/posts/content/'+id)
}