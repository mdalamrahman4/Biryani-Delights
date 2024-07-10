import React,{useState} from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Head from 'next/head'
const Signup = () => {
  const router=useRouter();
  const [credentials,setCredentials]=useState({name:"",email:"",password:"",geolocation:""})
  const handleSubmit=async(e)=>{
    e.preventDefault();
    const response=await fetch("/api/userSignUp",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        name:credentials.name,
        email:credentials.email,
        password:credentials.password,
        location:credentials.geolocation
      }),
    });
    const res=await response.json();
    if(res.success){
      localStorage.setItem("token",credentials.authToken);
      localStorage.setItem("userEmail",credentials.email);
      localStorage.setItem("isAdmin",false);
      router.push("/");
    }
    else{
      alert(res.error);
    }
  }
  const handlechange=(e)=>{
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <>
    <Head>
      <title>Sign Up</title>
      <link rel="icon" href="/favicon.ico" sizes="any" />
    </Head>
    <div style={{
      height: "75vh", backgroundImage:
        'url("https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
      backgroundSize: "cover",
    }} className="flex justify-center items-center">
      <div className="container w-full max-w-md">
        <form onSubmit={handleSubmit} className="bg-gray-100 dark:bg-gray-900 dark:text-gray-100 border-gradient rounded-lg shadow-2xl px-8 pt-6 pb-8 mb-">
        <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
              Name
            </label>
            <input placeholder="Enter your Name" onChange={handlechange} required name="name" type="text" className="shadow appearance-none border
             border-gray-300 rounded w-full py-2 px-3 focus:border-indigo-700 text-gray-700 dark:text-gray-100  
             leading-tight focus:outline-none focus:shadow-outline" value={credentials.name} />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700  dark:text-gray-300 text-sm font-bold mb-2">
              Email
            </label>
            <input placeholder="Enter your email" onChange={handlechange} required name="email" type="email" className="shadow appearance-none border
             border-gray-300 rounded w-full py-2 px-3 focus:border-indigo-700 text-gray-700 dark:text-gray-100  
             leading-tight focus:outline-none focus:shadow-outline" value={credentials.email} />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700  dark:text-gray-300 text-sm font-bold mb-2">
              Password
            </label>
            <input placeholder="*********" onChange={handlechange} required name="password" type="password" className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3
             focus:border-indigo-700 text-gray-700 dark:text-gray-100  leading-tight focus:outline-none focus:shadow-outline" value={credentials.password} />
          </div>
          <div className="mb-4">
            <label htmlFor="geolocation" className="block text-gray-700  dark:text-gray-300 text-sm font-bold mb-2">
              Address
            </label>
            <input placeholder="Enter your Address" onChange={handlechange} required name="geolocation" type="text" className="shadow appearance-none border
             border-gray-300 rounded w-full py-2 px-3 focus:border-indigo-700 text-gray-700 dark:text-gray-100  
             leading-tight focus:outline-none focus:shadow-outline" value={credentials.geolocation} />
          </div>
          <div className="flex items-center justify-between"></div>
          <button type="submit" className="border text-gray-900 dark:text-gray-100 font-bold dark:border-gray-400 border-gray-900 rounded mr-2 p-2 hover:bg-gradient-to-r from-indigo-700 via-violet-700 to-orange-700  hover:text-gray-100">
            Sign Up
          </button>
          <Link href="/login" style={{all:"unset"}}>
          <button className="border text-gray-900 dark:text-gray-100 font-bold dark:border-gray-400 border-gray-900 rounded mr-2 p-2 hover:bg-gradient-to-r from-indigo-700 via-violet-700 to-orange-700  hover:text-gray-100">
            Already a User?
          </button>
          </Link>
        </form>
      </div>
    </div>
    </>
  )
}

export default Signup
