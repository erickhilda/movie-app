import Link from "next/link";
import { Icon } from "@iconify/react";

interface ICardProps {
  image: string;
  title: string;
  releasedYear: string;
  id: string;
  isBookmarked: boolean;
  handleBookmark: (e: any) => void;
}

const Card = ({
  image,
  title,
  releasedYear,
  id,
  isBookmarked,
  handleBookmark,
}: ICardProps) => {
  return (
    <div className="flex flex-col rounded-lg border relative">
      <span
        className="absolute right-0 p-2 h-8 rounded-full bg-white border"
        onClick={handleBookmark}
      >
        <Icon
          icon={isBookmarked ? "mdi:bookmark" : "mdi:bookmark-outline"}
          fontSize={16}
        />
      </span>
      <img
        src={image}
        alt={title}
        className="w-full rounded-t-lg h-72 object-cover"
      />
      <div className="flex flex-1 flex-col p-2">
        <span className="font-bold text-lg text-gray-800 tracking-normal text-left">
          {title}
        </span>
        <span className="text-sm">{releasedYear}</span>
        <div className="flex h-full justify-end items-end">
          <Link href={`/movie/${encodeURIComponent(id)}`}>
            <a className="py-1 px-4 bg-gray-200 text-gray-400 text-sm font-bold tracking-wide uppercase rounded-full">
              Details
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
