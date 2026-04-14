function Stats() {
  return (
    <div className="  mb-10 font-sans grid grid-cols-2 lg:grid-cols-4 w-full gap-6 max-sm:px-2">
      <div className=" flex items-center justify-center gap-4 flex-col bg-white p-8 text-center rounded-lg shadow-lg">
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
      </div>
    </div>
  );
}

export default Stats;
