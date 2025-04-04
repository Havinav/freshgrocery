import React from "react";
import data from '../assets/catagories.json'

const Catagrioes = () => {
  return (
    <div>
      <span className="text-2xl font-bold text-black">Categories</span>
      <div className="grid jestify-center items-center grid-cols-2 md:grid-cols-5 gap-4">
        {data.map((item,index) => {
          return (
            <div className="" key={index}>
              <div class="">
                <div>
                  <img
                    class="h-auto max-full rounded-lg"
                    src={item.image}
                    alt=""
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Catagrioes;
