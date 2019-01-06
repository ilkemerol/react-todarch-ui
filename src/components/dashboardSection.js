import React from 'react';
import { MDBListGroup, MDBListGroupItem, MDBBadge, MDBContainer, MDBRow, MDBCol, Progress } from "mdbreact";

class DashboardSection extends React.Component {

    render() {
        return (
          <div>
            <main className="blue-gradient" style={{ paddingTop: "70px", height: "100vh" }}>
                <MDBContainer>
                    <MDBRow>
                        <MDBCol size="12">
                            <h1 className="display-2 text-white">My Plans.</h1>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol size="6">
                            <MDBListGroup className="z-depth-3">
                                <MDBListGroupItem hover href="#">
                                    <div className="d-flex w-100 justify-content-between">
                                        <h5 className="mb-1">List group item heading</h5>
                                        <small>3 days ago</small>
                                    </div>
                                    <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius
                                        blandit.</p>
                                    <small>Donec id elit non mi porta.</small>
                                    <Progress value={25} />
                                </MDBListGroupItem>
                                <MDBListGroupItem hover href="#">
                                    <div className="d-flex w-100 justify-content-between">
                                        <h5 className="mb-1">List group item heading</h5>
                                        <small className="text-muted">3 days ago</small>
                                    </div>
                                    <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius
                                        blandit.</p>
                                    <small className="text-muted">Donec id elit non mi porta.</small>
                                </MDBListGroupItem>
                                <MDBListGroupItem hover href="#">
                                    <div className="d-flex w-100 justify-content-between">
                                        <h5 className="mb-1">List group item heading</h5>
                                        <small className="text-muted">3 days ago</small>
                                    </div>
                                    <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius
                                        blandit.</p>
                                    <small className="text-muted">Donec id elit non mi porta.</small>
                                </MDBListGroupItem>
                            </MDBListGroup>
                        </MDBCol>
                        <MDBCol size="3">
                        </MDBCol>
                        <MDBCol size="3">
                            <MDBListGroup>
                                <MDBListGroupItem className="d-flex justify-content-between align-items-center">Cras justo odio<MDBBadge color="primary"
                                    pill>14</MDBBadge>
                                </MDBListGroupItem>
                                <MDBListGroupItem className="d-flex justify-content-between align-items-center">Dapibus ac facilisis in<MDBBadge
                                    color="primary" pill>2</MDBBadge>
                                </MDBListGroupItem>
                                <MDBListGroupItem className="d-flex justify-content-between align-items-center">Morbi leo risus<MDBBadge color="primary"
                                    pill>1</MDBBadge>
                                </MDBListGroupItem>
                            </MDBListGroup>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </main>
          </div>
        );
      }
    }
  
export default DashboardSection;