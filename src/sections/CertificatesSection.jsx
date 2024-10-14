import ISO9001 from "../assets/images/ISO9001.png";
import ISO14001 from "../assets/images/ISO14001.png";
import ISO45001 from "../assets/images/ISO45001.png";

const CertificatesSection = () => {

    const certificate = [
        {
            id: 1,
            image: ISO9001,
            title: 'MEST EN ISO 9001',
        },
        {
            id: 2,
            image: ISO14001,
            title: 'MEST EN ISO 14001',
        },
        {
            id: 3,
            image: ISO45001,
            title: 'MEST EN ISO 45001'
        }
    ]

    return (
        <div className="flex flex-wrap justify-center items-center gap-6 mb-10">
            {certificate.map((sert, index) => (
                <div
                    key={index}
                    className="flex flex-col border border-gray-300 rounded-lg overflow-hidden shadow-lg w-[18rem] transition-transform duration-300"
                >
                    <p className="text-2xl text-center border-b py-4 border-gray-300 font-semibold text-gray-700">
                        {sert.title}
                    </p>
                    <div className="relative min-h-[300px] overflow-hidden duration-700 group">
                        <div className="w-full h-full top-0 z-30 absolute">
                            <img
                                src={sert.image}
                                alt={sert.title}
                                className="p-8"
                            />
                        </div>
                        <div className="absolute w-full inset-0 bg-blue-800 transform translate-y-full group-hover:translate-y-0 transition-all duration-700 ease-in-out z-0"></div>
                    </div>
                </div>
            ))}
        </div>

    )
}

export default CertificatesSection;