function TitlePage() {
    return (
      <div
        id="home"
        className="text-center bg-custom-slate flex flex-col lg:flex-row gap-8 lg:gap-24 min-h-96 items-center justify-center max-w-6xl mx-auto px-4 py-8"
      >
        <div className="flex flex-col items-center lg:items-start">
          <h1 className="gradient-text text-3xl sm:text-4xl lg:text-5xl font-bold drop-shadow-md">
            Induwara
          </h1>
          <h1 className="gradient-text text-3xl sm:text-4xl lg:text-5xl font-bold drop-shadow-md">
            Kandapahala
          </h1>
        </div>
        <div className="max-w-lg text-center lg:text-left">
          <p className="text-white text-base sm:text-lg lg:text-xl">
            Passionate software developer specializing in web development,
            robotics, and machine learning. Explore my projects and skills, and
            let’s create innovative solutions together.
          </p>
        </div>
      </div>
    );
  }
  
  export default TitlePage;
