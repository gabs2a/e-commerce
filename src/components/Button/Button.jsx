import "../style/Button.css";
import arrow from "../../assets/arrow.svg";

export function Button({ children, onClick }) {
  return (
    <div>
      <div className="btn-image">
        <button className="btn" onClick={onClick}>
          {children}
          <img src={arrow} alt="image" />
        </button>
      </div>
    </div>
  );
}
