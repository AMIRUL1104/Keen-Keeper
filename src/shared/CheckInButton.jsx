"use client";
import { TimelineContext } from "@/context/TimelineContest";
import { useContext } from "react";
import { toast } from "react-toastify";
function CheckInButton({ icon, label, name }) {
  const { data, setData } = useContext(TimelineContext);

  const handleTimeLine = () => {
    // get current date
    const now = new Date();
    const formattedData = {
      longDate: new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
        now,
      ),
    };

    const updated = [...data, { label, name, ...formattedData }];

    // update context data (timeline state)
    setData(updated);

    // keep data in local storage
    localStorage.setItem("timelineData", JSON.stringify(updated));

    // show success toast notification
    toast.success(`Check-in successful for ${name} (${label})!`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <button
      key={label}
      onClick={handleTimeLine}
      className="bg-gray-50 border border-gray-100 rounded-lg py-3 flex flex-col items-center gap-1.5 hover:bg-blue-50 hover:border-blue-100 transition-colors group"
    >
      <span className="text-gray-500 group-hover:text-[#244D3F] transition-colors">
        {icon}
      </span>
      <span className="text-xs text-gray-500 group-hover:text-[#244D3F] transition-colors">
        {label}
      </span>
    </button>
  );
}

export default CheckInButton;
