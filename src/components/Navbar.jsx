import { useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { logoIzzy, menu, close } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      className={`${styles.paddingX} fixed top-0 z-20 w-full items-center bg-primary py-5`}
    >
      <div className="mx-auto flex w-full max-w-7xl flex-row items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <img src={logoIzzy} alt="logo" className="w-30 h-30 object-contain" />
          <div className="flex-row">
            <p className="cursor-pointer text-[18px] font-bold text-purple-300">
              Israel Andrade
            </p>
            <span className="hidden cursor-pointer text-[16px] text-blue-300 sm:flex">
              3D Experiences
            </span>
          </div>
        </Link>
        <ul className="hidden list-none flex-row items-center gap-10 sm:flex">
          {navLinks.map((link) => {
            return (
              <li
                key={link.id}
                className={`${
                  active === link.title ? 'text-white' : 'text-secondary'
                }
                  `}
                onClick={() => {
                  setActive(link.title);
                }}
              >
                <a
                  href={`#${link.id}`}
                  className="cursor-pointer text-[18px] font-medium hover:text-white"
                >
                  {link.title}
                </a>
              </li>
            );
          })}
        </ul>
        <div className="flex flex-1 items-center justify-end sm:hidden">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="h-[30px] w-[30px] cursor-pointer object-contain"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? 'hidden' : 'flex'
            } black-gradient absolute right-0 top-20 z-10 mx-4 my-2 min-w-[140px] rounded-xl p-6`}
          >
            <ul className="flex list-none flex-col items-start justify-end gap-4">
              {navLinks.map((link, index) => {
                return (
                  <li
                    key={link.id}
                    className={`${
                      active === link.title ? 'text-white' : 'text-secondary'
                    }
                  `}
                    onClick={() => {
                      setActive(link.title);
                      setToggle(!toggle);
                    }}
                  >
                    <a
                      href={`#${link.id}`}
                      className="font-poppins cursor-pointer text-[16px] font-medium hover:text-white"
                    >
                      {link.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
