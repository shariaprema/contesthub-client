import { Helmet } from "react-helmet";
import TitleSection from "../../conponents/TitleSection/TitleSection";
import groovyWalkAnimation from "../../../src/assets/image/lotti/Animation - winner (2).json";
import Lottie from "lottie-react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useContest from "../../hooks/useContest";
import ContestCategory from "../Contest/ContestCategory/ContestCategory";



const AllContest = () => {
    const [contests] = useContest()

    const [tabIndex, setTabIndex] = useState(0)
    // const popularContests = contests.filter(item=>item.contest_category === 'Popular' && item.attempted_count > 1600)

    const coding = contests.filter(item=>item.contest_type === "Coding")
    const photography = contests.filter(item=>item.contest_type === "Photography")
    const design = contests.filter(item=>item.contest_type === "Design")
    const writing = contests.filter(item=>item.contest_type === "Writing")
    const gaming = contests.filter(item=>item.contest_type === "Gaming")


    
    return (
        <div>
            <Helmet>
            <title>ContestHub | All Contest</title>
            </Helmet>

            <TitleSection
            subHeading={'Contest Hub'}
            heading={'All Contest'}
            >
            </TitleSection>

            <Lottie className="w-[800px] h-[300px] flex justify-center items-center mx-auto mb-4  pt-0 mt-0" animationData={groovyWalkAnimation} loop={true} />

            <div>
            <Tabs  defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
            <TabList >
                <Tab>Coding Contest</Tab>
                <Tab>Photography Contest</Tab>
                <Tab>Design Contest</Tab>
                <Tab>Writing Contest</Tab>
                <Tab>Gaming Contest</Tab>
               
            </TabList>
            <TabPanel>
                <ContestCategory items={coding}></ContestCategory>
            </TabPanel>

            <TabPanel  >
                <ContestCategory items={photography}></ContestCategory>
            </TabPanel>

            <TabPanel >
                <ContestCategory items={design}></ContestCategory>
            </TabPanel>

            <TabPanel >
                 <ContestCategory items={writing}></ContestCategory>
            </TabPanel>

            <TabPanel>
                <ContestCategory items={gaming}></ContestCategory>
            </TabPanel>
            </Tabs>
            
            </div>

            
        </div>
    );
};

export default AllContest;