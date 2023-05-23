import { AiFillShopping } from "react-icons/ai";
import { TbHeartHandshake, TbPigMoney, TbTruckDelivery } from "react-icons/tb";

export default function Reason() {
  return (
    <>
    <h2 className="text-2xl w-full flex justify-center font-semibold my-5">bidniig songoh shaltgaan</h2>
      <div className="grid grid-cols-2 gap-5 mb-48 lg:grid-cols-4">
        <div className="border border-black flex flex-col items-center justify-center h-[200px] rounded-2xl">
          <AiFillShopping size={50} />
          <div className="px-3 text-center">tseverhen hereglesen zuile zarah bolomj</div>
        </div>
        <div className="border border-black flex flex-col items-center justify-center h-[200px] rounded-2xl">
          <TbTruckDelivery size={50}/>
          <div className="px-3 text-center">hurdan shuurhai, naidvartai uilchilgee</div>
        </div>
        <div className="border border-black flex flex-col items-center justify-center h-[200px] rounded-2xl">
          <TbPigMoney size={50}/>
          <div className="px-3 text-center">ger buliin sanhuug hemneh bolon nemegduuleh</div>
        </div>
        <div className="border border-black flex flex-col items-center justify-center h-[200px] rounded-2xl">
          <TbHeartHandshake size={50}/>
          <div className="px-3 text-center">shine ed heregsel uildverlehed gardag hor honooliig bagasgah</div>
        </div>
      </div>
    </>
  );
}
