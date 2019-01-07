import React from 'react';
import { MDBView, MDBMask, MDBContainer, MDBRow, MDBCol } from 'mdbreact';
//import SignUpForm from '../components/signUpForm';
import LoginForm from '../materials/loginForm';

class FullPageIntro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  render() {
    return (
      <div>
        <header>
          <MDBView src="https://mdbootstrap.com/img/Photos/Others/images/47.jpg">
            <MDBMask overlay="blue-light" className="flex-center flex-column text-white">
              <MDBContainer className="mx-auto">
                <MDBRow>
                  <MDBCol size="12">
                    <h2 className="todarch-big-f float-right">todarch.</h2>
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol md="6" className="d-none d-sm-block">
                    <img src="https://mdbootstrap.com/img/Mockups/Transparent/Small/admin-new.png" alt="" className="img-fluid" />
                  </MDBCol>
                  <MDBCol md="6" sm="12">
                    <LoginForm />
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
              {/*<h2>This Navbar is fixed</h2>
              <h5>It will always stay visible on the top, even when you scroll down</h5>
              <p>Navbar's background will switch from transparent to solid color while scrolling down</p><br />
              <p>Full page intro with background image will be always displayed in full screen mode, regardless of device </p>*/}
            </MDBMask>
          </MDBView>
        </header>
      </div>
    );
  }
}

export default FullPageIntro;