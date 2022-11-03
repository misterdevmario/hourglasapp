import axios from 'axios'


export const getImagesRequest = async () =>  await axios.get('http://localhost:8000/imagebank')
export const addLocationRequest = async(location)=> await axios.post("http://localhost:8000/vocabulary/locations", location)