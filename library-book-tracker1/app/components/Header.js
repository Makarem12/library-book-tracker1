import Image from "next/image";
import { useContext } from "react";
import { ThemeContext } from "../context/theme";
function Header(){
  const {isDarktheme, toggleThemeHandler} = useContext(ThemeContext)
    return(
        <nav class="flex items-center justify-between flex-wrap bg-amber-800 p-6 dark:bg-black">
  <div class="flex items-center flex-shrink-0 text-white mr-6">
<Image
src="/assets/download.png"
width={90}
height={50}
alt="book logo"
/>
<span className="font-bold text-xl text-white"> Books Library</span>
  </div>
  <div class="block lg:hidden">
    <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
      <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div class="text-sm lg:flex-grow">
      <a href="/" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        Home
      </a>
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        Books
      </a>
      <a href="/about" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
        About
      </a>
    </div>
    <div>
      <button onClick={toggleThemeHandler} href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Toggle theme</button>
    </div>
  </div>
</nav>
    )
}
export default Header;