import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import API from '../API'
import Header from '../Header';
import Footer from '../Footer';
export default function NewsDetailsComponenet() {
    const [news, setNews] = useState({})
    let { id } = useParams();
    useEffect(() => {
        API.get(`news/${id}`).then((res) => {
            setNews(res.data.news)
        }).catch((e) => {
            console.log(e)
        })
    }, []);
    return (
        <div>
            <Header/>
            <div className="container">
            <h1>{news.title}</h1>
            <img src={news.image} width="100%" alt="/" />
            <p>
                {news.description}
            </p>
            </div>
            <Footer/>
        </div>
    )
}
