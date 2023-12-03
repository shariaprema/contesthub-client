import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import PopularContest from "../PopularContest/PopularContest";
import Advertises from "../Advertises/Advertises";
import Highlights from "../Highlights/Highlights";

const Home = () => {
    return (
        <div>
        <Helmet>
        <title>Contest Hub | Home</title>
        </Helmet>
        <Banner></Banner>
        <PopularContest></PopularContest>
        <Advertises></Advertises>
        <Highlights></Highlights>
           
        </div>
    );
};

export default Home;