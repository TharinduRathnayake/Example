import React, { Component } from 'react'

export default class NavBar extends Component {
  render() {
    return (

      <nav className="navbar navbar-expand-lg navbar-light opacity-90" style={{ backgroundColor: '#BDBDBD', }} >
        <div className="container-fluid">
          <a className="navbar-brand fw-bold text-dark disabled ">Vision Cargo</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active text-dark" aria-current="page" href="/">HOME</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">PICKUP REQUEST</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark fst-italic" href="#">කොරියන්_කඩේ</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="/branches">BRANCHES</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="/AboutUs">ABOUT US</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="/ContactUsMap">CONTACT US</a>
              </li>


              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-dark" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item text-dark" href="#">Action</a></li>
                  <li><a className="dropdown-item text-dark" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider"></hr></li>
                  <li><a className="dropdown-item text-dark" href="#">Something else here</a></li>
                </ul>
              </li>
              <li>
                <a href="/login">
                  <button style={{ marginLeft: '470px' }} type="button" class="btn btn-warning text-dark">
                    <i className="fas fa-user-alt"></i>&nbsp; Login</button>
                </a>
              </li>
            </ul>


          </div>
        </div>
      </nav>

    )
  }
}