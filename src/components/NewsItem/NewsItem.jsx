import { formatDate } from '../../utils/formatDate.js';

const NewsItem = ({ item }) => {
  return (
    <li className='max-w-[335px]' key={item._id}>
      <img
        className='w-full  max-h-[190px] object-cover rounded-[15px] mb-5 '
        src={item.imgUrl}
        alt={item.title}
      />
      <h3 className='font-bold leading-[20px] -tracking-[0.48px] mb-3 h-10 line-clamp-2'>
        {item.title}
      </h3>
      <p className='text-sm font-medium leading-[18px] -tracking-[0.26px] mb-4 line-clamp-4 h-20'>
        {item.text}
      </p>
      <div className='flex justify-between'>
        <p className='text-sm text-text-gray font-medium leading-[18px] -tracking-[0.28px] '>
          {formatDate(item.date)}
        </p>
        <a
          className='text-brand underline font-medium text-sm leading-[18px] -tracking-[0.28px]'
          href={item.url}
        >
          Read more
        </a>
      </div>
    </li>
  );
};
export default NewsItem;
