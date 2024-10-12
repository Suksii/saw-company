import { BsTelephone } from "react-icons/bs";
import { BsEnvelope } from "react-icons/bs";
import { BsClock } from "react-icons/bs";
import MNE from "../assets/languages/mne.gif";
import UNK from "../assets/languages/unk.gif";
import RUS from "../assets/languages/rus.gif";

const Header = () => {
    const languages = [
        {
            image: MNE,
            alt: 'montenegrian'
        },
        {
            image: UNK,
            alt: 'english'
        },
        {
            image: RUS,
            alt: 'russian'
        }
    ]

    return (
        <div className={`flex justify-between h-fit items-center px-[5vw] bg-blue-900 relative z-50 font-medium`}>
            <div className="hidden lg:flex items-center gap-2">
                <BsTelephone className="text-amber-600" />
                <p className="flex gap-2">
                    <span className="text-blue-50 hover:text-blue-600 underline cursor-pointer">+382 69 231 231</span>{" "}
                    <span className="text-blue-50 text-lg">&</span>{" "}
                    <span className="text-blue-50 hover:text-blue-600 underline cursor-pointer">+382 69 231 231</span>
                </p>
            </div>
            <div className="flex items-center gap-2">
                <BsEnvelope className="text-amber-600" />
                <span className="text-blue-50 hover:text-blue-600 underline">primjer@gmail.com</span>
            </div>
            <div className="hidden lg:flex items-center gap-2">
                <BsClock className="text-amber-600" />
                <span className="text-blue-50">radno vrijeme</span>
            </div>
            <div className="flex items-center">
                {
                    languages.map((lang, index) => {
                        return (
                            <div key={index} className={`p-4  cursor-pointer hover:bg-blue-700 border-blue-50 ${index === 0 && 'border-l'} border-r`}
                            >
                                <img src={lang.image}
                                    alt={lang.alt}
                                    title={lang.alt}
                                    className="w-5 h-3" />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Header;