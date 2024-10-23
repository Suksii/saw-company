import Logo from "../assets/images/logo2.png";
import Photo from "../assets/images/construction.jpg";

const AboutUs = () => {
  return (
    <div className="bg-gray-50">
      <section className="bg-blue-400 py-16 md:py-32 w-full">
        <h1 className="text-4xl font-bold mb-8 text-center text-blue-50">
          O nama
        </h1>
        <p className="text-lg text-blue-50 max-w-2xl mx-auto text-center">
          Naš tim je posvećen pružanju usluga vrhunskog kvaliteta, sa fokusom na
          poverenje, inovaciju i izvrsnost. Cilj nam je da gradimo dugoročne
          odnose i postižemo rezultate koji premašuju očekivanja.
        </p>
      </section>
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
          className="flex flex-col items-center justify-center text-center"
          style={{ flex: 1 }}
        >
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            IngInspekt d.o.o je osnovan 2005. godine u Podgorici. Posvećeni smo
            pružanju vrhunskih usluga u oblasti zaštite na radu. Sa
            dugogodišnjim iskustvom, naš tim stručnjaka obezbeđuje efikasna
            rješenja koja ispunjavaju najviše standarde bezbjednosti na radu.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
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
      <section className="mt-12 flex justify-center">
        <img src={Logo} alt="logo" className="w-[90%] h-auto object-contain" />
      </section>
    </div>
  );
};

export default AboutUs;
