import { motion } from 'framer-motion';
import Nav from '../Nav/Nav.jsx';
import AuthNav from '../AuthNav/AuthNav.jsx';
import sprite from '../../assets/sprite.svg';
import LogOutBtn from '../LogOutBtn/LogOutBtn.jsx';

const MobileMenu = ({ isOpen, onClose, isLogin }) => {
  return (
    <>
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: isOpen ? '0%' : '100%' }}
        transition={{ type: 'tween', duration: 0.3 }}
        className='fixed top-0 right-0 h-full w-[50%] bg-brand shadow-lg flex flex-col justify-between items-center pt-[236px] px-5 pb-10 z-40
        transform transition-transform xl:hidden'
      >
        <button
          type='button'
          onClick={onClose}
          className=' absolute top-7 right-5'
        >
          <svg
            width='32'
            height='32'
            className='fill-transparent stroke-text-white'
          >
            <use href={`${sprite}#icon-cross-small`}></use>
          </svg>
        </button>

        <Nav />
        {isLogin ? (
          <LogOutBtn
            className={
              'p-3 block text-center text-sm rounded-[30px] bg-brand-light text-brand w-full md:w-auto md:px-12'
            }
          />
        ) : (
          <AuthNav />
        )}
      </motion.div>

      {/* Затемнення фону при відкритті */}
      {isOpen && (
        <div
          className='fixed top-0 left-0 w-full h-full bg-inputs  z-30 xl:hidden'
          onClick={onClose}
        ></div>
      )}
    </>
  );
};

export default MobileMenu;
