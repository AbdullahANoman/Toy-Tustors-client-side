import { useNavigation } from "react-router-dom";
import AllCategory from "../../components/AllCategory";
import useTitle from "../../hooks/useTitle";
import Banner from "./Banner";
import Gallary from "./Gallary";
import Subscriber from "./Subscriber";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import ShopNow from "./ShopNow";

const Home = () => {
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <LoadingSpinner></LoadingSpinner>;
  }
  useTitle('Home')
  return (
    <>
      <Banner></Banner>
      <Gallary></Gallary>
      <AllCategory></AllCategory>
      <ShopNow></ShopNow>
      <Subscriber></Subscriber>
    </>
  );
};

export default Home;
