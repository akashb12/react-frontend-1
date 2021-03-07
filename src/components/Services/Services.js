import React from 'react'
import {Card,Button} from 'react-bootstrap'
function Services() {
    return (
        <>
        <div className="my-5">
            <h1 className='text-center'>Our Services</h1>
        </div>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-10 mx-auto">
                    <div className="row">
                        {/* card 1 */}
                        <div className="col-md-4 col-10 mt-3">
                        <Card >
  <Card.Img variant="top" src="/images/2.png" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
                        </div>

                        {/* card 2 */}
                        <div className="col-md-4 col-10 mt-3">
                        <Card >
  <Card.Img variant="top" src="/images/2.png" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
                        </div>

                        {/* card  */}
                        <div className="col-md-4 col-10 mt-3">
                        <Card >
  <Card.Img variant="top" src="/images/2.png" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
                        </div>

                        {/* card 4 */}
                        <div className="col-md-4 col-10 mt-3">
                        <Card >
  <Card.Img variant="top" src="/images/2.png" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Services
