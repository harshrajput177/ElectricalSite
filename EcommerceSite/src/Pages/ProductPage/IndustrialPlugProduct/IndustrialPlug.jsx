import { useState } from "react";
import { motion } from "framer-motion";
import Comp1 from "../../../Components/Products/IndustrialPlug/IndustrialPlugCom1";
import Comp2 from "../../../Components/Products/IndustrialPlug/IndustrialPlugCom2";



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

      </div>
      </div>
  );
};

export default Product;