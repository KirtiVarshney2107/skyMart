

const TeamSection = () => {
     const teamMembers = [
  {
    id: 1,
    name: "Aryan Shah",
    role: "Founder & CEO",
    image: "https://i.pravatar.cc/150?img=11",
  },
  {
    id: 2,
    name: "Priya Mehta",
    role: "Head of Product",
    image: "https://i.pravatar.cc/150?img=32",
  },
  {
    id: 3,
    name: "Rohan Verma",
    role: "Lead Engineer",
    image: "https://i.pravatar.cc/150?img=13",
  },
  {
    id: 4,
    name: "Ananya Gupta",
    role: "Customer Success",
    image: "https://i.pravatar.cc/150?img=44",
  },
];
  return (
    <section className=" py-16">
      <div className="max-w-6xl mx-auto px-5">

        <h2 className="text-3xl md:text-4xl font-bold text-center text-white">
          Meet Our Team
        </h2>

        <p className="text-gray-400 text-center mt-4 max-w-2xl mx-auto">
          The passionate people behind SkyMart who work every day to make
          shopping better.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">

          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-[#1A2233] border border-gray-700 rounded-2xl p-6 text-center
              hover:border-lime-400 hover:-translate-y-2 transition-all duration-300"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto object-cover"
              />

              <h3 className="text-white text-xl font-semibold mt-5">
                {member.name}
              </h3>

              <p className="text-lime-400 mt-2">
                {member.role}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default TeamSection;