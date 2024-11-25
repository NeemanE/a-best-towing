// components/Services.jsx
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function Services() {
  const { isVisible, elementRef } = useIntersectionObserver({
    threshold: 0.1,
  });

  const services = [
    {
      title: "Exotic Car Towing",
      description: "Specialized equipment to ensure safe transport of high-end vehicles.",
      image: "/tow4.jpg",
      details: `When it comes to towing exotic and luxury vehicles, precision and care are non-negotiable. At A Best Towing Services, we specialize in the secure transport of high-value automobiles. Our team is trained to handle the specific needs of exotic cars, using state-of-the-art flatbeds and tools designed for low-clearance vehicles. Whether it’s a classic car, a sports car, or a high-end electric vehicle, you can trust us to deliver it to its destination without a scratch. We understand the value of your vehicle, both emotionally and financially, and treat it as if it were our own.`,
    },
    {
      title: "Roadside Assistance",
      description: "24/7 help with breakdowns, jump-starts, and more.",
      image: "/roadside.jpg",
      details: `Roadside issues can happen at the most inconvenient times, and that’s where we step in. Our 24/7 roadside assistance service is designed to get you back on the road quickly and safely. Whether you’ve run out of fuel, need a jump-start, have a flat tire, or are locked out of your vehicle, our experienced team is just a phone call away. We arrive promptly, equipped with the tools needed to resolve most issues on-site. With A Best Towing Services, you never have to face roadside troubles alone.`,
    },
    {
      title: "Flatbed Towing",
      description: "Modern flatbed trucks for secure and damage-free towing.",
      image: "/tow11.jpg",
      details: `Flatbed towing is the safest way to transport vehicles, especially when dealing with low-clearance or oversized cars. Our fleet of modern flatbed trucks ensures your vehicle is loaded and transported securely, with no risk of dragging or damage. This service is ideal for exotic cars, luxury vehicles, motorcycles, and even small machinery. Our professional operators carefully secure your vehicle, ensuring it remains stable during transit. Whether it’s a short trip across town or a longer haul, flatbed towing provides peace of mind for vehicle owners who demand the best.`,
    },
  ];

  return (
    <section
      id="services"
      ref={elementRef}
      className={`py-16 bg-base-200 transition-opacity duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="container mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-primary mb-4">Our Services</h2>
          <p className="text-base-content text-lg">
            Experience premium towing and roadside assistance tailored to your needs.
          </p>
        </div>


        {/* Detailed Paragraphs */}
        <div className="mt-16 space-y-12">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col-reverse md:flex-row items-center ${
                index % 2 === 0 ? '' : 'md:flex-row-reverse'
              }`}
            >
              {/* Text Section */}
              <div className="w-full md:w-1/2 p-6">
                <h3 className="text-3xl font-bold text-primary mb-4">
                  {service.title}
                </h3>
                <p className="text-base-content leading-relaxed">{service.details}</p>
              </div>
              {/* Image Section */}
              <div className="w-full md:w-1/2 p-6">
                <div className="relative w-full h-64 overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
