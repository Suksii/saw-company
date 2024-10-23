const HeaderTitle = ({ title, description }) => {
  return (
    <section className="bg-blue-400 py-16 md:py-32 w-full">
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-50">
        {title}
      </h1>
      <p className="text-lg text-blue-50 max-w-2xl mx-auto text-center">
        {description}
      </p>
    </section>
  );
};

export default HeaderTitle;
