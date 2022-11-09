import { useRouter } from 'next/router';

function HeaderItem({ title, Icon, Path }) {
  const router = useRouter();
  return (
    <div
      className='flex items-center flex-col  hover:cursor-pointer w-12 sm:w-20 hover:text-white group'
      onClick={() => router.push(`/${Path}`)}
    >
      <Icon className='h-8 mb-1' />
      <p className='tracking-widest opacity-0 group-hover:opacity-100'>
        {title}
      </p>
    </div>
  );
}

export default HeaderItem;
