import { StarIcon as SolidStarIcon } from "@heroicons/react/20/solid";
import { StarIcon as OutlineStarIcon } from "@heroicons/react/24/outline";

const StarRating = (props) => {
  const { rating } = props;

  return (
    <div className="flex">
      {[...Array(5)].map((_, index) => (
        <Star key={index} filled={index < rating} />
      ))}
    </div>
  );
};

const Star = ({ filled }) => {
  return filled ? (
    <SolidStarIcon className="w-5 h-5 text-yellow-500" />
  ) : (
    <OutlineStarIcon className="w-5 h-5 text-gray-300" />
  );
};

export default StarRating;
