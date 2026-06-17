import { getNewsByCategoryId } from "@/lib/data";
import Marquee from "react-fast-marquee";

const Marqueee = async() => {
    const breakingNews = await getNewsByCategoryId("01");
    const breakingNewsArrOfObj = breakingNews.data;
 

    return (
        <div className="bg-red-200 flex p-2 gap-3" >
                 <button className="btn btn-error">Latest</button>
          <Marquee pauseOnHover={true}>
       <div className="flex gap-5">
       {
        breakingNewsArrOfObj.map((x)=><p key={x._id}>{x.title}!</p>)
       }
       </div>
          </Marquee>
        </div>
    );
};

export default Marqueee;