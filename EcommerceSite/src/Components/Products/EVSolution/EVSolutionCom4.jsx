import React, { useEffect } from "react";
import  Vision  from '../../../image/images (1).jpeg';
import '../../../style/EvSolution-css/EvSolutionCom4.css';

function AboutC4(){

    return(
   <div  className="bc-contents">
      <div id='Vision-section' className="bc-con">
        <div className="sc-con">
        <h1  className="text-C4-h1">
        DC EV Charger
        </h1>
        <p>
        Mount Litera Zee School, Bihta offers a comprehensive and unique 
        educational experience, meticulously designed to prepare your child for a successful future
         in today’s rapidly changing world. Our vision is to establish an institution of excellence, 
        where timeless human values are seamlessly integrated with the highest quality of teaching and learning.
        By leveraging modern, technology-driven tools, we strive to nurture a well-rounded individual,
        ready to contribute meaningfully to society. 
        </p>
        </div>
        <div className="Vision-image">
          <img src={Vision} alt="Business Illustration" />
        </div>
      </div>
     <div className="bottom-paragrapgh-div">
     <p className="bottom-paragraph">
     Furthermore, we are dedicated to shaping global minds on Indian soil,
          providing every student access to world-class infrastructure and an
          innovative curriculum that fosters all-round development. This approach
          ensures that while our students are equipped to face the global
          challenges of tomorrow, they remain deeply rooted in the rich
          traditions and values that form the foundation of our culture
      </p>
     </div>
   </div>
    )
    
}

export default AboutC4;