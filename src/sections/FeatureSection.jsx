import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const FeatureSection = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const cards = [
    {
      title: "Obuka zaposlenih",
      description:
        "We provide inspection services for all types of industrial equipment and machinery.",
      link: t("paths.kontakt"),
    },
    {
      title: "Ispitivanja i pregledi",
      description:
        "We provide inspection services for all types of industrial equipment and machinery.",
      link: t("paths.usluge"),
    },
    {
      title: "Izrada dokumentacije",
      description:
        "We provide inspection services for all types of industrial equipment and machinery.",
      link: t("paths.o_nama"),
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-10 py-10">
      {cards.map((card, index) => (
        <div
          className="h-80 w-[95%] md:w-80 relative overflow-hidden duration-700 group rounded-lg shadow-lg"
          key={index}
        >
          <div className="bg-gradient-to-b from-blue-800 to-blue-500 w-full h-full absolute top-0 transition-transform transform translate-y-0 group-hover:-translate-y-full duration-700 ease-in-out p-4 text-white rounded-lg">
            <h2 className="text-center font-bold text-2xl mb-4">
              {card.title}
            </h2>
            <p className="text-center text-md">{card.description}</p>
          </div>
          <div className="bg-gradient-to-t from-blue-400 via-blue-100 to-blue-400 w-full h-full absolute bottom-0 transition-transform transform translate-y-full group-hover:translate-y-0 duration-700 ease-in-out p-4 flex items-center justify-center rounded-lg">
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
              onClick={() => navigate(card.link)}
            >
              Pročitaj više
            </motion.p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureSection;
