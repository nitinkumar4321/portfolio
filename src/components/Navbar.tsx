import { useState } from 'react'
import { Link } from 'react-scroll'
import { menuItems } from '../data'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed w-full z-50 bg-black/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">  
          {/* Updated Logo Design */}
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="flex-shrink-0 cursor-pointer group"
          >
            <div className="relative flex items-center">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-200" />
              <div className="relative flex items-center bg-black/50 rounded-lg px-2 py-1">
                <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-blue-300 bg-clip-text text-transparent">
                  N
                </span>
                <span className="ml-1 text-md text-gray-400 inline-block">
                  K
                </span>
              </div>
            </div>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {menuItems.map((item) => (
                <Link
                  key={item.link}
                  to={item.link}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer group relative px-3 py-2 text-sm font-medium text-gray-300 hover:text-white"
                >
                  {item.title}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-600 to-blue-400 group-hover:w-full transition-all duration-300 ease-in-out" />
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger Icon */}
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* Close Icon */}
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {menuItems.map((item) => (
            <Link
              key={item.link}
              to={item.link}
              smooth={true}
              duration={500}
              className="cursor-pointer group relative block px-3 py-2 text-base font-medium text-gray-300 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              {item.title}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-600 to-blue-400 group-hover:w-full transition-all duration-300 ease-in-out" />
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar