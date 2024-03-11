import Image from "../media/Header/tiffco-logo-2.svg";
import search from "../media/Header/Search-1.svg";
import location from "../media/Header/StoreLocator.svg";
import contact from "../media/Header/Concierge.svg";
import Appointment from "../media/Header/Appointment.svg";
import Account from "../media/Header/MyAccount.svg";
import Wishlist from "../media/Header/Wishlist.svg";
import Bag from "../media/Header/ShoppingBag.svg";
import Hamburger from "../media/Header/Hamburger-Menu.svg";
import Nav from "./Nav/Nav.js";
import { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import React from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";

const Header = () => {
  // const [isNavOpen, setIsNavOpen] = useState(false);
  const [open, setOpen] = React.useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  return (
    <>
      <div className="w-full py-2 md:py-4 px-3 md:px-6 flex flex-col justify-between gap-4">
        <div className="top flex justify-between items-center">
          <nav className="flex lg:hidden">
            <section className="MOBILE-MENU ">
              <React.Fragment>
                <div className="HAMBURGER-ICON space-y-2" onClick={openDrawer}>
                  <img src={Hamburger} className="w-4 h-4" />
                </div>
                <Drawer
                  open={open}
                  onClose={closeDrawer}
                  className="p-4"
                  overlay={false}
                  size={960}
                >
                  <div className="mb-6 flex items-center justify-between">
                    <Typography variant="h5" color="blue-gray"></Typography>
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
                  <ul className="p-3 mt-7 text-sm flex flex-col items-start gap-6 min-h-[250px] font-Santral4">
                    <li>
                      <a href="#">Jewelry</a>
                    </li>
                    <li>
                      <a href="#">Gifts</a>
                    </li>
                    <li>
                      <a href="#">Love & Engagement</a>
                    </li>
                    <li>
                      <a href="#">Fine Watches</a>
                    </li>

                    <li>
                      <a href="#">Home & Accessories</a>
                    </li>
                    <li>
                      <a href="#">Fragrance</a>
                    </li>
                    <li>
                      <a href="#">Men’s</a>
                    </li>
                    <li>
                      <a href="#">Stories</a>
                    </li>

                    <div className="w-full h-[1px] bg-gray-400"></div>

                    <li>
                      <Link to={"/Tiffany/contact"} className="font-Santral3 flex">
                        <img src={contact} className="w-4 h-4 mr-2" />
                        <a href="#">Contact us</a>
                      </Link>
                    </li>
                    <li className="font-Santral3 flex">
                      <img src={Appointment} className="w-4 h-4 mr-2" />
                      <a href="#">Book an Appointment</a>
                    </li>
                    <li className="font-Santral3 flex">
                      <img src={Account} className="w-4 h-4 mr-2" />
                      <a href="#">My Account</a>
                    </li>
                    <li className="font-Santral3 flex">
                      <img src={location} className="w-4 h-4 mr-2" />
                      <a href="#">Store Locator</a>
                    </li>
                  </ul>
                </Drawer>
              </React.Fragment>
              {/* <div
                className="HAMBURGER-ICON space-y-2"
                onClick={openDrawer}
              >
                <img src={Hamburger} className="w-4 h-4" />
              </div> */}

              {/* <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                <div
                  className="absolute top-0 right-0 px-3 py-3"
                  onClick={() => setIsNavOpen(false)}
                >
                  <svg
                    className="h-8 w-8 text-gray-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </div>
                <ul className="p-3 mt-7 text-sm flex flex-col items-start gap-6 min-h-[250px] font-Santral4">
                  <li>
                    <a href="#">Jewelry</a>
                  </li>
                  <li>
                    <a href="#">Gifts</a>
                  </li>
                  <li>
                    <a href="#">Love & Engagement</a>
                  </li>
                  <li>
                    <a href="#">Fine Watches</a>
                  </li>

                  <li>
                    <a href="#">Home & Accessories</a>
                  </li>
                  <li>
                    <a href="#">Fragrance</a>
                  </li>
                  <li>
                    <a href="#">Men’s</a>
                  </li>
                  <li>
                    <a href="#">Stories</a>
                  </li>

                  <div className="w-full h-[1px] bg-gray-400"></div>

                  <li className="font-Santral3 flex">
                    <img src={contact} className="w-4 h-4 mr-2" />
                    <a href="#">Contact us</a>
                  </li>
                  <li className="font-Santral3 flex">
                    <img src={Appointment} className="w-4 h-4 mr-2" />
                    <a href="#">Book an Appointment</a>
                  </li>
                  <li className="font-Santral3 flex">
                    <img src={Account} className="w-4 h-4 mr-2" />
                    <a href="#">My Account</a>
                  </li>
                  <li className="font-Santral3 flex">
                    <img src={location} className="w-4 h-4 mr-2" />
                    <a href="#">Store Locator</a>
                  </li>
                </ul>
              </div> */}
            </section>
          </nav>

          <div className="justify-start h-[16px] hidden lg:flex">
            <div className="lg:hidden">
              <button className="navbar-burger flex items-center text-blue-600 p-3">
                <svg
                  className="block h-4 w-4 fill-current"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Mobile menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
              </button>
            </div>
            <button>
              <img src={search} className="w-4 h-4 mr-10" />
            </button>
            <button>
              <img src={location} className="w-4 h-4 mr-10" />
            </button>
            <Link to={"/Tiffany/contact"} className="flex">
              <img src={contact} className="w-4 h-4 mr-2" />
              <p className="text-xs font-Santral4 hover:text-[#81D8D0]">
                Contact Us
              </p>
            </Link>
          </div>

          <Link to={"/Tiffany/"}>
            <img
              src={Image}
              className="inline w-[120px] md:w-[192px] h-[26px]"
            />
          </Link>

          <div className="flex justify-end h-[16px]">
            <a href="#" className="hidden lg:flex">
              <img src={Appointment} clamdssName="w-4 h-4 mr-[10px]" />
              <p className="text-xs ml-[10px] font-Santral4 hover:text-[#81D8D0]">
                Book an Appointment
              </p>
            </a>
            <button className="hidden lg:block">
              <img src={Account} className="w-4 h-4 ml-10" />
            </button>
            <button>
              <img src={Wishlist} className="w-4 h-4 md:ml-10" />
            </button>
            <button>
              <img src={Bag} className="w-4 h-4 ml-3 md:ml-10" />
            </button>
          </div>
        </div>
        <div className="hidden lg:block">
          <Nav />
        </div>
      </div>
    </>
  );
};

export default Header;
