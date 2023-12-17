
import { Link, NavLink } from "react-router-dom";


const Navbar = () => {


  const navLinks = <>

    <NavLink className="focus:bg-[#4287f5] px-3 py-1 text-lg  rounded-md text-black lg:text-white  btn-outline mr-2 duration-300 " to='/'>Home</NavLink>
    <NavLink className="focus:bg-[#4287f5] px-3 py-1 text-lg  rounded-md text-black lg:text-white  btn-outline mr-2 duration-300 " to='/courses'>Courses</NavLink>
    <NavLink className="focus:bg-[#4287f5] px-3 py-1 text-lg  rounded-md text-black lg:text-white  btn-outline mr-2 duration-300 " to='/gallery'>Enrollment</NavLink>
    <NavLink className="focus:bg-[#4287f5] px-3 py-1 text-lg  rounded-md text-black lg:text-white  btn-outline mr-2 duration-300 " to='/gallery'>Payment</NavLink>
    <NavLink className="focus:bg-[#4287f5] px-3 py-1 text-lg  rounded-md text-black lg:text-white  btn-outline mr-2 duration-300 " to='/signUp'>Sign Up</NavLink>


  </>
  return (
    <div className="navbar  bg-[#15151580]  max-w-screen-2xl fixed z-10 bg-lime-600 px-2 lg:px-10 ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navLinks}
          </ul>
        </div>
        <Link to="/"><img className="h-10 lg:h-14 rounded-full" src="https://i.ibb.co/tZHvSkd/ETlogo.png" alt="" /></Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLinks}
        </ul>
      </div>

      <div className="gap-3">


      </div>
      <div className="navbar-end gap-3">


        <input className="bg-slate-100 p-2 rounded-md w-20 lg:w-48 h-8 lg:h-10" placeholder="Search" type="search" name="" id="" />
        <NavLink className="focus:bg-[#4287f5] px-0 lg:px-3 py-1 text-lg  rounded-md text-white  btn-outline mr-2 duration-300 " to='/signIn'>Sign In</NavLink>

      </div>
    </div>
  );
};

export default Navbar;

