export const getCategories = async () => {
    const res = await fetch(
        "https://openapi.programming-hero.com/api/news/categories",
    );
    const data = await res.json();
    return data;
};

export const getNewsByCategoryId = async (category_Id) => {
    const res = await fetch(
        `https://openapi.programming-hero.com/api/news/category/${category_Id}`,
    );
    const data = await res.json();
    return data;
};

export const getNewsDetailsById = async(news_id)  =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/news/${news_id}`);
    const data = await res.json();
    return data;
}