const EventCard = () => {
  return (
    <div className="relative flex flex-col rounded-3xl shadow-2xl shadow-slate-400 bg-white p-5">
      <div className="absolute w-0 h-0 left-[2.9rem] border-t-[25px] border-r-[20px] border-t-blue-400 border-r-transparent rotate-180 -top-4"></div>

      <div className="w-32 h-12 absolute top-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-4xl font-bold flex justify-center items-center after:content-[''] after:absolute after:w-32 after:-bottom-3 after:h-6 after:bg-blue-600 after:rounded-[50%] ">
        <div className="z-10">2023</div>
      </div>
      <div className="absolute w-0 h-0 right-[2.8rem] border-t-[18px] border-r-[25px] border-t-blue-800 border-r-transparent rotate-[270deg] -top-[.80rem]"></div>
      <div className="rounded-3xl bg-gradient-to-r from-blue-300  to-blue-700 p-2 text-center flex flex-col gap-2">
        <div className="bg-white rounded-3xl px-7 py-14 ">
          <div>
            <div className="text-blue-800 font-bold text-sm">19 May 2020</div>
            <div className="text-orange-500 uppercase font-bold text-lg pb-3">
              Breast Weekly
            </div>
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500  to-transparent mb-2"></div>
          </div>

          <div>
            <div className="text-blue-800 font-bold text-sm">29 Aug 2020</div>
            <div className="text-orange-500 uppercase font-bold text-lg pb-3">
              Lung Weekly
            </div>
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500  to-transparent mb-2"></div>
          </div>

          <div>
            <div className="text-blue-800 font-bold text-sm">13 Nov 2020</div>
            <div className="text-orange-500 uppercase font-bold text-lg pb-3">
              Breast Cancer Conference
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={() => alert('CLICKED')}
        className="font-extrabold  text-gray-700 rounded-full bg-white flex items-center justify-center h-[110px] w-[110px] text-xl text-center border-[8px] border-blue-500 absolute -bottom-[10%] left-[30%] "
      >
        VIEW MORE
      </button>
    </div>
  );
};

export default EventCard;
