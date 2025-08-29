export default function ContactPage() {
  return (
    <section className="container mx-auto p-16 max-w-2xl">
      <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>
      <p className="text-gray-600 text-center mb-8">
        We’d love to hear from you! Fill out the form below and we’ll get back to you as soon as possible.
      </p>

      <form className="space-y-6 bg-white shadow-lg p-8 rounded-2xl">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            required
            className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-300"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            required
            className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-300"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            rows="5"
            required
            className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-300"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
