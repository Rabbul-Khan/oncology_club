import Carousel from './components/Carousel';
import DatesCarousel from './components/DatesCarousel/DatesCarousel';
import EventsCarousel from './components/EventsCarousel/EventsCarousel';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import OurResourcesSection from './components/ResourcesSection/OurResourcesSection';

function App() {
  return (
    <div className="flex min-h-screen text-black bg-blue-200">
      <Nav />
      <main className="w-full ">
        <Header />
        <Carousel />
        <div className="flex gap-10 px-5 py-10 ">
          <div className="flex flex-col w-1/2 gap-2">
            <h2 className="text-2xl font-bold uppercase ">Upcoming Events</h2>
            <div className="w-10 h-1 bg-orange-500"></div>
            <EventsCarousel />
            <DatesCarousel />
          </div>
          <div className="w-1/2 pb-3 bg-slate-100 ">
            <OurResourcesSection />
          </div>
        </div>
        <div className="flex flex-col items-center gap-3">
          <p className="text-5xl text-center uppercase">
            We are the trusted experts
          </p>
          <p className="text-4xl font-bold text-center text-orange-500 uppercase">
            Keeping things simple
          </p>
          <div className="w-20 h-1 bg-orange-500"></div>
        </div>
      </main>
    </div>
  );
}

export default App;
