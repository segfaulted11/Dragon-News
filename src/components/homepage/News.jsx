import NewsCard from "./NewsCard";

const News = ({newsArrOfObj}) => {
// console.log(newsArrOfObj)
    return (
    <div className="col-span-6">
    <p className="text-xl font-bold mb-6">News By Category</p>
    {
        newsArrOfObj.map((news)=><NewsCard key={news._id}  news={news}>
        </NewsCard>)
    }
    </div>
    );
};

export default News;