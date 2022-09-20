import React from "react";

function TopBrands() {

    const wrapclass =
        "flex flex-col items-center w-[12%] mx-[0.25%] cursor-pointer my-4 ";

    const data = ['biba.jpg', 'Crocs.jpg', 'Hrx.jpg', "levi's.jpg", "libas.jpg", "nike.jpg", "only.jpg", "puma.jpg", "roadster.jpg", "tommy.jpg", "united-colors.jpg", "us-polo.jpg", "vero-moda.jpg", "vishudh.jpg", "w.jpg", "wrogn.jpg", ""]
    return (
        <div className="my-4 w-screen max-w-screen overflow-x-hidden flex flex-col items-center  py-4">
            <h1 className="ml-[10%] mb-3 w-full  font-bold text-3xl ">TopBrands</h1>
            <div className="w-11/12 my-auto flex flex-wrap">

                {
                    data.map((item, index) =>
                        <div key={index} className={`${wrapclass}`}>
                            <img className="rounded-xl" src={`./images/brands/${item}`} alt="" />

                        </div>
                    )
                }



            </div>
        </div>
    );
}

export default TopBrands;
