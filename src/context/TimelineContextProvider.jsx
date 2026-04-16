"use client";

import { useState } from "react";
import { TimelineContext } from "./TimelineContest";

function TimelineContextProvider({ children }) {
  const [data, setData] = useState([]);

  const datas = { data, setData };
  return (
    <TimelineContext.Provider value={datas}>
      {children}
    </TimelineContext.Provider>
  );
}

export default TimelineContextProvider;
