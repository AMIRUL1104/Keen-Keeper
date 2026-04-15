import StatsCard from "@/shared/StatsCard";

function Stats() {
  const statsData = [
    { number: 10, label: "total Friends", style: "" },
    { number: 10, label: "On Track", style: "" },
    { number: 10, label: "Interactions This Month", style: "" },
  ];

  return (
    <div className="  mb-10 font-sans grid grid-cols-2 lg:grid-cols-4 w-full gap-6 max-sm:px-2">
      {statsData.map((data, i) => (
        <StatsCard key={i} number={data.number} label={data.label} />
      ))}

      {/* <div className=" flex items-center justify-center gap-4 flex-col bg-white p-8 text-center rounded-lg shadow-lg">
        <h2 className=" text-3xl font-bold">10</h2>
        <p className=" text-lg font-normal text-[#64748B]">total Friends</p>
      </div>
      <div className=" flex items-center justify-center gap-4 flex-col bg-white p-8 text-center rounded-lg shadow-lg">
        <h2 className=" text-3xl font-bold">10</h2>
        <p className=" text-lg font-normal text-[#64748B]">On Track</p>
      </div>
      <div className=" flex items-center justify-center gap-4 flex-col bg-white p-8 text-center rounded-lg shadow-lg">
        <h2 className=" text-3xl font-bold">10</h2>
        <p className=" text-lg font-normal text-[#64748B]">Need Attention</p>
      </div>
      <div className=" flex items-center justify-center gap-4 flex-col bg-white p-8 text-center rounded-lg shadow-lg">
        <h2 className=" text-3xl font-bold">10</h2>
        <p className=" text-lg font-normal text-[#64748B]">
          Interactions This Month
        </p>
      </div> */}
    </div>
  );
}

export default Stats;
