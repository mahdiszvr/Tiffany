import woman from "../media/main.jpg";

const TopPic = () => {
  return (
    <>
      <div className="w-full flex flex-col lg:flex-row mb-7 md:mb-[60px]">
        <img src={woman} className="w-full lg:w-3/5" />
        <div className="flex flex-col justify-center items-center pt-3">
          <h1 className="text-2xl font-Santral6 ">Tiffany HardWear</h1>
          <p className="w-3/4 lg:w-1/2 text-center text-sm font-Santral3 pt-3 pb-5 leading-6">
            Inspired by a bracelet from 1971 found in the House’s archive, the
            Tiffany HardWear collection features bold designs that play with
            tension, proportion and balance.
          </p>
          <a
            href="#"
            className="w-[100px] md:w-[120px] h-9 md:h-10 font-Santral4 text-xs md:text-sm flex justify-center items-center border border-black"
          >
            Shop Now
          </a>
       
        </div>
      </div>
    </>
  );
};

export default TopPic;
