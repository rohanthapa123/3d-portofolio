import axios from 'axios'
import React, { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { close, logo, menu } from "../../assets"
import { loggedInNoteNavLinks, notLoggedInNoteNavLinks } from '../../constants'
import { styles } from '../../style'
import { useMutation } from 'react-query'
import { toast } from 'react-toastify'
const Navbar = ({ setSearchText, loggedIn, setLoggedIn }) => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  const navigate = useNavigate();

  const mutate = useMutation({
    mutationKey: "logout",
    mutationFn: async () => {
      await axios.post("http://localhost:8080/api/logout", {}, { withCredentials: true });
    },
    onSuccess: () => {
      navigate("/notes");
      setLoggedIn(false);
      toast.success("Logout Success");
    },
    onError: () => {
      setLoggedIn(false);
    }
  })

  const handleLogout = async () => {
    mutate.mutate();
  }

  return (
    <nav className={`${styles.paddingX} w-full flex item-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className='w-full flex justify-between item-center max-w-7xl mx-auto'>
        <Link to={"/notes"} className='flex items-center gap-2' onClick={() => {
          setActive("");
          window.scrollTo(0, 0)
        }}>
          <img src={logo} alt="logo" className='w-9 h-9 object-contain ' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex'>Rohan &nbsp;
            <span className='sm:block hidden'>| Thapa</span></p>

        </Link>
        <input onChange={(e) => setSearchText(e.target.value)} type="search" name="search" className='bg-slate-300 rounded-lg w-[300px] px-4 py-2 text-black hidden md:block  ' placeholder='Type to search' id="" />
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {
            loggedIn ? loggedInNoteNavLinks.map((link) => (
              <li key={link.id} className={`${active === link.title ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`} onClick={() => {
                setActive(link.title)
                link.method && handleLogout()
              }}>
                {link.method ? link.title : <NavLink to={`/notes/${link.id}`}>{link.title}</NavLink>}
              </li>
            ))
              : notLoggedInNoteNavLinks.map((link) => (
                <li key={link.id} className={`${active === link.title ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`} onClick={() => {
                  setActive(link.title)
                }
                }>
                  <NavLink to={`/notes/${link.id}`}>{link.title}</NavLink>

                </li>
              ))

          }
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={toggle ? close : menu} alt='menu' className='w-[28px] h-[28px] object-contain cursor-pointer' onClick={() => setToggle(!toggle)} />
        </div>
        <div className={`${!toggle ? 'hidden' : "flex"} p-5 black-gradient absolute top-20 right-9 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
          <ul className='list-none flex justify-end items-start flex-col gap-4'>
            {loggedIn ? loggedInNoteNavLinks.map((link) => (
              <li key={link.id} className={`${active === link.title ? "text-white" : "text-secondary"} font-poppins font-medium cursor-pointer text-[16px]`} onClick={() => {
                setToggle(!toggle)
                setActive(link.title)
                link.method && handleLogout()
              }
              }>

                {link.method ? link.title : <NavLink to={`/notes/${link.id}`}>{link.title}</NavLink>}
              </li>
            )) : notLoggedInNoteNavLinks.map((link) => (
              <li key={link.id} className={`${active === link.title ? "text-white" : "text-secondary"} font-poppins font-medium cursor-pointer text-[16px]`} onClick={() => {
                setToggle(!toggle)
                setActive(link.title)
              }
              }>

                <NavLink to={`/notes/${link.id}`}>{link.title}</NavLink>
              </li>
            ))}

          </ul>

        </div>
      </div>
    </nav>
  )
}

export default Navbar