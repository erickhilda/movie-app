import Link from "next/link";

const Card = ({
  image,
  title,
  releasedYear,
  id,
}: {
  image: string;
  title: string;
  releasedYear: string;
  id: string;
}) => {
  return (
    <div className="flex flex-col rounded-lg border">
      <img src={image} alt={title} className="w-full rounded-t-lg max-h-72" />
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
