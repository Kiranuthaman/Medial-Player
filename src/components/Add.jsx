import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons/faCloudArrowUp'
import { faFilm } from '@fortawesome/free-solid-svg-icons/faFilm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addVideoApi } from '../services/allApi';
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

function Add({setAddStatus}) {
  const [show, setShow] = useState(false);
  const [videoDetails, setvideoDetails]= useState({
    caption:'',
    Imgurl:'',
    emdedLink:''

  })
  console.log(videoDetails);

  const handleCancel =()=>{
    setvideoDetails({
      caption:'',
    Imgurl:'',
    emdedLink:''
    })
  }


  // to add data
  const handleAdd = async ()=>{
    const {caption,Imgurl,emdedLink} = videoDetails
    if (!caption || !Imgurl || !emdedLink) {

      toast.info('please fill the form completely')
      
    }
    else{
      if (emdedLink.startsWith('https://youtu.be')) {
        
        let link = `https://www.youtube.com/embed/${emdedLink.slice(17,28)}`  
        console.log(link);
        const result = await addVideoApi({caption,Imgurl,emdedLink:link} )
       console.log(result);
       if (result.status>=200 && result.status<300) {
        toast.success('video added sucessfully')
         handleCancel()
         setAddStatus(result)
        
       }
       else{
        toast.error('Something went wrong')
        handleCancel()
       }
        
      }
      else{
        let link =  `https://www.youtube.com/embed/${emdedLink.slice(-11)}`  
        console.log(link);
        const result = await addVideoApi({caption,Imgurl,emdedLink:link} )
       console.log(result);

       
       if (result.status>=200 && result.status<300) {
        toast.success('video added sucessfully')
        handleClose()
        setAddStatus(result)
        
       }
       else{
        toast.error('Something went wrong')
        handleCancel()
       }
        
       }
      
       
    }
  }
  
   const handleClose = () => {setShow(false);
    handleCancel()
  }

  const handleShow = () => setShow(true);

  return (
    <>
     <h5><span className='d-md-inline d-none'>Upload New Video </span><FontAwesomeIcon icon={faCloudArrowUp}  onClick={handleShow} className='fa-x ms-3'/></h5>
     <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-warning'><FontAwesomeIcon icon={faFilm} className='me-2' /><span className='d-md-inline d-none'> Upload Videos</span></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className='text-dark'>Please fill the following details</p>
          <form action="#" className='boarder boarder-secondary p-3 rounded'>
            <div className="mb-3">
              <input type="text" placeholder='Video Caption' value={videoDetails.caption} className='form-control' onChange={(e)=>setvideoDetails({...videoDetails ,caption:e.target.value})}/>
            </div>
            <div className="mb-3">
            <input type="text" placeholder='Image' value={videoDetails.Imgurl} className='form-control' onChange={(e)=>setvideoDetails({...videoDetails ,Imgurl:e.target.value})} />
            </div>
            <div className="mb-3">
            <input type="text" placeholder='Video url' value={videoDetails.emdedLink} className='form-control' onChange={(e)=>setvideoDetails({...videoDetails ,emdedLink:e.target.value})} />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="warning" onClick={handleAdd}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer  position='top-center' theme='colored' autoClose={2000}/>
    </>
  )
}

export default Add