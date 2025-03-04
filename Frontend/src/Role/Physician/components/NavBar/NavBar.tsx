const NavBar = () => {
  return (
    <div className="navBar flex justify-between items-center p-[3rem] gap-30">
        <div className="logoDiv">
            <h1 className ="logo text-[8px]">
                <strong className="text-blue-600">Medi</strong>Connect
            </h1>
        </div>

        <div className="menu flex gap-10" >
            <li className="menuList text-[#6f6f6f] hover:text-blue-600 ">Dashboard</li> 
            <li className="menuList text-[#6f6f6f] hover:text-blue-600 " >Your Profile</li> 
            <li className="menuList text-[#6f6f6f] hover:text-blue-600 " >Update CV</li> 
            <li className="menuList text-[#6f6f6f] hover:text-blue-600 " >Job & Internships</li> 
            <li className="menuList text-[#6f6f6f] hover:text-blue-600 " >Higher Education</li> 
            <li className="menuList text-[#6f6f6f] hover:text-blue-600 " >Messeges</li> 
            <li className="menuList text-[#6f6f6f] hover:text-blue-600 " >Interveiw Invitations</li> 
            
        </div>
            
            
        </div>
  )
}

export default NavBar