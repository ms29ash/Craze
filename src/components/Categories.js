import React from "react";

function Categories() {

    const wrapclass =
        "flex flex-col items-center w-[12%] mx-[0.25%] hover:bg-gray-300 cursor-pointer my-4 ";
    return (
        <div className="my-8 w-screen max-w-screen overflow-x-hidden flex flex-col items-center  py-4">
            <h1 className="ml-[10%] mb-3 w-full  font-bold text-3xl ">Categories</h1>
            <div className="w-11/12 my-auto flex flex-wrap">

                {Array(20)
                    .fill("")
                    .map((p, i) => (
                        <div key={i} className={`${wrapclass}`}>
                            <img className='rounded-full border-main border-[3.5px] ' src="./images/t-shirt.png" alt="" />
                            <h1 className=" text-xl font-bold">Mens</h1>
                        </div>
                    ))}
                {/* {Array(10)
                    .fill("")
                    .map((p, i) => (
                        <div key={i} className={`${wrapclass}`}>
                            <img src="./images/short-jeans.png" alt="" />
                            <div className="ml-[30%]">
                                <p className="font-medium">Short</p>
                                <h1 className="text-main text-xl font-bold">₹2000</h1>
                            </div>
                        </div>
                    ))}
                {Array(10)
                    .fill("")
                    .map((p, i) => (
                        <div key={i} className={`${wrapclass}`}>
                            <img src="./images/suit.png" alt="" />
                            <div className="ml-[30%]">
                                <p className="font-medium">Suit</p>
                                <h1 className="text-main text-xl font-bold">₹5000</h1>
                            </div>
                        </div>
                    ))}
                {Array(10)
                    .fill("")
                    .map((p, i) => (
                        <div key={i} className={`${wrapclass}`}>
                            <img src="./images/skirt.png" alt="" />
                            <div className="ml-[30%]">
                                <p className="font-medium">Skirt</p>
                                <h1 className="text-main text-xl font-bold">₹1500</h1>
                            </div>
                        </div>
                    ))}
                {Array(10)
                    .fill("")
                    .map((p, i) => (
                        <div key={i} className={`${wrapclass}`}>
                            <img src="./images/t-shirt.png" alt="" />
                            <div className="ml-[30%]">
                                <p className="font-medium">T-shirt</p>
                                <h1 className="text-main text-xl font-bold">₹500</h1>
                            </div>
                        </div>
                    ))} */}

            </div>
        </div>
    );
}

export default Categories;
