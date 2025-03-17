import Navbar from "@/components/navbar";
import CoffeeSelector from "@/components/selectorcoffee";

export default function CustomerPage() {
  return (
    <div>
      <Navbar />
      {/* Hero Section */}
      <section className="text-center py-10">
        <h1 className="text-[80px] font-bold mb-4 font-rocksalt">
          Enjoy Your Favorite <br />
          Coffee with Ngopi
        </h1>
        <p className="text-[30px] mx-auto text-gray-600 mb-6 font-inter mt-1.5">
          Discover tranquility at Ngopi a sanctuary for unwinding,
          <br />
          where your evenings are perfected with relaxation and rich flavors.
        </p>
        <button className="bg-[#651F0F] text-white py-8 px-28 text-2xl mt-8 rounded-full">
          EXPLORE PRODUCT
        </button>
      </section>
      {/* Images */}
      <section className="flex justify-center gap-4 py-10">
        <img src="hero/Rectangle 1462.png" alt="" />
        <img src="hero/Rectangle 1463.png" alt="" />
        <img src="hero/Rectangle 1464.png" alt="" />
        <img src="hero/Rectangle 1465.png" alt="" />
        <img src="hero/Rectangle 1466.png" alt="" />
      </section>
      {/* Stats Section */}
      <section className="grid grid-cols-4 text-center py-20 mt-20 bg-gray-100">
        <div>
          <h1 className="text-6xl font-bold">30+</h1>
          <p className="text-gray-600 font-inter mt-1">Coffee Variant</p>
        </div>
        <div>
          <h1 className="text-6xl font-bold">20+</h1>
          <p className="text-gray-600 font-inter mt-1">Meeting Room</p>
        </div>
        <div>
          <h1 className="text-6xl font-bold">25+</h1>
          <p className="text-gray-600 font-inter mt-1">Event Space</p>
        </div>
        <div>
          <h1 className="text-6xl font-bold">40+</h1>
          <p className="text-gray-600 font-inter mt-1">Global Achievement</p>
        </div>
      </section>
      <section className="text-center">
        <div>
        <h1 className="text-4xl  mt-50 font-inter text-gray-500">Our Products</h1>
        <p className="text-6xl font-bold mt-10 font-rocksalt">From Top Quality Materials</p>
        </div>
        <CoffeeSelector/>

      </section>
    </div>
  );  
}
