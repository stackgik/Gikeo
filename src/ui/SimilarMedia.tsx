import Tag from "./Tag";
import useMovieDetails from "../features/movies/useMovieDetails";
import MediaCard from "./MediaCard";
import { useParams } from "react-router-dom";
import { SkeletonCard } from "./SkeletonCard";

const SimilarMedia = () => {
  // prettier-ignore
  const { movieDetails, isMovieDetailsLoading, movieDetailsError } = useMovieDetails();
  const { mediaType } = useParams<string>();

  if (movieDetailsError) return <p>{movieDetailsError.message}</p>;
  if (isMovieDetailsLoading) return "loading...";

  const { similarMoviesData } = movieDetails || {};

  const refinedSimilarMovies = similarMoviesData?.results?.map((el) => ({
    id: el.id,
    title: el.title || el.name || el.original_name,
    image: el.poster_path,
    averageRating: el.vote_average,
    releaseDate: el.release_date || el.first_air_date || el.last_air_date,
    language: el.original_language,
  }));

  if (!refinedSimilarMovies?.length) return "";

  return (
    <section className="mx-auto mt-24 grid w-custom-min-width gap-16">
      <Tag>{`Similar ${mediaType}S`}</Tag>

      <div className="scrollbar-hide flex gap-4 overflow-x-scroll">
        {isMovieDetailsLoading
          ? ["a", "b", "c", "d", "e", "f"].map((_, index) => (
              <div key={index} className="w-[185px] shrink-0">
                <SkeletonCard />
              </div>
            ))
          : refinedSimilarMovies?.map((similarMovie) => (
              <div key={similarMovie.id} className="w-[185px] shrink-0">
                <MediaCard mediaData={similarMovie} mediaType={"movie"} />
              </div>
            ))}
      </div>
      {!refinedSimilarMovies?.length ? (
        <p className="mt-6 text-[1.5rem] font-medium dark:text-dark-grey-500">
          {`Oh oh! There is no similar ${mediaType === "tv" ? "TV shows" : mediaType} to display`}
        </p>
      ) : null}
    </section>
  );
};

export default SimilarMedia;
