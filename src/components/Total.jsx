import "./Total.css";

function Total({ total, nombre }) {
  return (
    <p className="total">
      {nombre} article(s) — Total : {total.toFixed(2)} €
    </p>
  );
}

export default Total;
