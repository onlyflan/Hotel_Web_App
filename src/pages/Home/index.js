
import "./home.css"
import HomeSlider from "../../components/HomeSlider";
import RoomPackages from "../../components/RoomPackages";
import CollapseHome from "../../components/Collapse";
import SliderHotel from "../../components/SliderHotel";
import RewardsHome from "../../components/RewardsHome";

const Home = () =>{


    return(
        <>
        <HomeSlider/>
        <RoomPackages/>
        <CollapseHome/>
        <SliderHotel/>
        <RewardsHome/>
        </>
    )
}
export default Home;