// components/About.jsx
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function About() {
  const { isVisible, elementRef } = useIntersectionObserver({
    threshold: 0.1, // Trigger when 10% of the component is visible
  });

  return (
    <section
      id="about"
      ref={elementRef}
      className={`py-16 bg-base-100 transition-opacity duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-80 h-60 md:w-96 md:h-96">
            <img
              src="/abestlogo.webp"
              alt="Logo"
              className="rounded-lg shadow-lg object-cover w-full h-full"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 md:pl-12 mt-8 md:mt-0">
          <h2 className="text-4xl font-bold text-primary mb-4">About Us</h2>
          <p className="text-base-content mb-4">
          At A Best Towing Services, we take pride in offering unparalleled towing and roadside assistance solutions tailored to meet the needs of every client. Specializing in the transport of exotic and luxury vehicles, we combine cutting-edge equipment with a highly skilled team to ensure your prized possessions are handled with the utmost care and precision. Whether you’re dealing with a roadside emergency, need secure flatbed towing, or require long-distance transport, our 24/7 service is designed to deliver peace of mind and reliability. Built on a foundation of trust, professionalism, and a passion for excellence, A Best Towing Services has earned its reputation as a leader in the towing industry. When you choose us, you’re not just getting a service—you’re gaining a partner committed to ensuring your vehicle’s safety and your satisfaction.
          </p>
          <p className="text-base-content">
            Our team is available 24/7, ensuring that no matter where you are, help is just a call away.
          </p>
        </div>
      </div>
    </section>
  );
}
