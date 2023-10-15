import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import Button from "../components/Button"
import CloseIcon from '@mui/icons-material/Close';
import {useState} from "react";


function Navbar(){

    const [open, isOpen]=useState(false);
    

    function handleClick(){
        isOpen(prevOpen=> !prevOpen);
    }

    return(
        <>
        <div className="flex items-center justify-around  mt-10 ">
            <div className="opacity-0 md:opacity-100 hidden md:block">
            <img src="/images/logo.svg"/>
            </div>
            
            <div className=" flex gap-5 cursor-pointer items-center max-md:hidden  "> 
                <ul className="text-zinc-500 flex gap-5">
                    <li className="hover:text-slate-700">HOW WE WORK</li>
                    <li className="hover:text-slate-700">BLOG</li>
                    <li className="hover:text-slate-700">ACCOUNT</li>
                </ul>
            <Button 
            title= "VIEW PLAN"
           
            />
            </div>

            {/* {hamburger-menu} */}

            <div className="flex-col md:hidden absolute">
                <div className="flex items-center gap-64">
                    <img src="/images/logo.svg"></img>
                    {open ?  <CloseIcon  onClick={handleClick} className="cursor-pointer"/> : 
                    <MenuOutlinedIcon onClick={handleClick} className="cursor-pointer"/> }
                </div>

               { open && <div className="text-center text-white bg-zinc-800 p-10 w-96 mt-5 h-[500px] absolute top-18 " style={{
                 backgroundImage:`url("/images/bg-pattern-mobile-nav.svg")`,
                  backgroundRepeat: 'no-repeat',
                 backgroundPosition: 'bottom',}}>

                <ul className="text-white cursor-pointer ">
                    <li className="hover:text-slate-200 mb-8 mt-5">HOW WE WORK</li>
                    <li className="hover:text-slate-200 mb-8 mt-5">BLOG</li>
                    <li className="hover:text-slate-200 mb-8 mt-5">ACCOUNT</li>
                </ul>
                <button className="border-2 border-white py-1 px-4">VIEW PLANS</button>

                </div>}

            </div>
            
            


        </div>
        </>
    )
}

export default Navbar;