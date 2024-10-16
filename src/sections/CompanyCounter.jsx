import { FaSmile } from "react-icons/fa";

const CompanyCounter = () => {

    const companyDetails = [
        {
            title: 'Years with you',
            counter: '22',
            icon: <FaSmile />
        },
        {
            title: 'Happy clients',
            counter: '147',
            icon: <FaSmile />
        },
        {
            title: 'Hard workers',
            counter: '9',
            icon: <FaSmile />
        },
        {
            title: 'Different services',
            counter: '12',
            icon: <FaSmile />
        },
    ]

    return (
        <div className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-900 flex flex-col items-center justify-center w-full gap-24 py-16">
            <h1 className="text-5xl text-center text-blue-50">Safety at Work since 2002</h1>
            <div className="flex justify-around w-full">
                {companyDetails.map((detail, index) => (
                    <div className="flex flex-col gap-2 items-center justify-center">
                        <span className="text-7xl text-blue-50">{detail.icon}</span>
                        <h2 className="text-7xl text-blue-50">{detail.counter}</h2>
                        <h3 className="text-2xl uppercase font-semibold text-blue-50">{detail.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CompanyCounter;