import FeatureSection from "../sections/FeatureSection";
import CertificatesSection from "../sections/CertificatesSection";
import HeaderSection from "../sections/HeaderSection";
import TeamSection from "../sections/TeamSection";
import CompanyCountUp from "../sections/CompanyCountUp";

const HomePage = () => {

    return (
        <>
            <HeaderSection />
            <FeatureSection />
            <CertificatesSection />
            <CompanyCountUp />
            <TeamSection />
        </>
    );
};

export default HomePage;