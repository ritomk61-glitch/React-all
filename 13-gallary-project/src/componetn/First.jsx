import React, { useEffect, useState } from "react";
import axios from "axios";
const First = () => {
  const [datas, setdatas] = useState([]);
  const [Index, setIndex] = useState(1);
  const getdata = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${Index}&limit=14`,
    );
    setdatas(response.data);
    // console.log(response.data)
  };

  useEffect(function () {
    getdata();  
  }, [Index]);

  let isdata = (
    <div>
      <h3 classname="text-2xl ">No data available</h3>
    </div>
  );

  if (datas.length > 0) {
    isdata = datas.map(function (elem, idx) {
      return (
        <div className="p-2">
          <a href={elem.url} target_blank>
            <div className="rounded-lg p-2">
              <img
                key={idx}
                className="h-33 w-50 rounded-lg"
                src={elem.download_url}
              />
              <h2 className="text-2xl font-bold flex justify-center">
                {elem.author}
              </h2>
            </div>
          </a>
        </div>
      );
    });
  }

  return (
    <div className="bg-black h-screen text-white">
      {/* <h1 className="text-6xl fixed text-black ">{Index}</h1> */}
      <div className="flex flex-wrap gap-4">{isdata}</div>

      <div className="flex justify-center gap-8 m-5 text-3xl ">
        <button style = {{opacity:Index ===1 ? 0.5 : 1}}
          className="bg-amber-600 text-black font-bold px-10 rounded-lg "
          onClick={() => {
            if (Index > 1) {
              setIndex(Index - 1);
            }
          }}
        >
          prev
        </button>
         <h1 className="text-4xl  text-white flex   ">{Index}</h1>
        <button className="bg-amber-600 text-black font-bold px-9 rounded-lg "onClick={()=>{
          setIndex(Index+1)
        }}
        >
          next
        </button>
      </div>
    </div>
  );
};

export default First;
