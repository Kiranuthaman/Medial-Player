import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import {  addHistoryApi, removeVideo } from '../services/allApi';






function Videocard({videDetails,setDeleteStatus ,present}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {setShow(true);
  
     let caption = videDetails?.caption
     let url = videDetails?.emdedLink

     const time = new Date()
     console.log(time);
     const timeStamp = new Intl.DateTimeFormat ("en-GB", {year:'numeric',month:"2-digit",day:'2-digit',hour:'2-digit',minute:'2-digit',second:"2-digit"}).format(time)
     
     console.log(timeStamp);
     const reqBody = {
      caption,
      url,
      timeStamp
     }

    const result  = await addHistoryApi(reqBody)
    console.log(result);
    
  }
  
  const handleDelete = async(id)=>{
    const result = await removeVideo(id)
    console.log(result);
    if (result.status >= 200 && result.status<300) {
      setDeleteStatus(result)
    }
    
  }

  const videoDrag = (e,vDetails)=>{
    console.log(e);
    console.log(vDetails);
    e.dataTransfer.setData("videoDetails", JSON.stringify(vDetails)) 
  }

  


  return (
    <>
     <Card style={{ width: '100%' }} className='mt-3' draggable onDragStart={(e)=>videoDrag(e,videDetails)} >
     {!present && <Card.Img onClick={handleShow} variant="top" src={videDetails?.Imgurl} style={{height:'300px'}}/>}
      <Card.Body className='d-flex justify-content-between'>
        <p sty>{videDetails?.caption.slice(0,25)}....</p>
      {!present && <Button onClick={()=>handleDelete(videDetails?.id)} variant="danger"><FontAwesomeIcon icon={faTrash} /></Button>}
      </Card.Body>
    </Card>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        <h6>{videDetails?.caption}</h6>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="566" src= {`${videDetails?.emdedLink}?autoplay=1`} title="Kiliye (Malayalam) |ARM | Tovino Thomas |Krithi Shetty |Jithin Laal |Dhibu Ninan Thomas|Magic Frames" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </Modal.Body>
        
      </Modal>
    </>
  )
}

export default Videocard