import A1 from "../media/article/1.jpg";
import A2 from "../media/article/2.jpg";
import A3 from "../media/article/3.jpg";
import A4 from "../media/article/4.jpg";
import A5 from "../media/article/5.jpg";
import ScrollTop from "./ScrollTop.js";

const ArticlePage = () => {
  return (
    <>
      <ScrollTop/>
      <div className="flex flex-col justify-center items-center text-center pt-5 px-3 lg:px-[52px] gap-2">
        <h1 className="text-2xl font-Santral6 ">
          Culture of Creativity: An art exhibition from the Peter Marino Art
          Foundation
        </h1>
        <p className="  text-center text-sm font-Santral3 pb-1 leading-6">
          Discover our new exhibition at The Landmark, Culture of Creativity.
          Brought to life in partnership with renowned architect Peter
          Marino—who led the transformation of the iconic store’s interiors—the
          exhibition is a testament to our long-standing connection to the art
          world.
        </p>
        <a
          href="#"
          className="p-2 px-6 font-Santral4 text-sm flex justify-center items-center border border-black "
        >
          {" "}
          <span className="hover:border-b-2 border-[#81D8D0]">
            Reserve Complimentary Tickets
          </span>
        </a>
      </div>

      <div className="w-full mb-14 mt-10">
        <img src={A1} className="w-full" />
      </div>

      <a href="#" className="w-full flex flex-col lg:flex-row mb-5 md:mb-[60px]">
        <img src={A2} className="w-full lg:w-3/5" />
        <div className="flex flex-col justify-center items-center pt-3">
          <h1 className="text-2xl font-Santral6 ">Plan Your Visit</h1>
          <p className="w-11/12 lg:w-3/4  text-center text-sm font-Santral3 pt-3 pb-5 leading-6">
            Join us at The Landmark from March 4 through May 20 to engage with
            nearly 70 artworks spanning a variety of mediums from the Peter
            Marino Art Foundation. Upon arriving at the iconic Tiffany & Co.
            flagship store on Fifth Avenue and 57th Street in New York City,
            take the elevators to the ninth floor to begin your Culture of
            Creativity exhibition experience.
          </p>
          <p className="font-Santral4 text-sm hover:border-b-2 border-[#81D8D0]">
            Reserve Complimentary Tickets >
          </p>
        </div>
      </a>

      <a href="#" className="w-full flex flex-col lg:flex-row mb-5 md:mb-[60px]">
        <div className="flex flex-col justify-center items-center pt-3 order-2 lg:order-1">
          <h1 className="text-2xl font-Santral6 ">
            Artistry Beyond Imagination
          </h1>
          <p className="w-11/12 lg:w-3/4 text-center text-sm font-Santral3 pt-3 pb-5 leading-6">
            Visitors will discover artworks by everyone from Louis Comfort
            Tiffany and Damien Hirst to Rashid Johnson and Peter Marino himself,
            in addition to an array of 19th-century creations from Marino’s
            collection of Tiffany silver from the 1880s. The exhibition
            highlights various masterpieces by the same artists whose artworks
            adorn the walls of The Landmark, offering a glimpse into the
            inspiration behind the pieces that Marino personally selected for
            the jewel of Manhattan.
          </p>
        </div>
        <img src={A3} className="w-full lg:w-3/5 order-1 lg:order-2" />
      </a>

      <div className="w-full flex flex-col mb-5 md:mb-[60px]">
        <img src={A4} className="w-full" />
        <div className="flex flex-col justify-center items-center pt-3 px-5 lg:px-[52px]">
          <h1 className="text-2xl font-Santral6 ">
            Culture of Creativity: The Opening Celebration
          </h1>
          <p className="  text-center text-sm font-Santral3 pt-3 pb-5 leading-6">
            On February 24, we invited friends of the House to celebrate the
            opening of our new exhibition at The Landmark, Culture of
            Creativity. Brought to life in partnership with Peter Marino—the
            visionary architect behind the transformation of our iconic Fifth
            Avenue flagship store—the exhibition features nearly 70 works by 26
            artists and includes never-before-seen works.
          </p>
        </div>
      </div>

      <a href="#" className="w-full flex flex-col lg:flex-row mb-5 md:mb-[60px]">
        <img src={A5} className="w-full lg:w-3/5" />
        <div className="grow flex flex-col justify-center items-center pt-3">
          <h1 className="text-2xl font-Santral6 ">Plan Your Visit</h1>
          <div className="w-11/12 lg:w-3/4  text-center text-sm font-Santral3 pt-3 pb-5 leading-6 flex flex-col">
            <span>The Landmark</span>
            <span>727 Fifth Avenue</span>
            <span className="mb-7">New York City</span>
            <span>March 4–May 20</span>
          </div>
          <p className="font-Santral4 text-sm hover:border-b-2 border-[#81D8D0]">
            Learn More >
          </p>
        </div>
      </a>
    </>
  );
};

export default ArticlePage;
