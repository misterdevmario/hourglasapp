import axios from 'axios'


export const getImagesRequest = async () =>  await axios.get('http://localhost:8000/imagebank')