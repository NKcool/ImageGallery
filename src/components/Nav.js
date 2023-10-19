import React, { useContext } from 'react'
import SearchField from './SearchField'
import { ImageContext } from "../App";

export default function Nav() {
    const { isDark,setIsDark } = useContext(ImageContext);

    const darkHandler = ()=>{
        setIsDark(!isDark)
    }

    return (
        <header class="border-b md:flex md:items-center md:justify-between p-4 pb-0 shadow-lg md:pb-4">
            <div class="flex items-center justify-between mb-4 md:mb-0">
                <h1 class="leading-none text-2xl text-grey-darkest">
                    <a class="no-underline text-grey-darkest hover:text-black" href="#">
                        <h2 id='logo'>Image Gallery</h2>
                    </a>
                </h1>
                <a class="text-black hover:text-orange md:hidden" href="#">
                    <i class="fa fa-2x fa-bars"></i>
                </a>
            </div>
            <div className='navSearch'>
                <SearchField />
            </div>
            <nav>
                <ul class="list-reset md:flex md:items-center">
                    <li class="md:ml-4">
                        <a class="block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0" href="#">
                            Explore
                        </a>
                    </li>
                    <li class="md:ml-4">
                        <a class="border-t block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0" href="#">
                            Collections
                        </a>
                    </li>
                    <li class="md:ml-4">
                        <a class="border-t block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0" href="#">
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input onClick={darkHandler} type="checkbox" value="" class="sr-only peer" />
                                <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                <span class="ml-3">Dark Mode</span>
                            </label>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
