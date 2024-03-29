import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
<>
<main className="dark:bg-gray-800 bg-white pt-[11%] pl-[5%] relative overflow-hidden h-screen">
    <div className="bg-white dark:bg-gray-800 flex relative z-20 items-center overflow-hidden">
        <div className="container mx-auto px-6 flex relative py-16">
            <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
                <span className="w-20 h-2 bg-gray-800 dark:bg-white mb-12">
                </span>
                <h1 className="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none dark:text-white text-gray-800">
                   Bhavya
                    <span className="text-5xl sm:text-7xl">
                     Wade
                    </span>
                </h1>
                <p className="text-sm sm:text-base text-gray-700 dark:text-white">
                Welcome to my MERN Stack Developer Portfolio! As an innovative MERN (MongoDB, Express.js, React.js, Node.js) Stack Developer, I craft dynamic web solutions with a blend of creativity and functionality. Explore my portfolio to witness my passion for creating responsive web applications, leveraging the latest technologies and best practices. Let's embark on a journey of innovation and excellence together
                </p>
                <div className="flex mt-8">
                    <Link to="/login" className="uppercase py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400">
                        Get started
                    </Link>
                    <Link to="/user-profile" className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-pink-500 text-pink-500 dark:text-white hover:bg-pink-500 hover:text-white text-md">
                        Read more
                    </Link>
                </div>
            </div>
            <div className="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
                <img src="https://www.svgrepo.com/show/493509/person-who-invests.svg" className="max-w-xs md:max-w-sm m-auto"/>
            </div>
        </div>
    </div>
</main>
</>
  )
}

export default Home