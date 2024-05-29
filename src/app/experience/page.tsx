const Experience = () => {
  const experiences = [
    {
      company: "INSCRIPT Web Solution & Web Design, Kandy",
      role: "Assocaite Software Engineer",
      years: "05/2022 - Present",
      description: "Developed and maintained web application",
    },
    {
      company: "CabbageApps (Pvt) Ltd, Colombo",
      role: "Intern Software Engineer",
      years: "05/2021 - 11/2021",
      description: "Developed and maintained web application",
    },
    {
      company: "People's Bank-Wilgamuwa,Matale",
      role: "Former Traineer",
      years: "05/2016 - 11/2016",
      description: "",
    },
  ];
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Experience</h1>
      <div className="space-y-8">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row md:space-x-4 mb-6"
          >
            <div className="md:w-1/4 mb-2 md:mb-0">
              <p className="font-semibold text-gray-700">{experience.years}</p>
            </div>
            <div className="md:w-3/4">
              <h2 className="text-2xl font-semibold">{experience.company}</h2>
              <p className="text-gray-600">{experience.role}</p>
              <p className="text-gray-600">{experience.description}</p>
              {index < experiences.length - 1 && (
                <hr className="mt-4 border-t border-gray-300" />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
