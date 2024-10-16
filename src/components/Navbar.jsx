import { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import HamburgerMenu from './HamburgerMenu';
import { useTranslation } from 'react-i18next';
import logo from '../assets/images/logo1.png';
import { useLocation } from 'react-router-dom';
import i18n from '../i18n';

const Navbar = () => {

    const [toggle, setToggle] = useState(false);
    const [sticky, setSticky] = useState(false);
    const { t } = useTranslation();
    const path = useLocation().pathname;
    const decodedPath = decodeURIComponent(path);


    const navItems = [
        { name: t('navmenu.pocetna'), link: `/${i18n.language}` },
        { name: t('navmenu.o_nama'), link: `/${i18n.language}/${t('paths.o_nama')}` },
        { name: t('navmenu.usluge'), link: `/${i18n.language}/${t('paths.usluge')}` },
        { name: t('navmenu.kontakt'), link: `/${i18n.language}/${t('paths.kontakt')}` },
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
            <nav className={`hidden fixed w-full md:flex items-center z-40 ${sticky ? ' bg-blue-400 bg-opacity-80' : 'bg-transparent'} transition-all duration-500`}>
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
                                    className={`text-xl font-semibold text-blue-50 duration-500 px-3 py-2 hover:bg-blue-600 ${decodedPath === item.link ? 'bg-blue-600' : ''}`}>
                                    {item.name}
                                </Link>
                            );
                        })
                        }
                    </div>
                </div>
            </nav>
            <nav className="relative block md:hidden">
                <div className="absolute left-0 top-0 px-4 z-40">
                    <img src={logo} alt="IngInspekt" className="h-24 w-24" />
                </div>
                <div className="z-50 absolute right-0 top-0 p-4">
                    <HamburgerMenu handleClick={handleClick} isOpen={toggle} />
                </div>
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
            </nav>
        </>
    );
};

export default Navbar;