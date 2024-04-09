import { Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./LayoutHome.css"


import Header from "../../components/Header";
import Footer from "../../components/Footer";


const LayoutDefault = () => {
  return (
    <>
      <Header />

      <Outlet />

      <Footer />


    </>
  )
}

export default LayoutDefault;