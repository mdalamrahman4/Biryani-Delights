import React,{useContext,useEffect,useState} from 'react'
import { CartContext } from '@/utils/ContextReducer'
import Image from 'next/image'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { set } from 'mongoose'
const Navbar = () => {
  const [mounted,setMounted]=useState(false);
  const {state} = useContext(CartContext);
  const {theme,setTheme}=useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);
  if(!mounted) return null;
  return (
    <header className="text-white-100 lg:sticky lg:top-0 lg:z-50 bg-gradient-to-r from-indigo-700 via-violet-700 to-orange-700 body-font">
      <div className="container mx-auto flex flex-wrap  p-3 flex-col md:flex-row items-center">
        <Link href={"/"} className="px-8 md:px-4 flex title-font font-extrabold items-center  uppercase text-gray-100">
          <Image alt="pizzeria" src="/img1.png" width={90} height={70} />
          <p className="leading-5 text-xl mx-2 ">Biryani Delights</p>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <Link href={"/cart"}
            className="text-white mr-5 md:text-lg sm:text-lg cursor-pointer hover:text-gray-200 flex items-center">
          Cart 
          <svg className="invert" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
            <path d="M8 16L16.7201 15.2733C19.4486 15.046 20.0611 14.45 20.3635 11.7289L21 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M6 6H8.5M22 6H18.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M11 8.5C11.4915 9.0057 12.7998 11 13.5 11M16 8.5C15.5085 9.0057 14.2002 11 13.5 11M13.5 11V3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="6" cy="20" r="2" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="17" cy="20" r="2" stroke="currentColor" strokeWidth="1.5" />
            <path d="M8 20L15 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M2 2H2.966C3.91068 2 4.73414 2.62459 4.96326 3.51493L7.93852 15.0765C8.08887 15.6608 7.9602 16.2797 7.58824 16.7616L6.63213 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <span className="inline-flex items-center bg-red-50 py-1 px-2 rounded-full text-xs font-medium text-red-600 ring-1 shadow-[0_0_15px_1px_rgba(220,38,38)]  ring-inset ring-red-600/10">
            {state.length}
          </span>
          </Link>
        </nav>
        {localStorage.getItem("token")?
        <>
            {localStorage.getItem("isAdmin") === "true" ? (
                <Link
                  href={"/admin"}
                  className="text-white mr-5 cursor-pointer hover:text-gray-200 flex items-center"
                >
                  Admin
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z"
                    />
                  </svg>
                </Link>
              ) : null}
            <nav className="text-white mr-5 cursor-pointer hover:text-gray-200 flex items-center">
            <Link href={"/orders"}
              className="text-white mr-5 cursor-pointer hover:text-gray-200 flex items-center">
                My Orders 
            <svg class="invert" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
      <path d="M11.5 8H20.196C20.8208 8 21.1332 8 21.3619 8.10084C22.3736 8.5469 21.9213 9.67075 21.7511 10.4784C21.7187 10.6318 21.6188 10.7251 21.5 10.8013M7.5 8H3.80397C3.17922 8 2.86684 8 2.63812 8.10084C1.6264 8.5469 2.07874 9.67075 2.24894 10.4784C2.27952 10.6235 2.37896 10.747 2.51841 10.8132C3.09673 11.0876 3.50177 11.6081 3.60807 12.2134L4.20066 15.5878C4.46138 17.0725 4.55052 19.1942 5.8516 20.2402C6.8062 21 8.18162 21 10.9325 21H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M17.4992 13C16.2328 13 15.4117 13.8076 14.4405 14.102C14.0456 14.2217 13.8482 14.2815 13.7683 14.3659C13.6884 14.4502 13.665 14.5735 13.6182 14.8201C13.1174 17.4584 14.212 19.8976 16.8222 20.847C17.1027 20.949 17.2429 21 17.5006 21C17.7583 21 17.8986 20.949 18.179 20.847C20.7891 19.8976 21.8826 17.4584 21.3817 14.8201C21.3349 14.5735 21.3114 14.4502 21.2315 14.3658C21.1516 14.2814 20.9542 14.2216 20.5593 14.102C19.5878 13.8077 18.7657 13 17.4992 13Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6.5 11L10 3M15 3L17.5 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
            </Link>
          </nav>
          <nav className="text-white mr-5 cursor-pointer hover:text-gray-200 flex items-center">
          <Link href={"/login"}
          onClick={()=>{
            localStorage.removeItem("token");
            localStorage.removeItem("userEmail");
            localStorage.removeItem("isAdmin");
          
          }}
            className="text-white mr-5 cursor-pointer hover:text-gray-200 flex items-center">
              Log Out
           <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mx-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                  />
                </svg>
          </Link>
          </nav>
          </>
        :
        <>
        <nav className="text-white mr-5 cursor-pointer hover:text-gray-200 flex items-center">
          <Link href={"/login"}
            className="text-white mr-5 cursor-pointer hover:text-gray-200 flex items-center">
              Login
          <svg className="invert" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
    <path d="M8 12H16M8 12C8 11.2998 9.9943 9.99153 10.5 9.5M8 12C8 12.7002 9.9943 14.0085 10.5 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" strokeWidth="1.5" />
</svg>
          </Link>
        </nav>
        <nav className="text-white mr-5 cursor-pointer hover:text-gray-200 flex items-center">
          <Link href={"/signup"}
            className="text-white mr-5 cursor-pointer hover:text-gray-200 flex items-center">
            Sign Up
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffffff" fill="none">
    <path d="M2 5L8.91302 8.92462C11.4387 10.3585 12.5613 10.3585 15.087 8.92462L22 5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M21.996 10.5024C21.9933 10.1357 21.9894 9.77017 21.9842 9.5265C21.9189 6.46005 21.8862 4.92682 20.7551 3.79105C19.6239 2.65528 18.0497 2.61571 14.9012 2.53658C12.9607 2.48781 11.0393 2.48781 9.09882 2.53657C5.95033 2.6157 4.37608 2.65526 3.24495 3.79103C2.11382 4.92681 2.08114 6.46003 2.01576 9.52648C1.99474 10.5125 1.99475 11.4926 2.01577 12.4786C2.08114 15.5451 2.11383 17.0783 3.24496 18.2141C4.37608 19.3498 5.95033 19.3894 9.09883 19.4685C9.7068 19.4838 10.4957 19.4943 11 19.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M15.586 18.6482C14.9572 19.0167 13.3086 19.7693 14.3127 20.711C14.8032 21.171 15.3495 21.5 16.0364 21.5H19.9556C20.6424 21.5 21.1887 21.171 21.6792 20.711C22.6834 19.7693 21.0347 19.0167 20.4059 18.6482C18.9314 17.7839 17.0605 17.7839 15.586 18.6482Z" stroke="currentColor" strokeWidth="1.5" />
    <path d="M19.996 14C19.996 15.1046 19.1005 16 17.996 16C16.8914 16 15.996 15.1046 15.996 14C15.996 12.8954 16.8914 12 17.996 12C19.1005 12 19.996 12.8954 19.996 14Z" stroke="currentColor" strokeWidth="1.5" />
</svg>
          </Link>
        </nav>
        </>
}
        <div className="px-12 flex items-center md:px-0">
        <button onClick={()=>setTheme(theme==="dark"?"light":"dark")} className="text-white  bg-black rounded-full p-1  dark:text-black dark:bg-white flex items-center">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
            />
          </svg>{" "}
          /
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            class="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
            />
          </svg>
        </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
