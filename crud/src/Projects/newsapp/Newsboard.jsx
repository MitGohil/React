import React, { useEffect, useState } from 'react'
import Newsitem from './Newsitem';
import { BsFillArrowUpCircleFill } from "react-icons/bs"

const Newsboard = ({ category, country }) => {
    const key = "79f6a9f811a6493ab254db128e2f5cb6"
    const [articles, setArticles] = useState([])

    useEffect(() => {
        fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${key}`)
            .then((result) => result.json())
            .then((resp) => {
                // console.log(resp);
                setArticles(resp.articles)
            })

        // let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${key}`;
        // fetch(url).then(response => response.json()).then(data => setArticles(data.articles));
    }, [category, country])

    return (

        <>
            <h2 className='text-center'>Latest <span className='badge bg-danger'>NEWS</span></h2>
            {
                articles.map((news, index) => {
                    return <Newsitem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
                })
            }
            <BsFillArrowUpCircleFill onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
            }} style={{
                position: 'fixed',
                fontSize: '50px',
                bottom: '40px',
                right: '40px',
                color: '#fff',
            }} />
        </>
    )
}

export default Newsboard