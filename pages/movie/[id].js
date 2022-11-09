import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import { XIcon } from '@heroicons/react/solid';
import dynamic from 'next/dynamic';
//import ReactPlayer from 'react-player/lazy';
const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });
import { API_KEY, BASE_URL, BASE_URL_IMAGE } from '../../utils/requests';

function Movie({ result }) {
  const [showPlayer, setShowPlayer] = useState(false);

  const index = result.videos.results.findIndex(
    (element) => element.type === 'Trailer'
  );

  return (
    <div>
      <Head>
        <title>{result.title || result.original_name}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='max-w-xs md:max-w-7xl mx-auto mt-10'>
        <div>
          <Image
            src={
              `${BASE_URL_IMAGE}${
                result.backdrop_path || result.poster_path
              }` || `${BASE_URL_IMAGE}${result.poster_path} `
            }
            alt={result.title || result.original_name}
            height={1080}
            width={1000}
            className='rounded-xl mx-auto'
          />
        </div>
        <div className='text-center '>
          <div className='flex justify-center items-center mt-5'>
            <button
              className='flex justify-center items-center text-xs md:text-base bg-black/30 text-[#f9f9f9] border border-[#f9f9f9] py-2.5 px-6  rounded hover:bg-[#c6c6c6]'
              onClick={() => setShowPlayer(true)}
            >
              <Image
                src='/images/play-icon-white.svg'
                alt='play-icon'
                className='h-6 md:h-8'
                height={20}
                width={20}
              />
              <span className='uppercase font-medium tracking-wide mx-2'>
                Trailer
              </span>
            </button>
            <div></div>
          </div>

          <h1 className='mt-10 text-xl md:text-2xl text-white font-bold'>
            {result.title || result.original_name}
          </h1>
          <h4 className='text-xs md:text-lg mt-10 mb-10'>{result.overview}</h4>
        </div>
      </div>
      {showPlayer && (
        <div className='absolute inset-0 bg-black opacity-50 h-full w-full z-50'></div>
      )}
      <div
        className={`absolute top-3 inset-x-[7%] md:inset-x-[13%] rounded overflow-hidden transition duration-1000 ${
          showPlayer ? 'opacity-100 z-50' : 'opacity-0'
        }`}
      >
        <div className='flex items-center justify-between bg-black text-[#f9f9f9] p-3.5'>
          <span className='font-semibold'>Play Trailer</span>
          <div
            className='cursor-pointer w-8 h-8 flex justify-center items-center rounded-lg opacity-50 hover:opacity-75 hover:bg-[#0F0F0F]'
            onClick={() => setShowPlayer(false)}
          >
            <XIcon className='h-5' />
          </div>
        </div>
        <div
          className='cursor-pointer w-8 h-8 flex justify-center items-center rounded-lg opacity-50 hover:opacity-75 hover:bg-[#0F0F0F]'
          onClick={() => setShowPlayer(false)}
        ></div>
        <div className='relative pt-[56.25%]'>
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${result.videos?.results[index]?.key}`}
            width='100%'
            height='100%'
            style={{ position: 'absolute', top: '0', left: '0' }}
            controls={true}
            playing={showPlayer}
          />
        </div>
      </div>
    </div>
  );
}

export default Movie;

export async function getServerSideProps(context) {
  const { id } = context.query;
  const request = await fetch(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US&append_to_response=videos`
  ).then((response) => response.json());

  return {
    props: {
      result: request,
    },
  };
}
