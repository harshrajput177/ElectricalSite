import { useState } from "react";
import { motion } from "framer-motion";
import Comp1 from "../../../Components/Products/Smart-Energy/SmartEnergyCom1";
import Comp2 from "../../../Components/Products/Smart-Energy/SmartEnergyCom2";
import Comp3 from "../../../Components/Products/Smart-Energy/SmartEnergyCom3";
import Comp4 from "../../../Components/Products/Smart-Energy/SmartEnergyCom4";
import Comp5 from "../../../Components/Products/Smart-Energy/SmartEnergyCom5";

const Product = () => {

  const fadeInUp = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="Component">
      <div className="ProductComponent">
       
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Comp1 />
        </motion.div>

         <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Comp2 />
        </motion.div>

        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Comp3 />
        </motion.div>

        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Comp4 />
        </motion.div> 

        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Comp5 />
        </motion.div> 

      </div>
      </div>
  );
};

export default Product;