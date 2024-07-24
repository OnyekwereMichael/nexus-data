import React from 'react'
import Image from 'next/image'
import nexusLogo from '../../../public/nexus.svg'
import './login.css'
function page() {
  return (
    <section>
         <Image
              src={nexusLogo}
              alt="Profile Picture"
              width={200}
              height={200}
              className='p-2'
              priority
            />
    <div className="min-h-[80vh] flex justify-center items-center ">
    <div className="flex justify-center mx-auto items-center flex-col font-DmSans bg-white px-4 py-12 text-black w-[35%]  rounded-xl">
        <h1 className="font-bold text-2xl">Login</h1>
        
        <section>
            <div className="flex flex-col my-2">
                <label htmlFor="username" className="text-sm my-1 font-semibold text-[#333333]">Username</label>
                <input type="text" id="username" placeholder="Username" required className="p-[10px] border-[1px] border-solid border-black w-[400px] rounded-xl text-sm outline-none"/>
            </div>
            <div className="flex flex-col my-4">
                <label htmlFor="password" className="text-sm my-1 font-semibold text-[#333333]">Password</label>
                <input type="password" id="password" placeholder="Password" required className="p-[10px] border-[1px] border-solid border-black w-[400px] rounded-xl text-sm outline-none"/>
            </div>

            <div className="flex justify-between p-2 my-4">
                <div className="flex gap-2">
                    <input type="checkbox" id="remember" className='accent-black'/>
                    <label htmlFor="remember" className="text-[#333333] text-sm">Remember me</label>
                </div>

                <div className="flex gap-2">
                    <p className="text-[#333333] text-sm">Forgot password? <span><a href="#" className="text-[#006BCC]">Reset</a></span></p>
                </div>
            </div>

            <button className="text-white bg-[#006BCC] w-full p-2 rounded-xl">Log in</button>
        </section>
    </div>
</div>
</section>

  )
}

export default page
