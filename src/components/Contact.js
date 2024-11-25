// components/Contact.tsx
export default function Contact() {
    return (
      <section id="contact" className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
          <form className="max-w-xl mx-auto">
            <div className="mb-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-md text-black"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-md text-black"
              />
            </div>
            <div className="mb-4">
              <textarea
                rows={4}
                placeholder="Your Message"
                className="w-full p-3 rounded-md text-black"
              ></textarea>
            </div>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black py-3 px-6 rounded-md font-bold">
              Send Message
            </button>
          </form>
        </div>
      </section>
    );
  }
  