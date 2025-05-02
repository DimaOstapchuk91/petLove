import AddPet from '../AddPet/AddPet.jsx';

const PetsBlock = () => {
  return (
    <div className='mb-5'>
      <div className='flex justify-between items-center mb-5'>
        <h2 className='font-bold leading-5'>My Pets</h2>
        <AddPet />
      </div>
      <ul>
        <li>test</li>
      </ul>
    </div>
  );
};
export default PetsBlock;
