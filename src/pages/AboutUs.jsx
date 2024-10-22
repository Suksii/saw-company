import Logo from "../assets/images/logo2.png";

const AboutUs = () => {
  return (
    <div className="h-screen bg-gray-50 py-24 px-6 sm:px-12 lg:px-24">
      <section className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">About Us</h1>
        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          IngInspekt d.o.o je osnovan 2005. godine u Podgorici. Posvećeni smo
          pružanju vrhunskih usluga u oblasti zaštite na radu. Sa dugogodišnjim
          iskustvom, naš tim stručnjaka obezbeđuje efikasna rješenja koja
          ispunjavaju najviše standarde bezbjednosti na radu.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          Naša misija je da obezbijedimo sigurno i zdravo radno okruženje za sve
          zaposlene, kao i da pomognemo poslodavcima da ispunjavaju sve zakonske
          obaveze u oblasti zaštite na radu.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed">
          Fokusirani smo na dugoročno partnerstvo s klijentima, pružajući im
          podršku i rešenja prilagođena njihovim specifičnim potrebama. Pratimo
          najnovije tehnologije i najbolje prakse kako bismo osigurali da naši
          klijenti budu korak ispred u održavanju sigurnog radnog okruženja.
        </p>
      </section>
      <section className="mt-12 flex justify-center">
        <img
          src={Logo}
          alt="logo"
          className="w-[90%] h-auto object-contain"
        />
      </section>
    </div>
  );
};

export default AboutUs;
