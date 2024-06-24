"use client"

import Image from "next/image";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import Link from "next/link";
import DoneAllIcon from '@mui/icons-material/DoneAll';
import { BsJournalRichtext } from "react-icons/bs";
import { BsEmojiSmile } from "react-icons/bs";
import { TbWorld } from "react-icons/tb";
import { BsClock } from "react-icons/bs";
import { BiBasketball } from "react-icons/bi";
import { RiWindowLine } from "react-icons/ri";
import { RiCodeBoxLine } from "react-icons/ri";
import { FaCreativeCommonsBy } from "react-icons/fa";
import { FaRegCirclePlay } from "react-icons/fa6";
import { RiSearchEyeLine } from "react-icons/ri";
import { RiTodoLine } from "react-icons/ri";
import { FiMapPin } from "react-icons/fi";
import { RiBarChartGroupedFill } from "react-icons/ri";
import { RiContactsBookLine } from "react-icons/ri";
import { RiDiscLine } from "react-icons/ri";
import { RiCalendarEventLine } from "react-icons/ri";
import { RiAdvertisementFill } from "react-icons/ri";
import { RiMailSendLine } from "react-icons/ri";
import { RiPhoneLine } from "react-icons/ri";

import { motion } from 'framer-motion';
import CountMotion from "@/components/CountMotion";

export default function Home() {

  const [state, setState] = useState(false);
  const [revealed, setRevealed] = useState(null);
  const client = [
    { src: '/client-1.png', alt: 'client-1' },
    { src: '/client-2.png', alt: 'client-2' },
    { src: '/client-3.png', alt: 'client-3' },
    { src: '/client-4.png', alt: 'client-4' },
    { src: '/client-5.png', alt: 'client-5' },
    { src: '/client-6.png', alt: 'client-6' },
  ];

  const handleClick = (index: any) => {
    setRevealed(index);
  }


  return (
    <main className="flex min-h-screen flex-col m-0 p-0 bg-white w-[100vw]">
      <nav className="w-[100vw] h-[100px] flex flex-row fixed bg-white shadow-md z-10">
        <div className="w-[40%] h-[100%] flex justify-start items-center">
          <Image src={'/logo.png'} alt="logo" width={'60'} height={'60'} className="lg:ml-[110px] md:ml-[70px] sm:ml-[50px] ml-[30px]" />
          <h1 className=" font-raleway font-bold text-3xl text-blue-800">AKESHYA</h1>
        </div>
        <div className="w-[60%] h-[100%] flex flex-row justify-end items-center">
          <ul className="lg:flex ;g:flex-row lg:mx-10 hidden">
            <li className="mx-2 font-open_sans flex justify-center items-center">Home</li>
            <li className="mx-2 font-open_sans flex justify-center items-center">About</li>
            <li className="mx-2 font-open_sans flex justify-center items-center">Services</li>
            <li className="mx-5 flex justify-center items-center">
              <button className="w-[auto] h-[auto] rounded-3xl py-2 px-5 bg-blue-800 text-center text-white font-open_sans hover:bg-sky-400">Contact us</button>
            </li>
          </ul>
          <div className="block lg:hidden">
            <MenuIcon onClick={() => setState(!state)} className='menuIcon lg:mr-[110px] md:mr-[70px] sm:mr-[50px] mr-[30px]' />
            {
              state && <div className="w-[100vw] h-[100vh] fixed top-0 left-0 z-10 bg-opacity-100 bg-black backdrop-blur-sm">
                <CloseIcon className="text-white ml-[93vw] mt-2" onClick={() => setState(false)} />
                <ul className="w-[95vw] h-[90vh] bg-white shadow-md absolute top-10 right-5 rounded-md">
                  <li className="my-5 mx-5 font-open_sans w-[100%]">Home</li>
                  <li className="my-5 mx-5 font-open_sans w-[100%]">About</li>
                  <li className="my-5 mx-5 font-open_sans w-[100%]">Services</li>
                  <li className="my-5 mx-5 font-open_sans w-[100%]">
                    <button className="w-[90vw] h-[auto] rounded-3xl py-2 bg-blue-800 text-start px-5 text-white font-open_sans hover:bg-sky-400">Contact us</button>
                  </li>
                </ul>
              </div>
            }

          </div>
        </div>
      </nav>


      <div className="w-[100vw] h-[auto] flex flex-col lg:flex-row flex-wrap mt-24">
        <div className="w-[100%] h-[400px] flex flex-col lg:w-[50%] justify-center items-center order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="w-[100%] h-[auto] flex justify-start items-center flex-col px-3 sm:px-24">
            <h1
              className="w-[100%] font-raleway font-bold md:text-5xl text-3xl text-blue-900"
            >Grow your business with Akeshya</h1>
            <h2 className="w-[100%] font-raleway font-medium md:text-xl text-xl text-gray-600 lg:mt-5">We are team of talented website designers, developers & digital marketeers</h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="w-[100%] h-[auto] flex justify-start items-center px-3 sm:px-24 mt-10">
            <button className="w-[auto] h-[auto] px-8 py-2 border-2 border-blue-700 rounded-full font-raleway font-medium text-blue-800 text-lg">Get Started</button>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-[100%] h-[auto] flex lg:w-[50%] justify-center items-center order-1 lg:order-2">
          <Image src={'/hero-img.png'} alt="hero-img" width={'600'} height={'600'} className="px-5 py-5 lg:pl-0 animate-oscillate-y" />
        </motion.div>

      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-[100vw] max-h-[300px] flex flex-col lg:flex-row flex-wrap justify-between items-center px-24 bg-blue-50">

        {
          client.map((img, idx) =>
            <div className="w-[100px] h-[100px] flex justify-center items-center" key={idx}>
              <Image
                src={`${img.src}`}
                alt={`${img.alt}`}
                width={'70'}
                height={'70'}
                className={`${revealed === idx ? 'filter-none' : 'grayscale'}`}
                onClick={() => handleClick(idx)}
              />
            </div>
          )
        }

      </motion.div>

      <div className="w-[100vw] h-[auto] flex flex-col justify-start items-center mt-14">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-[100%] flex justify-center items-center">
          <span className="w-[50px] h-[2px] bg-blue-900 mx-3 rounded-md"></span>
          <h2 className="font-raleway text-3xl font-bold">ABOUT US</h2>
          <span className="w-[50px] h-[2px] bg-blue-900 mx-3 rounded-md"></span>
        </motion.div>
        <div className="w-[100%] flex flex-col lg:flex-row justify-center items-center mt-7">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="w-[100%] lg:w-[50%] lg:h-[350px] h-[auto] flex flex-col justify-start items-start lg:mt-10 lg:ml-24 lg:mr-10 md:px-20 sm:px-3 px-3 lg:p-0">

            <p className=" font-raleway font-medium text-medium text-start py-3">
              We are Akeshya&lsquo; a firm that specializes in web design and marketing. We help transform ideas into reality with a team of passionate graphic designers, web developers, and seasoned marketing advisors.
            </p>
            <ul>
              <li className="flex flex-row justify-start items-start my-2"> <DoneAllIcon className="mx-2 text-blue-900" />We started with a simple idea: do what is best for the client.</li>

              <li className="flex flex-row justify-start items-start my-2"> <DoneAllIcon className="mx-2 text-blue-900" />Our methodical and individual approach to each project delivers the finest possible results for your media.</li>

              <li className="flex flex-row justify-start items-start my-2"> <DoneAllIcon className="mx-2 text-blue-900" />Our day-to-day work is to solve your problems utilising the most up-to-date, practical adaptive technology, and we have a lot of fun doing it.</li>

            </ul>
          </motion.div>
          <motion.div 
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-[100%] lg:w-[50%] lg:h-[350px] h-[auto] flex flex-col justify-start items-start lg:mt-10 lg:ml-10 lg:mr-24 md:px-20 sm:px-3 px-3 lg:p-0">
            <p className=" font-raleway font-medium text-medium text-start py-3">
              We are professional but we are also friendly and we will always pay attention to your concerns. We expect to work with innovative people that have an open mind and are dedicated to making every idea a reality. We want to hear from you if you are interested in SEO have Web Development ideas or require a graphic designer who can match your goals.
            </p>
            <Link href={'#'} className="w-[150px] h-[auto] px-5 py-2 border-2 border-blue-900 text-blue-900 text-center rounded-full font-raleway font-semibold">Learn More</Link>
          </motion.div>
        </div>

      </div>

      <div className="w-[100vw] h-[auto] lg:h-[500px] flex flex-col lg:flex-row mt-10">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/2 h-[auto] flex justify-center items-start py-10 px-5">
          <Image src={'/counts-img.svg'} alt="count-img" width={500} height={500} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 h-[auto] flex flex-col md:flex-row md:flex-wrap lg:justify-center justify-start lg:items-start  items-start md:mt-7 sm:my-10 lg:mt-0">
          <div className="w-1/2 h-[60px] flex flex-col justify-center items-start md:mt-10 md:mb-10 sm:my-7 pl-28 lg:px-0 my-10">
            <div className="flex flex-row justify-center items-center lg:ml-32 xl:ml-0">
              <BsEmojiSmile className="w-[35px] h-[35px] mr-3 font-normal text-blue-900" />
              <span className="text-4xl text-center font-bold"><CountMotion value={3835039} speed={1}/></span>
            </div>
            <p className="lg:ml-44 xl:ml-12 ml-12 font-raleway text-slate-500"><strong className="text-black">Organic Reach</strong> (Global)</p>
          </div>

          <div className="w-1/2 h-[60px] flex flex-col justify-center items-start md:mt-10 md:mb-10 sm:my-7 pl-28 lg:px-0 my-10">
            <div className="flex flex-row justify-center items-center lg:ml-8 xl:ml-0">
              <BsJournalRichtext className="w-[35px] h-[35px] mr-3 font-normal text-blue-900" />
              <span className="text-4xl text-center font-bold"><CountMotion value={85} speed={1}/></span>
            </div>
            <p className="lg:ml-20 xl:ml-12 ml-12 font-raleway text-slate-500"><strong className="text-black">Campaigns</strong></p>
          </div>

          <div className="w-1/2 h-[60px] flex flex-col justify-center items-start md:mt-10 md:mb-10 sm:my-7 pl-28 lg:px-0 my-10">
            <div className="flex flex-row justify-center items-center lg:ml-32 xl:ml-0">
              <BsClock className="w-[35px] h-[35px] mr-3 font-normal text-blue-900" />
              <span className="text-4xl text-center font-bold"><CountMotion value={14081} speed={1}/></span>
            </div>
            <p className="lg:ml-44 xl:ml-12 ml-12 font-raleway text-slate-500"><strong className="text-black">Watching Hours</strong> (Asia)</p>
          </div>

          <div className="w-1/2 h-[60px] flex flex-col justify-center items-start md:mt-10 md:mb-10 sm:my-7 pl-28 lg:px-0 my-10">
            <div className="flex flex-row justify-center items-center lg:ml-8 xl:ml-0">
              <TbWorld className="w-[35px] h-[35px] mr-3 font-normal text-blue-900" />
              <span className="text-4xl text-center font-bold"><CountMotion value={17} speed={1}/></span>
            </div>
            <p className="lg:ml-20 xl:ml-12 ml-12 font-raleway text-slate-500"><strong className="text-black">Excellent CTR</strong> %(Asia)</p>
          </div>
        </motion.div>
      </div>

      <div className="w-[100vw] h-[auto] flex flex-col justify-start items-center mt-5">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-[100%] flex justify-center items-center">
          <span className="w-[50px] h-[2px] bg-blue-900 mx-3 rounded-md"></span>
          <h2 className="font-raleway text-3xl font-bold">SERVICES</h2>
          <span className="w-[50px] h-[2px] bg-blue-900 mx-3 rounded-md"></span>
        </motion.div>
        <motion.div 
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}>
        <p className="font-raleway font-medium text-medium mt-2 mx-5 text-slate-600">Akeshya will serve as your consultant and development partner to help you turn your idea into a reality.</p>
        </motion.div>
        

        <div className="w-full h-[auto] flex flex-wrap justify-center items-center">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: .2 }}
            className="relative lg:w-[250px] lg:h-[400px] w-3/4 h-[450px] md:w-3/4 md:h-[300px] sm:h-[350px] bg-white overflow-hidden group shadow-lg mr-5 my-10">
            <div className="absolute top-[-75px] right-[-75px] w-[150px] h-[150px] bg-blue-50 group-hover:bg-blue-700 rounded-full transition-all duration-500 ease-out group-hover:top-48 group-hover:-right-96 right group-hover:w-[600px] group-hover:h-[600px] group-hover:translate-x-[-50%] group-hover:translate-y-[-50%]"></div>

            <div className="w-[60px] h-[60px] rounded-full bg-blue-700 absolute top-5 left-5 group-hover:bg-white flex justify-center items-center">
              <BiBasketball className="w-[30px] h-[30px] text-white group-hover:text-blue-800" />
            </div>

            <p className="font-raleway font-semibold text-xl group-hover:text-white absolute top-24 mx-5">Design</p>

            <p className="font-raleway font-medium text-medium text-slate-600 group-hover:text-white absolute top-36 mx-5">Our web design services can assist you in reclaiming your company online image. Your business will flourish on the Internet thanks to the combination of style and technology we provide as well as our experience.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: .4 }}
            className="relative lg:w-[250px] lg:h-[400px] w-3/4 h-[450px] md:w-3/4 md:h-[300px] sm:h-[350px] bg-white overflow-hidden group shadow-lg mr-5 my-10">
            <div className="absolute top-[-75px] right-[-75px] w-[150px] h-[150px] bg-blue-50 group-hover:bg-blue-700 rounded-full transition-all duration-500 ease-out group-hover:top-48 group-hover:-right-96 right group-hover:w-[600px] group-hover:h-[600px] group-hover:translate-x-[-50%] group-hover:translate-y-[-50%]"></div>

            <div className="w-[60px] h-[60px] rounded-full bg-blue-700 absolute top-5 left-5 group-hover:bg-white flex justify-center items-center">
              <BiBasketball className="w-[30px] h-[30px] text-white group-hover:text-blue-800" />
            </div>

            <p className="font-raleway font-semibold text-xl group-hover:text-white absolute top-24 mx-5">Dvelopment</p>

            <p className="font-raleway font-medium text-medium text-slate-600 group-hover:text-white absolute top-36 mx-5">Our development team can construct platforms to help your business thrive by creating powerful customised solutions tailored to your particular requirements. Akeshya makes use of established and effective web development tools.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: .6 }}
            className="relative lg:w-[250px] lg:h-[400px] w-3/4 h-[450px] md:w-3/4 md:h-[300px] sm:h-[350px] bg-white overflow-hidden group shadow-lg mr-5 my-10">
            <div className="absolute top-[-75px] right-[-75px] w-[150px] h-[150px] bg-blue-50 group-hover:bg-blue-700 rounded-full transition-all duration-500 ease-out group-hover:top-48 group-hover:-right-96 right group-hover:w-[600px] group-hover:h-[600px] group-hover:translate-x-[-50%] group-hover:translate-y-[-50%]"></div>

            <div className="w-[60px] h-[60px] rounded-full bg-blue-700 absolute top-5 left-5 group-hover:bg-white flex justify-center items-center">
              <BiBasketball className="w-[30px] h-[30px] text-white group-hover:text-blue-800" />
            </div>

            <p className="font-raleway font-semibold text-xl group-hover:text-white absolute top-24 mx-5">Marketing</p>

            <p className="font-raleway font-medium text-medium text-slate-600 group-hover:text-white absolute top-36 mx-5">A beautiful website is the foundation of effective marketing. Our customers achieve success where it counts—in the real world—by combining our proven approach with our passion for improving conversions and increasing ROI.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: .8 }}
            className="relative lg:w-[250px] lg:h-[400px] w-3/4 h-[450px] md:w-3/4 md:h-[300px] sm:h-[350px] bg-white overflow-hidden group shadow-lg mr-5 my-10">
            <div className="absolute top-[-75px] right-[-75px] w-[150px] h-[150px] bg-blue-50 group-hover:bg-blue-700 rounded-full transition-all duration-500 ease-out group-hover:top-48 group-hover:-right-96 right group-hover:w-[600px] group-hover:h-[600px] group-hover:translate-x-[-50%] group-hover:translate-y-[-50%]"></div>

            <div className="w-[60px] h-[60px] rounded-full bg-blue-700 absolute top-5 left-5 group-hover:bg-white flex justify-center items-center">
              <BiBasketball className="w-[30px] h-[30px] text-white group-hover:text-blue-800" />
            </div>

            <p className="font-raleway font-semibold text-xl group-hover:text-white absolute top-24 mx-5">Support</p>

            <p className="font-raleway font-medium text-medium text-slate-600 group-hover:text-white absolute top-36 mx-5">Since the beginning, we at Akeshya have specialised in website maintenance. We recognise the significance of having your business online 24 hours a day seven days a week and we have created a system to ensure that we are always available. </p>
          </motion.div>




        </div>


      </div>

      <div className="w-[100vw] h-[auto] flex flex-col justify-start items-center mt-5">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-[100%] flex justify-center items-center">
          <span className="w-[50px] h-[2px] bg-blue-900 mx-3 rounded-md"></span>
          <h2 className="font-raleway text-3xl font-bold">OUR PROCESS</h2>
          <span className="w-[50px] h-[2px] bg-blue-900 mx-3 rounded-md"></span>
        </motion.div>
        <motion.div 
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}>
        <p className="font-raleway font-medium text-medium mt-2 mx-5 text-slate-600">Over the years we have evolved a tested method for attaining achievement for each one of our clients.</p></motion.div>

        <div className="w-full h-[auto] flex flex-wrap justify-center items-center">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="w-[600px] lg:h-[200px] md:h-[200px] sm:h-[200px] h-[300px] flex justify-start items-center flex-col shadow-lg mt-32 mx-5 rounded-md bg-gray-100 group hover:bg-blue-800">
            <p className="font-raleway font-semibold text-xl group-hover:text-white mx-5 mt-8 mb-3">1. Planning</p>

            <p className="font-raleway font-medium text-medium text-slate-600 group-hover:text-white mx-5">We help you turn all of your ideas into a digital product that meets all of your requirements. We begin each project by determining its scope and needs. This is done by collaborating closely with you to ensure that we&apos;re all on the same page.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="w-[600px] lg:h-[200px] md:h-[200px] sm:h-[200px] h-[300px] flex justify-start items-center flex-col shadow-lg mt-32 mx-5 rounded-md bg-gray-100 group hover:bg-blue-800">
            <p className="font-raleway font-semibold text-xl group-hover:text-white mx-5 mt-8 mb-3">2. Design</p>

            <p className="font-raleway font-medium text-medium text-slate-600 group-hover:text-white mx-5"> We build our websites carefully through a series of workshops, wire-framing, and user experience (UX) sessions, resulting in a site that reinforces trust, conveys important brand messaging, and provides a return on innovation.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="w-[600px] lg:h-[200px] md:h-[200px] sm:h-[200px] h-[300px] flex justify-start items-center flex-col shadow-lg mt-32 mx-5 rounded-md bg-gray-100 group hover:bg-blue-800">
            <p className="font-raleway font-semibold text-xl group-hover:text-white mx-5 mt-8 mb-3">3. Development</p>

            <p className="font-raleway font-medium text-medium text-slate-600 group-hover:text-white mx-5">We provide extensive front-end and back-end development that allows your idea to stand alone. Our in-house developers work side-by-side with the artistic team to seek out natural breakpoints inside the content and order practicality based on acknowledged statistics.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="w-[600px] lg:h-[200px] md:h-[200px] sm:h-[200px] h-[300px] flex justify-start items-center flex-col shadow-lg mt-32 mx-5 rounded-md bg-gray-100 group hover:bg-blue-800">
            <p className="font-raleway font-semibold text-xl group-hover:text-white mx-5 mt-8 mb-3">4. Marketing</p>

            <p className="font-raleway font-medium text-medium text-slate-600 group-hover:text-white mx-5">We come up with ideas and campaigns to help your business prosper online. Our campaigns and virtual approach have a verified tune report of accomplishing brilliant results, gathering new leads and site visitors in your website and assist them convert. </p>
          </motion.div>













        </div>


      </div>

      <div className="w-[100vw] h-[auto] flex flex-col justify-start items-center mt-32">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-[100%] flex justify-center items-center">
          <span className="w-[50px] h-[2px] bg-blue-900 mx-3 rounded-md"></span>
          <h2 className="font-raleway text-3xl font-bold">OUR CORE FEATURES</h2>
          <span className="w-[50px] h-[2px] bg-blue-900 mx-3 rounded-md"></span>
        </motion.div>

        <motion.div 
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}>
        <p className="font-raleway font-medium text-medium mt-2 mx-5 text-slate-600">Akeshya is a forward-thinking and intelligent design firm that is technically and creatively capable of transforming your brand into its best digital self. Our approach to design and development results in compelling, engaging branding and immersive digital experiences that provide a value for money..</p></motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-[100%] h-[auto] flex flex-wrap justify-center items-center px-20">
          <div className="w-[300px] h-[60px] flex justify-start items-center shadow-md bg-gray-100 mx-5 pl-3 my-5">
            <RiWindowLine className="w-[30px] h-[30px] text-yellow-400 mx-2 font-bold" />
            <p className="font-raleway font-bold text-medium">Web Design</p>
          </div>

          <div className="w-[300px] h-[60px] flex justify-start items-center shadow-md bg-gray-100 mx-5 pl-3 my-5">
            <RiCodeBoxLine className="w-[30px] h-[30px] text-blue-500 mx-2 font-bold" />
            <p className="font-raleway font-bold text-medium">Development</p>
          </div>

          <div className="w-[300px] h-[60px] flex justify-start items-center shadow-md bg-gray-100 mx-5 pl-3 my-5">
            <FaCreativeCommonsBy className="w-[30px] h-[30px] text-pink-700 mx-2 font-bold" />
            <p className="font-raleway font-bold text-medium">Development</p>
          </div>

          <div className="w-[300px] h-[60px] flex justify-start items-center shadow-md bg-gray-100 mx-5 pl-3 my-5">
            <FaRegCirclePlay className="w-[30px] h-[30px] text-purple-400 mx-2 font-bold" />
            <p className="font-raleway font-bold text-medium">Media buying</p>
          </div>

          <div className="w-[300px] h-[60px] flex justify-start items-center shadow-md bg-gray-100 mx-5 pl-3 my-5">
            <RiSearchEyeLine className="w-[30px] h-[30px] text-sky-400 mx-2 font-bold" />
            <p className="font-raleway font-bold text-medium">Search engine</p>
          </div>

          <div className="w-[300px] h-[60px] flex justify-start items-center shadow-md bg-gray-100 mx-5 pl-3 my-5">
            <RiTodoLine className="w-[30px] h-[30px] text-orange-400 mx-2 font-bold" />
            <p className="font-raleway font-bold text-medium">Brand strategy</p>
          </div>

          <div className="w-[300px] h-[60px] flex justify-start items-center shadow-md bg-gray-100 mx-5 pl-3 my-5">
            <FiMapPin className="w-[30px] h-[30px] text-yellow-400 mx-2 font-bold" />
            <p className="font-raleway font-bold text-medium">Local search marketing</p>
          </div>

          <div className="w-[300px] h-[60px] flex justify-start items-center shadow-md bg-gray-100 mx-5 pl-3 my-5">
            <RiBarChartGroupedFill className="w-[30px] h-[30px] text-blue-700 mx-2 font-bold" />
            <p className="font-raleway font-bold text-medium">Lead Tracking & Management</p>
          </div>

          <div className="w-[300px] h-[60px] flex justify-start items-center shadow-md bg-gray-100 mx-5 pl-3 my-5">
            <RiContactsBookLine className="w-[30px] h-[30px] text-yellow-600 mx-2 font-bold" />
            <p className="font-raleway font-bold text-medium">Contact management</p>
          </div>

          <div className="w-[300px] h-[60px] flex justify-start items-center shadow-md bg-gray-100 mx-5 pl-3 my-5">
            <RiDiscLine className="w-[30px] h-[30px] text-red-700 mx-2 font-bold" />
            <p className="font-raleway font-bold text-medium">Media management</p>
          </div>

          <div className="w-[300px] h-[60px] flex justify-start items-center shadow-md bg-gray-100 mx-5 pl-3 my-5">
            <RiCalendarEventLine className="w-[30px] h-[30px] text-orange-700 mx-2 font-bold" />
            <p className="font-raleway font-bold text-medium">Social scheduling</p>
          </div>

          <div className="w-[300px] h-[60px] flex justify-start items-center shadow-md bg-gray-100 mx-5 pl-3 my-5">
            <RiAdvertisementFill className="w-[30px] h-[30px] text-green-400 mx-2 font-bold" />
            <p className="font-raleway font-bold text-medium">Ad retargeting</p>
          </div>
        </motion.div>
      </div>

      <div className="w-[100vw] h-[auto] flex flex-col justify-start items-center mt-32 mb-20">
        <div className="w-[100%] flex justify-center items-center">
          <span className="w-[50px] h-[2px] bg-blue-900 mx-3 rounded-md"></span>
          <h2 className="font-raleway text-3xl font-bold">CONTACT US</h2>
          <span className="w-[50px] h-[2px] bg-blue-900 mx-3 rounded-md"></span>
        </div>

        <div className="w-full h-[auto] flex lg:flex-row md:flex-col flex-col mt-10">
          <div className="xl:w-2/3 lg:w-2/3 md:w-full flex xl:flex-row lg:flex-row md:flex-col sm:flex-col flex-col justify-start items-start">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="lg:w-1/2 md:w-full justify-start items-start px-20 md:mb-5 sm:mb-5">
              <p className="font-raleway font-bold text-3xl text-blue-900">Akeshya</p>
              <p className="font-raleway font-normal text-medium text-gray-500">Designers, developers  &  marketeers capable of delivering solutions according to your needs,</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="lg:w-1/2 md:w-full justify-start items-center px-20 md:mb-5 sm:mb-5">
              <div className="w-full flex justify-start items-start mb-5">
                <FiMapPin className="w-[40px] h-[40px] text-blue-700 mr-2" />
                <p>26-2-789, 7th street, Jyothi Nagar, Nellore, Andhra Pradesh 524004</p>
              </div>

              <div className="w-full flex justify-start items-start mb-5">
                <RiMailSendLine className="w-[30px] h-[30px] text-blue-700 mr-2" />
                <p>info@akeshya.com</p>
              </div>

              <div className="w-full flex justify-start items-start mb-5">
                <RiPhoneLine className="w-[30px] h-[30px] text-blue-700 mr-2" />
                <p>+91 94942 40922</p>
              </div>
            </motion.div>


          </div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="xl:w-1/3 lg:w-1/3 md:w-full flex justify-center items-center flex-col px-5">
            <input type="text" className="w-[90%] outline-2 border-2 border-slate-200 px-3 py-2 mb-3" placeholder="Your Name" />
            <input type="text" className="w-[90%] outline-2 border-2 border-slate-200 px-3 py-2 mb-3" placeholder="Your Email" />
            <input type="text" className="w-[90%] outline-2 border-2 border-slate-200 px-3 py-2 mb-3" placeholder="Subject" />
            <textarea className="w-[90%] outline-2 border-2 border-slate-200 px-3 py-2 mb-3" placeholder="Message" />
            <button className="w-[150px] h-[auto] text-white bg-blue-900 font-raleway font-medium text-medium px-5 py-2 rounded-full">Send Message</button>
          </motion.div>
        </div>
      </div>


      <footer className="w-full h-[100px] flex flex-wrap flex-row justify-center items-center shadow-[rgba(0,0,15,0.1)_0px_-3px_1px_0px]">
        <div className="w-[30%] flex justify-start items-start px-6">
          <p className="font-raleway lg:text-sm md:text-sm sm:text-xs text-xs">© Copyright <strong>Akeshya</strong>. All Rights Reserved</p>
        </div>
        <div className="w-[70%] flex justify-end items-center px-5">
          <span className="px-5 text-blue-900 font-raleway lg:text-sm md:text-sm sm:text-xs text-xs">Terms and conditions</span>
          <span className="px-5 text-blue-900 font-raleway lg:text-sm md:text-sm sm:text-xs text-xs">Refund Policy</span>
          <span className="px-5 text-blue-900 font-raleway lg:text-sm md:text-sm sm:text-xs text-xs">Provacy Policy</span>
        </div>
      </footer>


    </main>
  );
}
