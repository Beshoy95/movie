function SearchBox({handleInput,searchTerm,search}) {
  
  return (
    <div>
     <form className='flex' onSubmit={search}>
          <input
            className='rounded px-2 text-black'
            placeholder='Type to search'
            name='searchTerm'
            value={searchTerm}
            onChange={handleInput}
            type='text'
            required
          />
          <button className='flex justify-center items-center text-xs md:text-base bg-black/30 text-[#f9f9f9] border border-[#f9f9f9] py-2 px-6  rounded hover:bg-[#c6c6c6]'>
            search
          </button>
        </form>
    </div>
  );
}

export default SearchBox;
