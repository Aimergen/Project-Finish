import React, { Suspense } from "react";
import { ProgressSpinner } from "primereact/progressspinner";
import Image from "next/image";
import MyThreeComponent from "./Three/three.dynamic";
import { useRouter } from "next/router";

export default function Spinner() {
  const router = useRouter()
  return (
    <div className="threeModel">
      <div className="grid grid-cols-1 items-center md:grid-cols-2">
          <div className="col-span-1 flex justify-center items-center">
            <div className="flex flex-col max-w-lg mt-36 md:mt-36 md:mb-64 py-10 max-sm:px-3">
              <h2 className="font-bold text-4xl md:text-8xl text-[#fff]">
                New collection
              </h2>
              <p className="text-white my-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                tempor ac ante ac porta. Ut in posuere elit. Sed ut nibh
                ultricies, porta neque aliquam
                {/* <Typewriter words={[" suscipit dolor..."]} loop={false} /> */}
              </p>
              <button className="bg-[#fff] rounded-3xl py-3 w-30 font-semi-bold w-2/5" type="button" onClick={()=>{router.push("/categories")}}>
              shop now
            </button>
            </div>
          </div>
          <div className="col-span-1 mt-[-100px] max-md:hidden">
            <Suspense fallback={<div>Loading...</div>}>
              <MyThreeComponent />
            </Suspense>
          </div>
        </div>
    </div>
  );
}
