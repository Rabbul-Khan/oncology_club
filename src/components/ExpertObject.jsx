import { FaPeopleLine } from 'react-icons/fa6';

const ExpertObject = () => {
  return (
    <div className="bg-white p-2 border border-slate-400 flex flex-col items-center hover:bg-orange-500 hover:text-white cursor-pointer">
      <FaPeopleLine className="text-[7rem] " />
      <p className="text-xl uppercase font-bold">Scholarship</p>
      <p className="text-center text-sm">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem
        eius doloremque quasi?
      </p>
    </div>
  );
};

export default ExpertObject;
