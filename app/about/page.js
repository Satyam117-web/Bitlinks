export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-between px-16 py-10  ">
      <div className="max-w-md text-left bg-violet-500 bg-opacity-10 p-8 rounded-2xl shadow-lg ">
        <h1 className="text-4xl font-bold mb-4 text-violet-600 font-sora">About Our URL Shortener</h1>
        <p className="text-lg text-gray-800 font-grotesk font-semibold">
          Welcome to our powerful yet simple URL shortener! We help you transform long, unwieldy links into short, manageable URLs that are easy to share.
        </p>
      </div>
      <div className="max-w-md text-right bg-violet-500 bg-opacity-10 p-8 rounded-2xl shadow-lg">
        <p className="text-lg  font-grotesk font-semibold text-gray-800">
          Our platform ensures speed, reliability, and analytics to track your links efficiently. Whether you're a marketer, a developer, or just someone who loves clean links, our service is designed to make link management effortless.
        </p>
      </div>
    </div>
  );
}
