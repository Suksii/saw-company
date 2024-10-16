import Employee from '../assets/team/course.jpg'
import Aleksa from '../assets/team/Aleksa.jpg'

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
            jobTitle: 'Marketing Menadžer',
            description: 'Qui consequuntur quos accusamus magnam quo est molestiae eius laboriosam sunt doloribus quia impedit laborum velit',
            picture: Aleksa
        },
    ]

    return (
        <div className="flex justify-center gap-4 my-10">
            {employees.map((employee, index) => (
                <div key={index} className="relative overflow-hidden shadow-xl shadow-blue-800 rounded-sm group hover:h-full">
                    <img src={employee.picture} alt={employee.name} className="w-[350px] h-[450px] object-cover rounded-sm block transition-transform duration-700" />
                    <div className="h-0 w-full bg-gradient-to-b from-transparent to-blue-800 overflow-hidden absolute bottom-0 flex flex-col items-center justify-center text-center transition-all duration-700 group-hover:h-full px-4">
                        <h2 className="font-semibold text-xl text-blue-50 mt-[95%]">{employee.name}</h2>
                        <h3 className="text-lg text-blue-50">{employee.jobTitle}</h3>
                        <p className="py-2 text-blue-50">{employee.description}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default TeamSection;