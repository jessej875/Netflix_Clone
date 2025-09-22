import { Search } from 'lucide-react'
import NetflixLogo from "../assets/netflixlogo.png"

const Navbar = () => {
  return (
    <nav className='bg-black text-gray-200 flex justify-between items-center p-4 h-20 text-sm md:text-[15px] font-medium text-nowrap'>
        {/*styling for different screens*/}
        <img src={NetflixLogo} alt="Logo" className='w-32 cursor-pointer brightness-125'></img> {/*uses the netflix logo from assets*/}
        <ul className='hidden xl:flex space-x-6'> {/*styling for the navigation bar at the top*/}
            <li className='cursor-pointer hover:text-[#e50914]'>Home</li> {/*makes the hover red*/}
            <li className='cursor-pointer hover:text-[#e50914]'>Tv Shows</li>
            <li className='cursor-pointer hover:text-[#e50914]'>Movies</li>
            <li className='cursor-pointer hover:text-[#e50914]'>Anime</li>
            <li className='cursor-pointer hover:text-[#e50914]'>Games</li>
            <li className='cursor-pointer hover:text-[#e50914]'>New & Popular</li>
            <li className='cursor-pointer hover:text-[#e50914]'>Upcoming</li>
        </ul>

        <div className='flex items-center space-x-4 relative'> {/* makes a flexbox so that children will be in a row, cemters them, and adds spacing*/}
            <div className='relative hidden md:inline-flex'>
                <input type="text" className='bg-[#333333] px-4 py-2 rounded-full min-w-72 pr-10 outline-none' placeholder='Search...'/> {/*styling for search bar*/}
                <Search className='absolute top-2 right-4 w-5 h-5'/> {/*search icon from lucide and makes it inside the search bar */}
            </div>
            <button className='bg-[#e50914] px-5 py-2 text-white cursor-pointer'>Movie Recommendations</button> 
            <button className='border border-[#333333] px-4 py-2 cursor-pointer'>Sign In</button>
        </div>
    </nav>
  )
}

export default Navbar