// components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Side: Map */}
        <div className="w-full md:w-1/2 ml-6 mb-6 md:mb-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3465.482206050303!2d-95.43324332478237!3d29.705788334537353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa53b7c2c3c222b59%3A0x897096e205be1191!2sA%20Best%20Towing!5e0!3m2!1sen!2sus!4v1732563531517!5m2!1sen!2sus"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-md shadow-md"
          ></iframe>
        </div>

        {/* Right Side: Contact Info */}
        <div className="w-full md:w-1/2 text-center md:text-right mr-6">
          <h3 className="text-xl font-bold mb-4">A Best Towing Services</h3>
          <p className="mb-2">3433 W Holcombe Blvd, Houston, TX 77025</p>
          <p className="mb-2">Phone: +1-832-888-8885</p>
          <p>Email: info@abesttowingservices.com</p>
          <p className="mt-4">&copy; {new Date().getFullYear()} A Best Towing Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
