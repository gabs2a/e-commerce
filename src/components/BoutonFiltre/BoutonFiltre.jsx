import "../style/BoutonFiltre.css";

const BoutonFiltre = ({ categorie, onClick }) => {
  return (
    <div className="boutonFiltre" onClick={onClick}>
      {categorie}
    </div>
  );
};

export default BoutonFiltre;
