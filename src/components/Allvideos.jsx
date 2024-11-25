import React, { useEffect ,useState} from 'react'
import Videocard from '../components/Videocard'
import { getVideoApi, updateCategoryApi } from '../services/allApi'

function Allvideos({addStatus ,setCategoryUpdates}) {
  
  const [video, setVideo] = useState([])
  const [deleteStatus ,setDeleteStatus] = useState()
  

  const getallVideo = async ()=>{
    const result = await getVideoApi()
    // console.log(result);  
    setVideo(result.data)
  }
  console.log(video);
  

  useEffect(()=>{
    getallVideo()
  },[addStatus ,deleteStatus])





  const dragOver = (e)=>{
    e.preventDefault()
  }
  const videoDrop = async(e)=> {
    const {videoDetails , categoryDetails} = JSON.parse (e.dataTransfer.getData('Details')) 
    console.log(videoDetails,categoryDetails);

    let result = categoryDetails.allVideos.filter((item)=>item.id!=videoDetails.id)
    
    const reqbody ={
      category: categoryDetails.category,
      allVideos:result,
      id:categoryDetails.id
    }

   

    const response = await updateCategoryApi(categoryDetails.id ,reqbody)
    console.log(response);
    if (response.status>=200 &&response.status<300) {
      setCategoryUpdates(response)
    }
    
  }




  
  return (
    <>
    
    <h5 className='mt-5'>All videos</h5>
    { video?.length>0?
      <div className="container-fluid mt-5">

      <div className="row">
        {video?.map((item)=>(
         <div className="col-md-3 p-2" droppable onDragOver={(e)=>dragOver(e)} onDrop={(e)=>videoDrop(e)}>
         <Videocard videDetails={item} setDeleteStatus={setDeleteStatus}/>
       </div>
        ))}
      </div>
    </div>
    :
    <div className="container-fluid mt-5">
     <div className="row">
     <div className="col-md-4"></div>
      <div className="col-md-4">
        <img src="https://imgs.search.brave.com/P33zbki3_0zt8jQ0ZO4rv4w_PGF11PwVZKWppbiReBo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxNi8w/NC9DYXJ0LUZyZWUt/UE5HLUltYWdlLnBu/Zw" alt="no image" className='w-100'/>
        <h5 className='text-center text-warning '>No video Addes Yet.....</h5>
      </div>
      <div className="col-md-4"></div>
     </div>
    </div>
    }

    </>
  )
}

export default Allvideos