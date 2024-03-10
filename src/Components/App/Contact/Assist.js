import c1 from "../media/Contact/1.jpg";
import c2 from "../media/Contact/2.jpg";
import c3 from "../media/Contact/3.jpg";
import c4 from "../media/Contact/4.jpg";
import c5 from "../media/Contact/5.jpg";

const Assist = () => {
  return (
    <>
      <div className="my-7 md:my-10">
        <div className="py-4 px-4 md:px-14 text-center">
          <h4 className="font-Santral6 text-xl lg:text-2xl mb-2">
            How Can We Assist You?
          </h4>
        </div>

        <div className="w-full flex justify-center text-center flex-wrap px-4 md:px-7 lg:px-[52px] ">
          <a
            href="#"
            className="w-1/3 md:w-1/5 lg:w-1/6 px-1 md:px-2 text-xs lg:text-sm font-Santral4"
          >
            <img src={c1} className="w-full mb-4 lg:mb-2" />
            <p>
              <span className="hover:border-b-2 border-[#81D8D0]">
                Ask a Diamond Expert
              </span>
            </p>
          </a>

          <a
            href="#"
            className="w-1/3 md:w-1/5 lg:w-1/6 px-1 md:px-2 text-xs lg:text-sm font-Santral4"
          >
            <img src={c2} className="w-full mb-4 lg:mb-2" />
            <p>
              <span className="hover:border-b-2 border-[#81D8D0]">
                Book an Appointment
              </span>
            </p>
          </a>

          <a
            href="#"
            className="w-1/3 md:w-1/5 lg:w-1/6 px-1 md:px-2 text-xs lg:text-sm font-Santral4"
          >
            <img src={c3} className="w-full mb-4 lg:mb-2" />
            <p>
              <span className="hover:border-b-2 border-[#81D8D0]">
                Request a Repair
              </span>
            </p>
          </a>

          <a
            href="#"
            className="w-1/3 md:w-1/5 lg:w-1/6 px-1 md:px-2 text-xs lg:text-sm font-Santral4"
          >
            <img src={c4} className="w-full mb-4 lg:mb-2" />
            <p>
              <span className="hover:border-b-2 border-[#81D8D0]">
                Find Your Fit
              </span>
            </p>
          </a>

          <a
            href="#"
            className="w-1/3 md:w-1/5 lg:w-1/6 px-1 md:px-2 text-xs lg:text-sm font-Santral4"
          >
            <img src={c5} className="w-full mb-4 lg:mb-2" />
            <p>
              <span className="hover:border-b-2 border-[#81D8D0]">
                Personalize It
              </span>
            </p>
          </a>
        </div>
      </div>
    </>
  );
};

export default Assist;
