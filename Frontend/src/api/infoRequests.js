import axios from 'axios'

//ImageBank
export const getImagesRequest = async () =>  await axios.get('http://localhost:8000/imagebank')

//Vocabulary Locations
export const getLocationRequest = async()=> await axios.get("http://localhost:8000/vocabulary/locations")
export const addLocationRequest = async(location)=> await axios.post("http://localhost:8000/vocabulary/locations", location)
//Vocabulary Activieties
export const getActivityRequest = async()=> await axios.get("http://localhost:8000/vocabulary/activities")
export const addActivityRequest = async(activity)=> await axios.post("http://localhost:8000/vocabulary/activities", activity)
export const deleteActivityRequest = async(id)=> await axios.delete("http://localhost:8000/vocabulary/activities/" + id)
export const deleteLocationRequest = async(id)=> await axios.delete("http://localhost:8000/vocabulary/locations/" + id)