import Image from 'next/image';
import { useRouter } from 'next/router';
import { BASE_URL_IMAGE } from '../../utils/requests';

function Thumbnail({ result }) {
  const router = useRouter();

  return (
    <div
      className='cursor-pointer p-2 transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50'
      onClick={() => router.push(`/movie/${result.id}`)}
    >
      <Image
        src={
          `${BASE_URL_IMAGE}${result.backdrop_path || result.poster_path}` ||
          `${BASE_URL_IMAGE}${result.poster_path} `
        }
        alt={result.title || result.original_name}
        height={1080}
        width={1920}
      />
      <div className='p-2'>
        <div className='flex justify-between'>
          <span>{result.vote_average} </span>
          <span>{result.release_date} </span>
        </div>
        <p className='truncate max-w-md'>{result.overview}</p>
        <h2 className='mt-1 text-2xl text-white'>
          {result.title || result.original_name}
        </h2>
      </div>
    </div>
  );
}

export default Thumbnail;
