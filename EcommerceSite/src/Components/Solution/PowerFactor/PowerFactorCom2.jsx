import '../../../style/Solution-css/S-PowerFactor-css/S-PowerFactorCom2.css'; // Styling file ka import
import C71 from '../../../image/blog-2_3.webp';
import C72 from '../../../image/power-factor-correction.jpg';
import C73 from '../../../image/waalpaper1.jpeg';

const PowerFactorC2 = () => {
  return (
    <div className="AcademicsC7-events">
      <h2><strong>Power Factor Correction</strong></h2>
      <h3 className="AcademicsC7-event-title">Improving Electrical Efficiency in Industrial Systems</h3>
      <p className="AcademicsC7-event-description">
        Power Factor Correction (PFC) is a crucial process in electrical systems, especially in industrial environments, where large inductive loads like motors and transformers are commonly used. These loads can cause a lagging power factor, leading to inefficiencies and increased energy costs.
      </p>
      <p>
        By installing power factor correction devices such as capacitors or synchronous condensers, industries can reduce the phase difference between voltage and current. This not only improves the efficiency of power usage but also minimizes losses and reduces the load on the power grid.
      </p>
      <p>
        A higher power factor means better utilization of electrical power, resulting in lower electricity bills, improved voltage regulation, and reduced greenhouse gas emissions due to decreased power generation demand.
      </p>
      <p>
        Implementing Power Factor Correction is not just a smart economic decision but also a step towards sustainable and reliable industrial operations. It ensures that the electrical system performs at its best while meeting regulatory and environmental standards.
      </p>

      <div className="AcademicsC7-event-images">
        <img src={C71} alt="Power factor correction equipment" className="AcademicsC7-event-img" />
      </div>
      <div className='AcademicsC7-lower-image-C7'>
        <img src={C72} alt="Capacitor banks for PFC" className="AcademicsC7-event-img-lower AcademicsC7-small-img-C7" />
        <img src={C73} alt="Diagram showing power factor improvement" className="AcademicsC7-event-img-lower AcademicsC7-large-img-C7" />
      </div>
    </div>
  );
};

export default PowerFactorC2;
