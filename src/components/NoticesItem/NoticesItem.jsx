import sprite from '../../assets/sprite.svg';

const NoticesItem = ({ dataItem }) => {
  const {
    imgURL,
    name,
    title,
    popularity,
    birthday,
    sex,
    species,
    category,
    comment,
    price,
  } = dataItem;
  return (
    <li>
      <img src={imgURL} alt={name} />
      <div className='flex justify-between'>
        <h3>{title}</h3>
        <p className='flex gap-0.5  items-center'>
          <svg className='fill-brand stroke-brand' width='16' height='16'>
            <use href={`${sprite}#icon-star`}></use>
          </svg>
          {popularity}
        </p>
      </div>
      <div className='flex items-center justify-center'>
        <p className='flex flex-col items-center justify-center'>
          Name
          <span>{name}</span>
        </p>
        <p className='flex flex-col items-center justify-center'>
          Birthday
          <span>{birthday}</span>
        </p>
        <p className='flex flex-col items-center justify-center'>
          Sex
          <span>{sex}</span>
        </p>
        <p className='flex flex-col items-center justify-center'>
          Species
          <span>{species}</span>
        </p>
        <p className='flex flex-col items-center justify-center'>
          Category
          <span>{category}</span>
        </p>
      </div>
      <p>{comment}</p>
      <p>${price}</p>
      <div>
        <button type='button'>Learn more</button>
        <button type='button'>
          <svg className='fill-transparent stroke-brand' width='18' height='18'>
            <use href={`${sprite}#icon-heart`}></use>
          </svg>
        </button>
      </div>
    </li>
  );
};
export default NoticesItem;
