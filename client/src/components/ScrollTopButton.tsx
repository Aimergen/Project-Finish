import React, { useState, useEffect } from "react";
import { AiOutlineVerticalAlignTop } from "react-icons/ai";

export default function ScrollTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 100) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      id="myBtn"
      onClick={handleClick}
      style={{ display: showButton ? "block" : "none" }}
    >
      {/* <img src="up.png" alt="" className="fix" /> */}
      <AiOutlineVerticalAlignTop className="fixed z-14 bottom-10 right-10 w-7 h-7 bg-[#4287f5] rounded-sm " />
    </button>
  );
}
