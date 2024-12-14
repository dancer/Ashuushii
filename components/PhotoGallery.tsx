import Image from "next/image"

export function PhotoGallery() {
 return (
   <div className="w-full bg-white rounded-xl shadow-xl overflow-hidden">
     {/* macOS-style window buttons */}
     <div className="bg-gray-100 px-4 py-2 border-b flex items-center gap-2">
       <div className="w-3 h-3 rounded-full bg-red-500" />
       <div className="w-3 h-3 rounded-full bg-yellow-500" />
       <div className="w-3 h-3 rounded-full bg-green-500" />
     </div>
     
     {/* Photo grid */}
     <div className="p-4 grid grid-cols-12 gap-4 aspect-[4/3]">
       {/* Left column - 3 small photos */}
       <div className="col-span-4 grid gap-4">
         <div className="relative aspect-video rounded-lg overflow-hidden">
           <Image
             src="/1.jpg"
             alt="Gallery photo 1"
             fill
             className="object-cover object-[center_20%]"
           />
         </div>
         <div className="relative aspect-video rounded-lg overflow-hidden">
           <Image
             src="/2.jpg"
             alt="Gallery photo 2"
             fill
             className="object-cover object-[center_0%]"
           />
         </div>
         <div className="relative aspect-video rounded-lg overflow-hidden">
           <Image
             src="/3.jpg"
             alt="Gallery photo 3"
             fill
             className="object-cover object-[center_0%]"
           />
         </div>
       </div>

       {/* Right column - medium and large photos */}
       <div className="col-span-8 grid grid-rows-5 gap-4">
         <div className="row-span-2 relative rounded-lg overflow-hidden">
           <Image
             src="/4.png"
             alt="Gallery photo 4"
             fill
             className="object-cover object-[center_20%]"
           />
         </div>
         <div className="row-span-3 relative rounded-lg overflow-hidden">
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

