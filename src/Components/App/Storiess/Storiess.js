import { useEffect, useState } from "react";
import Story from "./Story.js";

const Storiess = ({ stories }) => {
  return (
    <>
      <div className="py-10 bg-[#f4f4f4]">
        <div className="h-10 px-14 text-center mb-5">
          <h4 className="font-Santral6 text-2xl ">Stories</h4>
        </div>

        <div className="w-full flex flex-col md:flex-row justify-center text-start gap-7 md:gap-9 px-5">
          {stories && stories
            ? stories.map((elem, index) => {
                return <Story story={elem} key={index} />;
              })
            : null}
        </div>
      </div>
    </>
  );
};

export default Storiess;
