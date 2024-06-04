'use client'
import { useState } from 'react';
import Link from 'next/link'
import { BiMenu } from "react-icons/bi"
import { CgClose } from "react-icons/cg"

export const Sidebar = () => {
    const [toggle, setToggle] = useState(false);
    const links = [
        {title: 'Home', link: '#home', id: 0},
        {title: 'Skills', link: '#skills', id: 1},
        {title: 'Experience', link: '#exp', id: 1},
        {title: 'Projects', link: '#projects', id: 2},
        {title: 'Contact', link: '#contact', id: 3}
      ]

    return (
        <aside className='fixed left-0 z-10 text-color-5'>
            <nav>
                <div className='border shadow-xl h-screen px-6 min-[1170px]:flex hidden flex-col justify-center rounded-lg'>

                    <ul className='flex flex-col gap-7 '>
                        <li>
                            <Link href="#home" className='hover:text-blue-500'>
                                <i className='icon-home flex justify-center text-2xl'/>
                            </Link>
                        </li>
                        <li>
                            <Link href="#skills" className='hover:text-blue-500'>
                                <i className='icon-wrench flex justify-center text-2xl'/>
                            </Link>
                        </li>
                        <li>
                            <Link href="#exp" className='hover:text-blue-500'>
                                <i className='icon-graduation flex justify-center text-2xl'/>
                            </Link>
                        </li>
                        <li>
                            <Link href="#projects" className='hover:text-blue-500'>
                                <i className='icon-docs flex justify-center text-2xl'/>
                            </Link>
                        </li>
                        <li>
                            <Link href="#contact" className='hover:text-blue-500'>
                                <i className='icon-bubble flex justify-center text-2xl'/> 
                            </Link>
                        </li>
                    </ul>
                    <div className='fixed bottom-5 left-2'>&copy;2024</div>
                </div>

                <div className="min-[1170px]:hidden p-5 flex flex-1 items-center">
                    <div className="cursor-pointer fixed top-3 z-20" onClick={() => setToggle(!toggle)}>
                        {toggle? <CgClose size={30} color="black" />: <BiMenu size={30} color="black"/>}
                    </div>

                    <div className={`${!toggle? 'hidden': 'flex'} cursor-pointer flex-col justify-start bg-color-bg shadow-md text-color-5 fixed top-10 left-0 mx-3 mt-4 gap-4 py-1 px-4 z-20 rounded-xl bg-opacity-70`}>
                    {links.map((link) => (
                        <Link key={link.id} href={link.link} className="p-2 hover:text-blue-500 rounded-md" onClick={() => setToggle(!toggle)}>{link.title}</Link>
                    ))}
                    </div>
                </div>
                
            </nav>      
        </aside>
  )
}
