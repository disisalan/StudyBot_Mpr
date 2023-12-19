import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Choice() {
    const navigate = useNavigate()
    function Handlenew(){
        navigate('/customcourse')
    }
    function Handleclick(){
        navigate('/semcourse')
    }
  return (
    <>
    <div
        className=" bg-gradient-to-r from-violet-200 to-pink-200 w-full h-[100vh] flex px-24 items-center"
      >
        <div className="text-center">
          <h1 className="text-6xl pb-5 font-semibold font-poppins text-indigo-600">Let's Start Your Journey</h1>
          <div className='flex gap-3'>
            <div onClick={Handlenew} className='bg-indigo-600 w-[30%] h-60 flex gap-2  justify-center items-center flex-col p-6 rounded-lg'>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAD5ElEQVR4nO2dSWsUQRiGOxojJoKIGoNi/A+Ku3gXDwr6EzTm5MFLUPEibuCK/gdX9OD/UHA5uYEKaoxejEvMwUfKlDgpa3C6pnv6m/T7wMDQ6f6q8j1TS1fXJFnmAYaAi8BzYBqRl2mfuwvAyqwdgM3ARO4qiGZ8ADalynAtQzLKkTKYIsQ1MVEO51KEuH5PlMPTFCEawMtjOkWIKBEJMYaEGENCjCEhxpAQY0iIMSSk24UIIYQQqVQ96M11MgmxhYQYQ0KMISHGkBBjSIgxJMQYEmIMCTGGhBhDQuoqJDVu1qUgIbaQEGNIiDHMCxGtISHGkBBjSIgxJMQYEmIMM9O5wipoBAkxhoQYQ0KMYV6IaA0JMYaEGENCjCEhxpAQY5iZzhVWQSNIiDEkxBgSYgzzQkRrSIgxJMQYEmIMCTGGhBjDzHSusAoWDB2mYxVMjZtVDJ1nqCMVTI2bVQyd5ytwFlhaagVT42YVQ7V/nH+X5Qp2G5+Ba8ABYAOwAljgX+79Rv+z6/7cGD+B88B8CUnnLTAK9Odohf3AfuBZk5g3nEi1kHxMAceBgTa6R9d6xnyskLvRlpKzknVhAtiRKiKS4y3Au0g5ZyTk/zwG1hQlo0HKsI8djim7wxPFX96XISOQ4spoZBxYIiH/8t11LTmSO4sc122NjClnJeRfjuf8tM8i57VHgsudoFXRwDWe2g50UEgf8CIIcUxC/jKaJ6HtCvHXjwQhnKAetRB+31X3VyBkAJgMwqyXELiWN5lFCPExbgZhDkkIHKhQyMEgzA0JgQ0VCnH/g7iRBxICy1tJeLs0KWMwOO21hEBfhUIWBqd9cwffUG/6DAmZcgd3uqZCfVluqMuayOoGcD9IwsbEOP9NeMKg/iirG8w8rbM67b2d1Q3gcJCE6xUKuRWEGcvqBrDOyNLJYuBLEfdEXQ3QA7wMErHfwOLiK2BeVkeAE0EynjXdBVKCED/dDT8Up7K6AgxFntqNdVDI0cjTypkHVHUFuBQkxQnaWrYQYDvwI7j8SlZ3gKV+e2cjbgPCcIllrvWbGhoZb3nf71wH2BN+0v1WneGSdpw8iZS3r+iyuhrgciRJrqVsK7CM7ZGWoa4qhtvOCdyLJGvK7w6JLj7m2MxwNDJm4MvsTY09p2FmGhqT8mfzwUieXSn+pm8kMrVtlLGo3N+qywF63WyH5kz6Z+Bu/WmTX6nt869Bf2zUL4eEd+Czuim1jBwAe4GPFI8bQzSApwAsA6426fvz8t23Ck1t2wVYDZxOfIDn1qZO1v4OPCsBvyDpxgj35Zs7wEPgEzDtW5F7747d9ue4r7wlLRT+AuAYpKD73+SVAAAAAElFTkSuQmCC"/>
                <p className='text-white text-lg font-semibold '>Create new Course</p>
            </div>
            <div onClick={Handleclick} className='bg-indigo-600 w-[30%] h-60 flex gap-4 justify-center items-center flex-col p-6 rounded-lg'>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAADMElEQVR4nO2dzU4TARhFZ60Bg25xCc9DQuRBjHveB9GlPoNxbaILNrg2AXTB7pjKxFj+vA690y/e7yRdkXROz522dJrAMDRN0zRN0zQmgG3gNXCBn8Ux3gK7d7iksdxjHOPbGkQWx9zuQa71GJ8Z6+KoB1niaJjpZeouznuQJc7X/prdgyzTgxSjBylGD1KMHqQYPUgxyg3yvzF+8H4n9/DmFgQCAJ7LPby5BYEQUHt4cwsCIaD28OYWBEJA7eHNLQiEgNrDm1sQCAG1hze3IBACag9vbkEgBNQe3tyCQAioPby5BYEQUHt4cwsCIaD28OYWBEJA7eHNLQiEgNrDm1sQCAG1hze3IBACag9vbkEgBNQe3tyCQAioPby5BYEQUHt4cwsCIaD28OYWBEJA7eHNLQiEgNrDm1sQCAG1hze3IBACag9vbkEgBNQe3tyCQAioPby5BYEQUHt4cwsCIaD28OYWBEJA7eHNLQiEgNrDm1sQCAG1hze3IBACag9vbkEgBNQe3tyCQAioPby5BYEQUHt4cwsCIaD28OYWBEJA7eHNLQiEgNrDm1sQCAG1hze3IBACag9vbkEgBNQe3tyCQAioPby5BYEQUHt4cwsCIaD28OYWBEJA7eHNLQiEgNrDm1sQCAG1hze3IBACag9vbkEgBNQe3tyCQAioPby5BYEA6D9gVm6M9/IJ6j3/BYGbDyCatQfoQZbpQYrRgxSjBylGD1KMHqQYPUgxepBi9CDF6EGK0YMUowepxVkPUovjqYOcAvvAxnjbAz5PuaO+uLj0r1d3holjPL0l5Nb4s3+iB+F88cz4NcbE7x/27/ky5sVDB4lnwiAbd0UDNnuQWoM8mWsQVsxQhQnue/fc18FcIVgxQxUmuC9+m9q65X6eAV/nCsGKGaow0f90fAPfHG8HU8Z4SAhWzFCFVT+wVYXgauhD4BNwuQa1y/HYh/e9b0YMAuwAJ9Th5PfnhLRBgMfAF+qxeO98lDjIK+ryMnGQj9TlQ+IgP6jL9zkGuVjjAzyrdoL8jTkGecP6OO5BrgHsjtfi13P9/6ZPaYY5ALaBI66uzc97/b8HGf7kJ3YbhvwzXKfTAAAAAElFTkSuQmCC"/>
                <p className='text-white text-lg font-semibold '>BCA 5th Semester</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
