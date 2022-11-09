import Head from 'next/head';
import { LoginForm } from '../../components';

function index() {
  return (
    <div>
 <Head>
        <title>Login Page</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='mt-20 md:mt-48'>
        <LoginForm/>   
      </div>
    </div>
  )
}

export default index