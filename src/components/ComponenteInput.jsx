import { Button } from "@material-tailwind/react";
import ButtonAsig from "./Button";


const ComponenteInput = ({password, setPassword, user, setUser}) => {
  console.log();
  return (
    <div class="grid place-items-center">
      <div className="relative flex w-full flex-wrap items-stretch mb-3 grid place-items-center">
        <input
          type="text"
          placeholder="Username"
          className="px-3 py-4 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-base border border-slate-300 outline-none focus:outline-none focus:ring w-50 pr-10"
        onChange={(e)=>setUser(e.target.value)}/>
        
        <span className="z-10 h-full leading-normal font-normal absolute text-center text-slate-300 absolute bg-transparent rounded text-lg items-center justify-center w-8 right-0 pr-3 py-4"></span>
      </div>


      <div className="grid place-items-center relative flex w-full flex-wrap items-stretch mb-3 ">
        <span className="z-10 h-full leading-normal font-normal absolute text-center text-slate-300 absolute bg-transparent rounded text-lg items-center justify-center w-8 pl-3 py-3 ">
        </span>
        <input
          type="password"
          placeholder="************"
          className="px-3 py-4 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-base border border-slate-300 outline-none focus:outline-none focus:ring w-50 pl-10"
          onChange={(e)=>setPassword(e.target.value)}/>
      </div>
      {password==="252525" ? <div> <ButtonAsig/><h1>Buenas {user}</h1> </div> : <p>Ingresa la contrasena correcta</p>}
    </div>
  );
};
export default ComponenteInput;
