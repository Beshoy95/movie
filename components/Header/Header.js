import Image from 'next/image';
import HeaderItem from './HeaderItem';
import {
  HomeIcon,
  UserIcon,
  LightningBoltIcon,
} from '@heroicons/react/outline';

function Header() {
  return (
    <header className='flex flex-col sm:flex-row m-5 justify-between items-center h-auto'>
      <div className='flex flex-grow justify-evenly max-w-2xl'>
        <HeaderItem title='HOME' Icon={HomeIcon} Path='/' />
        <HeaderItem title='ABOUT' Icon={LightningBoltIcon} Path='about' />
        <HeaderItem title='ACCOUNT' Icon={UserIcon} Path='account' />
      </div>
      <Image
        className='object-contain rounded-sm'
        src='/images/logo.png'
        alt=''
        width={100}
        height={50}
      />
    </header>
  );
}

export default Header;
