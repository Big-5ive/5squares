import React, { useState, useEffect, useMemo } from 'react';
import { BsFillLightningChargeFill } from "react-icons/bs";
import { motion } from 'framer-motion';

const HeroLoginText = () => {
  const contentSets = useMemo(() => [
    {
      firstText: 'Super Savers',
      secondText: '5quares guarantees you swift shopping',
      thirdText: '* Updates Weekly',
      buttonText: 'Shop now'
    },
    {
      firstText: 'Mega Deals',
      secondText: 'Discover unbeatable prices and offers',
      thirdText: '* Limited Time Only',
      buttonText: 'Explore'
    },
    {
      firstText: 'Shop Smart',
      secondText: 'Quality products at your fingertips',
      thirdText: '* New Arrivals Daily',
      buttonText: 'Start Shopping'
    }
  ], []);

  const [contentIndex, setContentIndex] = useState(0);
  const [currentFirstText, setCurrentFirstText] = useState('');
  const [currentSecondText, setCurrentSecondText] = useState('');
  const [currentThirdText, setCurrentThirdText] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setContentIndex((prevIndex) => (prevIndex + 1) % contentSets.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [contentSets]);

  useEffect(() => {
    let firstTextIndex = 0;
    let secondTextIndex = 0;
    let thirdTextIndex = 0;

    const firstTextInterval = setInterval(() => {
      if (firstTextIndex <= contentSets[contentIndex].firstText.length) {
        setCurrentFirstText(contentSets[contentIndex].firstText.slice(0, firstTextIndex));
        firstTextIndex++;
      } else {
        clearInterval(firstTextInterval);
      }
    }, 50);

    const secondTextInterval = setInterval(() => {
      if (secondTextIndex <= contentSets[contentIndex].secondText.length) {
        setCurrentSecondText(contentSets[contentIndex].secondText.slice(0, secondTextIndex));
        secondTextIndex++;
      } else {
        clearInterval(secondTextInterval);
      }
    }, 50);

    const thirdTextInterval = setInterval(() => {
      if (thirdTextIndex <= contentSets[contentIndex].thirdText.length) {
        setCurrentThirdText(contentSets[contentIndex].thirdText.slice(0, thirdTextIndex));
        thirdTextIndex++;
      } else {
        clearInterval(thirdTextInterval);
      }
    }, 50);

    return () => {
      clearInterval(firstTextInterval);
      clearInterval(secondTextInterval);
      clearInterval(thirdTextInterval);
    };
  }, [contentIndex, contentSets]);

  return (
    <motion.div 
      className='w-[50%] flex flex-col space-y-8' 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div 
        className="flex items-center space-x-3 text-white text-3xl font-semibold"
        initial={{ opacity: 0, x: -100, rotateY: -90 }}
        animate={{ opacity: 1, x: 0, rotateY: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <BsFillLightningChargeFill />
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {currentFirstText}
        </motion.span>
      </motion.div>
      <motion.div 
        className="text-white text-4xl font-semibold"
        initial={{ opacity: 0, x: 100, rotateY: 90 }}
        animate={{ opacity: 1, x: 0, rotateY: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {currentSecondText}
        </motion.span>
      </motion.div>
      <motion.div 
        className="text-white text-2xl font-semibold"
        initial={{ opacity: 0, y: 100, rotateX: -90 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {currentThirdText}
        </motion.span>
      </motion.div>
      <motion.button 
        className='h-8 w-36 bg-white rounded-full flex-center text-[#333333] font-medium text-lg'
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        {contentSets[contentIndex].buttonText}
      </motion.button>
    </motion.div>
  );
}

export default HeroLoginText;


// import React, { useState, useEffect, useMemo } from 'react';
// import { BsFillLightningChargeFill } from "react-icons/bs";
// import { motion } from 'framer-motion';

// const HeroLoginText = () => {
//   const contentSets = useMemo(() => [
//     {
//       firstText: 'Super Savers',
//       secondText: '5quares guarantees you swift shopping',
//       thirdText: 'Updates Weekly',
//       buttonText: 'Shop now'
//     },
//     {
//       firstText: 'Mega Deals',
//       secondText: 'Discover unbeatable prices and offers',
//       thirdText: '* Limited Time Only',
//       buttonText: 'Explore'
//     },
//     {
//       firstText: 'Shop Smart',
//       secondText: 'Quality products at your fingertips',
//       thirdText: '* New Arrivals Daily',
//       buttonText: 'Start Shopping'
//     }
//   ], []);

//   const [contentIndex, setContentIndex] = useState(0);
//   const [currentFirstText, setCurrentFirstText] = useState('');
//   const [currentSecondText, setCurrentSecondText] = useState('');
//   const [currentThirdText, setCurrentThirdText] = useState('');

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setContentIndex((prevIndex) => (prevIndex + 1) % contentSets.length);
//     }, 10000);

//     return () => clearInterval(interval);
//   }, [contentSets]);

//   useEffect(() => {
//     let firstTextIndex = 0;
//     let secondTextIndex = 0;
//     let thirdTextIndex = 0;

//     const firstTextInterval = setInterval(() => {
//       if (firstTextIndex <= contentSets[contentIndex].firstText.length) {
//         setCurrentFirstText(contentSets[contentIndex].firstText.slice(0, firstTextIndex));
//         firstTextIndex++;
//       } else {
//         clearInterval(firstTextInterval);
//       }
//     }, 50);

//     const secondTextInterval = setInterval(() => {
//       if (secondTextIndex <= contentSets[contentIndex].secondText.length) {
//         setCurrentSecondText(contentSets[contentIndex].secondText.slice(0, secondTextIndex));
//         secondTextIndex++;
//       } else {
//         clearInterval(secondTextInterval);
//       }
//     }, 50);

//     const thirdTextInterval = setInterval(() => {
//       if (thirdTextIndex <= contentSets[contentIndex].thirdText.length) {
//         setCurrentThirdText(contentSets[contentIndex].thirdText.slice(0, thirdTextIndex));
//         thirdTextIndex++;
//       } else {
//         clearInterval(thirdTextInterval);
//       }
//     }, 50);

//     return () => {
//       clearInterval(firstTextInterval);
//       clearInterval(secondTextInterval);
//       clearInterval(thirdTextInterval);
//     };
//   }, [contentIndex, contentSets]);

//   return (
//     <div className='w-[50%] flex flex-col space-y-8'>
//       <div className="flex items-center space-x-3 text-white text-3xl font-semibold">
//         <BsFillLightningChargeFill />
//         <motion.span
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1 }}
//         >
//           {currentFirstText}
//         </motion.span>
//       </div>
//       <div className="text-white text-4xl font-semibold">
//         <motion.span
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1 }}
//         >
//           {currentSecondText}
//         </motion.span>
//       </div>
//       <div className="text-white text-2xl font-semibold">
//         <motion.span
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1 }}
//         >
//           {currentThirdText}
//         </motion.span>
//       </div>
//       <button className='h-8 w-36 bg-white rounded-full flex-center text-[#333333] font-medium text-lg'>
//         {contentSets[contentIndex].buttonText}
//       </button>
//     </div>
//   );
// }

// export default HeroLoginText;





// import React from 'react'
// import { BsFillLightningChargeFill } from "react-icons/bs";

// const HeroLoginText = () => {
//   return (
//     <div className='w-[50%] flex flex-col space-y-8 '>
//         <div className="flex items-center space-x-3 text-white text-3xl font-semibold"><BsFillLightningChargeFill /> <span>Super Savers</span></div>
//         <div className="text-white text-4xl font-semibold">5quares guarantees you swift shopping</div>
//         <div className="text-white text-2xl font-semibold">* Updates Weekly</div>
//         <button className='h-8 w-36 bg-white rounded-full flex-center text-[#333333] font-medium text-lg '>Shop now</button>
//     </div>
//   )
// }

// export default HeroLoginText

