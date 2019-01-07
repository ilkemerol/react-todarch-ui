import React from 'react';
import { MDBContainer, MDBRow, MDBCol, Button, Card, CardBody, CardImage, CardTitle, CardText } from 'mdbreact';

class CardSection extends React.Component {
  render() {
    return (
      <div>
        <MDBContainer className=" my-5">
          <MDBRow>
            <MDBCol md="4" sm="12">
              <Card>
                <CardImage
                  className="img-fluid"
                  src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
                  waves
                />
                <CardBody>
                  <CardTitle>Card title</CardTitle>
                  <CardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card&apos;s content.
                  </CardText>
                  <Button href="#">Button</Button>
                </CardBody>
              </Card>
            </MDBCol>
            <MDBCol md="4" sm="12">
              <Card>
                <CardImage
                  className="img-fluid"
                  src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
                  waves
                />
                <CardBody>
                  <CardTitle>Card title</CardTitle>
                  <CardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card&apos;s content.
                  </CardText>
                  <Button href="#">Button</Button>
                </CardBody>
              </Card>
            </MDBCol>
            <MDBCol md="4" sm="12">
              <Card>
                <CardImage
                  className="img-fluid"
                  src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
                  waves
                />
                <CardBody>
                  <CardTitle>Card title</CardTitle>
                  <CardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card&apos;s content.
                  </CardText>
                  <Button href="#">Button</Button>
                </CardBody>
              </Card>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

export default CardSection;