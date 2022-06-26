import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import useDarkMode from '../hooks/useDarkMode';
import Logo from '../public/assets/svg/AGLogo.svg';
import { FaSun, FaMoon } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const router = useRouter();

  const matchRoute = (route) => {
    if (router.pathname === route) return true;
  };

  const onToggle = () => {
    setIsOpen((prevState) => !prevState);
    const navMenu = document.getElementById('navMenu');
    const toggleNode = document.querySelector('button.nav-toggler');
    if (isOpen) {
      navMenu.classList.remove('hidden');
      toggleNode.classList.add('is-open');
    } else {
      navMenu.classList.add('hidden');
      toggleNode.classList.remove('is-open');
    }
  };

  return (
    <nav
      className='w-full min-h-[4rem] py-4 px-6 md:px-16 flex flex-wrap items-center justify-between fixed top-0 inset-x-0 z-50 
        bg-slate-800/40 dark:bg-slate-800/20 backdrop-filter backdrop-blur-sm'
    >
      <Link href='/'>
        <a className='flex items-center py-auto'>
          <Logo className='mr-3 h-6 w-6  md:h-8 md:w-8' />
          <span className='self-center text-xl md:text-2xl whitespace-nowrap font-thin text-surface '>AsGoshawk</span>
        </a>
      </Link>

      <div className='w-auto flex items-center flex-nowrap order-2'>
        <ThemeIcon />
        <button
          onClick={onToggle}
          className='nav-toggler relative order-2 h-8 w-8 ml-3 md:hidden rounded-full overflow-hidden'
        >
          <span className='block absolute w-full h-0.5 top-2 bg-primary origin-center duration-700'></span>
          <span className='block absolute w-full h-0.5 top-4 bg-primary origin-center duration-700 scale-x-100'></span>
          <span className='block absolute w-full h-0.5 top-6 bg-primary origin-center duration-700'></span>
        </button>
      </div>

      <div id='navMenu' className='hidden w-full order-3 md:block md:w-auto md:order-1 md:ml-auto'>
        <ul className='flex flex-col mt-4 md:mt-0 md:flex-row md:flex-wrap md: items-center'>
          <li
            className={`w-full text-lg text-center my-2 py-2 md:py-0 md:my-0 md:mx-6 md:w-auto 
                                ${matchRoute('/') ? 'text-primary' : 'text-surface'}
                                border-b-2 border-b-transparent hover:border-b-surface/60 transition-all duration-200 ease-in-out `}
            onClick={onToggle}
          >
            <Link href='/#about'>
              <a className='block w-full'>About</a>
            </Link>
          </li>
          <li
            className={`w-full text-lg text-center my-2 py-2 md:py-0 md:my-0 md:mx-6 md:w-auto 
                                ${matchRoute('/projects') ? 'text-primary' : 'text-surface'}
                                border-b-2 border-b-transparent hover:border-b-surface/60 transition-all duration-200 ease-in-out `}
            onClick={onToggle}
          >
            <Link href='/projects'>
              <a className='block w-full'>Projects</a>
            </Link>
          </li>
          <li
            className={`w-full text-lg text-center my-2 py-2 md:py-0 md:my-0 md:mx-6 md:w-auto 
                                ${matchRoute('/contact') ? 'text-primary' : 'text-surface'}
                                border-b-2 border-b-transparent hover:border-b-surface/60 transition-all duration-200 ease-in-out `}
            onClick={onToggle}
          >
            <Link href='/contact'>
              <a className='block w-full'>Contact</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const ThemeIcon = () => {
  const [darktheme, setDarkTheme] = useDarkMode();
  const handleMode = () => setDarkTheme(!darktheme);

  return (
    <span className='ml-6 mr-3 md:mr-0 hover:cursor-pointer' onClick={handleMode}>
      {darktheme ? (
        <FaSun className='text-2xl md:text-xl text-primary' />
      ) : (
        <FaMoon className='text-2xl md:text-xl text-primary' />
      )}
    </span>
  );
};

export default Navbar;
