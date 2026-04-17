"use client";

import { TimelineContext } from "./TimelineContest";

// function TimelineContextProvider({ children }) {
// // get data from localStorage
//   const storedData = localStorage.getItem("timelineData");
//   const initialData = storedData ? JSON.parse(storedData) : [];
//   const [data, setData] = useState(initialData);

//   const datas = { data, setData };
//   return (
//     <TimelineContext.Provider value={datas}>
//       {children}
//     </TimelineContext.Provider>
//   );
// }

import { useState, useEffect } from "react";

function TimelineContextProvider({ children }) {
  const [data, setData] = useState([]); // শুরুতে খালি অ্যারে

  useEffect(() => {
    const storedData = localStorage.getItem("timelineData");
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []); // এটি শুধুমাত্র কম্পোনেন্ট মাউন্ট হওয়ার পর একবার চলবে

  const datas = { data, setData };

  return (
    <TimelineContext.Provider value={datas}>
      {children}
    </TimelineContext.Provider>
  );
}

export default TimelineContextProvider;
