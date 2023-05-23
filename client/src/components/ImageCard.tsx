import Image from "next/image";

const ImageCard = () => {
  return (
    <>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-3xl mb-3">Gallery</h2>
        <div className="grid gap-4 md:grid-cols-2 sm:grid-cols-1">
          <div>
            <Image
              src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3533315d-3dde-4119-833c-3668da335920/air-max-97-mens-shoe-LJmK45.png"
              alt="nike"
              width={1000}
              height={100}
              className="w-full h-[700] bg-cover object-cover rounded-md"
            />
          </div>
          <div className="grid gap-6 grid-cols-2">
            <div>
              <Image
                src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/zpgc2tnca6kijplj84xx/air-max-97-mens-shoe-LJmK45.png"
                alt="nike"
                width={1000}
                height={100}
                className="w-full h-[700] bg-cover object-cover rounded-md"
              />
            </div>
            <div>
              <Image
                src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/zteqcdhfcrwq9fom01fg/air-max-97-mens-shoe-LJmK45.png"
                alt="nike"
                width={1000}
                height={100}
                className="w-full h-[700] bg-cover object-cover rounded-md"
              />
            </div>
            <div>
              <Image
                src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/u4vsjywwphq6y6xtismt/air-max-97-mens-shoe-LJmK45.png"
                alt="nike"
                width={1000}
                height={100}
                className="w-full h-[700] bg-cover object-cover rounded-md"
              />
            </div>
            <div>
              <Image
                src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/kcfjke64a50qadfdn2im/air-max-97-mens-shoe-LJmK45.png"
                alt="nike"
                width={1000}
                height={100}
                className="w-full h-[700] bg-cover object-cover rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageCard;
