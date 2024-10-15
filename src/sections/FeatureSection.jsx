import { Link } from "react-router-dom";
import i18n from "../i18n";
import { useTranslation } from "react-i18next";

const FeatureSection = () => {

    const { t } = useTranslation();

    const cards = [
        {
            title: 'Naše usluge',
            description: 'We provide inspection services for all types of industrial equipment and machinery.',
            link: t('paths.kontakt')
        },
        {
            title: 'Ispitivanja i pregledi',
            description: 'We provide inspection services for all types of industrial equipment and machinery.',
            link: t('paths.usluge')
        },
        {
            title: 'Obuka i dokumentacija',
            description: 'We provide inspection services for all types of industrial equipment and machinery.',
            link: t('paths.o_nama')
        }
    ]

    return (
        <div className="flex flex-wrap justify-center gap-10 py-10">
            {cards.map((card, index) => (
                <div className="h-80 w-[95%] md:w-80 relative overflow-hidden duration-700 group rounded-lg shadow-lg" key={index}>
                    <div className="bg-gradient-to-b from-blue-800 to-blue-500 w-full h-full absolute top-0 transition-transform transform translate-y-0 group-hover:-translate-y-full duration-700 ease-in-out p-4 text-white rounded-lg">
                        <h2 className="text-center font-bold text-2xl mb-4">{card.title}</h2>
                        <p className="text-center text-md">{card.description}</p>
                    </div>
                    <div className="bg-gradient-to-t from-blue-400 via-blue-100 to-blue-400 w-full h-full absolute bottom-0 transition-transform transform translate-y-full group-hover:translate-y-0 duration-700 ease-in-out p-4 flex items-center justify-center rounded-lg">
                        <Link to={card.link} className="bg-blue-600 px-4 py-2 text-blue-50 font-semibold text-lg rounded-sm">Pročitaj više</Link>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default FeatureSection;