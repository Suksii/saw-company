import FeatureSection from "../sections/FeatureSection";
import CertificatesSection from "../sections/CertificatesSection";
import HeaderSection from "../sections/HeaderSection";
import TeamSection from "../sections/TeamSection";
import CompanyCounter from "../sections/CompanyCounter";

const HomePage = () => {

    return (
        <>
            <HeaderSection />
            <FeatureSection />
            <CertificatesSection />
            <CompanyCounter />
            <TeamSection />
        </>
    );
};

export default HomePage;