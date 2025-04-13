import '../../../style/Solution-css/Pulgs&Socket-css/Pulgs&SocketCom2.css'; 
import AcademicC71 from '../../../image/L_plugsockets.jpg';
import AcademicC72 from '../../../image/ant-Industriale-2.jpg';
import AcademicC73 from '../../../image/38-300x300.jpg';

const PlugC7 = () => {
  return (
    <div className="PlugC7-events">
      <h2><strong>Industrial Plugs and Sockets</strong></h2>
      <h3 className="PlugC7-event-title">Reliable Electrical Solutions for Industrial Applications</h3>
      <p className="PlugC7-event-description">
        Industrial plugs and sockets are essential components used to ensure safe and efficient power distribution in factories, workshops, and heavy-duty environments. Designed to withstand tough conditions, they offer high durability, water resistance, and secure connections for various industrial machinery and tools.
      </p>
      <p>
        These systems are engineered to handle high voltage and current loads while maintaining safety standards. Whether it's for indoor or outdoor applications, industrial plugs and sockets provide flexibility, ease of installation, and maintenance-friendly solutions for power management.
      </p>
      <p>
        From construction sites to manufacturing plants, they play a crucial role in reducing downtime, preventing electrical hazards, and enhancing operational efficiency. Their robust design makes them ideal for harsh conditions where regular domestic sockets wouldn't survive.
      </p>
      <p>
        With evolving technology and safety regulations, modern industrial plug and socket systems now come with enhanced features like interlocks, color coding, and international standard compliance, making them a vital part of any industrial electrical infrastructure.
      </p>

      <div className="PlugC7-event-images">
        <img src={AcademicC71} alt="Low voltage switchgear unit" className="PlugC7-event-img" />
      </div>
      <div className='PlugC7-lower-image-C7'>
        <img src={AcademicC73} alt="Switchgear drafting and layout" className="PlugC7-event-img-lower PlugC7-small-img-C7" />
        <img src={AcademicC72} alt="Industrial switches and panels" className="PlugC7-event-img-lower PlugC7-large-img-C7" />
      </div>
    </div>
  );
};

export default PlugC7;
