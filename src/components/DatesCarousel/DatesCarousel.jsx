import { useState } from 'react';

const DatesCarousel = () => {
  const [activeEvent, setActiveEvent] = useState(2);

  return (
    <>
      <div className="w-full pt-10 carousel">
        <div id="event1" className="w-full carousel-item">
          <div className="flex flex-col w-full gap-5">
            <div className="flex justify-center gap-16">
              <div className="text-green-900 ">
                <p className="text-5xl font-black">20</p>
                <p className="text-xl font-bold">Jan 24</p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-gray-500 ">Education Session</p>
                <p className="text-lg font-bold max-w-[25ch] leading-5">
                  New Drugs in Oncology: Incorporation Into Practice
                </p>
                <div className="flex items-center gap-2 text-gray-500">
                  <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                  <p>NIENT, Dhaka</p>
                  <div className="w-3 h-3 ml-3 bg-gray-400 rounded-full"></div>
                  <p>8:00 - 1:00 pm</p>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <button className="px-3 py-1 font-bold text-white bg-green-900 min-w-32 hover:bg-green-950">
                  View More
                </button>
                <button className="px-3 py-1 font-bold text-white bg-green-900 min-w-32 hover:bg-green-950">
                  Registration
                </button>
              </div>
            </div>
            <div className="flex justify-center gap-16">
              <div className="text-green-900 ">
                <p className="text-5xl font-black">20</p>
                <p className="text-xl font-bold">Jan 24</p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-gray-500 ">Education Session</p>
                <p className="text-lg font-bold max-w-[25ch] leading-5">
                  New Drugs in Oncology: Incorporation Into Practice
                </p>
                <div className="flex items-center gap-2 text-gray-500">
                  <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                  <p>NIENT, Dhaka</p>
                  <div className="w-3 h-3 ml-3 bg-gray-400 rounded-full"></div>
                  <p>8:00 - 1:00 pm</p>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <button className="px-3 py-1 font-bold text-white bg-green-900 min-w-32 hover:bg-green-950">
                  View More
                </button>
                <button className="px-3 py-1 font-bold text-white bg-green-900 min-w-32 hover:bg-green-950">
                  Registration
                </button>
              </div>
            </div>
          </div>
        </div>
        <div id="event2" className="w-full carousel-item">
          <div className="flex flex-col w-full gap-5">
            <div className="flex justify-center gap-16">
              <div className="text-green-900 ">
                <p className="text-5xl font-black">20</p>
                <p className="text-xl font-bold">Jan 24</p>
              </div>
              <div className="flex flex-col ">
                <p className="gap-1 text-gray-500">Education Session</p>
                <p className="text-lg font-bold max-w-[25ch] leading-5">
                  New Drugs in Oncology: Incorporation Into Practice
                </p>
                <div className="flex items-center gap-2 text-gray-500">
                  <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                  <p>NIENT, Dhaka</p>
                  <div className="w-3 h-3 ml-3 bg-gray-400 rounded-full"></div>
                  <p>8:00 - 1:00 pm</p>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <button className="px-3 py-1 font-bold text-white bg-green-900 min-w-32 hover:bg-green-950">
                  View More
                </button>
                <button className="px-3 py-1 font-bold text-white bg-green-900 min-w-32 hover:bg-green-950">
                  Registration
                </button>
              </div>
            </div>
            <div className="flex justify-center gap-16">
              <div className="text-green-900 ">
                <p className="text-5xl font-black">20</p>
                <p className="text-xl font-bold">Jan 24</p>
              </div>
              <div className="flex flex-col ">
                <p className="gap-1 text-gray-500">Education Session</p>
                <p className="text-lg font-bold max-w-[25ch] leading-5">
                  New Drugs in Oncology: Incorporation Into Practice
                </p>
                <div className="flex items-center gap-2 text-gray-500">
                  <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                  <p>NIENT, Dhaka</p>
                  <div className="w-3 h-3 ml-3 bg-gray-400 rounded-full"></div>
                  <p>8:00 - 1:00 pm</p>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <button className="px-3 py-1 font-bold text-white bg-green-900 min-w-32 hover:bg-green-950">
                  View More
                </button>
                <button className="px-3 py-1 font-bold text-white bg-green-900 min-w-32 hover:bg-green-950">
                  Registration
                </button>
              </div>
            </div>
          </div>
        </div>
        <div id="event3" className="relative w-full carousel-item">
          <div className="flex flex-col w-full gap-5">
            <div className="flex justify-center gap-16">
              <div className="text-green-900 ">
                <p className="text-5xl font-black">20</p>
                <p className="text-xl font-bold">Jan 24</p>
              </div>
              <div className="flex flex-col ">
                <p className="gap-1 text-gray-500">Education Session</p>
                <p className="text-lg font-bold max-w-[25ch] leading-5">
                  New Drugs in Oncology: Incorporation Into Practice
                </p>
                <div className="flex items-center gap-2 text-gray-500">
                  <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                  <p>NIENT, Dhaka</p>
                  <div className="w-3 h-3 ml-3 bg-gray-400 rounded-full"></div>
                  <p>8:00 - 1:00 pm</p>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <button className="px-3 py-1 font-bold text-white bg-green-900 min-w-32 hover:bg-green-950">
                  View More
                </button>
                <button className="px-3 py-1 font-bold text-white bg-green-900 min-w-32 hover:bg-green-950">
                  Registration
                </button>
              </div>
            </div>
            <div className="flex justify-center gap-16">
              <div className="text-green-900 ">
                <p className="text-5xl font-black">20</p>
                <p className="text-xl font-bold">Jan 24</p>
              </div>
              <div className="flex flex-col ">
                <p className="gap-1 text-gray-500">Education Session</p>
                <p className="text-lg font-bold max-w-[25ch] leading-5">
                  New Drugs in Oncology: Incorporation Into Practice
                </p>
                <div className="flex items-center gap-2 text-gray-500">
                  <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                  <p>NIENT, Dhaka</p>
                  <div className="w-3 h-3 ml-3 bg-gray-400 rounded-full"></div>
                  <p>8:00 - 1:00 pm</p>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <button className="px-3 py-1 font-bold text-white bg-green-900 min-w-32 hover:bg-green-950">
                  View More
                </button>
                <button className="px-3 py-1 font-bold text-white bg-green-900 min-w-32 hover:bg-green-950">
                  Registration
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full gap-2 py-2">
        <a
          href="#event1"
          onClick={() => setActiveEvent(1)}
          className={`w-3 h-3 rounded-full ${
            activeEvent === 1 ? 'bg-orange-500' : 'outline outline-orange-500'
          }`}
        ></a>
        <a
          href="#event2"
          onClick={() => setActiveEvent(2)}
          className={`w-3 h-3 rounded-full ${
            activeEvent === 2 ? 'bg-orange-500' : 'outline outline-orange-500'
          }`}
        ></a>
        <a
          href="#event3"
          onClick={() => setActiveEvent(3)}
          className={`w-3 h-3 rounded-full ${
            activeEvent === 3 ? 'bg-orange-500' : 'outline outline-orange-500'
          }`}
        ></a>
      </div>
    </>
  );
};

export default DatesCarousel;
