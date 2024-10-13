import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import HamburgerMenu from './HamburgerMenu';
import { useTranslation } from 'react-i18next';
import logo from '../assets/images/logo1.png';
import { useLocation } from 'react-router-dom';

const Navbar = () => {

    const [toggle, setToggle] = useState(false);
    const [sticky, setSticky] = useState(false);
    const [active, setActive] = useState('/');
    const { t } = useTranslation();
    const path = useLocation().pathname;

    useEffect(() => {
        setActive(path)
    }, [path])


    const navItems = [
        { name: t('navmenu.pocetna'), link: '/' },
        { name: t('navmenu.o_nama'), link: '/about' },
        { name: t('navmenu.usluge'), link: '/services' },
        { name: t('navmenu.kontakt'), link: '/contact' },
    ];

    window.addEventListener('scroll', () => {
        if (window.scrollY > 44) {
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
            <nav className={`hidden w-full md:flex items-center z-40 ${sticky ? ' bg-blue-400 bg-opacity-80 sticky top-0' : 'bg-transparent fixed top-[44px]'} transition-all duration-500`}>
                <div className="md:w-[70%] lg:w-[60%] mx-auto flex justify-between items-center">
                    <div className="relative">
                        <img src={logo} alt="IngInspekt" className="h-24 w-24" />
                    </div>
                    <div className="flex items-center gap-0.5">
                        {navItems.map((item, index) => {
                            return (
                                <Link to={item.link}
                                    key={index}
                                    onClick={() => scrollOnTop("instant")}
                                    className={`text-xl font-semibold text-blue-50 duration-500 px-3 py-2 hover:bg-blue-600 ${active === item.link ? 'bg-blue-600' : ''}`}>
                                    {item.name}
                                </Link>
                            );
                        })
                        }
                    </div>
                </div>
            </nav>
            <nav className="flex justify-end md:hidden items-center bg-blue-600 px-2 py-4">
                <div className="z-50">
                    <HamburgerMenu handleClick={handleClick} isOpen={toggle} />
                </div>
            </nav>
            <div className="relative">
                <div className={`absolute flex flex-col bg-blue-600 text-center left-0 right-0 ${toggle ? 'translate-y-0 opacity-100' : '-translate-y-[100vh] opacity-0'} duration-1000 z-40`}>
                    {navItems.map((item, index) => {
                        return (
                            <Link to={item.link}
                                key={index}
                                className="text-xl text-blue-50 py-8 hover:bg-blue-100 hover:text-blue-900 w-full flex-grow flex justify-center items-center duration-500"
                                onClick={() => {
                                    setToggle(false);
                                    scrollOnTop("instant");
                                }}
                            >
                                {item.name}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default Navbar;