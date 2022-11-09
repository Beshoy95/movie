import Head from 'next/head';

function About() {
  return (
    <div>
      <Head>
        <title>About</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='w-full my-32'>
        <div className='text-center'>
          <h2 className='text-2xl md:text-4xl lg:text-5xl font-bold'>
            Who we are
          </h2>
          <p className='text-sm md:text-xl lg:text-2xl py-3 font-semibold md:mt-20'>
            We are not hiding, we are standing in the face of the challenge
          </p>
          <div className='py-3 px-4 md:w-2/3 lg:w-2/3  mx-auto '>
            <p className='text-sm  md:text-base  lg:text-lg   '>
              Movies was established in 2019 by a number of leading software
              people in the field in order to promote and lead businesses
              forward. Our company specializes in all kinds of areas such as:
              building landing pages, appointment scheduling systems, CRM
              management system, mobile applications, applications and websites
              for small, medium and even large businesses.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
