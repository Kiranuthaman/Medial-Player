import { faVideo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { faFacebook,faInstagram,faWhatsapp,faXTwitter,faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'



function Footer() {
  return (
    <div>
        <div className="p-5 mt-5">
          <div className="container-fluid">
          <div className="row">
        <div className="col-md-4">
          <h4 className='text-warning'><FontAwesomeIcon icon={faVideo} />Media Player</h4>
          <p style={{textAlign:'justify'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis consequatur maiores ut. Iure omnis tenetur blanditiis ratione! Dolorum deleniti recusandae dolore molestias minima. Enim perferendis, quia ut expedita quod magnam.</p>
        </div>
        <div className="col-md-2 d-md-flex justify-content-center mt-4 mt-md-0">
         <div>
         <h4>Links</h4>
        <Link to={'/'}> <p>Landing Page</p></Link>
        <Link to={'/home'}> <p>Home Page</p></Link>
        <Link to={'/watchhistory'}> <p>Watch History</p></Link>
        
         
         </div>
         </div>
        <div className="col-md-2 d-md-flex justify-content-center mt-4 mt-md-0">
         <div>
         <h4>Guides</h4>
          <p className='mt-3'>React</p>
          <p>React Bootstrap</p>
          <p>Bootstrap</p>
         </div>
        </div>
        <div className="col-md-4 px-md-5 mt-4 mt-md-0">
          <h4>Contact Us</h4>
          <div className="d-flex mt-3">
            <input type="text" placeholder='Email Id' className='form-control'  />
            <button className='btn btn-warning'>Subscribe</button>
          </div>
          <div className="d-flex justify-content-between mt-4">
          <FontAwesomeIcon className='fa-2x' icon={faInstagram} />
          <FontAwesomeIcon className='fa-2x' icon={faFacebook} />
          <FontAwesomeIcon className='fa-2x' icon={faXTwitter} />
          <FontAwesomeIcon className='fa-2x' icon={faLinkedin} />
          <FontAwesomeIcon className='fa-2x' icon={faWhatsapp} />

          </div>
        </div>
      </div>
          </div>
        </div>
    </div>
  )
}

export default Footer