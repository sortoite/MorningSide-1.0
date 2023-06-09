import React from "react";

const Footer = () => {
  const hero1ImagePath = "/images/hero1.jpg";
  const hero1ClipPathPoints = "25% 0%, 100% 0%, 101% 70%, 66% 80%, 0% 17%";
  const hero2ImagePath = "/images/hero2.jpg";
  const hero2ClipPathPoints = "50% 0%, 100% 100%, 0% 100%";

  return (
    <div className="container">
      <div className="mx-0 md:mx-10 m-10">
        <div className="grid grid-cols-10 ">
          <div className = "col-span-10 flex items-center">
            <img className="my-5 w-[200px] h-[60px] " src="/images/Logo/logo.png" alt="logo" />
          </div>
          <div className = "col-span-4">
            <p className="font-medium my-2">Address</p>
            <p className="text-gray-500 font-medium">Dubai, UAE</p>
          </div>  
          <div className = "col-span-6">
            <p className="font-medium my-2">Contact</p>
            <p className="text-gray-500 font-medium">
              Email:josh@morningside.ai
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
