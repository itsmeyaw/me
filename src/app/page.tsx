import Image from "next/image";

export default function Home() {
  const links = [
    {
      title: "Portfolio",
      url: "https://example.com",
      description: "View my work"
    },
    {
      title: "LinkedIn",
      url: "https://linkedin.com/in/username",
      description: "Connect professionally"
    },
    {
      title: "GitHub",
      url: "https://github.com/username",
      description: "Code & projects"
    },
    {
      title: "Twitter",
      url: "https://twitter.com/username",
      description: "Thoughts & updates"
    },
    {
      title: "Instagram",
      url: "https://instagram.com/username",
      description: "Behind the scenes"
    },
    {
      title: "Email",
      url: "mailto:hello@example.com",
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
              <span className="text-white text-4xl font-bold drop-shadow-2xl">JD</span>
            </div>
            {/* Top highlight */}
            <div className="absolute top-3 left-5 w-6 h-3 bg-white/40 rounded-full blur-sm"></div>
          </div>
          
          {/* Name */}
          <h1 className="text-4xl font-bold text-white mb-3 drop-shadow-2xl">
            John Doe
          </h1>
          
          {/* Title */}
          <p className="text-xl text-white mb-6 font-medium drop-shadow-xl">
            Product Designer & Developer
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
            <div className="relative p-8">
              <p className="text-white leading-relaxed drop-shadow-xl">
                Passionate about creating digital experiences that make a difference. I blend design thinking with technical expertise to build products people love.
              </p>
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
                    <h3 className="font-semibold text-white text-lg drop-shadow-2xl">
                      {link.title}
                    </h3>
                    <p className="text-white/95 text-sm drop-shadow-xl">
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
          <div className="relative inline-flex items-center space-x-3">
            {/* Glass base */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/22 via-white/18 to-white/20 backdrop-blur-md rounded-full shadow-xl"></div>
            {/* Inner highlight */}
            <div className="absolute inset-1 bg-gradient-to-r from-white/15 to-transparent rounded-full"></div>
            {/* Border */}
            <div className="absolute inset-0 rounded-full border border-white/35 shadow-inner"></div>
            {/* Top highlight */}
            <div className="absolute top-1 left-4 right-4 h-2 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full blur-sm"></div>
            {/* Content */}
            <div className="relative px-8 py-4 flex items-center space-x-3">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/40"></div>
              <span className="text-white text-sm font-medium drop-shadow-2xl">Available for new opportunities</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
