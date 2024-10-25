import CountUp from "react-countup";
import Stars from '../assets/icons/star.svg'
import Clock from '../assets/icons/clock.svg'
import Connection from '../assets/icons/connection.svg'
import Smile from '../assets/icons/smile.svg'
import Spiral from '../assets/icons/spiral.svg'


const CompanyCountUp = () => {

    const companyDetails = [
        {
            title: 'Years with you',
            counter: '22',
            icon: Connection
        },
        {
            title: 'Happy clients',
            counter: '147',
            icon: Smile
        },
        {
            title: 'Hard workers',
            counter: '9',
            icon: Stars
        },
        {
            title: 'Different services',
            counter: '12',
            icon: Spiral
        },
    ]

    return (
        <div className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-900 flex flex-col items-center justify-center w-full gap-24 py-16 my-6">
            <h1 className="text-5xl text-center text-blue-50">Safety at Work since 2002</h1>
            <div className="flex flex-wrap justify-around gap-y-8 w-full">
                {companyDetails.map((detail, index) => (
                    <div className="flex flex-col gap-2 items-center justify-center" key={index}>
                        <img src={detail.icon} alt={detail.title} className="w-24 h-24"/>
                        <CountUp start={0} end={detail.counter} duration={3} useEasing={true} className="text-7xl text-blue-50" />
                        <h3 className="text-2xl uppercase font-semibold text-blue-50">{detail.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CompanyCountUp;