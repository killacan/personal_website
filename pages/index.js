import Head from 'next/head'
import {
  AiFillLinkedin, 
  AiFillGithub,
  AiFillHtml5,
} from "react-icons/ai";
import {
  SiRubyonrails,
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiCss3,
  SiNodedotjs,
  SiRedux,
  SiMongodb
} from "react-icons/si";
import {
  FaReact,
} from "react-icons/fa"
import Image from 'next/image';
import GameBuddy from '../public/GameBuddy-Landing.png';
import IdleProduction from '../public/Idle-Production-Promo.png';
import TurbinePromo from '../public/Turbine-Promo.png';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Cameron's Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='sm:px-10 md:px-20 lg:px-40 bg-gray-900'>
        <section className=''>
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl font-burtons'> Cameron's Corner</h1>
            <ul className='flex items-center'>
              <li><a href='https://github.com/killacan' target='_blank' className='text-4xl '><AiFillGithub className='hover:scale-125 duration-300'/></a></li>
              <li><a className='bg-gradient-to-r from-blue-800 to-cyan-700 hover:from-cyan-700 hover:to-blue-800 text-white px-4 py-2 rounded-md ml-8' target={'_blank'} href="https://www.linkedin.com/in/cameron-sands-a97183169/">LinkedIn</a></li>
            </ul>
          </nav>
          <div className='xl:flex xl:flex-row-reverse justify-center'>
            <div>
              <div className='text-center p-10'>
                <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl'> Cameron Sands</h2>
                <h3 className='text-2xl py-2 md:text-3xl'> Developer and Designer</h3>
                <p className='text-md py-5 leading-8 text-gray-300 md:text-xl max-w-xl mx-auto'>
                  I am a<span className='text-teal-500'> fullstack software developer </span>
                  and below are my latest projects. Above and below are links 
                  to my <a className='text-blue-500' target={'_blank'} href="https://github.com/killacan"> Github</a> and <a className='text-blue-500' target={'_blank'} href="https://www.linkedin.com/in/cameron-sands-a97183169/"> linkedIn</a>.
                </p>
              </div>

              <div className='text-5xl flex justify-center gap-16 py-3 text-gray-200'>
                <a href='https://github.com/killacan' target='_blank'><AiFillGithub className='hover:scale-125 duration-300'/></a>
                <a href='https://www.linkedin.com/in/cameron-sands-a97183169/' target='_blank'><AiFillLinkedin className='hover:scale-125 duration-300'/></a>
              </div>
            </div>
            {/* <div>
              <div className='relative mx-auto mt-20' >
                <Image src={ProfPhoto} className='rounded-full w-80 h-80 mx-auto md:h-96 md:w-96' />

              </div>
            </div> */}
          </div>
        </section>

        <section>
          <div>
            <h3 className='text-3xl py-1 w-32 hover:scale-110 duration-300 hover:text-teal-500'> Projects </h3>
            <p className='text-md py-2 leading-8 text-gray-300 pb-4'>
              Here are some of my <span className='text-teal-500'> projects</span>, click on them to check them out.
            </p>
          </div>
          <div className='grid 2xl:grid-cols-3 lg:grid-cols-2 lg:gap-10'>
            <div className='text-center shadow-lg border-2 p-2 sm:p-10 rounded-xl w-11/12 sm:w-full my-5 mx-auto hover:scale-105 hover:bg-slate-900 sm:hover:scale-110 duration-300'>
              <Image src={GameBuddy} width={200} height={200} className='mx-auto' />
              <h3 className='text-lg font-medium pt-8 pb-2'>Game Buddy</h3>
              <p className='py-2'>
                Game Buddy is a web application that allows for people
                to discover new communities of gamers. Our project features
                a connection to the Riot API for stat verification in League
                of Legends. It also utilizes websocket for real time
                chat communications and live updates.
              </p>
              <h4 className='py-4 text-teal-600'>Technologies Used</h4>
              <div className='grid grid-cols-2'>
                <p className='text-gray-300 p-1'>React</p>
                <p className='text-gray-300 p-1'>Express</p>
                <p className='text-gray-300 p-1'>MongoDB</p>
                <p className='text-gray-300 p-1'>Node.js</p>
                <p className='text-gray-300 p-1'>WebSocket</p>
              </div>
              <div className='flex justify-center overflow-visible'>
                <div className='py-2'><a className='bg-blue-600 text-white px-4 py-2 rounded-md mx-4 hover:px-5 hover:py-3 hover:mx-3 duration-300' href='https://github.com/killacan/gameBuddy' target={'_blank'}>Source&nbsp;Code</a></div>
                <div className='py-2'><a className='bg-blue-600 text-white px-4 py-2 rounded-md mx-4 hover:px-5 hover:py-3 hover:mx-3 duration-300' href='https://gamebuddy-app.herokuapp.com/' target={'_blank'}>Live&nbsp;Project</a></div>
              </div>
            </div>
            <div className='text-center shadow-lg border-2 p-2 sm:p-10 rounded-xl w-11/12 sm:w-full my-5 mx-auto hover:scale-105 hover:bg-slate-900 sm:hover:scale-110 duration-300'>
              <Image src={IdleProduction} width={200} height={200} className='mx-auto' />
              <h3 className='text-lg font-medium pt-8 pb-2'>Idle Production</h3>
              <p className='py-2'>
                Idle Production is a fun idle game where you can build a massive factory. The game follows a 
                steady progression of upgraded buildings and increasing amounts of money. The game can be played 
                for basically ever. 
              </p>
              <h4 className='py-4 text-teal-600'>Technologies Used</h4>
              <div className='grid grid-cols-2'>
                <p className='text-gray-300 py-1'>JavaScript</p>
                <p className='text-gray-300 py-1'>Node.js</p>
                <p className='text-gray-300 py-1'>Canvas</p>
                <p className='text-gray-300 py-1'>HTML5</p>
              </div>
              <div className='flex justify-center overflow-visible'>
                <div className='py-2'><a className='bg-blue-600 text-white px-4 py-2 rounded-md mx-4 hover:px-5 hover:py-3 hover:mx-3 duration-300' href='https://github.com/killacan/IdleProduction' target={'_blank'}>Source&nbsp;Code</a></div>
                <div className='py-2'><a className='bg-blue-600 text-white px-4 py-2 rounded-md mx-4 hover:px-5 hover:py-3 hover:mx-3 duration-300' href='https://killacan.github.io/IdleProduction//' target={'_blank'}>Live&nbsp;Project</a></div>
              </div>
            </div>
            <div className='text-center shadow-lg border-2 p-2 sm:p-10 rounded-xl w-11/12 sm:w-full my-5 mx-auto hover:scale-105 hover:bg-slate-900 sm:hover:scale-110 duration-300'>
              <Image src={TurbinePromo} width={230} height={200} className='mx-auto' />
              <h3 className='text-lg font-medium pt-8 pb-2'>Turbine</h3>
              <p className='py-2'>
                Turbine is a clone of steam with a working 
                user auth system, a cart for each user, and AWS hosting of all
                images to reduce server load. 
              </p>
              <h4 className='py-4 text-teal-600'>Technologies Used</h4>
              <div className='grid grid-cols-2'>
                <p className='text-gray-300 py-1'>React</p>
                <p className='text-gray-300 py-1'>JavaScript</p>
                <p className='text-gray-300 py-1'>Redux</p>
                <p className='text-gray-300 py-1'>Ruby on Rails</p>
                <p className='text-gray-300 py-1'>PostgreSQL</p>
                <p className='text-gray-300 py-1'>Node.js</p>
              </div>
              <div className='flex justify-center overflow-visible'>
                <div className='py-2'><a className='bg-blue-600 text-white px-4 py-2 rounded-md mx-4 hover:px-5 hover:py-3 hover:mx-3 duration-300' href='https://github.com/killacan/TurbineFullStack' target={'_blank'}>Source&nbsp;Code</a></div>
                <div className='py-2'><a className='bg-blue-600 text-white px-4 py-2 rounded-md mx-4 hover:px-5 hover:py-3 hover:mx-3 duration-300' href='https://steam-turbine.herokuapp.com/' target={'_blank'}>Live&nbsp;Project</a></div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className='lg:flex lg:flex-row'>
            <div className='py-4'>
              <h2 className='text-3xl py-1 w-40 group hover:scale-110 duration-300 hover:text-teal-500'>About <span className='text-teal-500 group-hover:text-white duration-300'>me</span></h2>
              <p className='py-2'>Hello! I am Cameron Sands and I am a passionate <span className='text-teal-500'> fullstack software developer</span>.</p>
              <p className='py-2'><span className='text-teal-500'>Passionate </span>for creating responsive, feature rich websites.</p>
              <p className='py-2'>Tinkerer at heart and <span className='text-teal-500'>love to learn</span> about new things/technologies. I graduated from <span className='text-teal-500'>App Academy</span> and have completed 3 projects. </p>
              <p className='py-2'>I also have prior experience with teaching, Linux, and game development</p>
              <p className='py-2'>A few of my hobbies include Photography, Cybersecurity, ai art generation, and playing the Ukulele.</p>
              <p className='py-2'>If you would like to get in contact with me, reach out on <a className='text-blue-500' target={'_blank'} href="https://www.linkedin.com/in/cameron-sands-a97183169/"> linkedIn</a> or by email at cmsands@tutanota.com.</p>
            </div>
            <div className='flex flex-col justify-center lg:w-1/2'>
              <h2 className='text-4xl flex justify-center pb-10 pt-4 text-teal-500'>Tech Stack</h2>
              <ul className='grid grid-cols-3 gap-10 justify-center'>
                <li className='flex justify-center flex-col'><SiRubyonrails className='hover:scale-125 mx-auto duration-300 text-4xl text-red-700' /><p className='flex justify-center'>Ruby on Rails</p></li>
                <li className='flex justify-center flex-col'><SiJavascript className='hover:scale-125 duration-300 mx-auto text-4xl text-yellow-500' /><p className='flex justify-center'>JavaScript</p></li>
                <li className='flex justify-center flex-col'><FaReact className='hover:scale-125 duration-300 mx-auto text-4xl text-teal-500' /><p className='flex justify-center'>React</p></li>
                <li className='flex justify-center flex-col'><SiNextdotjs className='hover:scale-125 duration-300 mx-auto text-4xl' /><p className='flex justify-center'>NextJS</p></li>
                <li className='flex justify-center flex-col'><SiTailwindcss className='hover:scale-125 duration-300 mx-auto text-4xl text-teal-500' /><p className='flex justify-center'>TailwindCSS</p></li>
                <li className='flex justify-center flex-col'><AiFillHtml5 className='hover:scale-125 duration-300 mx-auto text-4xl text-orange-600'/><p className='flex justify-center'>HTML5</p></li>
                <li className='flex justify-center flex-col'><SiCss3 className='hover:scale-125 duration-300 mx-auto text-4xl text-blue-500'/><p className='flex justify-center'>CSS3</p></li>
                <li className='flex justify-center flex-col'><SiNodedotjs className='hover:scale-125 duration-300 mx-auto text-4xl text-green-700'/><p className='flex justify-center'>NodeJS</p></li>
                <li className='flex justify-center flex-col'><SiRedux className='hover:scale-125 duration-300 mx-auto text-4xl text-indigo-700'/><p className='flex justify-center'>Redux</p></li>
                <li className='flex justify-center flex-col'><SiMongodb className='hover:scale-125 duration-300 mx-auto text-4xl text-green-600'/><p className='flex justify-center'>MongoDB</p></li>
              </ul>
            </div>
          </div>
        </section>
        <nav className='py-10 flex justify-between'>
          <h1 className='text-3xl'> Find me on LinkedIn or Github</h1>
          <ul className='flex items-center'>
            <li><a href='https://github.com/killacan' target='_blank' className='text-4xl'><AiFillGithub className='hover:scale-125 duration-300'/></a></li>
            <li><a className='bg-gradient-to-r from-blue-800 to-cyan-700 hover:from-cyan-700 hover:to-blue-800 text-white px-4 py-2 rounded-md ml-8' target={'_blank'} href="https://www.linkedin.com/in/cameron-sands-a97183169/">LinkedIn</a></li>
          </ul>
        </nav>

      </main>

    </div>
  );
}
