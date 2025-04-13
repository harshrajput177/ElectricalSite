import '../../../style/Solution-css/S-PowerQuality-css/S-PowerQualityCom2.css';
import AcademicC71 from '../../../image/Active-Harmonic-Filters.png';
import AcademicC72 from '../../../image/Untitled-design-25.jpg';
import AcademicC73 from '../../../image/Untitled-design-26-1.jpg';
import AcademicC74 from '../../../image/Hybrid-Filters.png'; 

const PowerQualityC2 = () => {
  return (
    <div className="PowerQualityC7-events">
      <h2><strong>Power Quality</strong></h2>
      <h3 className="PowerQualityC7-event-title">Ensuring Stability and Efficiency in Electrical Systems</h3>
      <p className="PowerQualityC7-event-description">
        Power Quality refers to the degree to which the electrical supply is free from disturbances like voltage fluctuations, harmonics, transients, and interruptions. Maintaining high power quality is critical in industrial and commercial environments where sensitive equipment and machines rely on stable voltage and current for optimal performance.
      </p>
      <p>
        Poor power quality can lead to overheating of equipment, unexpected shutdowns, increased energy losses, and even permanent damage to critical systems. These issues not only disrupt operations but also incur significant maintenance costs and energy inefficiencies.
      </p>
      <p>
        To improve power quality, industries employ advanced technologies such as harmonic filters, surge protectors, voltage regulators, and uninterruptible power supplies (UPS). Regular monitoring and analysis using power quality analyzers help in identifying and mitigating disturbances before they escalate.
      </p>
      <p>
        By ensuring consistent and clean power delivery, businesses can enhance equipment lifespan, reduce operational costs, and meet regulatory compliance. Good power quality is not just a technical requirement — it's a foundation for reliability, safety, and sustainability in modern electrical networks.
      </p>
      
      <div className="PowerQualityC7-image-grid">
      <div  className='img-text'>  <img src={AcademicC71} alt="Image 1" className="PowerQualityC7-grid-img" />
      <p>Active Harmonics Filters</p></div>
   <div  className='img-text'>
   <img src={AcademicC72} alt="Image 2" className="PowerQualityC7-grid-img" />
   <p>Tuned Harmonic Filteration</p>
   </div>
<div  className='img-text'>
<img src={AcademicC73} alt="
Passive Harmonic Filters" className="PowerQualityC7-grid-img" />
<p>Passive Harmonic Filters</p>
</div>
   <div  className='img-text'>
   <img src={AcademicC74} alt="Image 4" className="PowerQualityC7-grid-img" />
   <p>Hybrid Filters</p>
   </div>
      </div>
    </div>
  );
};

export default PowerQualityC2;
