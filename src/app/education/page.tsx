const Education = () => {
  const schools = [
    {
      name: " UNIVERSITY OF KELANIYA",
      degree: "BSC. (HONS) SOFTWARE ENGINEERING",
      years: "2018 - 2022",
      description:
        "  Web Application developemt & Mobile Application development",
    },
    {
      name: " GOVT. SCIENCE COLLEGE MATALE",
      degree: "GCE Advanced Level",
      years: "2012 - 2015",
      description: "Combined Maths-B, Physics-B, Chemistry- C",
    },
    {
      name: " NAMINIOYA CENTRAL COLLEGE",
      degree: "GCE Ordinary Level",
      years: "2011",
      description: "A-8 C-1",
    },
  ];
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Education</h1>
      <div className="space-y-8">
        {schools.map((school, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row md:space-x-4 mb-6"
          >
            <div className="md:w-1/4 mb-2 md:mb-0">
              <p className="font-semibold text-gray-300">{school.years}</p>
            </div>
            <div className="md:w-3/4">
              <h2 className="text-2xl font-semibold">{school.name}</h2>
              <p className="text-gray-400">{school.degree}</p>
              <p className="text-gray-400">{school.description}</p>
              {index < schools.length - 1 && (
                <hr className="mt-4 border-t border-gray-300" />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
