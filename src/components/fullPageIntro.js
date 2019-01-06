import React from 'react';
import { MDBView, MDBMask, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdbreact';
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
              <MDBContainer className="my-5">
                <MDBRow className="mb-5">
                  <MDBCol size="12">
                    <h2 className="todarch-big-f float-right">todarch.</h2>
                    <MDBIcon className="todarch-big-f float-right mr-5" icon="google-wallet" />
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol size="6">
                    <img src="https://mdbootstrap.com/img/Mockups/Transparent/Small/admin-new.png" alt="" className="img-fluid" />
                  </MDBCol>
                  <MDBCol size="6">
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