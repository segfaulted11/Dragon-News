import Marquee from "react-fast-marquee";

const Marqueee = () => {
    return (
        <div className="bg-amber-200 flex p-2 gap-3" >
                 <button className="btn btn-error">Latest</button>
          <Marquee pauseOnHover={true}>
       
           <p> jabir bhai jabir bhai jabir bhai jabir bhai</p>
          </Marquee>
        </div>
    );
};

export default Marqueee;