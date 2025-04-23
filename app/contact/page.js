export default function Contact() {
    return (
      <div className="min-h-screen flex items-center justify-between px-16 py-10">
        <div className="max-w-md text-left bg-violet-300 bg-opacity-10 p-8 rounded-2xl shadow-lg">
          <h1 className="text-4xl font-bold mb-4 text-violet-600 font-sora">Get in Touch</h1>
          <p className="text-lg text-gray-800 font-grotesk font-semibold">
            Have any questions or feedback? Reach out to us, and we'll be happy to assist you.
          </p>
          <p className="mt-4 text-lg text-gray-800">
            Email: <a href="mailto:support@example.com" className="text-violet-500">sd4053224@gmail.com</a>
          </p>
          <p className="text-lg text-gray-800">
            Phone: <a href="tel:+1234567890" className="text-violet-500">+91 9508918510</a>
          </p>
        </div>
        <div className="max-w-md text-right bg-violet-300 bg-opacity-10 p-8 rounded-2xl shadow-lg">
          <form>
            <label className="block text-purple-800 text-lg mb-2 font-bold">Your Name</label>
            <input type="text" className="w-full p-2 rounded-lg bg-gray-100 border border-gray-300 mb-4" />
            
            <label className="block text-purple-800 text-lg mb-2 font-bold ">Your Message</label>
            <textarea className="w-full p-2 rounded-lg bg-gray-100 border border-gray-300 mb-4"></textarea>
            
            <button className="bg-violet-600 text-white px-4 py-2 rounded-lg hover:bg-violet-700">
              Send Message
            </button>
          </form>
        </div>
      </div>
    );
  }
  