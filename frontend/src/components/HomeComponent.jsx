import { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import API from "../API"
import Header from "../Header";
import Footer from "../Footer";
function HomeComponent() {
  const [news,setNews] = useState([])

  const getNews =()=>{
    API.get("news").then((res)=>{
      setNews(res.data.news)
    }).catch((e)=>{
      console.log(e)
    })
  }
  useEffect(()=>{
      getNews();
  },[]);
  return (
    <div>
      <Header/>
      <div className="container">
             <div className="row">
              {news && news.map((ndata,index)=>{
                return(<div key={index} className="col-md-4">
                   <h1>
                    <Link to={`/news-details/${ndata._id}`}>
                        {ndata.title}
                    </Link>
                    </h1>
                   <img src={ndata.image} width="100%" height="200" alt="" />
                   <p>
                    {ndata.description}
                   </p>
                 </div>)
              })}              
             </div>
      </div>
      <Footer/>
    </div>
  );
}

export default HomeComponent;