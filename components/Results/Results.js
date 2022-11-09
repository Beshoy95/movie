import { Thumbnail } from '../index';

function Results({ results }) {
   const movieContainer = results.slice(0, 8);
  return (
    <div className='px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3'>
      {movieContainer.map((result) => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </div>
  );
}

export default Results;
