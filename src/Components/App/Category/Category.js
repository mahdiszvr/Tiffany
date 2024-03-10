import CategoryImg from "./CategoryImg.js";

const Category = ({ category }) => {
  return (
    <>
      <div className="my-7 md:my-10">
        <div className="py-4 px-4 md:px-14 text-center">
          <h4 className="font-Santral6 text-2xl mb-2">Shop by Category</h4>
          <p className="font-Santral3 text-sm">
            Brilliant design and unparalleled craftsmanship.
          </p>
        </div>

        <div className="w-full grid grid-cols-2 md:grid-cols-6 text-center gap-y-5 px-4 md:px-10 lg:px-[52px] ">
          {category && category
            ? category.map((elem, index) => {
                return <CategoryImg category={elem} key={index} />;
              })
            : null}
        </div>
      </div>
    </>
  );
};

export default Category;
