"use client";

import { TimelineContext } from "./TimelineContest";

import { useState, useEffect } from "react";

function TimelineContextProvider({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem("timelineData");
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);

  const datas = { data, setData };

  return (
    <TimelineContext.Provider value={datas}>
      {children}
    </TimelineContext.Provider>
  );
}

export default TimelineContextProvider;
