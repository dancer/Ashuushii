import Image from "next/image"

export function PhotoGallery() {
 return (
   <div className="w-full bg-white rounded-xl shadow-xl overflow-hidden">
     {/* macOS-style window buttons */}
     <div className="bg-gray-100 px-3 md:px-4 py-2 border-b flex items-center gap-1.5 md:gap-2">
       <div className="w-2.5 md:w-3 h-2.5 md:h-3 rounded-full bg-red-500" />
       <div className="w-2.5 md:w-3 h-2.5 md:h-3 rounded-full bg-yellow-500" />
       <div className="w-2.5 md:w-3 h-2.5 md:h-3 rounded-full bg-green-500" />
     </div>
     
     {/* Photo grid */}
     <div className="p-3 md:p-4 grid grid-cols-12 gap-2 md:gap-4 aspect-[4/3]">
       {/* Left column - 3 small photos */}
       <div className="col-span-4 grid gap-2 md:gap-4">
         <div className="relative aspect-video rounded-md md:rounded-lg overflow-hidden">
           <Image
             src="/1.jpg"
             alt="Gallery photo 1"
             fill
             className="object-cover object-[center_20%]"
           />
         </div>
         <div className="relative aspect-video rounded-md md:rounded-lg overflow-hidden">
           <Image
             src="/2.jpg"
             alt="Gallery photo 2"
             fill
             className="object-cover object-[center_0%]"
           />
         </div>
         <div className="relative aspect-video rounded-md md:rounded-lg overflow-hidden">
           <Image
             src="/3.jpg"
             alt="Gallery photo 3"
             fill
             className="object-cover object-[center_0%]"
           />
         </div>
       </div>

       {/* Right column - medium and large photos */}
       <div className="col-span-8 grid grid-rows-5 gap-2 md:gap-4">
         <div className="row-span-2 relative rounded-md md:rounded-lg overflow-hidden">
           <Image
             src="/4.png"
             alt="Gallery photo 4"
             fill
             className="object-cover object-[center_20%]"
           />
         </div>
         <div className="row-span-3 relative rounded-md md:rounded-lg overflow-hidden">
           <Image
             src="/5.jpg"
             alt="Gallery photo 5"
             fill
             className="object-cover object-[center_20%]"
           />
         </div>
       </div>
     </div>
   </div>
 )
}

