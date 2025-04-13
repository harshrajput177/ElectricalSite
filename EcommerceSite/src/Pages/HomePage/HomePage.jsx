import { useState } from "react";
import { motion } from "framer-motion";
import Comp1 from "../../Components/LandingPage/LandingCom1";
import Comp2 from "../../Components/LandingPage/LandingCom2";
import Comp3 from "../../Components/LandingPage/LandingCom3";
import Comp4 from "../../Components/LandingPage/LandingCom4";
import Comp5 from "../../Components/LandingPage/LandingCom5";
import Comp6 from "../../Components/LandingPage/LandingCom6";
import Comp7 from "../../Components/LandingPage/LandingCom7";
import Comp8 from "../../Components/LandingPage/LandingCom8";
import Comp9 from "../../Components/LandingPage/LandingCom9";
import { useNavigate } from "react-router-dom";
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Home = ({ toggleForm }) => {
  const [showFullButton, setShowFullButton] = useState(false);

const  navigate =  useNavigate();


  const handleButtonClick = () => {
    setShowFullButton(true);
  }; 


  const fadeInUp = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="Component">
      <div className="HomeComponent">
        {/* Wrap each component with motion.div */}
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Comp1 />
        </motion.div>

         <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Comp3 />
        </motion.div>

        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Comp4 />
        </motion.div>


        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Comp9 />
        </motion.div>

        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Comp5 />
        </motion.div>


        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Comp6 />
        </motion.div>

        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Comp7 />
        </motion.div>

        
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Comp8 />
        </motion.div>

        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Comp2  />
        </motion.div> 

      </div>
      </div>
  );
};

export default Home;