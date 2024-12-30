import Section_Title from "../../Components/Section_Title";

import featureImg from '../../assets/home/featured.jpg'
 import './feature.css'
const Featured = () => {
    return (
        <div className="featured-item text-white pt-2 bg-fixed">
            <Section_Title 
            heading={'Featured Item'}
            subHeading={'check it out'}
            ></Section_Title>
            <div className="flex justify-center items-center pb-10 pt-6 px-28 ">
                <div className="">
                    <img src={featureImg} alt="" />
                </div>
                <div className="ml-10">
                    <p>Aug 20, 2029</p>
                    <p className="uppercase"> Where can I get some?</p>

                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed quam itaque, praesentium tempora id reiciendis debitis hic, eligendi minus aut similique delectus rem est cumque aliquid laborum expedita soluta tenetur.</p>
                    <button className="btn btn-outline btn-secondary border-0 border-b-2">Order now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;