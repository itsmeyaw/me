import Image from "next/image";

interface BioSectionProps {
  title: string;
  items: string[];
}

function BioSection({ title, items }: BioSectionProps) {
  return (
    <div className="space-y-2">
      <h3 className="text-white/90 text-xs md:text-sm font-medium drop-shadow-lg font-[family-name:var(--font-manrope)] uppercase tracking-wider">
        {title}
      </h3>
      <div className="space-y-1">
        {items.map((item, index) => (
          <p key={index} className="text-white text-xs md:text-sm drop-shadow-xl font-[family-name:var(--font-sora)]">
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const bioSections = [
    {
      title: "Professional",
      items: [
        "Full-stack developer at Siemens",
        "Head of IT & Development at TUM Blockchain Club"
      ]
    },
    {
      title: "Academic",
      items: [
        "Master's Student at TUM",
        "Tutor for Applied Crypto. for Dec. Sys. (ACDS)"
      ]
    },
    {
      title: "About Me",
      items: [
        "Focusing on AI, LLMs, and Cybersecurity",
        "Enjoying reading, music, and vibe coding"
      ]
    }
  ];

  const links = [
    {
      title: "LinkedIn",
      url: "https://linkedin.com/in/itsmeyaw",
      description: "Let's connect professionally"
    },
    {
      title: "GitHub",
      url: "https://github.com/itsmeyaw",
      description: "My code & projects"
    },
    {
      title: "Instagram",
      url: "https://instagram.com/itsmeyaw.id",
      description: "Behind the scenes"
    },
    {
      title: "Website",
      url: "https://itsmeyaw.id",
      description: "My personal website"
    },
    {
      title: "Email",
      url: "mailto:yudhistira.wibowo@itsmeyaw.id",
      description: "Get in touch"
    }
  ];

  return (
    <div 
      className="min-h-screen py-12 px-4 relative"
      style={{
        backgroundImage: 'url(/bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-black/30"></div>
      
      <div className="relative z-10 max-w-lg mx-auto">
        {/* Profile Section */}
        <div className="text-center mb-12">
          {/* Profile Picture */}
          <div className="relative w-32 h-32 mx-auto mb-6">
            {/* Glass base */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/25 via-white/15 to-white/10 backdrop-blur-md rounded-full shadow-xl"></div>
            {/* Inner highlight */}
            <div className="absolute inset-2 bg-gradient-to-br from-white/20 to-transparent rounded-full"></div>
            {/* Border refraction */}
            <div className="absolute inset-0 rounded-full border border-white/40 shadow-inner"></div>
            {/* Content */}
            <div className="relative flex items-center justify-center w-full h-full">
              <Image
                src="/profile_pic.jpg"
                alt="Profile Picture"
                width={120}
                height={120}
                className="rounded-full object-cover"
              />
            </div>
            {/* Top highlight */}
            <div className="absolute top-3 left-5 w-6 h-3 bg-white/40 rounded-full blur-sm"></div>
          </div>
          
          {/* Name */}
          <h1 className="text-3xl md:text-4xl font-extrabold text-white drop-shadow-2xl font-[family-name:var(--font-manrope)]">
            Yudhistira Arief Wibowo
          </h1>
          
          {/* Title */}
          <p className="text-lg md:text-xl text-white mb-6 font-medium drop-shadow-xl font-[family-name:var(--font-sora)]">
            Software Engineer & Student
          </p>
          
          {/* Bio */}
          <div className="relative">
            {/* Glass base */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/15 to-white/10 backdrop-blur-md rounded-3xl shadow-xl"></div>
            {/* Inner layer */}
            <div className="absolute inset-2 bg-gradient-to-br from-white/10 to-transparent rounded-3xl"></div>
            {/* Border */}
            <div className="absolute inset-0 rounded-3xl border border-white/30 shadow-inner"></div>
            {/* Top highlight */}
            <div className="absolute top-2 left-6 right-6 h-4 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full blur-sm"></div>
            {/* Content */}
            <div className="relative p-8 space-y-6">
              {bioSections.map((section, index) => (
                <BioSection key={index} title={section.title} items={section.items} />
              ))}
            </div>
          </div>
        </div>

        {/* Links Section */}
        <div className="space-y-4">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block w-full transition-all duration-400 hover:scale-[1.01]"
            >
              {/* Glass base */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/15 to-white/18 backdrop-blur-md rounded-full shadow-xl group-hover:shadow-2xl group-hover:from-white/25 group-hover:via-white/20 group-hover:to-white/23 transition-all duration-400"></div>
              {/* Inner highlight layer */}
              <div className="absolute inset-1 bg-gradient-to-r from-white/15 to-transparent rounded-full group-hover:from-white/20 transition-all duration-400"></div>
              {/* Border with refraction */}
              <div className="absolute inset-0 rounded-full border border-white/30 group-hover:border-white/40 shadow-inner transition-all duration-400"></div>
              {/* Top glass highlight */}
              <div className="absolute top-2 left-8 right-8 h-2 bg-gradient-to-r from-transparent via-white/25 to-transparent rounded-full blur-sm group-hover:via-white/35 transition-all duration-400"></div>
              {/* Content */}
              <div className="relative px-12 py-4">
                <div className="flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="font-bold text-white text-base md:text-lg drop-shadow-2xl font-[family-name:var(--font-manrope)]">
                      {link.title}
                    </h3>
                    <p className="text-white/95 text-xs md:text-sm drop-shadow-xl font-[family-name:var(--font-sora)]">
                      {link.description}
                    </p>
                  </div>
                </div>
              </div>
              {/* Bottom shadow refraction */}
              <div className="absolute inset-x-6 bottom-0 h-1 bg-black/15 rounded-full blur-sm transform translate-y-1"></div>
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-16">
          <div className="relative inline-flex items-center justify-center space-x-3">
            {/* Glass base */}
            <div className="w-full absolute inset-0 bg-gradient-to-r from-white/22 via-white/18 to-white/20 backdrop-blur-md rounded-full shadow-xl"></div>
            {/* Inner highlight */}
            <div className="absolute inset-1 bg-gradient-to-r from-white/15 to-transparent rounded-full"></div>
            {/* Border */}
            <div className="w-full absolute inset-0 rounded-full border border-white/35 shadow-inner"></div>
            {/* Top highlight */}
            <div className="absolute top-1 left-4 right-4 h-2 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full blur-sm"></div>
            {/* Content */}
            <div className="relative px-8 py-4">
              <div className="flex items-center justify-center space-x-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/40"></div>
                <span className="text-white text-xs md:text-sm font-medium drop-shadow-2xl font-[family-name:var(--font-sora)]">Available for new challenges</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
