import { commonApi } from "./commonApi"
import { serverUrl } from "./serverUrl"

//  api to add videos 
export const addVideoApi = async(reqBody)=>{
    return await commonApi('POST', `${serverUrl}/videos`,reqBody)
}

// api to get all videos
export const getVideoApi = async()=>{
    return await commonApi('GET',`${serverUrl}/videos`,"")
}

// api to remove video
export const removeVideo = async(id)=>{
    return await commonApi('DELETE' ,`${serverUrl}/videos/${id}`,{} )
}

//  api to add vide to history
export const addHistoryApi = async(reqBody)=>{
    return await commonApi('POST',`${serverUrl}/history`,reqBody)
}

// api to get all video from history
export const getAllVideoHistory= async()=>{
    return await commonApi('GET',`${serverUrl}/history`,"")
}

// api to delete history video
export const delteHistoryVideoApi = async(id)=>{
return await commonApi('DELETE',`${serverUrl}/history/${id}`,{})
}

// Api to add category
export const addCategoryApi = async(reqBody) =>{
    return await commonApi('POST',`${serverUrl}/category`, reqBody)
}

// Api to get all category
export const getAllCategoryApi = async()=>{
    return await commonApi("GET" ,`${serverUrl}/category`)
}

// api to delete category
 export const deleteCategoryApi = async(id)=>{
   return await commonApi ('DELETE',`${serverUrl}/category/${id}`,{})
 }

//  api to update category
export const updateCategoryApi = async(categoryid , reqBody)=>{
    return await commonApi('PUT' ,`${serverUrl}/category/${categoryid}`,reqBody)
}