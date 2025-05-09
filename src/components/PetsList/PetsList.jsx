import PetsItem from '../PetsItem/PetsItem.jsx';

const PetsList = ({ pets }) => {
  return (
    <ul className='flex flex-col gap-3.5 md:flex-row md:flex-wrap md:gap-3.5 xl:w-[440px]'>
      {pets?.map(pet => (
        <PetsItem key={pet._id} pet={pet} />
      ))}
    </ul>
  );
};
export default PetsList;
