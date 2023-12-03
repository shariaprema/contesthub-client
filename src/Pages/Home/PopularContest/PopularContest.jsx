import React from 'react';
import TitleSection from '../../../conponents/TitleSection/TitleSection';
import useContest from '../../../hooks/useContest';
import ContestCategory from '../../Contest/ContestCategory/ContestCategory';

const PopularContest = () => {
    const [contests]= useContest()

    const popularContests = contests.filter(item=>item.contest_category === 'Popular' && item.attempted_count > 1600)


    return (
        <div className=''>
             <TitleSection
            subHeading={'The best competitions are here!'}
            heading={'Popular Contest'}
            >
            </TitleSection>

        <ContestCategory items={popularContests}></ContestCategory>
            
        </div>
    );
};

export default PopularContest;