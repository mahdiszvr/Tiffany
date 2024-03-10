import { Typography } from "@material-tailwind/react";

const Footer = () => {
  const LINKS = [
    {
      title: "Client Care",
      items: [
        "Contact Us",
        "Track Your Order",
        "Product Care & Repair",
        "Book an Appointment",
        "Frequently Asked Questions",
        "Shipping & Returns",
        "Tiffany Select Financing",
        "Tiffany Select Financing",
        "Website Accessibility",
      ],
    },
    {
      title: "Our Company",
      items: [
        "World of Tiffany",
        "Sustainability",
        "California Supply Chains Act",
        "California Privacy",
        "Tiffany Careers",
        "Website Policies",
        "Transparency in Coverage",
        "Do Not Sell or Share My Personal Information",
        "Opt-Out of Targeted Advertising",
      ],
    },
    {
      title: "Related Tiffany Sites",
      items: [
        "Wedding & Gift Registry",
        "Business Accounts",
        "Tiffany for the Press",
        "Help The Tiffany & Co. Foundation",
        "Tiffany Alertline",
        "Site Index",
      ],
    },
  ];
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="w-full border-t-8 border-[#81D8D0] pt-6">
        <div className="w-full px-10">
          <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
            <div className="grid grid-cols-1 sm:grid-cols-3 justify-between gap-16">
              {LINKS.map(({ title, items }) => (
                <ul key={title} className="flex flex-col gap-4">
                  <Typography
                    variant="small"
                    color="black"
                    className="mb-2 text-sm font-Santral6"
                  >
                    {title}
                  </Typography>
                  {items.map((link) => (
                    <li key={link}>
                      <Typography
                        as="a"
                        href="#"
                        color="gray"
                        className="text-xs font-Santral4 transition-colors hover:text-blue-gray-900"
                      >
                        {link}
                      </Typography>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
            <div className="justify-end hidden md:flex">
              <div className="w-1/2 flex flex-col gap-7">
                <p className="font-Santral6 text-sm mb-10">
                  Latest from Tiffany
                </p>
                <p className="font-Santral4 text-xs">
                  Be the first to know about exciting new designs, special
                  events, store openings and much more.
                </p>
                <input
                  type="email"
                  placeholder="Email"
                  className="font-Santral3 text-sm border-b border-gray-500"
                />
                <div>
                  <a
                    href="#"
                    className="px-12 py-2 font-Santral6 text-sm border border-black"
                  >
                    Sign Up
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 w-full py-4 ">
            <Typography
              variant="small"
              className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0"
            >
              &copy; {currentYear}{" "}
              <a href="https://material-tailwind.com/">T&CO. 2024</a>
            </Typography>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
