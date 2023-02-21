// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
    
SwiperCore.use([Navigation, Pagination, Autoplay])
export default function App() {

// import required modules
  return (
    <>
        
    
      <Swiper
      
        slidesPerView={6}
        spaceBetween={20}
        autoplay={{ delay: 3000 }}
        pagination={{
          clickable: true,
          
        }}
        
        
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://img.megabox.co.kr/SharedImg/2023/02/16/BhL0pfLDURletyEhaeipllTO4hMKnr2v_420.jpg" alt="앤트맨" /></SwiperSlide>
        <SwiperSlide><img src="https://img.megabox.co.kr/SharedImg/2023/02/02/UmgxlJgwWqM6ueiP32rhQhr2Cpq2GA5P_420.jpg" alt="서치2" /></SwiperSlide>
        <SwiperSlide><img src="https://img.megabox.co.kr/SharedImg/2022/12/19/whzCk46ejtIoWU1eavvF9lJ8rC2Wbvf7_420.jpg" alt="슬램덩크" /></SwiperSlide>
        <SwiperSlide><img src="https://img.megabox.co.kr/SharedImg/2023/02/09/DisAMP8RHmWtMPLRamfLXx4CiXdstLar_420.jpg" alt="카운트" /></SwiperSlide>
        <SwiperSlide><img src="https://img.megabox.co.kr/SharedImg/2023/02/15/dvsS08l1AJm5Hrr0xS0IDqgb5Eep5ia8_420.jpg" alt="대외비" /></SwiperSlide>
        <SwiperSlide><img src="https://img.megabox.co.kr/SharedImg/2023/02/06/7gFJhWRalgHSihiVTu9oOoKRXxMH5mKe_420.jpg" alt="스즈메의문단속" /></SwiperSlide>
        <SwiperSlide><img src="https://img.megabox.co.kr/SharedImg/2023/02/16/C3hWF06MxT9tNN8cyViIuofYOByzlGJu_420.jpg" alt="컨버세이션" /></SwiperSlide>
        <SwiperSlide><img src="https://img.megabox.co.kr/SharedImg/2023/02/14/Z0Aka4YhJxxaSzxgXFaqoAoehIeIR1ro_420.jpg" alt="블랙팬서" /></SwiperSlide>
        <SwiperSlide><img src="https://img.megabox.co.kr/SharedImg/2023/02/01/rSe4PxWVMh3tM7E3uBmdl071zeOB6adL_420.jpg" alt="라이브뷰잉" /></SwiperSlide>
      </Swiper>
    </>
    
  );
}
