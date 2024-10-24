import { useEffect, useState } from "react";
import construction from "../assets/images/construction.jpg";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const HeaderSection = () => {

  const { t } = useTranslation();

  const titles = [
    {
      title: "Home page",
      link: t("paths.kontakt"),
    },
    {
      title: "Welcome",
      link: t("paths.usluge"),
    },
    {
      title: "Hello",
      link: t("paths.o_nama"),
    },
    {
      title: "good evening",
      link: t("paths.usluge"),
    },
  ];

  const [shownIndex, setShownIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      showNext();
    }, 6000);

    return () => clearTimeout(timeout);
  }, [shownIndex]);

  const showNext = () => {
    if (shownIndex !== titles.length - 1) {
      setShownIndex((prev) => prev + 1);
    } else {
      setShownIndex(0);
    }
  };
  const showPrev = () => {
    if (shownIndex !== 0) {
      setShownIndex((prev) => prev - 1);
    } else {
      setShownIndex(titles.length - 1);
    }
  };

  const showIndex = (index) => {
    setShownIndex(index);
  };

  const navigate = useNavigate();

  return (
    <div
      className="h-[70vh] flex items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: `url(${construction})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <MdArrowBackIos
        className="absolute top 1/2 translate-y-1/2 left-6 lg:left-56 text-blue-50 cursor-pointer hover:text-blue-300 duration-300"
        size={38}
        onClick={showPrev}
      />
      <MdArrowForwardIos
        className="absolute top 1/2 translate-y-1/2 right-6 lg:right-56 text-blue-50 cursor-pointer hover:text-blue-300 duration-300"
        size={38}
        onClick={showNext}
      />
      <div
        className="flex flex-col justify-center items-center gap-4"
        key={shownIndex}
      >
        <motion.p
          initial={{ opacity: 0, y: 150, scale: 0.8 }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
              type: "spring",
              stiffness: 300,
              damping: 15,
              duration: 1.2,
            },
          }}
          exit={{ opacity: 0, y: 50, scale: 0.8 }}
          transition={{ duration: 1.2 }}
          className="relative text-white text-2xl md:text-4xl font-bold"
        >
          {titles[shownIndex].title}
        </motion.p>
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 15,
            duration: 0.8,
          }}
          whileHover={{
            y: -5,
            scale: 1.1,
            boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.2)",
            transition: {
              type: "spring",
              stiffness: 400,
              damping: 10,
              duration: 0.3,
            },
          }}
          whileTap={{ scale: 0.9, y: 5 }}
          className="relative px-4 py-2 bg-blue-700 text-blue-50 font-semibold rounded-sm cursor-pointer"
          onClick={() => navigate(titles[shownIndex].link)}
        >
          Show more
        </motion.p>
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 bottom-10">
        <div className="flex gap-3 items-center">
          {titles.map((_, index) => (
            <div
              className={`w-4 h-4 rounded-full ${
                shownIndex === index ? "bg-blue-400" : "bg-gray-400"
              } cursor-pointer`}
              key={index}
              onClick={() => showIndex(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
