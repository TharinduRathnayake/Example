import React, { Component } from 'react';
import '../index.css';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, MDBIcon, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBDropdownLink } from 'mdb-react-ui-kit';

export default class Login extends Component {
  render() {
    return (

      <div className="bg" style={{ zIndex: 98 }}>
        <div>

          <div style={{ marginBlockStart: '9%', marginLeft: '34%' }}>
            <MDBCard className="p-3 mb-2 bg-light text-dark opacity-90" style={{ maxWidth: '30rem' }}>
              <MDBCardBody>
                <MDBCardTitle>
                  <center>
                    <h2 className="text-dark">LOGIN</h2>
                  </center>
                </MDBCardTitle>
                <MDBCardText>

                  <form>
                    <div class="mb-3">
                      <label for="exampleInputEmail1" class="form-label">Email address</label>
                      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>

                    </div>
                    <div class="mb-3">
                      <label for="exampleInputPassword1" class="form-label">Password</label>
                      <input type="password" class="form-control" id="exampleInputPassword1"></input>
                    </div>
                    <div class="mb-3 form-check">
                      <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
                      <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                  </form>
                </MDBCardText>
                <div style={{ marginLeft: '35%' }}>
                  <MDBBtn className="btn btn-warning text-dark">Login</MDBBtn>
                  &nbsp;
                  <MDBIcon className='ms-1' icon='user-cog' size='2x' />


                  <div style={{ marginLeft: '45%', marginBlockStart: '-13%' }}>

                    <MDBDropdown>
                      <MDBDropdownToggle tag='a' className='nav-link'>
                        <b class=''></b>
                      </MDBDropdownToggle>
                      <MDBDropdownMenu>
                        <MDBDropdownItem>
                          <MDBDropdownLink href="/registerCusDash"><b class='text-black'>Registered Customer</b></MDBDropdownLink>
                        </MDBDropdownItem>
                        <MDBDropdownItem>
                          <MDBDropdownLink href="/dashcus"><b class='text-black'>Customer Management</b></MDBDropdownLink>
                        </MDBDropdownItem>
                        <MDBDropdownItem>
                          <MDBDropdownLink href="/dashstore"><b class='text-black'>Store Management</b></MDBDropdownLink>
                        </MDBDropdownItem>
                        <MDBDropdownItem>
                          <MDBDropdownLink href="/dashdis"><b class='text-black'>Distribution Management</b></MDBDropdownLink>
                        </MDBDropdownItem>
                        <MDBDropdownItem>
                          <MDBDropdownLink href="/dashdeli"><b class='text-black'>Delivery Management</b></MDBDropdownLink>
                        </MDBDropdownItem>
                        <MDBDropdownItem>
                          <MDBDropdownLink href="/dashuser"><b class='text-black'>User Management</b></MDBDropdownLink>
                        </MDBDropdownItem>
                        <MDBDropdownItem>
                          <MDBDropdownLink href="/dashshow"><b class='text-black'>Showroom Management</b></MDBDropdownLink>
                        </MDBDropdownItem>
                        <MDBDropdownItem>
                          <MDBDropdownLink href="/dashfin"><b class='text-black'>Finance Management</b></MDBDropdownLink>
                        </MDBDropdownItem>
                        <MDBDropdownItem>
                          <MDBDropdownLink href="/dashowner"><b class='text-black'>Owner Management</b></MDBDropdownLink>
                        </MDBDropdownItem>
                      </MDBDropdownMenu>
                    </MDBDropdown>
                  </div>

                </div>
              </MDBCardBody>
            </MDBCard>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

      </div>
    );
  }
}

