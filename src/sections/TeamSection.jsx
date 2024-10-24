import Employee from "../assets/team/course.jpg";
import Aleksa from "../assets/team/Aleksa.jpg";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const TeamSection = () => {
  const employees = [
    {
      name: "Aleksa Vujošević",
      jobTitle: "Generalni direktor",
      description:
        "Qui consequuntur quos accusamus magnam quo est molestiae eius laboriosam sunt doloribus quia impedit laborum velit",
      picture: Aleksa,
    },
    {
      name: "Nebojša Vujošević",
      jobTitle: "Osnivač firme",
      description:
        "Qui consequuntur quos accusamus magnam quo est molestiae eius laboriosam sunt doloribus quia impedit laborum velit",
      picture: Employee,
    },
    {
      name: "Nina Ćipranić Vujošević",
      jobTitle: "Osnivač firme",
      description:
        "Qui consequuntur quos accusamus magnam quo est molestiae eius laboriosam sunt doloribus quia impedit laborum velit",
      picture: Employee,
    },
    {
      name: "Mario Doe",
      jobTitle: "Marketing Menadžer",
      description:
        "Qui consequuntur quos accusamus magnam quo est molestiae eius laboriosam sunt doloribus quia impedit laborum velit",
      picture: Aleksa,
    },
    {
      name: "John Doe",
      jobTitle: "Marketing Menadžer",
      description:
        "Qui consequuntur quos accusamus magnam quo est molestiae eius laboriosam sunt doloribus quia impedit laborum velit",
      picture: Aleksa,
    },
    {
      name: "Nina Ćipranić Vujošević",
      jobTitle: "Osnivač firme",
      description:
        "Qui consequuntur quos accusamus magnam quo est molestiae eius laboriosam sunt doloribus quia impedit laborum velit",
      picture: Employee,
    },
  ];

  return (
    <div className="relative flex items-center justify-center h-full py-10 w-full sm:w-[90%] xl:w-[80%] mx-auto">
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          700: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1050: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1450: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        grabCursor={true}
        modules={[Navigation]}
        spaceBetween={35}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        scrollbar={{ draggable: true }}
        loop={false}
      >
        {employees.map((employee, index) => (
          <SwiperSlide key={index} className="h-[500px] md:h-auto">
            <div className="overflow-hidden shadow-xl rounded-sm group h-full">
              <img
                src={employee.picture}
                alt={employee.name}
                className="h-full w-full object-cover rounded-sm block transition-transform duration-700"
              />
              <div className="h-0 w-full bg-gradient-to-b from-transparent to-blue-900 overflow-hidden absolute bottom-0 flex flex-col items-center justify-center text-center transition-all duration-700 group-hover:h-full px-8 md:px-4">
                <h2 className="font-semibold text-xl text-blue-50 md:mt-[90%]">
                  {employee.name}
                </h2>
                <h3 className="text-lg text-blue-50">{employee.jobTitle}</h3>
                <p className="py-2 text-blue-50">{employee.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <MdArrowBackIos className="swiper-button-prev absolute top-1/2 md:-left-10 text-blue-800 cursor-pointer hover:text-blue-300 duration-300" />
      <MdArrowForwardIos className="swiper-button-next absolute top-1/2 md:-right-10 text-blue-800 cursor-pointer hover:text-blue-300 duration-300" />
    </div>
  );
};

export default TeamSection;
