import TitleSection from "../../../conponents/TitleSection/TitleSection";
import useContest from "../../../hooks/useContest";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const Highlights = () => {
    const [contests]= useContest()
    const bestContestCreator = contests.filter(item=>item.contest_category === 'Popular' && item.attempted_count > 1700)


 {/* id,contest_name,contest_type,contest_category,image,attempted_count,short_description,
            contest_winner_name,contest_prize,winner_image,deadline_counter,inspirational_message */}

    return (
        <div className="mb-16 ">

            <TitleSection
            subHeading={'Best Contest Creator!'}
            heading={'Section Highlights'}
            >
            </TitleSection>

              <div className="bg-purple-300 mt-20">
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper ">
                    {
                        bestContestCreator.map(winner => <SwiperSlide key={winner._id}>

                        <div className="m-24 text-center text-black">
                            <img className="w-[200px] h-[200px] rounded-full flex mx-auto"  src={winner.winner_image} alt="winner" />
                            
                            <h2 className="text-3xl text-orange-500">{winner.contest_winner_name}</h2>
                            <h2 className="flex justify-center items-center mx-auto my-2"><Rating  style={{ maxWidth: 130 }}value={5} readOnly/></h2>
                            <h2 className="text-lg font-semibold ">Contest Name: {winner.contest_name}</h2>
                            <h2 className="text-lg font-semibold ">{winner.contest_type} Contest</h2>
                            <h2 className="my-4">{winner.inspirational_message}</h2>

                        </div>

                        </SwiperSlide>)
                    }
                </Swiper>
            </div> 
            
        </div>
    );
};

export default Highlights;