import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-black text-grey-200 flex justify-between items-center p-4 h-20 text-sm md:text-[15px] font-medium text-nowrap">
        <label>Logo</label>

        <ul className='hidden'>
            <li>Home</li>
            <li>Tv Shows</li>
            <li>Movies</li>
            <li>Anime</li>
            <li>Games</li>
            <li>New & Popular</li>
            <li>Upcoming</li>
        </ul>

        <div>
            <div>
                <input type="text" placeholder='Search...'/>
                searchicom
            </div>
            <buttom>Get AI Movie Recommendations</buttom>
            <buttom>Sign In</buttom>
        </div>
    </nav>
  )
}

export default Navbar