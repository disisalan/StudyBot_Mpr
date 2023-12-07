import {useNavigate} from "react-router-dom"

export default function CourseOutline(){
    const navigate = useNavigate();
    
    function HandleSubmit(){
        navigate('/Course')
    }
    return(
        <>
        <div className="fixed left-14 w-[90%] bottom-10 shadow-2xl rounded-xl bg-white flex border-2 border-indigo-600  justify-between px-12 py-4">
        <div>
        <h1 className="text-2xl">Cloud Computing Course</h1>
        <p className="font-light">Advanced Level , Slow Pace</p>
        </div>
        <div>
            <button onClick={HandleSubmit} className="bg-indigo-600 p-2 rounded-xl text-white font-sans">Start Course</button>
        </div>
        </div>


        <div className="mx-12 min-h-[100vh] pb-36 ">
            <div className="py-12">
                <h1 className="font-poppins  text-4xl font-semibold">Cloud Computing Course</h1>
                <hr className="border-2 mt-4 border-indigo-600 w-[50%]"/>
            </div>
            <div className="flex justify-center  gap-6 flex-wrap">
            <div className=" flex justify-around rounded-xl items-center shadow-xl min-w-[30%] w-max p-4 gap-12 max-w-[40%]">
                <h2 className="font-poppins text-indigo-600 text-2xl text-center font-semibold">
                    UNIT 1
                </h2>
                <div>
                        <ul style={{ listStyleType: 'disc' }}>
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam ut, sunt tempora cum accusamus ducimus cumque</li>
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam ut, sunt tempora cum accusamus ducimus cumque</li>
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam ut, sunt tempora cum accusamus ducimus cumque</li>
                           
                        </ul>
                </div>
            </div>
            <div className=" flex justify-around rounded-xl items-center shadow-xl min-w-[30%] w-max p-4 gap-12 max-w-[40%]">
                <h2 className="font-poppins text-indigo-600 text-2xl text-center font-semibold">
                    UNIT 1
                </h2>
                <div>
                        <ul style={{ listStyleType: 'disc' }}>
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam ut, sunt tempora cum accusamus ducimus cumque</li>
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam ut, sunt tempora cum accusamus ducimus cumque</li>
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam ut, sunt tempora cum accusamus ducimus cumque</li>
                           
                        </ul>
                </div>
            </div>
            <div className=" flex justify-around rounded-xl items-center shadow-xl min-w-[30%] w-max p-4 gap-12 max-w-[40%]">
                <h2 className="font-poppins text-indigo-600 text-2xl text-center font-semibold">
                    UNIT 1
                </h2>
                <div>
                        <ul style={{ listStyleType: 'disc' }}>
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam ut, sunt tempora cum accusamus ducimus cumque</li>
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam ut, sunt tempora cum accusamus ducimus cumque</li>
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam ut, sunt tempora cum accusamus ducimus cumque</li>
                           
                        </ul>
                </div>
            </div>
            <div className=" flex justify-around rounded-xl items-center shadow-xl min-w-[30%] w-max p-4 gap-12 max-w-[40%]">
                <h2 className="font-poppins text-indigo-600 text-2xl text-center font-semibold">
                    UNIT 1
                </h2>
                <div>
                        <ul style={{ listStyleType: 'disc' }}>
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam ut, sunt tempora cum accusamus ducimus cumque</li>
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam ut, sunt tempora cum accusamus ducimus cumque</li>
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam ut, sunt tempora cum accusamus ducimus cumque</li>
                           
                        </ul>
                </div>
            </div>
            <div className=" flex justify-around rounded-xl items-center shadow-xl min-w-[30%] w-max p-4 gap-12 max-w-[40%]">
                <h2 className="font-poppins text-indigo-600 text-2xl text-center font-semibold">
                    UNIT 1
                </h2>
                <div>
                        <ul style={{ listStyleType: 'disc' }}>
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam ut, sunt tempora cum accusamus ducimus cumque</li>
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam ut, sunt tempora cum accusamus ducimus cumque</li>
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam ut, sunt tempora cum accusamus ducimus cumque</li>
                           
                        </ul>
                </div>
            </div>
            <div className=" flex justify-around rounded-xl items-center shadow-xl min-w-[30%] w-max p-4 gap-12 max-w-[40%]">
                <h2 className="font-poppins text-indigo-600 text-2xl text-center font-semibold">
                    UNIT 1
                </h2>
                <div>
                        <ul style={{ listStyleType: 'disc' }}>
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam ut, sunt tempora cum accusamus ducimus cumque</li>
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam ut, sunt tempora cum accusamus ducimus cumque</li>
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam ut, sunt tempora cum accusamus ducimus cumque</li>
                           
                        </ul>
                </div>
            </div>
            </div>
        </div>
        </>
    );
}