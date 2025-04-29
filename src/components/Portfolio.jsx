import React from 'react';
import Card from './Card';
import { motion } from 'framer-motion';

function Portfolio() {
  const cardArray = [
    {
      id: 1,
      imgUrl: '/image/crud.png',
      title: 'Crud (Todo-list)',
      paragraph: 'A todo-list application with CRUD functionality.',
      live: 'https://crudapps-ygc3.onrender.com/add',
      src: 'https://github.com/ErAniketKumar/crudApp-withFileUpload-Search',
    },
    {
      id: 2,
      imgUrl: '/image/livechatImg.jpg',
      title: 'Live Chat App',
      paragraph: 'Real-time chat application using Socket.io.',
      live: 'https://lovejivan.onrender.com',
      src: 'https://github.com/ErAniketKumar/RealTimeChatApp',
    },
    {
      id: 3,
      imgUrl: '/image/livetogetherLogo.jpg',
      title: 'Livetogether',
      paragraph: 'Educational platform for collaborative learning.',
      live: 'https://livetogether.onrender.com',
      src: 'https://github.com/ErAniketKumar/liveTogetherEduSite',
    },
    {
      id: 4,
      imgUrl: '/image/mernStack.jpeg',
      title: 'MERN Stack App',
      paragraph: 'Full-stack CRUD application using MERN.',
      live: 'https://mern-crud-api.web.app/',
      src: 'https://github.com/ErAniketKumar/MERN-API-CRUD',
    },
    {
      id: 5,
      imgUrl: '/image/lostfound.png',
      title: 'Lost and Found Web',
      paragraph: 'A platform to report and find lost items, built with modern web technologies.',
      live: 'https://lost-n-found-web.vercel.app/',
      src: 'https://github.com/ErAniketKumar/Lost_n_Found_web',
    },
    {
      id: 6,
      imgUrl: '/image/abhishekportfolio.png',
      title: 'Politician Portfolio Website',
      paragraph: 'A professional portfolio website for a politician, showcasing achievements and updates.',
      live: 'https://abhisheksarraf.in/',
      src: 'https://github.com/ErAniketKumar/Abhishek-portfolio',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-8"
      >
        <h1 className="text-4xl font-bold text-teal-400 tracking-tight">Projects</h1>
        <p className="text-lg text-gray-300 light-theme:text-gray-800">Explore my notable projects!</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cardArray.map(({ id, imgUrl, title, paragraph, live, src }) => (
            <Card key={id} imgUrl={imgUrl} title={title} paragraph={paragraph} live={live} src={src} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default Portfolio;