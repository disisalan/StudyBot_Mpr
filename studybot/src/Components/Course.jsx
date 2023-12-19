import axios from "axios";
import { useEffect, useState } from "react";

export default function Course(){
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.npoint.io/4051e847b473a3f40ab5")
      .then((res) => setData(res.data))
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
    }, []);
    const [step, setStep] = useState(1);
    const handleNext = () => {
        if(step < data.length && step > 0){
            setStep(step + 1);
        } else {
            setStep(1)
        }
        updateSteps();
    }
    const handlePrevious = () => {
        if(step > 1 && step <= data.length){
            setStep(step - 1);
        } else {
            setStep(data.length)
        }
        updateSteps();
    }
    const updateSteps = () => {
        const stepsArray = [];
        for(let i = 0; i< data.length; i++){
            stepsArray.push(document.getElementById(i));
        }
        stepsArray.forEach((item) => {
            item.classList.add("hidden");
        })
        stepsArray[step-1].classList.remove("hidden");
    }
    return(
        <>
        <div className=" bg-gradient-to-r from-violet-200 to-pink-200">
            <h1 className="p-12 text-3xl font-poppins font-bold">Unit 1</h1>
            <div className="bg-white mx-12 flex flex-col rounded-xl shadow-xl p-6 ">
            {data.map((item,index) => {
                return (

            <div key={index} id={index} className={`flex flex-col    ${index === 1 ? '' : 'hidden'}`}>
                <div>
                    <h3 className="text-2xl font font-semibold">{item.title}</h3>
                    <hr className="border-indigo-600 border-2 mt-2 w-[40%] " />
                </div>
                <div className="pt-7">
                    <p className="max-w-[100ch] text-lg">{item.description}</p>
                </div>
                <div>
                    <p className="text-xl font-semibold pt-8">Some Important Questions from this section</p>
                    <ul className="pt-6">
                    {item.question.map((ques,index) =>{
                        return (

                        <li key={index} className="font-medium">{ques}</li>
                        )
                    })}
                    </ul>
                </div>
            </div>
                )
            })}
            <div className="self-end  flex gap-3">
                    <button className="bg-indigo-600 p-3 font-poppins rounded-md text-white" onClick={handlePrevious}>Previous Topic</button>
                    <button className="bg-indigo-600 p-3 font-poppins rounded-md text-white" onClick={handleNext}>Next Topic</button>
                </div>
            </div>
                
        </div>
        </>
    )
}





// Object { title: "Cloud computing overview", question: (2) […], description: "Cloud computing is described as a model of computing where services are delivered in a manner similar to utilities such as water, electricity, and telephony. Users access services based on their requirements regardless of where the services are hosted. The vision of cloud computing is to make computing services readily available on demand, similar to other utility services. This model is based on the concept of dynamic provisioning, which applies not just to services but also to compute capability, storage, networking, and IT infrastructure in general. Cloud computing allows resources to be made available through the Internet and offered on a pay-per-use basis from cloud computing vendors.The vision of cloud computing is to transform the entire computing industry, making computing services available as utilities in an open environment where computing, storage, and other services are traded as utilities. This model eliminates the need for heavy investment or complex IT infrastructure maintenance by consumers." }