import { useEffect, useState } from "react";
import TitleSection from "../../../conponents/TitleSection/TitleSection";


import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';

const Advertises = () => {
    const [contestWinner, setContestWinner] = useState([])
    

    useEffect(()=>{
        fetch('http://localhost:5000/contests')
        .then(res=>res.json())
        .then(data=>setContestWinner(data))
    },[])
    return (
        <div>
            <TitleSection
            subHeading={'Contest Winner!'}
            heading={'Advertises the Competition'}
            >
            </TitleSection>

            {/* id,contest_name,contest_type,contest_category,image,attempted_count,short_description,
            contest_winner_name,contest_prize,winner_image,deadline_counter,inspirational_message */}

            <div className="mb-16 mt-20">
            <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        spaceBetween={40}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {
             contestWinner.map(winner => <SwiperSlide className="" key={winner._id}>
               <img className="w-[500px] h-[300px] flex mx-auto rounded-lg"  src={winner.winner_image} alt="winner" />

                <div className="text-center space-y-3 mt-1 mb-10">
                <h2 className="text-2xl font-bold text-green-600">{winner.contest_winner_name}</h2>
                <p className="text-lg font-semibold">Congratulations!! <br/>"<span>{`${winner.contest_winner_name}`}</span>" for your outstanding creativity</p>

                <h2 className=" font-semibold text-2xl text-orange-500 text-center">The best competitions are here!</h2>

                <h2 className="my-4 text-lg text-orange-500 text-center">{winner.inspirational_message}</h2>
                <p className="my-4 text-sm font-bold text-orange-500">Contest Participants: [{winner.attempted_count}]</p>
                </div>
      
              </SwiperSlide>)
        }
        
        
      </Swiper>

    </div>

            
        </div>
    );
};

export default Advertises;

