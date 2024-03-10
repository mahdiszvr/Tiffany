import Main from "../media/Contact/main.jpg";
import Phone from "../media/Contact/Phonenew.svg";
import Appointment from "../media/Contact/Appointment.svg";
import Location from "../media/Contact/StoreLocator.svg";

import Assist from "./Assist.js";

import React from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
  Input,
  Textarea,
} from "@material-tailwind/react";

const Contact = () => {
  const [open, setOpen] = React.useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <>
      <div className="w-full flex flex-col lg:flex-row mb-8 md:mb-[60px] bg-[#f4f4f4]">
        <img src={Main} className="w-full lg:w-1/2" />
        <div className="flex justify-center items-center pt-3">
          <div className="w-11/12 lg:w-3/5 inline-flex flex-col justify-start">
            <h1 className="text-2xl font-Santral6 inline-block">
              Tiffany At Your Service
            </h1>
            <p className="hidden lg:block text-start text-sm font-Santral3 pt-3 pb-5 leading-6">
              There’s no question too small or request too big for our Tiffany
              client advisors. From choosing an engagement ring or gift to
              providing in-store or virtual appointments, we’re always at your
              service.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row lg:justify-center gap-7 font-Santral4 text-sm mb-5 md:mb-[60px]">
        <div className="w-full lg:w-1/2 xl:w-1/3 flex justify-start lg:justify-center ">
          <div className="flex flex-col gap-6 px-5">
            <h2 className="text-xl lg:text-2xl font-Santral6">Contact Us</h2>

            <a className="flex gap-3 items-center " href="tel:800 843 3269">
              <img className="w-6 h-6" src={Phone} />
              <span className="hover:border-b-2 border-[#81D8D0]">
                Call 800 843 3269
              </span>
            </a>
            <button className="flex gap-3 items-center">
              <img className="w-6 h-6" src={Appointment} />
              <span className="hover:border-b-2 border-[#81D8D0]">
                Book an Appointment
              </span>
            </button>
            <button className="flex gap-3 items-center">
              <img className="w-6 h-6" src={Phone} />
              <span onClick={openDrawer} className="hover:border-b-2 border-[#81D8D0]">Email</span>
              <Drawer  placement="right" open={open} onClose={closeDrawer} overlay={false} size={350}>
                <div className="flex justify-end px-4 pb-2">
                  <IconButton
                    variant="text"
                    color="blue-gray"
                    onClick={closeDrawer}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </IconButton>
                </div>
                <div className="mb-5 px-4 text-start font-Santral3">
                <span className=" text-xl">
                  Email
                  </span>
                  <p
                    className="font-normal mt-3"
                  >
                    Complete the form below with your inquiry
                  </p>
                </div>
                <form className="flex flex-col gap-6 p-4 font-Santral3">
                
                  <Input type="email" label="Email"/>
                  <Input label="Name " />
                  <Textarea rows={6} label="Message" />
                  <div className="flex gap-3 ">
                  <Button variant="outlined" className="w-1/2">Cancel</Button>
                  <Button variant="outlined" className="w-1/2">Send</Button>
                  </div>
                  
                </form>
              </Drawer>
            </button>
            <button className="flex gap-3 items-center">
              <img className="w-6 h-6" src={Location} />
              <span className="hover:border-b-2 border-[#81D8D0]">
                Track Your Order
              </span>
            </button>
          </div>
        </div>

        <div className="w-full lg:w-1/2 xl:w-1/3 flex justify-start lg:justify-center font-Santral3">
          <div className="w-full md:w-2/3 flex flex-col gap-6 px-5 lg:px-11">
            <h2 className="text-xl lg:text-2xl font-Santral6">
              Client Care Hours of Operations (EST):
            </h2>

            <p className="flex gap-3 items-center" href="#">
              Monday–Friday: 8:00AM–10:00PM EST
            </p>
            <p className="flex gap-3 items-center" href="#">
              Saturday: 9:00AM-10:00PM EST
            </p>
            <p className="flex gap-3 items-center" href="#">
              Sunday: 10:00AM–10:00PM EST
            </p>
          </div>
        </div>
      </div>

      <Assist />
    </>
  );
};

export default Contact;
