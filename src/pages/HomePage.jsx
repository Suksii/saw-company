import construction from "../assets/images/construction.jpg";

const HomePage = () => {


    return (
        <div className="h-[70vh] flex items-center justify-center bg-cover bg-center relative" style={{ backgroundImage: `url(${construction})` }}>
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <p className="relative text-white text-4xl font-bold">HomePage</p>
        </div>
    );
};

export default HomePage;