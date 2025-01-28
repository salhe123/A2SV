export default function CTA() {
    return (
      <section className="w-full h-[433px] bg-[#212121] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-white text-4xl font-bold">Subscribe to Our Newsletter</h2>
          <input
            type="email"
            placeholder="Enter your email"
            className="mt-4 p-2 rounded-lg"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg ml-2">
            Subscribe
          </button>
        </div>
      </section>
    );
  }