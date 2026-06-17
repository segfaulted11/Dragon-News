import { getNewsDetailsById } from "@/lib/data";
import { Bookmark, Eye, Share2, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BiLeftArrow } from "react-icons/bi";

const NewsDetailsPage = async({params}) => {
    const res = await params;
    const {id} = await res;

    const newsDetails = await getNewsDetailsById(id);
const newsDetailsObj = newsDetails.data[0];
console.log(newsDetailsObj)

    return (
        <div className="card bg-base-100 w-150 shadow-sm mb-3 mx-auto">

  <Link href={'/'}
  >
  <div className="flex gap-2 items-center text-red-500 mb-5 hover:underline">

  <BiLeftArrow/>
  <h2> Back To Home</h2>
  </div>
  </Link>
    
 <div className="card bg-base-100 w-150 shadow-sm border-2 mb-3">
  <div className="card-body">

    <div className="flex justify-between bg-slate-200">
    <div className="flex gap-3 ">
            <Image src={newsDetailsObj.author.img} alt="author-img" width={50} height={50} className="rounded-full"/>
        <div>
          <p>{newsDetailsObj.author.name}</p>
          <p>{newsDetailsObj.author.published_date}</p>
        </div>
    </div>

<div className="flex">
  <Bookmark/>
  <Share2/>
</div>

</div>
<div className="badge badge-secondary">Category #{newsDetailsObj.category_id}</div>
    <h2 className="card-title">{newsDetailsObj.title}</h2>

<Image
  src={newsDetailsObj.image_url}
  alt="news-img"
  width={1200}
  height={630}
  className="w-full h-auto"
/>

    <p>{newsDetailsObj.details}</p>
<div className="border-b"></div>

<div className="flex justify-between">

<div className="flex gap-10">
  <div className="flex gap-3 items-center">
  <Star/> {newsDetailsObj.rating.number}
  </div>
  <div className="flex gap-3 items-center">
  <Eye/> {newsDetailsObj.total_view}
  </div>
  
     <Link href={`/category/${newsDetailsObj.category_id}`}>
  <button className="btn btn-error">See Other News Of This Category </button>
  </Link>
 </div>

</div>
</div>
</div>
</div>

    );
};

export default NewsDetailsPage;