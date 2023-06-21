import React from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../swiper-custom.css'; // Import your custom CSS file

function MoreInfo() {
  const info = [
    {
      text: '  قدم الدكتور للتشطيبات الداخلية خدمة ممتازة وانتهى من العمل ضمن  الإطار الزمني والميزانية. كانت النتائج ذات جودة ممتازة وفاقت  توقعاتنا.',
      header: 'Ahmed Mohamed',
    },
    {
      text: '    دكتور للمقاولات والتشطيبات الداخلية هي خياري الأول عندما يتعلق الأمر  بالتجديدات والإصلاحات. إنهم يقدمون خدمة عالية الجودة بسعر معقول  وينتهي عملهم دائمًا على مستوى عالٍ جدًا. ينصح به بشده!',
      header: 'Amr atia',
    },
    {
      text: '    أنا سعيد للغاية بالعمل الذي قام به دكتور التشطيبات الداخلية لي في  الدمام ، حيث تمكنوا من استكمال التشطيبات الداخلية بسرعة وبأعلى  المعايير. أنا أوصي بهم بشدة!',
      header: 'Khaled , Dammam',
    },
  ];
  return (
    <div className="flex mt-20 bg-gray-500 h-72 xl:container xl:mx-auto">
      <Swiper
        style={{
          '--swiper-pagination-bullet-size': '12px',
        }}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper "
      >
        {info.map(task => {
          return (
            <SwiperSlide
              className="pt-16 text-center text-alt"
              key={task.header}
            >
              <p className="md:text-2xl ">{task.text}</p>
              <h3 className="mt-10">{task.header}</h3>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default MoreInfo;
