import Image from "next/image";
import Link from "next/link";

export default function SpecialCategory() {
  return (
    <>
      <h2 className="font-bold text-2xl mt-24">Онцлох ангилал</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 my-10">
        <Link href={'/categories?category=1'}  className="shadow-xl rounded-lg flex items-center flex-col justify-center overflow-hidden col-span-1">
          <Image
            src="/images/hoodie.png"
            alt="category bag"
            width={1000}
            height={100}
            className="max-h-[200px] object-cover"
          />
          <p className="pb-4">цамц</p>
          </Link>
       <Link href={'/categories?category=2'}  className="shadow-xl rounded-lg flex items-center flex-col justify-center overflow-hidden col-span-1">
          <Image
            src="/images/pants.png"
            alt="category bag"
            width={1000}
            height={100}
            className="max-h-[200px] object-cover"
          />
          <p className="pb-4">өмд</p>
        </Link>
       <Link href={'/categories?category=3'}  className="shadow-xl rounded-lg flex items-center flex-col justify-center overflow-hidden col-span-1">
          <Image
            src="/images/shoes.png"
            alt="category bag"
            width={1000}
            height={100}
            className="max-h-[200px] object-cover"
          />
          <p className="pb-4">гутал</p>
        </Link>
       <Link href={'/categories?category=14'}  className="shadow-xl rounded-lg flex items-center flex-col justify-center overflow-hidden col-span-1">
          <Image
            src="/images/dress.png"
            alt="category bag"
            width={1000}
            height={100}
            className="max-h-[200px] object-cover"
          />
          <p className="pb-4">даашинз</p>
        </Link>
       <Link href={'/categories?category=17'}  className="shadow-xl rounded-lg flex items-center flex-col justify-center overflow-hidden col-span-1">
          <Image
            src="/images/bag.png"
            alt="category bag"
            width={1000}
            height={100}
            className="max-h-[200px] object-cover"
          />
          <p className="pb-4">цүнх</p>
        </Link>
       <Link href={'/categories?category=9'}  className="shadow-xl rounded-lg flex items-center flex-col justify-center overflow-hidden col-span-1">
          <Image
            src="/images/smartwatch.png"
            alt="category bag"
            width={1000}
            height={100}
            className="max-h-[200px] object-cover"
          />
          <p className="pb-4">цаг</p>
        </Link>
      </div>
    </>
  );
}
