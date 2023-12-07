
import React, { useState } from "react";
import Image from "../assets/Group+around+phone.png";
import{Link,Route,useNavigate} from "react-router-dom";

export default function CreateCourse() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    level: "",
    syllabus: "",
    pace: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target)
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    navigate("/CourseOutline")
    
  };

  return (
    <>
      <div className="p-3 font-sans">
        <div className="flex items-center justify-center pt-5 gap-24">
          <div>
            <div className="p-3">
              <h1 className="font-poppins text-4xl font-semibold">
                Let's Get started
              </h1>
              <hr />
            </div>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 w-max p-5"
              method="POST"
            >
              <div className="flex gap-3">
                <label
                  htmlFor="name"
                  className="p-1 block text-lg font-semibold"
                >
                  Name Your Course
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Something like - My react course"
                  className="border-b-2 border-indigo-600 focus:outline-none focus:bg-blue-100"
                />
              </div>
              <div>
                <p className="p-1 block text-lg font-semibold">
                  Select Your Level
                </p>
                <div className="flex gap-3">
                <div class="flex items-center">
                         <input  type="radio" value="Begginer" name="level" className="w-4 h-" onChange={handleChange}/>
                         <label className="ms-2">Begginer</label>
                     </div>
                     <div class="flex items-center">
                         <input type="radio" value="Intermediate" name="level" className="w-4 h-4"  onChange={handleChange}/>
                         <label  className="ms-2 ">Intermediate</label>
                     </div>
                     <div class="flex items-center">
                         <input type="radio" value="Advanced" name="level" className="w-4 h-4"  onChange={handleChange}/>
                         <label  className="ms-2 ">Advanced</label>
                     </div>
                </div>
              </div>
              <div className="p-1 block text-lg font-semibold">
                <label
                  htmlFor="syllabus"
                  className="p-1 block text-lg font-semibold"
                >
                  Enter the topics of your Syllabus
                </label>
                <textarea
                  rows="4"
                  name="syllabus"
                  value={formData.syllabus}
                  onChange={handleChange}
                  placeholder="Put your syllabus separated by commas"
                  className="border-b-2 border-indigo-600 text-indigo-600 focus:outline-none focus:bg-blue-100"
                ></textarea>
              </div>
              <div>
              <label class="p-1 block text-lg font-semibold" for="file_input">Upload Relevant Files</label>
             <input class="w-[75%] p-1 border-b-2 border-indigo-600 " id="file_input" type="file"/>

              </div>
              <div>
                <p className="p-1 block text-lg font-semibold">
                  Select Your Pace
                </p>
                <div className="flex gap-3">
                     <div class="flex items-center">
                         <input  type="radio" value="Slow" name="pace" class="w-4 h-4" onChange={handleChange} />
                         <label  class="ms-2">Slow</label>
                     </div>
                    <div class="flex items-center">
                         <input type="radio" value="Moderate" name="pace" class="w-4 h-4" onChange={handleChange}/>
                         <label class="ms-2 ">Moderate</label>
                     </div>
                     <div class="flex items-center">
                         <input type="radio" value="Fast" name="pace" class="w-4 h-4" onChange={handleChange}/>
                         <label  class="ms-2 ">Fast</label>
                     </div>
                </div>
              </div>
              <div className="w-full flex justify-center">
                <button
                  onClick={handleSubmit}
                  className="bg-indigo-600 font-sans text-lg font-semibold text-white p-3 rounded-lg"
                >
                  Make a course
                </button>
              </div>
            </form>
          </div>
          <img src={Image} alt="" className="w-[600px] h-[50%]" />
        </div>
      </div>
    </>
  );
}
