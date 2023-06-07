import Shimmer from "./Shimmer";
import Skeleton from "./Skeleton";

const SkeletonArticle = ({ theme }) => {
  const themeClass = theme || 'light';

  return (
    <div className={`skeleton-wrapper ${themeClass}`}>
      <div className="skeleton-article">
        <Skeleton type={"title"} />
        <Skeleton type={"text"} />
        <Skeleton type={"text"} />
        <Skeleton type={"text"} />
      </div>
      <Shimmer />
    </div>
  )
}

export default SkeletonArticle;