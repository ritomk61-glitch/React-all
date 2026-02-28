import React, { useState } from "react";

const Just = () => {
  const [name, setname] = useState("");
  const [passw, setpassw] = useState("");
  const [main, setmain] = useState([]);

  const login = (e) => {
    e.preventDefault();
    // console.log(name,passw);
    const total = [...main];

    total.push({name,passw});
  // console.log(name)
    setmain(total);
    console.log(main);

    setname("");
    setpassw("");
  };
const deletbox= (i) => {
  const newmain =[...main]
  newmain.splice(i,1)

setmain(newmain)

}
  return (
    <div>
      <form
        onSubmit={(e) => {
          login(e);
        }}
        className="shadow-lg w-50% p-8"
      >
        <div className="flex flex-col p-2 m-4 gap-5 ">
          <input
            type="text"
            placeholder="please enter your name"
            className="border w-1/2 p-3 rounded-lg outline-red-400 text-2xl"
            value={name}
            onChange={(e) => {
              setname(e.target.value);
            }}
          />

          <input
            type="password"
            placeholder="enter your password"
            className="border p-3 w-1/2 rounded-lg text-2xl outline-red-400"
            value={passw}
            onChange={(e) => {
              setpassw(e.target.value);
            }}
          />

          <button className="w-1/2 p-2 bg-sky-400 text-white text-2xl rounded-lg">
            Log IN
          </button>
        </div>
      </form>

      <div className="flex gap-9 flex-wrap">
        {main.map(function (v, i) {
          return (
            <div key={i} className="  h-full  w-58  text-3xl rounded-lg shadow-lg flex-warp px-13">
              <h1 className="text-lg p-2">User No:{i}</h1>
              <h1>{v.name}</h1>
              <p className="text-red-600" >{v.passw}</p>
             
             <button onClick={() =>
                 deletbox(i)
             } className="rounded-lg bg-red-300 mt-15 mb-3 ml-27 ">❌</button>
            </div>

          
          );
        })}
      </div>
    </div>
  );
};

export default Just;
