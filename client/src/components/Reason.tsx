import { AiFillShopping } from "react-icons/ai";
import { TbHeartHandshake, TbPigMoney, TbTruckDelivery } from "react-icons/tb";

// export default function Reason() {
//   return (
//     <>
//     <h2 className="text-2xl w-full flex justify-center font-semibold my-5">Биднийг сонгох шалтгаан</h2>
//       <div className="grid grid-cols-2 gap-5 mb-48 lg:grid-cols-4">
//         <div className="border  flex flex-col items-center justify-center h-[200px] rounded-2xl shadow-xl bg-[#F3CCFF] bg-[#b88bfc]">
//           <AiFillShopping size={50} className="text-[#7122e6]"/>
//           <div className="px-3 text-center">цэвэрхэн хэрэглэсэн зүйлсээ зарах боломж</div>
//         </div>
//         <div className="border border-black flex flex-col items-center justify-center h-[200px] rounded-2xl shadow-xl bg-[#F3CCFF] bg-[#f5d0a9]">
//           <TbTruckDelivery size={50} className="text-[#ed9539]"/>
//           <div className="px-3 text-center">хурдан шуурхай, найдвартай үйлчилгээ </div>
//         </div>
//         <div className="border border-black flex flex-col items-center justify-center h-[200px] rounded-2xl shadow-xl bg-[#F3CCFF] bg-[#a1e69e]">
//           <TbPigMoney size={50} className="text-[#289e23]"/>
//           <div className="px-3 text-center">гэр бүлийн санхүүгээ бодитоор хэмнэх</div>
//         </div>
//         <div className="border border-black flex flex-col items-center justify-center h-[200px] rounded-2xl shadow-xl bg-[#F3CCFF] bg-[#eb88d7]">
//           <TbHeartHandshake size={50} className="text-[#c2119e]"/>
//           <div className="px-3 text-center">шинэ бараа үйлдвэрлэхэд гардаг хор хөнөөлийг багасгах</div>
//         </div>
//       </div>
//     </>
//   );
// }
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/swiper.min.css";

// import required modules
import { Pagination, Autoplay } from "swiper";

export default function App() {
  return (
    <>
    <div className="">
    <h2 className="text-2xl w-full flex justify-center font-semibold my-5">Биднийг сонгох шалтгаан</h2>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}  
        loop={true}
        autoplay={{ delay: 2000 }}
        modules={[Pagination, Autoplay]}
        className="mySwiper h-[300px]"
      >
        <SwiperSlide>
          {" "}
          <div className="border border-black flex flex-col items-center justify-center h-[200px] rounded-2xl shadow-xl bg-[#F3CCFF]">
            <AiFillShopping size={50} className="text-[#A555EC]"/>
            <div className="px-3 text-center">
              Цэвэрхэн хэрэглэсэн зүйлсээ зарах боломж
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="border border-black flex flex-col items-center justify-center h-[200px] rounded-2xl shadow-xl bg-[#F3CCFF] ">
            <TbTruckDelivery size={50} className="text-[#A555EC]"/>
            <div className="px-3 text-center">
              Хурдан шуурхай, найдвартай үйлчилгээ{" "}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="border border-black flex flex-col items-center justify-center h-[200px] rounded-2xl shadow-xl bg-[#F3CCFF]">
            <TbPigMoney size={50} className="text-[#A555EC]"/>
            <div className="px-3 text-center">
              Гэр бүлийн санхүүгээ бодитоор хэмнэх
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border border-black flex flex-col items-center justify-center h-[200px] rounded-2xl shadow-xl bg-[#F3CCFF]">
            <TbHeartHandshake size={50} className="text-[#A555EC]"/>
            <div className="px-3 text-center">
              Шинэ бараа үйлдвэрлэхэд гардаг хор хөнөөлийг багасгах
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="border border-black flex flex-col items-center justify-center h-[200px] rounded-2xl shadow-xl bg-[#F3CCFF]">
            <AiFillShopping size={50} className="text-[#A555EC]"/>
            <div className="px-3 text-center">
              Цэвэрхэн хэрэглэсэн зүйлсээ зарах боломж
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="border border-black flex flex-col items-center justify-center h-[200px] rounded-2xl shadow-xl bg-[#F3CCFF] ">
            <TbTruckDelivery size={50} className="text-[#A555EC]"/>
            <div className="px-3 text-center">
              Хурдан шуурхай, найдвартай үйлчилгээ{" "}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="border border-black flex flex-col items-center justify-center h-[200px] rounded-2xl shadow-xl bg-[#F3CCFF]">
            <TbPigMoney size={50} className="text-[#A555EC]"/>
            <div className="px-3 text-center">
              Гэр бүлийн санхүүгээ бодитоор хэмнэх
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border border-black flex flex-col items-center justify-center h-[200px] rounded-2xl shadow-xl bg-[#F3CCFF]">
            <TbHeartHandshake size={50} className="text-[#A555EC]"/>
            <div className="px-3 text-center">
              Шинэ бараа үйлдвэрлэхэд гардаг хор хөнөөлийг багасгах
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      </div>
    </>
  );
}
