import { PosThem } from "../Thems";
import Calculator from "awesome-react-calculator";
import { ImCross } from "react-icons/im";
export const Calculater = ({ setToggleCalc }) => {
  return (
    <PosThem className="pos__calculater">
      <PosNavClose onClick={() => setToggleCalc((e) => !e)} name="Calculator" />
      <div
        style={{
          height: "16rem",
        }}
      >
        <Calculator />
      </div>
    </PosThem>
  );
};

export const PosNavClose = ({ onClick, name, className }) => {
  return (
    <div className={`${className} pos__cal_cl`}>
      <p>{name}</p>
      <ImCross onClick={onClick} />
    </div>
  );
};
