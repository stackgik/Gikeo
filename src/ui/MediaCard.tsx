import { Link } from "react-router-dom";
import Img from "./Img";
import CircularRating from "./CircularRating";
import { TbMovie } from "react-icons/tb";
import PosterFallback from "/assets/no-poster.png";
import Bookmark from "../features/bookmark/Bookmark";

// prettier-ignore
const MediaCard = ({mediaData, mediaType}:MediaDataProps) => {
  const {title, averageRating, releaseDate, image, language, id} = mediaData;
  const posterUrl = image === null ? PosterFallback : `https://image.tmdb.org/t/p/w500/${image}`; // [CHANGED] w500 instead of original — better perf at card size
  const releaseYear = releaseDate ? new Date(releaseDate).getFullYear() : 'N/A';
  const rating = averageRating ? +averageRating.toFixed(1) : 0;

  return (
    // [CHANGED] Removed hardcoded w-[150px] — card now fills its grid column naturally.
    // w-full ensures it stretches to whatever the grid allocates.
    <article className="h-fit w-full shrink-0">

      {/* Image Container */}
      <div className="image-container relative">
        <Link to={`/${mediaType}/${id}-${title.toLowerCase().replace(/\s+/g, '-')}`}>
          {/* [CHANGED] Added rounded-lg + overflow-hidden for a cleaner poster look */}
          <div className="overflow-hidden rounded-lg">
            <Img src={posterUrl} alt={title} />
          </div>
        </Link>
        <Bookmark mediaData={mediaData} mediaType={mediaType} />
      </div>

      {/* [CHANGED] Reduced py-10 → pt-10 pb-4 to tighten bottom spacing */}
      <div className="content relative pt-10 pb-4">
        {/* Meta info row */}
        {/* [CHANGED] Reduced text-lg → text-xs and gap-4 → gap-2 so the row fits narrow columns without overflow */}
        <ul className="flex flex-wrap text-xs gap-2 items-center text-grey-700 dark:text-dark-grey-700">
          <li>{releaseYear}</li>
          <li className="h-[2px] aspect-square bg-grey-700 dark:bg-dark-grey-700 rounded-full"></li>
          <li className="flex gap-1 items-center justify-center">
            <TbMovie />
            {/* [CHANGED] Capitalized mediaType label for polish */}
            <span className="capitalize">{mediaType}</span>
          </li>
          <li className="h-[2px] aspect-square bg-grey-700 dark:bg-dark-grey-700 rounded-full"></li>
          <li className="uppercase">{language}</li>
        </ul>

        {/* Media Title */}
        {/* [CHANGED] Added line-clamp-2 so long titles don't blow out card height unevenly across the grid */}
        <Link
          to={`/${mediaType}/${id}-${title.toLowerCase().replace(/\s+/g, '-')}`}
          className="text-[13px] mt-2 block font-bold leading-snug line-clamp-2 text-grey-700 dark:text-dark-grey-700 hover:text-brand-500 transition-all duration-300 ease-in-out"
        >
          {title}
        </Link>

        {/* Circular Rating */}
        {/* [CHANGED] Reduced size from h-[4.5rem] → h-14 to stay proportional on smaller grid columns */}
        <div className="rating h-14 aspect-square rounded-full absolute top-0 left-2 -translate-y-2/3">
          <CircularRating rating={rating} />
        </div>
      </div>
    </article>
  );
};

export default MediaCard;
