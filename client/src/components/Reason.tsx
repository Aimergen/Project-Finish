import { AiFillShopping } from "react-icons/ai";
import { TbHeartHandshake, TbPigMoney, TbTruckDelivery } from "react-icons/tb";

export default function Reason() {
  return (
    <>
    <h2 className="text-2xl w-full flex justify-center font-semibold my-5">Биднийг сонгох шалтгаан</h2>
      <div className="grid grid-cols-2 gap-5 mb-48 lg:grid-cols-4">
        <div className="border border-black flex flex-col items-center justify-center h-[200px] rounded-2xl">
          <AiFillShopping size={50} />
          <div className="px-3 text-center">цэвэрхэн хэрэглэсэн зүйлсээ зарах боломж</div>
        </div>
        <div className="border border-black flex flex-col items-center justify-center h-[200px] rounded-2xl">
          <TbTruckDelivery size={50}/>
          <div className="px-3 text-center">хурдан шуурхай, найдвартай үйлчилгээ </div>
        </div>
        <div className="border border-black flex flex-col items-center justify-center h-[200px] rounded-2xl">
          <TbPigMoney size={50}/>
          <div className="px-3 text-center">гэр бүлийн санхүүгээ бодитоор хэмнэх</div>
        </div>
        <div className="border border-black flex flex-col items-center justify-center h-[200px] rounded-2xl">
          <TbHeartHandshake size={50}/>
          <div className="px-3 text-center">шинэ бараа үйлдвэрлэхэд гардаг хор хөнөөлийг багасгах</div>
        </div>
      </div>
    </>
  );
}
