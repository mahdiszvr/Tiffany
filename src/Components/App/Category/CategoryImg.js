const CategoryImg = ({ category }) => {
  return (
    <>
      <a href="#" className="px-2 text-sm font-Santral4">
        <img src={category.img} className="w-full mb-4 lg:mb-2" />
        <p>
          <span className="hover:border-b-2 border-[#81D8D0]">
            {category.title}
          </span>
        </p>
      </a>
    </>
  );
};

export default CategoryImg;
