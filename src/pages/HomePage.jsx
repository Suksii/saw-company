import { useState } from "react";
import construction from "../assets/images/construction.jpg";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { motion } from "framer-motion"

const HomePage = () => {

    const titles = [
        'Home page',
        'Welcome',
        'Hello, good evening'
    ]

    const [shownIndex, setShownIndex] = useState(0);

    const showNext = () => {
        if (shownIndex !== titles.length - 1) {
            setShownIndex(prev => prev + 1)
        } else {
            setShownIndex(0)
        }
    }
    const showPrev = () => {
        if (shownIndex !== 0) {
            setShownIndex(prev => prev - 1)
        } else {
            setShownIndex(titles.length - 1)
        }
    }

    return (
        <div className="h-[70vh] flex items-center justify-center bg-cover bg-center relative" style={{ backgroundImage: `url(${construction})` }}>
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <MdArrowBackIos className="absolute top 1/2 translate-y-1/2 left-[25%] text-blue-50 cursor-pointer hover:text-blue-300 duration-300" size={38} onClick={showPrev} />
            <MdArrowForwardIos className="absolute top 1/2 translate-y-1/2 right-[25%] text-blue-50 cursor-pointer hover:text-blue-300 duration-300" size={38} onClick={showNext} />
            <motion.p key={shownIndex}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ duration: 1.2 }} className="relative text-white text-4xl font-bold">{titles[shownIndex]}</motion.p>
        </div>
    );
};

export default HomePage;