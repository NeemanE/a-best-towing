// components/Hero.tsx
export default function Hero() {
    return (
      <section className="relative bg-black text-white h-screen flex items-center justify-center bg-cover bg-center" 
        style={{ backgroundImage: `url('/tow8.jpg')` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative text-center max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">
            Towing Services for Exotic and Luxury Vehicles
          </h1>
          <p className="text-lg mb-6">
            Trustworthy, professional, and equipped to handle your most prized possessions.
          </p>
          <a href="#contact" className="bg-yellow-500 hover:bg-yellow-600 text-black py-3 px-6 rounded-md font-bold">
            Get a Quote
          </a>
        </div>
      </section>
    );
  }
  