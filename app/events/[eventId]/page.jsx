"use client"

import { eventOngoingData } from "@/app/components/selector/data"
import Image from "next/image"

export default function page({ params }) {

    const data = eventOngoingData.find(item=> item.id === parseInt(params.eventId))

    //console.log(data)
  return (
    <div className="w-full flex justify-center bg-[#1d1d1d] min-h-screen pb-12">
        <div className="w-[90%] text-slate-200">
            {/* image  */}
            <div>
                <Image className="w-full h-[30rem] grayscale hover:grayscale-0" src={data.image} alt={data.name} />
            </div>

            {/* name dateStart dateEnd  */}
            <div className="">
                <h3 className="text-2xl md:text-4xl font-serif font-bold text-center mt-4 mb-2">{data.name}</h3>
                <p className="text-lg text-center font-serif mb-8">From {data.dateStart} till {data.dateEnd}</p>
                
            </div>

            {/* description */}
            <div>
                <p className="text-lg md:text-xl font-serif">
                    {data.description}
                </p>
            </div>

            {/* vanue */}
            <p className="mt-4"><span className="text-base font font-medium">Venue: </span><span className="text-xl font-serif font-semibold">{data.venue} Timing: {data.timing}</span></p>

             {/* seats left  */}
            <p ><span className="text-base font font-medium">Seats: </span><span className="text-xl font-serif font-semibold">{data.sheets}</span></p>
             {/* book ticket if left else sory event already booked */}
             <p className="mt-2"><span className="text-base font font-medium">Price : </span><span className="text-xl font-serif font-semibold">{data.ticketPrice}</span></p>

             {/* button for book now */}
             <div className="flex justify-center">
                <button className="text-lg font-medium bg-[#1d1d1d] text-slate-200 px-4 py-1 border-2 border-slate-200">Book Now</button>
             </div>
        </div>
    </div>
  )
}


// export default function page({ params }) {
//     return (
//       <div>event id is {params.eventId}</div>
//     )
//   }
  