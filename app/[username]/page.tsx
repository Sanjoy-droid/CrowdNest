"use client";

import React from "react";

const Page = ({ params }: { params: { username: string } }) => {
  return (
    <>
      <button id="rzp-button1">Pay</button>
      {/* // <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script> */}

      {/* usename page */}

      {/* cover image and dp */}
      <div className="cover w-full bg-red-400 text-white relative">
        <img
          height={350}
          className="object-cover w-full h-[350px]"
          src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/73401/23cb7b5f78294987ab6b1eabee9ed9f7/eyJ3Ijo5NjAsIndlIjoxfQ%3D%3D/7.png?token-time=1722729600&token-hash=V27dap_VitUMp7CVooKzalOoFV-zFiSixFqHaq9dElU%3D"
          alt=""
        />
        <div className="absolute top-[78%] left-[47%] ">
          <img
            className="rounded-xl"
            width={75}
            height={75}
            src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4981766/b7d9d57520314c98b92d77640422c0b3/eyJoIjoxMDgwLCJ3IjoxMDgwfQ%3D%3D/1.png?token-time=1722729600&token-hash=1UEFzKd8bnLvrAoeiXThk-Ei71qzdtUsI9naxj3IF4U%3D"
            alt=""
          />
        </div>
      </div>
      {/* description */}
      <div className="info   flex justify-center items-center flex-col space-y-3 my-24 ">
        <div className="font-bold text-3xl"> @username</div>
        <div className="text-slate-500"> Creating Science Animation Videos</div>
        <div className="text-slate-400">95743 Members , posts 87 </div>

        {/* payment */}

        {/* or choose from these amounts */}
      </div>
    </>

    // <>
    //   <div className="absolute inset-0 -z-20 h-full w-full mt-24 bg-red-50">
    //     {" "}
    //     {/* Adjust pt-24 to the height of your navbar */}
    //     <img
    //       className=" w-full"
    //       src="https://i2.pickpik.com/photos/843/386/562/leaf-rain-droplets-nature-preview.jpg"
    //       alt="Nature Image"
    //     />
    //   </div>
    //   <div className="p-4">{params.username}</div>
    // </>
  );
};

export default Page;
