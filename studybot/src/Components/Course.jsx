import axios from "axios";
import { useEffect, useState } from "react";

export default function Course(){
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.npoint.io/4051e847b473a3f40ab5")
      .then((res) => setData(res.data))
      .then()
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
    }, []);
    return(
        <>
        <div>
            <h1 className="p-12 text-3xl font-poppins font-bold">Unit 1</h1>
            <div id="card" className="flex flex-col rounded-xl shadow-xl mx-12 p-6">
                <div>
                    <h3 className="text-2xl font font-semibold"></h3>
                    <hr className="border-indigo-600 border-2 mt-2 w-[40%] " />
                </div>
                <div className="pt-7">
                    <p className="max-w-[50ch] text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia dolores velit, vero, repellendus eligendi reprehenderit sint eum dolor beatae error tenetur aperiam excepturi hic cum ab autem unde quis nemo.</p>
                </div>
                <div>
                    <p className="text-xl font-semibold pt-8">Some Important Questions from this section</p>
                    <ul className="pt-6">
                        <li className="font-medium">This is question number one</li>
                        <li className="font-medium">This is question number one</li>
                        <li className="font-medium">This is question number one</li>
                    </ul>
                </div>
                <div className="self-end flex gap-3">
                    <button className="bg-indigo-600 p-3 font-poppins rounded-md text-white">Last Topic</button>
                    <button className="bg-indigo-600 p-3 font-poppins rounded-md text-white">Next Topic</button>
                </div>
            </div>
        </div>
        </>
    )
}