function TitlePage() {
  return (
    <div
      id="home"
      className="text-center bg-custom-slate flex gap-24 min-h-96 items-center max-w-3xl mx-auto px-4
      "
    >
      <div className="items-center">
        <h1 className="gradient-text text-5xl font-bold drop-shadow-md">
          Induwara
        </h1>
        <h1 className="gradient-text text-5xl font-bold drop-shadow-md">
          Kandapahala
        </h1>
      </div>
      <div>
        <p className="text-white text-lg">
          Passionate software developer specializing in web development,
          robotics, and machine learning. Explore my projects and skills, and
          let’s create innovative solutions together.
        </p>
      </div>
    </div>
  );
}

export default TitlePage;
