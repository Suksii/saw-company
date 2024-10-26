import Logo from "../assets/images/logo2.png";
import Photo from "../assets/images/construction.jpg";
import CertificatesSection from "../sections/CertificatesSection";
import TeamSection from "../sections/TeamSection";
import HeaderTitle from "../components/HeaderTitle";

const AboutUs = () => {
  return (
    <div className="bg-gray-50">
      <HeaderTitle
        title="O nama"
        description="Naš tim je posvećen pružanju usluga vrhunskog kvaliteta, sa fokusom na
        poverenje, inovaciju i izvrsnost. Cilj nam je da gradimo dugoročne
        odnose i postižemo rezultate koji premašuju očekivanja."
      />
      <section className="flex flex-col lg:flex-row">
        <div style={{ flex: 1 }} className="relative w-full h-full">
          <img
            src={Photo}
            alt="About Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute bg-gradient-to-b lg:bg-gradient-to-r from-transparent to-gray-50 top-0 w-full h-full"></div>
        </div>
        <div
          className="flex flex-col items-center justify-center text-center gap-8 px-4"
          style={{ flex: 1 }}
        >
          <p className="text-lg text-gray-600 leading-relaxed">
            IngInspekt d.o.o je osnovan 2005. godine u Podgorici. Posvećeni smo
            pružanju vrhunskih usluga u oblasti zaštite na radu. Sa
            dugogodišnjim iskustvom, naš tim stručnjaka obezbeđuje efikasna
            rješenja koja ispunjavaju najviše standarde bezbjednosti na radu.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Naša misija je da obezbijedimo sigurno i zdravo radno okruženje za
            sve zaposlene, kao i da pomognemo poslodavcima da ispunjavaju sve
            zakonske obaveze u oblasti zaštite na radu.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Fokusirani smo na dugoročno partnerstvo s klijentima, pružajući im
            podršku i rešenja prilagođena njihovim specifičnim potrebama.
            Pratimo najnovije tehnologije i najbolje prakse kako bismo osigurali
            da naši klijenti budu korak ispred u održavanju sigurnog radnog
            okruženja.
          </p>
        </div>
      </section>
      <section className="mt-12 flex justify-center w-[70%] md:w-[50%] mx-auto">
        <img src={Logo} alt="logo" className="w-[90%] h-auto object-contain" />
      </section>
      <section className="py-4">
        <h3 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
          Naši sertifikati
        </h3>
        <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto text-center">
          Ponosni smo na naše sertifikate koji potvrđuju našu posvećenost
          najvišim standardima kvaliteta i bezbednosti. Svaki sertifikat
          predstavlja naše iskustvo, stručnost i kontinuirani rad na unapređenju
          naših usluga.
        </p>
        <CertificatesSection />
      </section>
      <section>
        <h3 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
          Naš tim
        </h3>
        <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto text-center">
          Naš tim čine iskusni profesionalci posvećeni pružanju vrhunskih usluga
          i rešenja. Svaki član našeg tima donosi jedinstvene veštine i
          stručnost, omogućavajući nam da se suočimo sa svakim izazovom i
          ostvarimo ciljeve naših klijenata. Zajedno radimo kako bismo osigurali
          najbolje rezultate i gradili dugoročne partnerske odnose.
        </p>
        <TeamSection />
      </section>
    </div>
  );
};

export default AboutUs;
