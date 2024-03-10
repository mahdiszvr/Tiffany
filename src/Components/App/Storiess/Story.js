import { Link } from "react-router-dom";

const Story = ({ story }) => {
  return (
    <>
      <Link to="/Tiffany/article"
        className="w-full md:w-1/4 text-sm border p-2 md:p-5 flex flex-row items-center md:flex-col"
      >
        <img src={story.img} className="w-1/2 md:w-full pb-4" />
        <p className="font-Santral6 text-lg ml-4 md:mb-6">{story.title}</p>
        <p className="font-Santral3 hidden md:block">{story.about}</p>
        <p className="font-Santral4 hidden md:inline-block my-9  hover:border-b-2 border-[#81D8D0]">
          <span  className="hover:border-b-1 border-[#81D8D0] ">
            Discover More >
          </span>
        </p>
      </Link>
    </>
  );
};

export default Story;
