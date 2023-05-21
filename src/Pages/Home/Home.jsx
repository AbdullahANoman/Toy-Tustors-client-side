import { useNavigation } from "react-router-dom";
import AllCategory from "../../components/AllCategory";
import useTitle from "../../hooks/useTitle";
import Banner from "./Banner";
import Gallary from "./Gallary";
import Subscriber from "./Subscriber";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

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
      <Subscriber></Subscriber>
    </>
  );
};

export default Home;
