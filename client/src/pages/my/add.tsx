import { useCurrentUser } from "@/components/CurretnUserProvider";
import Layout from "@/components/Layout";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import Image from "next/image";
import { ChangeEvent, useEffect, useState } from "react";
import { IOption } from "@/interfaces/product";
import { toast } from "react-toastify";
import MyModal from "@/components/Modal";
import "react-toastify/dist/ReactToastify.css";
import Aside from "./profile";
import { useRouter } from "next/router";

export default function Example() {
  const { currentUser } = useCurrentUser();
  if (!currentUser) {
    return <MyModal />;
  }
  if (!localStorage.getItem("token")) {
    return <MyModal />;
  }

  const router = useRouter();
  const [imageUrl, setImageUrl] = useState("");
  const [category, setCategory] = useState([]);
  const [subCategories, setSubCategories] = useState<IOption[]>([]);
  useEffect(() => {
    axios.get(process.env.NEXT_PUBLIC_API_URL + "/categories").then((res) => {
      setCategory(res.data);
    });
  }, [category, setCategory]);
  const [addProduct, setAddProduct] = useState({
    productImageSrc: "",
    brand: "",
    category: "",
    option: "",
    size: "",
    name: "",
    about: "",
    streetAddress: "",
    phoneNumber: "",
    price: 0,
    userId: currentUser?._id,
    status: false,
    productState: "",
  });
  const uploadImg = (e: any) => {
    const fd = new FormData();
    fd.append("file", e.target.files[0]);
    axios
      .post(process.env.NEXT_PUBLIC_API_URL + "/products/upload", fd, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        setImageUrl(res.data.secure_url);
      });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    axios
      .post(process.env.NEXT_PUBLIC_API_URL + "/products/add", {
        ...addProduct,
        price: Number(addProduct.price) + Number(addProduct.price / 10),
      })
      .then((res) => {
        console.log(res.data);
        toast.success("Амжилттай нэмэгдлээ");
        router.push("/my/info");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Бараа нэмэхэд алдаа гарлаа");
      });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAddProduct({
      ...addProduct,
      [e.target.name]: e.target.value,
      productImageSrc: imageUrl,
    });
    if (e.target.name === "category") {
      const subCategory = category.find(
        (cat: any) => cat.categoryName == e.target.value
      ) || { subCategories };
      setSubCategories(subCategory.subCategories);
    }
  };

  return (
    // <Layout>
    <Aside>
      <div className=" bg-white w-full p-3 rounded-lg">
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-10 lg:grid-cols-2 xl:grid-cols-3"
        >
          <div
            style={{
              backgroundColor: "#ccc",
              overflow: "hidden",
              border: "1px solid #f0f0f0",
              position: "relative",
            }}
            className="aspect-[5/5]"
          >
            <Image
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              width={1000}
              height={100}
              src={imageUrl || "/images/placeholder.png"}
              alt="add product image"
            />
            <input
              type="file"
              onChange={uploadImg}
              multiple
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                bottom: 0,
                top: 0,
                opacity: 0,
                cursor: "pointer",
              }}
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="category"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Ангилал
            </label>
            <div className="mt-2 mb-5">
              <select
                required
                onChange={(e: any) => handleChange(e)}
                id="category"
                name="category"
                autoComplete="category-name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
                {category.map((c: any) => (
                  <option value={c.categoryName} key={c._id}>
                    {c.categoryName}
                  </option>
                ))}
              </select>
            </div>
            <label
              htmlFor="option"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Дэд ангилал
            </label>
            <div className="mt-2 mb-5">
              <select
                required
                onChange={(e: any) => handleChange(e)}
                id="option"
                name="option"
                autoComplete="option-name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
                {subCategories.map((item) => (
                  <option value={item.sub_id} key={item.sub_id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>

            <label
              htmlFor="productState"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Барааны төлөв
            </label>
            <div className="mt-2 mb-5">
              <select
                required
                onChange={(e: any) => handleChange(e)}
                id="productState"
                name="productState"
                autoComplete="productState"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
                <option value="songoh">сонгох</option>
                <option value="100%">Шинэ (100%)</option>
                <option value="80%">Цэвэрхэн хэрэглэсэн (80%+)</option>
                <option value="60%">Боломжийн (60%+)</option>
              </select>
            </div>
            <label
              htmlFor="street-address"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Брэнд
            </label>
            <div className="mt-2 mb-5">
              <input
                required
                onChange={(e) => handleChange(e)}
                type="text"
                name="brand"
                id="street-address"
                autoComplete="street-address"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            <label
              htmlFor="street-address"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Хэмжээ
            </label>
            <div className="mt-2 mb-5">
              <input
                required
                onChange={(e) => handleChange(e)}
                type="text"
                name="size"
                id="street-address"
                autoComplete="street-address"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            <label
              htmlFor="street-address"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Барааны нэр
            </label>
            <div className="mt-2 mb-5">
              <input
                required
                onChange={(e) => handleChange(e)}
                type="text"
                name="name"
                id="street-address"
                autoComplete="street-address"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 required:border-red-500"
              />
            </div>
            <label
              htmlFor="about"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Тайлбар
            </label>
            <div className="mt-2 mb-5">
              <input
                required
                onChange={(e) => handleChange(e)}
                id="about"
                name="about"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={""}
              />
            </div>
            <label
              htmlFor="street-address"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Хаяг
            </label>
            <div className="mt-2 mb-5">
              <input
                required
                onChange={(e) => handleChange(e)}
                type="text"
                name="streetAddress"
                id="street-address"
                autoComplete="street-address"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            <label
              htmlFor="street-address"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Утасний дугаар
            </label>
            <div className="mt-2 mb-5">
              <input
                required
                onChange={(e) => handleChange(e)}
                type="text"
                name="phoneNumber"
                id="street-address"
                autoComplete="street-address"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            <label
              htmlFor="street-address"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Үнэ
            </label>
            <div className="mt-2 mb-5">
              <input
                required
                onChange={(e) => handleChange(e)}
                type="text"
                id="street-address"
                name="price"
                autoComplete="street-address"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <p>
                Website дээр зарагдах үнэ:{" "}
                <span className="font-bold">
                  {Number(addProduct.price) + Number(addProduct.price / 10)}{" "}
                </span>
              </p>
            </div>
            {/* <p className="flex justify-center py-3 mb-2">or</p>
            <button className="w-full bg-[#fff900] rounded-lg py-2">unegui ogno</button> */}

            <div className="mt-6 flex items-center justify-end gap-x-6">
              <button
                type="button"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Цуцлах
              </button>
              <button
                type="submit"
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Бараа нэмэх
              </button>
            </div>
          </div>
        </form>
      </div>
    </Aside>
    // {/* </Layout> */}
  );
}
