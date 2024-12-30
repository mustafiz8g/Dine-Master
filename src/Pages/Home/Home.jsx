import Category from "./Category";
import Banner from "./Banner";
import PopularMenu from "./PopularMenu";
import Featured from "./Featured";
import Testimonial from "./Testimonial";



const Home = () => {
    return (
        <div>
        
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