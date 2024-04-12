import "./Recommended.css";
// import thumbnail1 from '../../assets/thumbnail1.png';
// import thumbnail2 from '../../assets/thumbnail2.png';
// import thumbnail3 from '../../assets/thumbnail3.png';
// import thumbnail4 from '../../assets/thumbnail4.png';
// import thumbnail5 from '../../assets/thumbnail5.png';
// import thumbnail6 from '../../assets/thumbnail6.png';
// import thumbnail7 from '../../assets/thumbnail7.png';
// import thumbnail8 from '../../assets/thumbnail8.png';
import { useEffect, useState } from "react";
import {value_converter } from "../data";
import { Link } from "react-router-dom";

const Recommended = ({ categoryId }) => {
  const [apiData, setApiData] = useState([]);
  const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY

  const fetchData = async () => {
    const relatedVideo_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=35&regionCode=IN&videoCategoryId=${categoryId}&key=${API_KEY}`;
    const response = await fetch(relatedVideo_url);
    const res = await response.json();
    setApiData(res.items);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="recommended">
      {apiData.map((item, index) => {
        return (
          <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className="side-video-list">
          <div className="side-video-list">
            <img src={item.snippet.thumbnails.medium.url} alt="" />
            <div className="vid-info">
              <h4>{item.snippet.title}</h4>
              <p>{item.snippet.channelTitle}</p>
              <p>{value_converter(item.statistics.viewCount)}</p>
            </div>
          </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Recommended;
