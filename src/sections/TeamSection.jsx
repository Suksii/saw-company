import Employee from '../assets/team/course.jpg'
import Aleksa from '../assets/team/Aleksa.jpg'
import { Navigation, Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';

const TeamSection = () => {


    const employees = [
        {
            name: 'Aleksa Vujošević',
            jobTitle: 'Generalni direktor',
            description: 'Qui consequuntur quos accusamus magnam quo est molestiae eius laboriosam sunt doloribus quia impedit laborum velit',
            picture: Aleksa
        },
        {
            name: 'Nebojša Vujošević',
            jobTitle: 'Osnivač firme',
            description: 'Qui consequuntur quos accusamus magnam quo est molestiae eius laboriosam sunt doloribus quia impedit laborum velit',
            picture: Employee
        },
        {
            name: 'Nina Ćipranić Vujošević',
            jobTitle: 'Osnivač firme',
            description: 'Qui consequuntur quos accusamus magnam quo est molestiae eius laboriosam sunt doloribus quia impedit laborum velit',
            picture: Employee
        },
        {
            name: 'Mario Doe',
            jobTitle: 'Marketing Menadžer',
            description: 'Qui consequuntur quos accusamus magnam quo est molestiae eius laboriosam sunt doloribus quia impedit laborum velit',
            picture: Aleksa
        },
        {
            name: 'John Doe',
            jobTitle: 'Marketing Menadžer',
            description: 'Qui consequuntur quos accusamus magnam quo est molestiae eius laboriosam sunt doloribus quia impedit laborum velit',
            picture: Aleksa
        },
        {
            name: 'Nina Ćipranić Vujošević',
            jobTitle: 'Osnivač firme',
            description: 'Qui consequuntur quos accusamus magnam quo est molestiae eius laboriosam sunt doloribus quia impedit laborum velit',
            picture: Employee
        },
    ]

    return (
        <div className="relative flex w-full justify-center py-10">
            <Swiper
                modules={[Navigation, Pagination]}
                slidesPerView="auto"
                spaceBetween={30}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                loop={false}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                className="w-full md:w-[80%] relative"
            >
                {employees.map((employee, index) => (
                    <SwiperSlide key={index} className="w-full md:max-w-[350px]">
                        < div className="relative overflow-hidden shadow-xl rounded-sm group hover:h-full" >
                            <img src={employee.picture} alt={employee.name} className="w-full md:w-[350px] h-[450px] object-cover rounded-sm block transition-transform duration-700" />
                            <div className="h-0 w-full bg-gradient-to-b from-transparent to-blue-900 overflow-hidden absolute bottom-0 flex flex-col items-center justify-center text-center transition-all duration-700 group-hover:h-full px-4">
                                <h2 className="font-semibold text-xl text-blue-50 mt-[95%]">{employee.name}</h2>
                                <h3 className="text-lg text-blue-50">{employee.jobTitle}</h3>
                                <p className="py-2 text-blue-50">{employee.description}</p>
                            </div>
                        </div >
                    </SwiperSlide >
                ))}
            </Swiper >
            <MdArrowBackIos className="swiper-button-prev absolute top 1/2 translate-y-1/2 left-4 md:left-12 xl:left-32 text-blue-800 cursor-pointer hover:text-blue-300 duration-300 text-2xl" />
            <MdArrowForwardIos className="swiper-button-next absolute top 1/2 translate-y-1/2 right-4 md:right-12 xl:right-32 text-blue-800 cursor-pointer hover:text-blue-300 duration-300" />
        </div>

    )
}

export default TeamSection;