import React, { useEffect, useState } from 'react'
import Link from 'next/link';
const Menu = () => {
  const [menuItem,setMenuItem]=useState('home');
  useEffect(()=>{
    let pathname=window.location.pathname;
    setMenuItem(pathname.slice(1) || 'home');
  },[]);
  const fnMenuClick=(eve)=>{
     setMenuItem(eve.target.id);
  }
  return ( 
      <ul className="menu"> 
      <li>
        <Link id="home" onClick={fnMenuClick} className={menuItem=='home' && 'active-menu'} href="/home">Home</Link>
      </li>
      <li>
        <Link id="about" onClick={fnMenuClick} className={menuItem=='about' && 'active-menu'} href="/about">About Us</Link>
      </li>
      <li>
        <Link id="contact" onClick={fnMenuClick} className={menuItem=='contact' && 'active-menu'} href="/contact">Contact</Link>
      </li>
    </ul> 
  )
}

export default Menu

