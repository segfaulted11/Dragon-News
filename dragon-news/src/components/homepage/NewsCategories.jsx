import Link from "next/link";


const NewsCategories = ({categoriesArrOfObj,activeId}) => {
    return (
      <div className="col-span-3">
    <p className="font-bold text-lg">All Categories</p>
      <ul className="flex flex-col gap-3 mt-6">
      {
        categoriesArrOfObj.map((category)=><li key={category.category_id} className={` p-2 rounded-md font-bold text-center text-md ${activeId === category.category_id && "bg-red-400 text-white"}`}>
            <Link href={`/category/${category.category_id}`} className="block">
            {category.category_name}
            </Link>
            </li>)
      }
      </ul>
    </div>
    );
};

export default NewsCategories;