import { useNavigation } from "react-router-dom";
import AllCategory from "../../components/AllCategory";
import useTitle from "../../hooks/useTitle";
import Banner from "./Banner";
import Gallary from "./Gallary";
import Subscriber from "./Subscriber";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import ShopNow from "./ShopNow";
import Brand from "./Brand";
import BestSeller from "./BestSeller";
import Bannner from "./Bannner";
import Test from "./Test";
import PlaceForKids from "./PlaceForKids";
import Teaching from "./Teaching";
import Education from "./Education";

const Home = () => {
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <LoadingSpinner></LoadingSpinner>;
  }
  useTitle('Home')
  return (
    <>
      {/* <Banner></Banner> */}
      {/* <Bannner></Bannner> */}
      <Test></Test>
      <Gallary></Gallary>
      <BestSeller></BestSeller>
      <Teaching></Teaching>
      <AllCategory></AllCategory>
      <Education></Education>
      <Brand></Brand>
      <PlaceForKids></PlaceForKids>
      <ShopNow></ShopNow>
      <Subscriber></Subscriber>
    </>
  );
};

export default Home;
