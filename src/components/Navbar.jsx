import { useState } from 'react';
import { Link } from "react-router-dom";
import HamburgerMenu from './HamburgerMenu';

const Navbar = () => {

    const [toggle, setToggle] = useState(false);
    const [sticky, setSticky] = useState(false);

    const navItems = [
        { name: 'Home', link: '/' },
        { name: 'About us', link: '/about' },
        { name: 'Services', link: '/services' },
        { name: 'Contact', link: '/contact' },
    ];

    window.addEventListener('scroll', () => {
        if (window.scrollY > 64) {
            setSticky(true)
        } else {
            setSticky(false)
        }
    })

    const scrollOnTop = (behavior) => {
        window.scrollTo({
            top: 0,
            behavior: behavior
        });
    }

    const handleClick = () => {
        setToggle(!toggle)
    }

    return (
        <>
            <nav className={`hidden md:flex justify-evenly items-center py-4 shadow_box z-50 ${sticky ? 'sticky top-0 bg-white' : 'bg-transparent'} transition-colors duration-500`}>
                {navItems.map((item, index) => {
                    return (
                        <div key={index}
                            onClick={() => scrollOnTop("instant")}
                            className={`text-xl font-semibold text-blue-900 hover:text-blue-50 duration-500 px-3 py-2 hover:bg-blue-400`}>
                            {item.name}
                        </div>
                    );
                })
                }
            </nav>
            <nav className="flex justify-end md:hidden items-center bg-blue-400 px-2 py-4">
                <div className="z-50">
                    <HamburgerMenu handleClick={handleClick} isOpen={toggle} />
                </div>
            </nav>
            <div className="relative">
                <div className={`absolute flex flex-col bg-blue-400 text-center left-0 right-0 ${toggle ? 'translate-y-0 opacity-100' : '-translate-y-[100vh] opacity-0'} duration-1000 z-50`}>
                    {navItems.map((item, index) => {
                        return (
                            <div key={index}
                                className="text-xl text-white py-8 hover:bg-blue-100 hover:text-blue-900 w-full flex-grow flex justify-center items-center duration-500"
                                onClick={() => {
                                    setToggle(false);
                                    scrollOnTop("instant");
                                }}
                            >
                                {item.name}
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default Navbar;