const ConferenceCard = () => {
  return (
    <div className="relative max-w-64 p-5">
      <div className="">
        <div className="absolute w-0 h-0 border-b-[200px] border-b-orange-500 border-l-[200px]  border-l-transparent rotate-180 top-0 left-0 z-0 rounded-ee-3xl "></div>
        <div className="absolute w-0 h-0 border-b-[200px] border-b-orange-500 border-l-[200px]  border-l-transparent rotate-[270deg] top-0 right-0 z-0 rounded-ee-3xl "></div>
      </div>
      <div className="relative max-w-80 flex flex-col  rounded-3xl shadow-2xl shadow-slate-500 bg-white px-9 py-8 z-10">
        <img
          src="https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          width={100}
          height={70}
          className="min-w-full"
        />
        <div className="text-red-500 mt-1 text-sm font-bold">Lorem ipsum</div>
        <div className="text-blue-500 font-bold uppercase mt-1">
          Bangladesh International Conference BICC 2023
        </div>
        <button className="bg-red-500 text-white px-4 py-1 mt-3 max-w-fit text-sm hover:bg-red-700">
          Read More
        </button>
      </div>
    </div>
  );
};

export default ConferenceCard;
