import React,{useState} from 'react'
import './NavBar.css'
import {FaBars} from 'react-icons/fa'
function NavBar() {
    const [ShowLinks, setShowLinks] = useState(false);
    return (
        <>
           <div className='NavBar'>
               <div className="leftSide">
                   <div className="image-div">
                   <img  src="/images/1.png" alt=""/>
                   </div>
               </div>
               <div className="rightSide">
               <div className={ShowLinks?'hidden':'links'}>
                   <a href='#'>Home</a>
                   <a href="/services">Services</a>
                   <a href="#">AboutUs</a>
                   <a href="#">Contact</a>
                   </div>
                   <FaBars className='bar' size={24} onClick={()=>setShowLinks(!ShowLinks)} />
               </div>
           </div>
        </>
    )
}
{/* <div className="container-fluid nav_bg">
               <div className="row">
                   <div className="col-10 mx-auto">

                   </div>
               </div>
           </div> */}

export default NavBar
