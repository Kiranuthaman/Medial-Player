import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom'

function Landingpage() {
  return (
    <div>
      <Container className='mt-5'>
        <Row className='d-flex justify-content-center align-items-center mt-5'>
          <Col sm={12} md={6} >
            <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
            <p style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit delectus veritatis laudantium magni voluptas voluptatem temporibus vel deserunt, odit voluptatum sequi repellat non iusto doloribus, hic recusandae animi optio asperiores.</p>
            <Link to={'/home'}><button className='btn btn-warning mt-5'>Get Started</button></Link>
          </Col>
          <Col sm={12} md={6} className='d-flex justify-content-center'>
            <img src="https://i.pinimg.com/originals/ff/62/08/ff620854b85ca2824e8e3b6b3e5d079e.gif" alt="no image" className='w-100' />
          </Col>
        </Row>
      </Container>

      <Container className='mt-5 mb-5'>
        <h2 className='text-center mt-5 md-5'>Features</h2>
        <Row className="d-flex justify-content-center align-items-center mt-5">
          <Col className='d-flex justify-content-center  ' sm={12} md={4}>     <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://steamuserimages-a.akamaihd.net/ugc/789753588663340202/3A577E4B5AED98E18C8193DB6AE2A9BDB8F0794B/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false" className='w-100 p-2' style={{height:'300px'}}  />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
             </Card.Body>
          </Card> </Col>
          <Col  className='d-flex justify-content-center mt-md-0 mt-4' sm={12} md={4}>     <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://i.gifer.com/Clo7.gif" className='w-100 p-3 ' style={{height:'300px'}} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>

            </Card.Body>
          </Card> </Col>
          <Col  className='d-flex justify-content-center  mt-md-0 mt-4' sm={12} md={4}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://i.pinimg.com/originals/65/78/57/657857332480a11898e8759599f591bf.gif" className='w-100 p-3 ' style={{height:'300px'}} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>

              </Card.Body>
            </Card> </Col>
        </Row>

      </Container>
       
      <div className='container-fluid mt-3 '>
        <div className="row ">
          <div className="col-md-1"></div>
          <div className="col-md-10 d-flex justify-content-center ">
            <div className='row border rounded-4 mb-5  '>
              <div className="col-md-6 py-5 px-5">
                <h4 className='text-warning'>Simple Fast and Powerful</h4>
                <p className='mb-3 mt-4' style={{textAlign:'justify'}}><span style={{fontSize:'25px'}}>Play Everything</span> : Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere labore, corporis nihil vel est, quasi sed nesciunt aspernatur saepe ullam nisi impedit repudiandae laborum molestias autem nostrum aliquid quis. Dolores.</p>

                <p className='mb-3' style={{textAlign:'justify'}}><span style={{fontSize:'25px'}}>Play Everything</span> : Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere labore, corporis nihil vel est, quasi sed nesciunt aspernatur saepe ullam nisi impedit repudiandae laborum molestias autem nostrum aliquid quis. Dolores.</p>

                <p style={{textAlign:'justify'}}><span style={{fontSize:'25px'}}>Play Everything</span> : Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere labore, corporis nihil vel est, quasi sed nesciunt aspernatur saepe ullam nisi impedit repudiandae laborum molestias autem nostrum aliquid quis. Dolores.</p>
              </div>
              <div className="col-md-6">
                <div className='px-3 py-5' style={{height:'100%'}}>
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/roz9sXFkTuE?si=iIl0XAD1oI9ptX9M" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>

    </div>
  )
}

export default Landingpage