import React, { useEffect, useState } from 'react'
import Link from 'next/link';
const Menu = () => {
  const [menuItem,setMenuItem]=useState('');
  const [isMobileMenu,setIsMobileMenu]=useState(false);
  const [left,setLeft]=useState(-150);
  const getBrowserWidth=()=>{
    let timeoutId;
    let flag=true;
    setIsMobileMenu(document.body.offsetWidth < 600 ? true : false);
    window.addEventListener('resize',()=>{
      let width=document.body.offsetWidth;
      if(flag){
        flag=false;
        setIsMobileMenu(width < 600 ? true : false);
      }
      clearTimeout(timeoutId);
      timeoutId=setTimeout(()=>{
        setIsMobileMenu(width < 600 ? true : false); 
      },500)
    }) 
  }
  
  useEffect(()=>{
    let pathname=window.location.pathname;
    setMenuItem(pathname.slice(1) || 'home');
    getBrowserWidth();
    
  },[]);
  const fnMenuClick=(eve)=>{
     setMenuItem(eve.target.id);
     if(isMobileMenu){
       setLeft(-150);
     }
  }
  const fnMobileMenuBtnClick=()=>{
    setLeft(left === 0 ? -150 : 0);
  }
  const fnClose=()=>{
    setLeft(-150);
  }
  return ( 
      <div>
        {isMobileMenu && <button onClick={fnMobileMenuBtnClick} className= 'mobile-menu-btn'>menu</button>}
      <ul style={{left: left}} className= {isMobileMenu ? 'mobile-menu' : 'menu'}> 
      <span onClick={fnClose}className='close-btn'>x</span>
      <li>
        <Link id='home' onClick={fnMenuClick} className={menuItem=='home' && 'active-menu'} href= '/home'>Home</Link>
      </li>
      <li>
        <Link id='about' onClick={fnMenuClick} className={menuItem=='about' && 'active-menu'} href= '/about'>About Us</Link>
      </li>
      <li>
        <Link id='contact' onClick={fnMenuClick} className={menuItem=='contact' && 'active-menu'} href= '/contact'>Contact</Link>
      </li>
    </ul> 
    </div>
  )
}

export default Menu

