import Comp1 from "../../../Components/Solution/Plug&Socket/Plug&SocketCom1";
import Comp2 from "../../../Components/Solution/Plug&Socket/Plug&SocketCom2";

const plugs = () => {

  const fadeInUp = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="Component">
      <div className="ServicesComponent">
          <Comp1 />
          <Comp2 />
      </div>
      </div>
  );
};

export default plugs;