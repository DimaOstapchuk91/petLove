import AddPetForm from '../../components/AddPetForm/AddPetForm.jsx';
import PetBlock from '../../components/PetBlock/PetBlock.jsx';

const AddPetPage = () => {
  return (
    <section className='container'>
      <div className='flex flex-col gap-2.5 mt-3 mb-5'>
        <PetBlock isPet={'addDog'} />
        <AddPetForm />
      </div>
    </section>
  );
};
export default AddPetPage;
