import { useState } from 'react';

const EventsCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(2);
  return (
    <>
      <div className="w-full carousel">
        <div id="item1" className="w-full carousel-item">
          <div className="flex flex-col gap-2">
            <img
              src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg"
              className="w-full"
            />
            <p className="text-sm text-orange-500 uppercase">Upcoming Event</p>
            <p className="text-xl font-bold text-green-900 uppercase">
              Radiation Therapy of Breast Cancer
            </p>
            <p className="leading-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              rerum sequi nam enim ex vitae omnis deleniti dolor debitis?
              Debitis fuga magni facilis quos quam, temporibus possimus
              voluptatem exercitationem, mollitia nostrum esse et beatae, saepe
              modi at nesciunt vero necessitatibus.
            </p>
            <button className="px-3 py-2 text-white bg-orange-500 rounded max-w-40 shadow-black hover:bg-orange-600 hover:shadow-lg">
              Read More
            </button>
          </div>
        </div>
        <div id="item2" className="w-full carousel-item">
          <div className="flex flex-col gap-2">
            <img
              src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
              className="w-full"
            />
            <p className="text-sm text-orange-500 uppercase">Upcoming Event</p>
            <p className="text-xl font-bold text-green-900 uppercase">
              Radiation Therapy of Breast Cancer
            </p>
            <p className="leading-5 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              rerum sequi nam enim ex vitae omnis deleniti dolor debitis?
              Debitis fuga magni facilis quos quam, temporibus possimus
              voluptatem exercitationem, mollitia nostrum esse et beatae, saepe
              modi at nesciunt vero necessitatibus.
            </p>
            <button className="px-3 py-2 text-white bg-orange-500 rounded max-w-40 shadow-black hover:bg-orange-600 hover:shadow-lg">
              Read More
            </button>
          </div>
        </div>
        <div id="item3" className="relative w-full carousel-item">
          <div className="flex flex-col gap-2">
            <img
              src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg"
              className="w-full"
            />
            <p className="text-sm text-orange-500 uppercase">Upcoming Event</p>
            <p className="text-xl font-bold text-green-900 uppercase">
              Radiation Therapy of Breast Cancer
            </p>
            <p className="leading-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              rerum sequi nam enim ex vitae omnis deleniti dolor debitis?
              Debitis fuga magni facilis quos quam, temporibus possimus
              voluptatem exercitationem, mollitia nostrum esse et beatae, saepe
              modi at nesciunt vero necessitatibus.
            </p>
            <button className="px-3 py-2 text-white bg-orange-500 rounded max-w-40 shadow-black hover:bg-orange-600 hover:shadow-lg">
              Read More
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full gap-2 py-2">
        <a
          href="#item1"
          onClick={() => setActiveSlide(1)}
          className={`w-3 h-3 rounded-full ${
            activeSlide === 1 ? 'bg-orange-500' : 'outline outline-orange-500'
          }`}
        ></a>
        <a
          href="#item2"
          onClick={() => setActiveSlide(2)}
          className={`w-3 h-3 rounded-full ${
            activeSlide === 2 ? 'bg-orange-500' : 'outline outline-orange-500'
          }`}
        ></a>
        <a
          href="#item3"
          onClick={() => setActiveSlide(3)}
          className={`w-3 h-3 rounded-full ${
            activeSlide === 3 ? 'bg-orange-500' : 'outline outline-orange-500'
          }`}
        ></a>
      </div>
    </>
  );
};

export default EventsCarousel;
