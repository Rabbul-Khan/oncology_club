import Carousel from './components/Carousel';
import ConferenceCard from './components/ConferenceCard';
import DatesCarousel from './components/DatesCarousel/DatesCarousel';
import EventCard from './components/EventCard';
import EventsCarousel from './components/EventsCarousel/EventsCarousel';
import ExpertObject from './components/ExpertObject';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import OurResourcesSection from './components/ResourcesSection/OurResourcesSection';

function App() {
  return (
    <div className="flex min-h-screen text-black bg-blue-200 w-screen">
      <Nav />
      <main className="w-3/4 flex-grow ">
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

        <div className="flex flex-col items-center gap-3 px-5">
          <p className="text-5xl text-center uppercase">
            We are the trusted experts
          </p>
          <p className="text-4xl font-bold text-center text-orange-500 uppercase">
            Keeping things simple
          </p>
          <div className="w-20 h-1 bg-orange-500"></div>
          <div className="grid grid-cols-3 gap-2">
            <ExpertObject />
            <ExpertObject />
            <ExpertObject />
            <ExpertObject />
            <ExpertObject />
            <ExpertObject />
          </div>
        </div>

        <div className="pt-10 px-2 flex flex-col items-center gap-2">
          <p className="text-4xl font-bold text-center text-orange-500 uppercase">
            Our Conference
          </p>
          <div className="w-20 h-1 bg-orange-500"></div>
          <div className="grid grid-cols-4 gap-10  pt-5">
            <ConferenceCard />
            <ConferenceCard />
            <ConferenceCard />
            <ConferenceCard />
          </div>
        </div>

        <div className="mt-10 pt-10 px-20 flex flex-col items-center gap-2 bg-green-400">
          <p className="text-4xl font-bold text-center text-white uppercase">
            Our Archives
          </p>
          <div className="w-20 h-1 bg-white"></div>
          <div className="grid grid-cols-4 gap-8 pt-10 pb-20">
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
