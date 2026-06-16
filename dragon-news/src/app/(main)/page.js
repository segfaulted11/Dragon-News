const getCategories = async() =>{
const res = await fetch("https://openapi.programming-hero.com/api/news/categories");
const data = await res.json();
return data;
}

export default async function Home() {
  const categories = await getCategories();
  // console.log(categories.data.news_category);//array of objects
  const categoriesArrOfObj = categories.data.news_category;
  return (
    <div className="grid grid-cols-12 container mx-auto">
    <div className="col-span-3">
    <p className="font-bold text-lg text-center">All Categories</p>
      <ul className="flex flex-col gap-3 mt-6">
      {
        categoriesArrOfObj.map((category)=><li key={category.category_id} className="bg-red-400 p-2 rounded-md font-bold text-center text-md">{category.category_name}</li>)
      }
      </ul>
    </div>
    <div className="bg-green-300 col-span-6">
    News
    </div>
    <div className="bg-purple-300 col-span-3">
      Social
    </div>
    </div>
  );
}
