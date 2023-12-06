import { useState, useEffect } from "react";

export default function Sy_submit() {
  const [formData, setFormData] = useState({
    Name: "",
    Contact: "",
    Email: "",
    Subject: "",
    Message: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // send formData to endpoint
      const response = await axios.post("/ENDPOINT_CONTACT?", formData);
      console.log("Response:", response.data);

      // reset formdata after submission
      setFormData({});
    } catch (exception) {
      console.error("Error during submission:", exception);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <div>
        <div>
          <h1>Lets Get started</h1>
          <hr />
        </div>
        <div>
          <form action="">
            <div>
              <label for="name" className="mb-3 block text-base font-medium">
                Name Your Course
              </label>
              <input
                type="text"
                name="name"
                placeholder="Something like - My react course"
                onChange={handleChange}
                value={formData.Name}
                className="border-2 "
              />
            </div>
            <div>
                <p>Select Your Level</p>
                <div className="flex gap-3">
                    <div class="flex items-center">
                        <input id="default-radio-1" type="radio" value="" name="level" class="w-4 h-4"/>
                        <label for="default-radio-1" class="ms-2">Begginer</label>
                    </div>
                    <div class="flex items-center">
                        <input checked id="default-radio-2" type="radio" value="" name="level" class="w-4 h-4"/>
                        <label for="default-radio-2" class="ms-2 ">Intermediate</label>
                    </div>
                    <div class="flex items-center">
                        <input checked id="default-radio-2" type="radio" value="" name="" class="w-4 h-4"/>
                        <label for="default-radio-2" class="ms-2 ">Advanced</label>
                    </div>
                </div>
            </div>
            <div className="">
              <label
                for="syllabus"
                className="mb-3 block text-base font-medium"
              >
                Enter the topics of your Syllabus
              </label>
              <textarea
                rows="4"
                name="syllabus"
                placeholder="Put your syllabus separated by commas"
                onChange={handleChange}
                value={formData.Message}
                className=" bg-slate-300"
              ></textarea>
            </div>
            <div>
                <p>Select Your Pace</p>
                <div className="flex gap-3">
                    <div class="flex items-center">
                        <input id="default-radio-1" type="radio" value="" name="pace" class="w-4 h-4"/>
                        <label for="default-radio-1" class="ms-2">Begginer</label>
                    </div>
                    <div class="flex items-center">
                        <input checked id="default-radio-2" type="radio" value="" name="pace" class="w-4 h-4"/>
                        <label for="default-radio-2" class="ms-2 ">Intermediate</label>
                    </div>
                    <div class="flex items-center">
                        <input checked id="default-radio-2" type="radio" value="" name="pace" class="w-4 h-4"/>
                        <label for="default-radio-2" class="ms-2 ">Advanced</label>
                    </div>
                </div>
            </div>
            <div>
                <button>
                    Make a course
                </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
