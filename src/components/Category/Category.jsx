import { Button } from "../Button/Button";
import "../style/Category.css";

export function Category({ children, title }) {
  return (
    <div className="exterieur">
      <div className="category">
        <div className="men-watch">
          <h1 className="title">{title}</h1>
          <Button>TOUT VOIR</Button>
        </div>
        <div className="card">{children}</div>
      </div>
    </div>
  );
}
