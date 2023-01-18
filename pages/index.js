import Head from 'next/head';
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
} from "react-icons/fa";
import Link from 'next/link';
import Image from 'next/image';
import GameBuddy from '../public/GameBuddy-Landing.png';
import IdleProduction from '../public/Idle-Production-Promo-gif.gif';
import TurbinePromo from '../public/Turbine-Promo.png';
// import Myresume from '../public/resume.pdf';
import { useCallback } from 'react';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';

export default function Home() {

  const particlesInit = useCallback(async engine => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
      await console.log(container);
  }, []);

  return (
    <div>
      <Head>
        <title>Cameron's Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='grid main sm:px-10 md:px-20 lg:px-40 bg-[#020530]'>
        <section className='z-10'>
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl font-burtons text-gray-300'> Cameron's Corner</h1>
            <ul className='flex items-center'>
              <li><a href='https://github.com/killacan' target='_blank' className='text-4xl '><AiFillGithub className='hover:scale-125 duration-300'/></a></li>
              <li><a className='bg-gradient-to-r from-blue-800 to-cyan-700 hover:from-cyan-700 hover:to-blue-800 text-white px-4 py-2 rounded-md ml-8' target={'_blank'} href="https://www.linkedin.com/in/cameron-sands-a97183169/">LinkedIn</a></li>
              {/* <li><Link className='bg-gradient-to-r from-blue-800 to-cyan-700 hover:from-cyan-700 hover:to-blue-800 text-white px-4 py-2 rounded-md ml-8' href='/resume' >Resume</Link></li> */}
              {/* <li><a className='bg-gradient-to-r from-blue-800 to-cyan-700 hover:from-cyan-700 hover:to-blue-800 text-white px-4 py-2 rounded-md ml-8' href={resume} target='_blank' >Resume</a></li> */}
            </ul>
          </nav>
          <div className='flex flex-row-reverse justify-center'>
            <div className='bg-black/30'>
              <div className='text-center p-10'>
                <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl'> Cameron Sands</h2>
                <h3 className='text-2xl py-2 text-gray-300 md:text-3xl'> Software Developer</h3>
                <p className='text-md py-5 leading-8 text-gray-300 md:text-xl max-w-xl mx-auto'>
                  I am a<span className='text-teal-500'> fullstack software developer </span>
                  and below are my latest projects. Above and below are links 
                  to my <a className='text-blue-500' target={'_blank'} href="https://github.com/killacan"> Github</a> and <a className='text-blue-500' target={'_blank'} href="https://www.linkedin.com/in/cameron-sands-a97183169/"> linkedIn</a>.
                </p>
              </div>
              <div id='container'></div>
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
            <h3 className='text-gray-300 text-3xl py-1 w-32 hover:scale-110 duration-300 hover:text-teal-500'> Projects </h3>
            <p className='text-md py-2 leading-8 text-gray-300 pb-4'>
              Here are some of my <span className='text-teal-500'> projects</span>, click on them to check them out.
            </p>
          </div>
          <div className='grid 2xl:grid-cols-3 lg:grid-cols-2 lg:gap-10'>
            <div className='gbox'>
              <Image src={GameBuddy} width={350} height={400} className='mx-auto' />
              <h3 className='text-lg font-medium pt-8 pb-2 text-gray-300'>Game Buddy</h3>
              <p className='py-2 text-gray-300'>
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
            <div className='gbox'>
              <Image src={IdleProduction} width={550} height={400} className='mx-auto' />
              <h3 className='text-gray-300 text-lg font-medium pt-8 pb-2'>Idle Production</h3>
              <p className='py-2 text-gray-300'>
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
            <div className='gbox'>
              <Image src={TurbinePromo} width={360} height={400} className='mx-auto' />
              <h3 className='text-lg font-medium pt-8 pb-2'>Turbine</h3>
              <p className='py-2 text-gray-300'>
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
              <p className='py-2 text-gray-300'>I am Cameron Sands and I am a passionate <span className='text-teal-500'> fullstack software developer</span>.</p>
              <p className='py-2 text-gray-300'>As a full stack developer, I have a strong passion for building innovative and dynamic web applications. With a solid foundation in <span className='text-teal-500'>React, Rails, JavaScript, Ruby, and Redux.</span> I am able to create responsive and interactive user interfaces that provide a seamless experience.</p>
              <p className='py-2 text-gray-300'>I have experience working on several projects, including: Game Buddy, an online social platform that facilitates the creation of gaming communities and communication through chat, LlamaChop-Bot, a chatbot that is able to manage Twitch Chat with neural network capabilities, Turbine, a faithful re-representation of Steam utilizing AWS for image hosting and reviews, and Idle Production, an idle game with complex resource management and responsive gameplay. </p>
              <p className='py-2 text-gray-300'>Through my projects I have shown a track record of delivering functional projects, utilizing my skills in HTML5, CSS3, JavaScript, and Ruby on Rails. I am also a great team player and have experience working in a team environment.</p>
              <p className='py-2 text-gray-300'>I am a graduate of <span className='text-teal-500'>App Academy,</span> where I completed a Curriculum of Study in Web Development (Ruby on Rails, JavaScript, React, and Express) and I hold a Bachelor of Arts in Political Science from San Jose State University. I have a <span className='text-teal-500'>strong passion</span> for game development and participated in the Game Dev club and created a game in Unity with C#.</p>
              <p className='py-2 text-gray-300'>When I'm not working on web development projects, I enjoy pursuing a variety of hobbies. I am an avid Ukulele player and enjoy playing music as a way to relax and unwind. I also enjoy power lifting and have been working on building my strength and fitness.</p>
              <p className='py-2 text-gray-300'>I am a big fan of gaming and have been playing games for as long as I can remember. I also enjoy streaming my gameplay on platforms like Twitch, and making YouTube videos about my gaming experiences. I am always looking for new games to play and new ways to engage with the gaming community.</p>
              <p className='py-2 text-gray-300'>Overall, my hobbies and interests complement my professional skills and help me stay <span className='text-teal-500'>creative and engaged</span> in my work. I am always looking for new ways to improve my skills and grow as a developer, and I believe that my hobbies are an important part of that journey.</p>
              <p className='py-2 text-gray-300'></p>
            </div>
            <div className='flex flex-col justify-center lg:w-1/2'>
              <h2 className='text-4xl flex justify-center pb-10 pt-4 text-teal-500'>Tech Stack</h2>
              <ul className='grid grid-cols-3 gap-10 justify-center'>
                <li className='flex justify-center flex-col'><SiRubyonrails className='hover:scale-125 mx-auto duration-300 text-4xl text-red-700' /><p className='flex  justify-center text-gray-300'>Ruby on Rails</p></li>
                <li className='flex justify-center flex-col'><SiJavascript className='hover:scale-125 duration-300 mx-auto text-4xl text-yellow-500' /><p className='flex justify-center text-gray-300'>JavaScript</p></li>
                <li className='flex justify-center flex-col'><FaReact className='hover:scale-125 duration-300 mx-auto text-4xl text-teal-500' /><p className='flex justify-center text-gray-300'>React</p></li>
                <li className='flex justify-center flex-col'><SiNextdotjs className='hover:scale-125 duration-300 mx-auto text-4xl' /><p className='flex justify-center text-gray-300'>NextJS</p></li>
                <li className='flex justify-center flex-col'><SiTailwindcss className='hover:scale-125 duration-300 mx-auto text-4xl text-teal-500' /><p className='flex justify-center text-gray-300'>TailwindCSS</p></li>
                <li className='flex justify-center flex-col'><AiFillHtml5 className='hover:scale-125 duration-300 mx-auto text-4xl text-orange-600'/><p className='flex justify-center text-gray-300'>HTML5</p></li>
                <li className='flex justify-center flex-col'><SiCss3 className='hover:scale-125 duration-300 mx-auto text-4xl text-blue-500'/><p className='flex justify-center text-gray-300'>CSS3</p></li>
                <li className='flex justify-center flex-col'><SiNodedotjs className='hover:scale-125 duration-300 mx-auto text-4xl text-green-700'/><p className='flex justify-center text-gray-300'>NodeJS</p></li>
                <li className='flex justify-center flex-col'><SiRedux className='hover:scale-125 duration-300 mx-auto text-4xl text-indigo-700'/><p className='flex justify-center text-gray-300'>Redux</p></li>
                <li className='flex justify-center flex-col'><SiMongodb className='hover:scale-125 duration-300 mx-auto text-4xl text-green-600'/><p className='flex justify-center text-gray-300'>MongoDB</p></li>
              </ul>
            </div>
          </div>
        </section>

        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    // color: {
                    //     value: "#0d47a1",
                    // },
                },
                fullScreen: {
                  enable: false,
                  zIndex: -1,
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 100,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    collisions: {
                        enable: false,
                    },
                    move: {
                        directions: "none",
                        enable: true,
                        bounce: false,
                        // outModes: {
                        //     default: "bounce",
                        // },
                        random: false,
                        speed: 1,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        />
      </main>
      <section className='sm:px-10 md:px-20 lg:px-40 bg-gray-900'>
        <nav className='py-10 flex justify-between'>
          <h1 className='text-3xl text-gray-300'> Find me on <a className='text-blue-500' href='https://www.linkedin.com/in/cameron-sands-a97183169/' target='_blank'>LinkedIn</a> or <a className='text-blue-500' href='https://github.com/killacan' target='_blank'>Github</a></h1>
          <ul className='flex sm:flex-row flex-col items-center'>
            <li className='p-2'><a href='https://github.com/killacan' target='_blank' className='text-4xl'><AiFillGithub className='hover:scale-125 duration-300'/></a></li>
            <li className='p-2'><a className='bg-gradient-to-r from-blue-800 to-cyan-700 hover:from-cyan-700 hover:to-blue-800 text-white px-4 py-2 rounded-md ml-8' target={'_blank'} href="https://www.linkedin.com/in/cameron-sands-a97183169/">LinkedIn</a></li>
          </ul>
        </nav>
      </section>

    </div>
  );
}
