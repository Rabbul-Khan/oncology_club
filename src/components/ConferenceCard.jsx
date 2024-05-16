const ConferenceCard = () => {
  return (
    <div className="relative p-5 max-w-64">
      <div className="">
        <div className="absolute w-0 h-0 border-b-[200px] border-b-sky-500 border-l-[200px]  border-l-transparent rotate-180 top-0 left-0 z-0 rounded-ee-3xl "></div>
        <div className="absolute w-0 h-0 border-b-[200px] border-b-sky-500 border-l-[200px]  border-l-transparent rotate-[270deg] top-0 right-0 z-0 rounded-ee-3xl "></div>
      </div>
      <div className="relative z-10 flex flex-col py-8 bg-white shadow-2xl max-w-80 rounded-3xl shadow-slate-500 px-9">
        <img
          src="https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          width={100}
          height={70}
          className="min-w-full"
        />
        <div className="mt-1 text-sm font-bold text-red-500">Lorem ipsum</div>
        <div className="mt-1 font-bold text-blue-800 uppercase">
          Bangladesh International Conference BICC 2023
        </div>
        <button className="px-4 py-1 mt-3 text-sm text-white bg-red-500 max-w-fit hover:bg-red-700">
          Read More
        </button>
      </div>
    </div>
  );
};

export default ConferenceCard;
