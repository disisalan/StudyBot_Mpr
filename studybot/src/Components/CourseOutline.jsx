import {useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export default function CourseOutline() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.npoint.io/e1cfae6d6efa47c4b0dc")
      .then((res) => setData(res.data))
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  function HandleSubmit() {
    navigate("/Course");
  }
  return (
    <>
      <div className="fixed left-14 w-[90%] bottom-10 shadow-2xl rounded-xl bg-white flex border-2 border-indigo-600  justify-between px-12 py-4">
        <div>
          <h1 className="text-2xl">Cloud Computing Course</h1>
          <p className="font-light">Advanced Level , Slow Pace</p>
        </div>
        <div>
          <button
            onClick={HandleSubmit}
            className="bg-indigo-600 p-2 rounded-xl text-white font-sans"
          >
            Start Course
          </button>
        </div>
      </div>

      <div className=" mx-12 min-h-[100vh] pb-36 ">
        <div className="py-12">
          <h1 className="font-poppins  text-4xl font-semibold">
            Cloud Computing Course
          </h1>
          <hr className="border-2 mt-4 border-indigo-600 w-[50%]" />
        </div>
        <div className="flex flex-wrap gap-4 p-3">
          {data.map((course, key) => {
            return (
              <div key={key}>
                <div className="p-6 w-[600px] rounded-xl min-h-[250px] shadow-xl">
                  <h2 className="font-poppins text-indigo-600 text-2xl text-center font-semibold">
                    UNIT {course.unit}
                  </h2>
                  <div>
                    <ul style={{ listStyleType: "disc" }}>
                    {course.topics.map((topic, key)=>{
                    return(
                        <div key={key}>
                            <li>{topic}</li>
                        </div>
                    )

                    })}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
          </div>
      </div>
    </>
  );
}
