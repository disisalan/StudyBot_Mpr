import { useNavigate } from "react-router-dom";

export default function Semcourse() {
  const navigate = useNavigate();

  return (
    <>
      <div className=" bg-gradient-to-r from-violet-200 to-pink-200 w-full h-[100vh] flex px-24 items-center">
        <div className="text-center">
          <h1 className="text-left text-6xl pb-5 font-semibold font-poppins text-indigo-600">
            Choose a Subject
          </h1>
          <div className="flex gap-3">
            <div
              onClick={() => {
                navigate("/CourseOutline/cg");
              }}
              className="bg-indigo-600 w-[30%] h-60 flex gap-2  justify-center items-center flex-col p-6 rounded-lg"
            >
              <img src="data:image/png;base64,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" />
              <p className="text-white text-lg font-semibold ">
                Computer Graphics
              </p>
            </div>
            <div
              onClick={() => {
                navigate("/CourseOutline/ml");
              }}
              className="bg-indigo-600 w-[30%] h-60 flex gap-2  justify-center items-center flex-col p-6 rounded-lg"
            >
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE80lEQVR4nO2dSYgeRRhAyygY1MSNgAoRBI0bAUUH0SCIG4aIhEQUJUElEMGLNyOCIELOgktmRBBFLyZKFIJe1JMgAT1JEI2gZiZx4h43NDp5Ulo/dL6p3v7prqrp+h7MZf5avqrXS3V1d7UxiqIoijIQgDuAQ6TDNLDe5AppyRjxN3C3yRHSFJKvFOBOYI40yVbK/cAx0RnfAZdF2DishCL/AJtMbgAPe7bQg8AFgeNQKSOA7R4pXwDnmYColALAUx4pnwBnm4CoFAdwAvCiR8peYJkJiEpxACcCr3ukvA8sNQFRKQ7gQs/Iy/IWcJIJiB36ekZfeQ2Jgd2U8yqwJHA8+Y6+gI3UsyNCXPlJAc7wTKfsdcNfyfYI8eV1+AKeF439C7gcOB/42iNlW4QY89hTgOs9J/InCr+vAmbF7zb9gxFiHbYU4GRgn2jgZ3KYC1wB/CTS2cnJeyLEPFwpwJOeLf/GkrTXAb+J9EeB2yPEPTwpwCXAn6JRUzV5bvXk+QO4IVzkA5QCLAE+EI35BjizQd4NruFFjgBXh4l+gFKAh5jPxhb5t6ZwL2UwQ2JgRjTgnTHKeMQjdSb0vZRepQATwBvA93TLclHPQfH7j+Ns3RX3Us41i10KsMVTYFesFnXd5TnkfAmcM0bcz5XcSznLLFYp9oTYowzLY546t3nSfQScNsYA4RXSxvbthjaN2tVzQN8CKzz1TnrS7mk71W7Tuyn6lJlp0yA7Qilyr72LZ8LclNrjCX5qjLKWAu8xECHyeB7svgNwqjtUSR4do6xlbm+3k5MpYQcx69o05DhMYIAVwH4Rht1INpsEaNo/nfVjbCEW4FLgBxGK3dJvMpHJUkhhKl7OVf0sh82hyVZI4RplrotrlK7IWojFntBlTMDHba9RuiJ7IRbgGY+Ut0M/DuRiyXsPKVyjvOmR8oIJjApxAKcAH3ZxjbIQVEhi1ygqJLFrFBXS/BolChUxNkpXS2cFxblGCU5FfI3SNWloNwUFAP99lJAcqIjtOBbSyG4KCgTwuJtSCc0B4Lbe+7GzgjIHFZIWKiQxVEhiqJDEOlqFBEKFJIYKSQwVkhgqJDFUSGKokMRQIYkRfK5PJxerUSGJoUISQ4UsQiHASrcA2y/uzy41dXFvFeYMNf3jZMinYkYvs67svMLcoV6Ib2nCETs7rzB3qBdiD1FlHOm8wtyhXsjhCiGznVeYO9QLeblCyEudV5g71AuZKFlN1f5vovMKc4cG/VPy6sTuTipUqinpw9XiMde5sd+NrKlfETR86+vpsWSokPbULFww7Za8PV2FBKJm416/4A+MtakwRwjdPyqkmuyFAOvccn32eLzWREaF8J+I2hdkVEi4LXJahSR0UgfWOimVbywN+aQebQGz1HFrOhY5FqJSucTfJpViRjI2i745HEJI34tgDonXQgi5qudlYofCUeDK3oU4KQ+olFoZ9wWRIfaUXW6dXeV/bF/sDLZnxAJYTsuHAYBfRZ4oK8wNEmCN6Nx9DfJ8KvJcGybaDGD+l9mebZBnh8gzGSbagQNc4xlArGm4RJM80bZ/iECZJ2NWdOy7LWTajxXLTyWplDa4W5v2nDHl2TN+By5qUdYql0fuKZPuS25BP/e9qABuKflSZ9/YOm+O3f7kKPmWbSj2x25/ckQW8nns9idHxEPWV3rIUhRFUcwA+RfXZxIUZIPKiwAAAABJRU5ErkJggg==" />
              <p className="text-white text-lg font-semibold ">
                Machine Learning
              </p>
            </div>
            <div
              onClick={() => {
                navigate("/CourseOutline/os");
              }}
              className="bg-indigo-600 w-[30%] h-60 flex gap-2  justify-center items-center flex-col p-6 rounded-lg"
            >
              <img src="data:image/png;base64,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" />
              <p className="text-white text-lg font-semibold ">
                Operating Systems
              </p>
            </div>
            <div
              onClick={() => {
                navigate("/CourseOutline/cc");
              }}
              className="bg-indigo-600 w-[30%] h-60 flex gap-2  justify-center items-center flex-col p-6 rounded-lg"
            >
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAADzElEQVR4nO3dTWgdVRjG8aOSSkI/oHRlaVWyUaktFN24cNOVpDEKoUKlBARt3bkspR8LBVvtpkS6TIutC6NQRbCCKO2qi0KlkRiMpmCUdtVquBpFav7lcCeRM9zM/Zo7887p81slcO8w7/vMuXNn7swZ50REREREREREzAN2AIeBz4FZ4A51C8AN4CJwDHgOeKDs9Y0S8CCwD5iiPT6gN4E1ZdcQDeBp4Ls2g2gUzKtl11J5wBiwSH7OAv1l11VJwAFgifxdAx4pu75KAUZ6FMYy/xG4rlcrvxP4APgB+BN7JoH1bdSzFbhdwHp9BfTlGcQAcKbHW1K3TrX71RP4pMD1O5pXGP3AFWz7uFEYwDZgHJhORvQfwHXgPWBvwRvYP8DjeQTiR4ZlvwIbGmxEpw2O6Ik89hnpovwWNgSsdQZRD+MbbPob2NhNcX4Hng7DZBDLkpFh2ZjrFDCTWtiQs3+kvYRt57opsJZamPXRMY59U90UGHBGAQ8Bu4Gb2Pd7N4UGnEHAK8AvVMfdbooNOHvfpiapnqXkIPaZTooOOCOAh4HLVN+nwOZ2Cg84I4AJ4uH3e8+2WnjAGQDsIj7+lM72VooPOAOo/8YQo9mmP2il31FY17NP5cTsnWYNCLiSAW8Tt4XM33PSry60+w0AXxO/N7IaEHAlA+aJ32RWAwKFdr+1c2sx+jmrAQFXMvK9TMeqWlYDAoV2vwFgjvhVKpBvid+PWQ0IFNr9BoCDxO+zrAYEXMmAJ4jfa1kNCDgDgAvEfWC4+kUQ6Vc7A4AngX+J05FmxQecEcB+4uOvAR5oVnjAGQKcIB63gEdbKTrgjAFej+Djy9+p9VirBQecQdT3Kf4ewKqpJfcnDrRTbMAZBjwFHAIuJbeV+YubLfnLH/QBXyQje1MnRQZ60klpnQIxRoEYo0DyBWwBngfeAr7sZAHah+So634qkHwpEGMUiDEKxBgFYowCMUaBGKNAjFEgxigQYxSIMQrEGAVijAIxRoFEGMjyTM6VmHzGMn/vYKqXi50s5GqVpmeyDBhO9XK6k4WcbHBRl0ZJm3zPgO9TvXy/kwUNAv81CGW4Z3PRRsT3KOlVOgzf08GsN/o5FH9L73SklAk9X3DJH2LD/P1yu3FVLLjkmlOxYcYH8lHZayErPvSB7Pn/fynZqA+kD/ip7DUR5lYemQS8rIaUPjnmi+njEf/UACnHu6s9oSymmymrMjKO+95nHbm/pH1KYfMsjrR6Hsbv6EeB88mk/Dp47F4teVzUuaS3+T0GSURERERERERERERExFXHPV64HLMFInKdAAAAAElFTkSuQmCC"/>
              <p className="text-white text-lg font-semibold ">
                Cloud Computing
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <button onClick={()=> {
        navigate('/CourseOutline/cg')
      }}>cg </button>
      <button onClick={()=> {
        navigate('/CourseOutline/ml')
      }}>ml </button>
      <button> </button>
      <button>cg </button>
      <button>cg </button> */}
    </>
  );
}
