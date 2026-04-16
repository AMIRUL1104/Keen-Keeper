// "use client";

// import { TimelineContext } from "@/context/TimelineContest";
// import { LucideVideo, MessageCircleMore, PhoneCall } from "lucide-react";
// import { useContext } from "react";

// function TimelinePage() {
//   const { data } = useContext(TimelineContext);

//   return (
//     <div>
//       <h1 className="text-2xl font-bold mb-4">Timeline</h1>

//       <ul className="space-y-4">
//         {data.map((item, i) => (
//           <li
//             key={i}
//             className="bg-white border border-gray-100 rounded-lg p-4"
//           >
//             <div>
//               {item.name.toLowerCase() === "call" && <PhoneCall />}
//               {item.name.toLowerCase() === "text" && <MessageCircleMore />}
//               {item.name.toLowerCase() !== "call" &&
//                 item.name.toLowerCase() !== "text" && <LucideVideo />}
//             </div>

//             <div>
//               <p>
//                 <strong>Meetup</strong> with {item.name}
//               </p>
//               <p>{item.longDate}</p>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default TimelinePage;

"use client";

import { TimelineContext } from "@/context/TimelineContest";
import { LucideVideo, MessageCircleMore, PhoneCall } from "lucide-react";
import { useContext } from "react";

function TimelinePage() {
  const { data } = useContext(TimelineContext);

  return (
    <div className="my-6 px-4 sm:px-6 lg:px-30">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Timeline</h1>

      <div className="relative">
        <ul className="space-y-4">
          {data.map((item, i) => (
            <li
              key={i}
              className="relative bg-white border border-gray-100 rounded-xl p-4 flex items-start gap-4 hover:shadow-sm transition-shadow"
            >
              {/* Icon Container */}
              <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center shrink-0 border border-gray-50 text-gray-600">
                {item.label.toLowerCase() === "call" && <PhoneCall size={24} />}
                {item.label.toLowerCase() === "text" && (
                  <MessageCircleMore size={24} />
                )}
                {item.label.toLowerCase() !== "call" &&
                  item.label.toLowerCase() !== "text" && (
                    <LucideVideo size={24} />
                  )}
              </div>

              {/* Content */}
              <div className="flex flex-col gap-1">
                <p className="text-sm font-medium text-gray-900">
                  <strong className=" text-lg">Meetup</strong> with{" "}
                  <span className="capitalize">{item.name}</span>
                </p>

                {/* Date Display */}
                <p className="text-xs text-gray-400 font-normal">
                  {item.longDate}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TimelinePage;
