import React from "react";
import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "./../Footer/Footer";
//45-8 Active Route, Loading Spinner, UseLocation, UseNavigation

const Home = () => {
  const navigation = useNavigation();
  console.log(navigation);
  console.log(navigation.state);

  const location = useLocation();
  console.log(location);
  return (
    <div>
      <Navbar></Navbar>
      {/* <h2>This is home pageeeeeeeeeeeeeee</h2> */}
      {/* {navigation.state === "loading" ? <p>Loading...</p> : ""} */}
      {navigation.state == "loading" ? <p>Loading...</p> : <Outlet></Outlet>}
      {/* <Outlet></Outlet> */}
      <Footer></Footer>
    </div>
  );
};

export default Home;
