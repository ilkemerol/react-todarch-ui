import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Accordion from "../materials/accordion";
import LoginForm from "../materials/loginForm";

class CustomComponentPage extends React.Component {
  render() {
    return (
      <div className="flexible-content">
        <MDBContainer>
          <MDBRow>
            <MDBCol size="6">
              <Accordion>
                <div className="accor">
                  <div className="head">Head 1</div>
                  <div className="body">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </div>
                </div>
                <div className="accor">
                  <div className="head">Head 2</div>
                  <div className="body">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </div>
                </div>
              </Accordion>
            </MDBCol>
            <MDBCol size="6">
              <LoginForm />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

export default CustomComponentPage;
