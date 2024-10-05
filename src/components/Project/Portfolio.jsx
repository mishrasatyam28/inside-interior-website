export default function Portfolio() {
  const projects = [
    {
      id: 1,
      name: "Cozy Family Living Room",
      description:
        "A cozy living room with a modern design, perfect for family gatherings and relaxation.",
      image:
        "https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "",
    },
    {
      id: 2,
      name: "Modern Minimalist Kitchen",
      description:
        "A sleek, minimalist kitchen with clean lines and modern appliances for a seamless cooking experience.",
      image:
        "https://plus.unsplash.com/premium_photo-1686090448451-fe1327f9b042?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "",
    },
    {
      id: 3,
      name: "Luxurious Bedroom Retreat",
      description:
        "A luxurious bedroom design combining comfort with elegance for a peaceful retreat at the end of the day.",
      image:
        "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "",
    },
    {
      id: 4,
      name: "Rustic Dining Room",
      description:
        "A rustic dining room design with wooden furniture and earthy tones to create a warm and inviting space.",
      image:
        "https://images.unsplash.com/photo-1611596188718-840151555242?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "",
    },
    {
      id: 5,
      name: "Home Office with Natural Light",
      description:
        "A bright home office featuring large windows and modern furniture, perfect for productivity and creativity.",
      image:
        "https://images.unsplash.com/photo-1496664444929-8c75efb9546f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "",
    },
    {
      id: 6,
      name: "Chic Bathroom Design",
      description:
        "A chic bathroom with a minimalist aesthetic, featuring elegant marble and modern fixtures.",
      image:
        "https://plus.unsplash.com/premium_photo-1661884424253-08db7c7758ce?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "",
    },
  ];

  return (
    <div className="py-8 px-4">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative overflow-hidden rounded-xl group"
            style={{ height: "400px" }}
          >
            <div className="w-full h-full">
              <img
                src={project.image}
                width={480}
                height={380}
                alt={project.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 flex-col items-center justify-end w-full p-4 text-white transition duration-300 ease-in-out bg-gradient-to-b from-transparent to-black group-hover:translate-y-0">
              <h1 className="text-2xl font-semibold">{project.name}</h1>
              <p className="py-2">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
