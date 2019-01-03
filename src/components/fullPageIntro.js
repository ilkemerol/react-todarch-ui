import React from 'react';
import { MDBView, MDBMask, MDBContainer, MDBRow, MDBCol } from 'mdbreact';

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
          <MDBView src="https://mdbootstrap.com/img/Photos/Others/img%20(40).jpg">
            <MDBMask overlay="purple-light" className="flex-center flex-column text-white text-center">
              <MDBContainer className=" my-5">
                <MDBRow>
                  <MDBCol size="6">
                    <h5>It will always stay visible on the top, even when you scroll down</h5>
                  </MDBCol>
                  <MDBCol size="6">
                    <h5>It will always stay visible on the top, even when you scroll down</h5>
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