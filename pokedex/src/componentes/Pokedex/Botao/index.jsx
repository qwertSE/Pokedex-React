import "./styles.scss";

function Botao({ name, func }) {
  return (
    <button 
        className="button"
        onClick={func}
    >
      {name}
    </button>
  );
}

export default Botao;
