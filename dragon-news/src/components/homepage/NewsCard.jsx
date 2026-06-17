import { Bookmark, Share2, Star, Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const NewsCard = ({news}) => {
    return (
<div className="card bg-base-100 shadow-sm border-2 mb-3">
  <div className="card-body">

    <div className="flex justify-between bg-slate-200">
    <div className="flex gap-3 ">
            <Image src={news.author.img} alt="author-img" width={50} height={50} className="rounded-full"/>
        <div>
          <p>{news.author.name}</p>
          <p>{news.author.published_date}</p>
        </div>
    </div>

<div className="flex">
  <Bookmark/>
  <Share2/>
</div>

</div>
    <h2 className="card-title">{news.title}</h2>

<Image
  src={news.image_url}
  alt="news-img"
  width={1200}
  height={630}
  className="w-full h-auto"
/>

    <p className="line-clamp-3 ">{news.details}</p>
<div className="border-b"></div>

<div className="flex justify-between">

<div className="flex gap-10">
  <div className="flex gap-3 items-center">
  <Star/> {news.rating.number}
  </div>
  <div className="flex gap-3 items-center">
  <Eye/> {news.total_view}
  </div>
</div>

<Link href={`/news/${news._id}`}>
<button className="btn btn-error">Read More</button>
</Link>

</div>

  </div>

</div>
    );
};

export default NewsCard;