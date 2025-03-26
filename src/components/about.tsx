import { section } from "framer-motion/client";

export default function About(){
    return(
        <section>
            <div>
               <p className="text-4xl  mt-50 font-inter text-gray-500">About us</p>
               <h1 className="text-6xl font-bold mt-10 font-rocksalt">Why we are the best</h1>
            </div>
            <div className="mt-30 flex items-start ml-55 font-jakarta space-x-4">
            <div className="text-left w-1/2 text-2xl">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus provident modi, illum magni eius possimus, quasi deserunt, ducimus fugit similique ullam sunt 
                cum alias molestiae officia odit atque nobis? In.
                </p>
                <p className="mt-15">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus provident modi, illum magni eius possimus, quasi deserunt, ducimus fugit similique ullam sunt 
                cum alias molestiae officia odit atque nobis? In.
                </p>
                <p className="mt-15">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus provident modi, illum magni eius possimus, quasi deserunt, ducimus fugit similique ullam sunt 
                cum alias molestiae officia odit atque nobis? In.
                </p>
            </div>
            
            <img src="hero/Rectangle 1463.png" alt="" className="w-70 h-auto ml-5" />
            <img src="hero/Rectangle 1464.png" alt="" className="w-70 h-auto mt-15  ml-5" />

            
            </div>
            <button className="bg-[#651F0F] text-white py-8 px-30 text-4xl mt- rounded-full flex items-start ml-55 font-button">
          Read More
        </button>
        </section>
    )
}