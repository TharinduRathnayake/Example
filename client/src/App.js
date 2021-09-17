import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import NavBar1 from './components/NavBar1';
import CargoHome1 from './components/CargoHome1';
import CargoHome2 from './components/CargoHome2';
import Footer from './components/Footer';
import Login from './components/Login';
import CustomerDash from './DashBoard/CustomerDash';
import StoreDash from './DashBoard/StoreDash';
import DistributionDash from './DashBoard/DistributionDash';
import DeliveryDash from './DashBoard/DeliveryDash';
import UserDash from './DashBoard/UserDash';
import ShowRoomDash from './DashBoard/ShowRoomDash';
import FinanceDash from './DashBoard/FinanceDash';
import OwnerDash from './DashBoard/OwnerDash';
import registerCusDash from './DashBoard/registerCusDash';
import Branches from './components/Branches';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';



export default class App extends Component {
  render() {
    return (


      <BrowserRouter>
        {/*...................................................NavBar............................................... */}
        <div style={{ top: 0, position: 'sticky', zIndex: 99 }}>
          <NavBar1 />
          <NavBar />
        </div>
        {/*...................................................NavBarEnd............................................... */}

        {/*...................................................Home............................................... */}
        <div style={{ marginBlockStart: '-100px' }} >
          {/*...................................................HomeSlideShow............................................... */}
          <Route path="/" exact component={CargoHome1}></Route>
          <Route path="/" exact component={CargoHome2}></Route>
          <Route path="/login" exact component={Login}></Route>
          <Route path="/dashcus" exact component={CustomerDash}></Route>
          <Route path="/dashstore" exact component={StoreDash}></Route>
          <Route path="/dashdis" exact component={DistributionDash}></Route>
          <Route path="/dashdeli" exact component={DeliveryDash}></Route>
          <Route path="/dashuser" exact component={UserDash}></Route>
          <Route path="/dashshow" exact component={ShowRoomDash}></Route>
          <Route path="/dashfin" exact component={FinanceDash}></Route>
          <Route path="/dashowner" exact component={OwnerDash}></Route>
          <Route path="/registerCusDash" exact component={registerCusDash}></Route>
          <div style={{marginBlockStart:'-8%'}}>
          <Route path="/branches" exact component ={Branches}></Route>
          </div>
          <Route path="/ContactUsMap" exact component ={ContactUs}></Route>
          <Route path="/AboutUs" exact component={AboutUs}></Route>
        </div>
        {/*...................................................HomeEnd............................................... */}




        <div>
          {/*...........................................CustomerManagment............................................... */}

          {/*...........................................CustomerManagmentEnd............................................... */}




          {/*...........................................StoreManagment............................................... */}

          {/*...........................................StoreManagmentEnd............................................... */}




          {/*...........................................DistrbutionManagment............................................... */}

          {/*...........................................DistributionManagmentEnd............................................... */}




          {/*...........................................DeliveryManagment............................................... */}

          {/*...........................................DeliveryManagmentEnd............................................... */}




          {/*...........................................UserManagment............................................... */}

          {/*...........................................UserManagmentEnd............................................... */}





          {/*...........................................ShowRoomManagment............................................... */}

          {/*...........................................ShowRoomManagmentEnd............................................... */}





          {/*...........................................FinanceManagment............................................... */}

          {/*...........................................FinanceManagmentEnd............................................... */}





          {/*...........................................OwnerManagment............................................... */}

          {/*...........................................OwnerManagmentEnd............................................... */}
        </div>







        {/*...................................................Footer............................................... */}
        <div>
          <Footer />
        </div>
        {/*...................................................FooterEnd............................................... */}



      </BrowserRouter>

    )
  }


}