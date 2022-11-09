function Footer() {
  return (
    <div className='flex flex-col-reverse bg-white mt-2 w-full text-center py-3 space-y-2 md:flex-row md:justify-between md:items-center md:space-y-0 md:px-5'>
      <div className='mt-3 md:mt-0 '>
        <label>
          Developed {'&'} Powered by
          <a
            href='/'
            rel='noreferrer'
            target='_blank'
            className='text-cyan-600'
          >
            <span className='text-primary font-bold'> Movies </span>
          </a>
        </label>
      </div>
      <div>
        <label>All rights reserved © Movies2022</label>
      </div>
    </div>
  );
}

export default Footer;
