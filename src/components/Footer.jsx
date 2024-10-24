import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaClock, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const Footer = ({ phone, phoneAleksa, sendEmail, phoneCall, emailAddress }) => {

    const { t } = useTranslation();

    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentYear(new Date().getFullYear());
        }, 1000);

        return () => clearInterval(interval)
    })

    const location = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2944.762130175613!2d19.254419676582646!3d42.43279783050239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134deb3faf3d35d1%3A0x1e188b38f1793b8d!2zNyBDcm5vZ29yc2tpaCBTZXJkYXJhLCBQb2Rnb3JpY2EgODEwMDAsINCm0YDQvdCwINCT0L7RgNCw!5e0!3m2!1ssr!2s!4v1704304779091!5m2!1ssr!2s"

    const locationLink = "https://maps.app.goo.gl/tbKvoxvAJAF4qkdv7"

    return (
        <footer className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-900 text-white">
            <div className="container mx-auto lg:px-20 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 text-center md:text-left">
                    <div className="flex flex-col items-center gap-1">
                        <div className="p-3 flex justify-center items-center border-2 border-dashed border-blue-400 rounded-full mb-4">
                            <FaMapMarkerAlt className="text-blue-400 text-3xl" />
                        </div>
                        <h2 className="text-2xl font-bold mb-4">{t('footer.adresa')}</h2>
                        <p className="text-gray-300">Crnogorskih serdara 7,</p>
                        <p className="text-gray-300">81000 Podgorica</p>
                        <a href={locationLink} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500 hover:underline">
                            {t('footer.pogledaj_na_mapi')}
                        </a>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                        <div className="p-3 flex justify-center items-center border-2 border-dashed border-blue-400 rounded-full mb-4">
                            <FaPhoneAlt className="text-blue-400 text-3xl" />
                        </div>
                        <h2 className="text-2xl font-bold mb-4">{t('footer.kontakt')}</h2>
                        <p className="flex flex-col items-center justify-center">
                            <span>{t('footer.telefon')}</span>
                            <span className="text-sm cursor-pointer underline" onClick={() => phoneCall(phone)}>{phone}</span>
                        </p>
                        <p className="flex flex-col items-center justify-center">
                            <span>{t('footer.mobilni')}</span>
                            <span className="text-sm cursor-pointer underline" onClick={() => phoneCall(phoneAleksa)}>{phoneAleksa}</span>
                        </p>
                        <p className="flex flex-col items-center justify-center">
                            <span>{t('footer.email')}</span>
                            <span className="text-sm cursor-pointer underline" onClick={sendEmail}>{emailAddress}</span>
                        </p>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                        <div className="p-3 flex justify-center items-center border-2 border-dashed border-blue-400 rounded-full mb-4">
                            <FaClock className="text-blue-400 text-3xl" />
                        </div>
                        <h2 className="text-2xl font-bold mb-4">{t('footer.radno_vrijeme')}</h2>
                        <p className="flex flex-col items-center justify-center">
                            <span className="">{t('footer.pon-pet')}</span>
                            <span className="text-sm">07:00 - 15:00h</span>
                        </p>
                        <p className="flex flex-col items-center justify-center">
                            <span className="text-blue-50">{t('footer.sub-ned')}</span>
                            <span className="text-sm">Ne radimo</span>
                        </p>
                    </div>
                </div>
                <div className="md:rounded-lg overflow-hidden shadow-2xl">
                    <iframe
                        src={location}
                        width="100%"
                        height="450"
                        className="border-none"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>
            <div className="text-center pt-0">&copy;{currentYear} IngInspekt - {t('footer.sva_prava')}</div>
        </footer>
    )
}

export default Footer;