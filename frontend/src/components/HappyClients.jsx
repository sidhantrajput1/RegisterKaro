import UdemyLogo from './../assets/img/udemy.png'; // Example logo

function FloatingLogos() {
  // List of logo images
  const logos = [
    UdemyLogo, UdemyLogo, UdemyLogo, UdemyLogo, UdemyLogo, 
    UdemyLogo, UdemyLogo, UdemyLogo, UdemyLogo, UdemyLogo, 
    UdemyLogo, UdemyLogo, UdemyLogo, UdemyLogo, UdemyLogo
  ];

  // Predefined fixed positions for each logo (top, left values in px and vw)
  const fixedPositions = [
    { top: 25, left: 5 },   // Logo 1
    { top: 250, left: 2 },  // Logo 2
    { top: 150, left: 15 },  // Logo 3
    { top: 220, left: 25 },  // Logo 4
    { top: 25, left: 25 },  // Logo 5
    { top: 150, left: 80 },  // Logo 6
    { top: 230, left: 70 },  // Logo 7
    { top: 210, left: 45 },  // Logo 8
    { top: 50, left: 70 },  // Logo 9
    { top: 40, left: 55 },  // Logo 10
    { top: 70, left: 40 },  // Logo 11
    { top: 780, left: 15 },  // Logo 12
    { top: 850, left: 45 },  // Logo 13
    { top: 20, left: 90 },  // Logo 14
    { top: 170, left: 60 },  // Logo 15
  ];

  return (
    <div className="relative w-full bg-gray-100 overflow-hidden h-[353px]" >
      {logos.map((logo, index) => (
        <div
          key={index}
          className="absolute rounded-full bg-white p-2 shadow-lg hover:scale-110 transition-transform duration-300"
          style={{
            top: `${fixedPositions[index].top}px`, // Fixed top position in px
            left: `${fixedPositions[index].left}vw`, // Left position in vw
          }}
        >
          <img src={logo} alt={`Logo ${index}`} className="w-16 h-16 object-contain" />
        </div>
      ))}
    </div>
  );
}

export default FloatingLogos;
