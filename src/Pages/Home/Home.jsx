import AllCategory from "../../components/AllCategory";
import useTitle from "../../hooks/useTitle";
import Banner from "./Banner";
import Gallary from "./Gallary";
import Subscriber from "./Subscriber";

const Home = () => {
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
