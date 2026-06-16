
const News = ({newsArrOfObj}) => {
console.log(newsArrOfObj)
    return (
    <div className="col-span-6">
    <p className="text-xl font-bold mb-6">News By Category</p>
    {
        newsArrOfObj.map((news)=><p key={news._id} className="p-6 rounded-md border">
            {news.title}
        </p>)
    }
    </div>
    );
};

export default News;