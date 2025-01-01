import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setArticles } from "../redux/slice";

const News = () => {
  const articles = useSelector((state) => state.dashboard.articles);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
        );
        dispatch(setArticles(response.data.articles));
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchArticles();
  }, [dispatch]);

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">Latest News</h2>
      {articles.map((article, index) => (
        <div key={index} className="mb-4 border-b pb-4">
          <h3 className="text-lg font-semibold">{article.title}</h3>
          <p className="text-sm text-gray-600">
            {article.author || "Unknown Author"} | {new Date(article.publishedAt).toLocaleDateString()}
          </p>
          <p>{article.description}</p>
        </div>
      ))}
    </div>
  );
};

export default News;
