import News from "@/components/homepage/News";
import NewsCategories from "@/components/homepage/NewsCategories";
import Social from "@/components/homepage/Social";
import { getCategories, getNewsByCategoryId } from "@/lib/data";



const CategoryWiseNewsPage = async ({ params }) => {

    const res = await params;
    const { id } = res;

    const categories = await getCategories();
    const categoriesArrOfObj = categories.data.news_category;

    const news = await getNewsByCategoryId(id);
    const newsArrOfObj = news.data;

    return (
        <div className="grid grid-cols-12 container mx-auto">

            <NewsCategories categoriesArrOfObj={categoriesArrOfObj} activeId={id} />

            <News newsArrOfObj={newsArrOfObj} />

            <Social />
        </div>
    );
};

export default CategoryWiseNewsPage;