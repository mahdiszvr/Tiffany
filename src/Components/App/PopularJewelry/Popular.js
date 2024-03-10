// import like from "../media/Header/Wishlist.svg";

const Popular = ({ popular }) => {
  return (
    <>
      <div className="w-full flex flex-row gap-2 md:gap-4 lg:gap-2 text-center">
        <a href="#">
          {" "}
          <img src={popular.img} />{" "}
        </a>
      </div>
    </>
  );
};

export default Popular;
