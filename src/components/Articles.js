import { useEffect, useState } from "react";
import Skeleton from "../skeleton/Skeleton";
import SkeletonArticle from "../skeleton/SkeletonArticle";

const Articles = () => {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    setTimeout(async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await res.json();

      setArticles(data)

    }, 5000)
  }, [])

  return (
    <div className="article-container">
      <h2>Articles</h2>
      {!articles && [1, 2, 3, 4, 5].map((n) => <SkeletonArticle key={n} theme={"dark"}/>)}
      {articles && articles.map(({ id, title, body }) => (
        <div className="article" key={id}>
          <h3>{title}</h3>
          <p>{body}</p>
        </div>
      ))}
    </div>
  )
}

export default Articles