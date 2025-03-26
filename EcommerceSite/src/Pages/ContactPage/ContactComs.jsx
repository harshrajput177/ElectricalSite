import { motion } from "framer-motion";
import Comp1 from "../../Components/ContactUs/ContactCom1";
import Comp2 from "../../Components/ContactUs/ContactCom2";
// import Comp3 from "../../Components/LandingPage/LandingCom3";
// import Comp4 from "../../Components/LandingPage/LandingCom4";
// import Comp5 from "../../Components/LandingPage/LandingCom5";

const Contact = () => {

  const fadeInUp = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="Component">
      <div className="AboutComponent">
       
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Comp1 />
        </motion.div>

         <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Comp2 />
        </motion.div>

        {/* <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Comp4 />
        </motion.div>

        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Comp5 />
        </motion.div> */}

      </div>
      </div>
  );
};

export default Contact;