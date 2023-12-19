import React from 'react';
import bg from '../assets/layered-waves-haikei(1).png';
import { useNavigate } from 'react-router-dom';

export default function Homepage() {
    const navigate = useNavigate()
    function Handleclick(){
        navigate('/choice')
    }
  return (
    <>
      <div
        className="bg-gradient-to-r from-violet-200 to-pink-200 w-full h-[100vh] flex px-24 items-center"
      >
        <div className="text-center">
          <h1 className="text-7xl pb-5 font-semibold font-poppins text-indigo-600">CourseCraft.Ai</h1>
          <p>Welcome to CourseCraft.ai – where learning is personalized with AI precision. Say goodbye to generic courses and hello to a tailored educational journey. Our platform uses artificial intelligence to create custom courses on any subject, meeting your unique needs and learning style. Embrace the future of education at CourseCraft.ai. Your personalized learning experience starts now.</p>
          <button className="text-white bg-indigo-600 py-2 px-5 rounded-md mt-3" onClick={Handleclick}>Get started</button>
        </div>
      <img src="https://www.pexels.com/photo/pink-gradient-background-7130560/" alt="" />
      </div>

    </>
  );
}
