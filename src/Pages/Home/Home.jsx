import Category from "./Category";
import Banner from "./Banner";
import PopularMenu from "./PopularMenu";
import Featured from "./Featured";
import Testimonial from "./Testimonial";
import { Helmet } from "react-helmet-async";



const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Dine Master | Home</title>
            </Helmet>
        
          <div>
          <Banner></Banner>
          </div>
          <Category></Category>
          <PopularMenu></PopularMenu>
          <Featured></Featured>
          <Testimonial></Testimonial>
     
        </div>
    );
};

export default Home;