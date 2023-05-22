import "./Nosotros.css"
import React from 'react'
// import b1i4jEKvM from "./b1i4jEKvM.png";

const Nosotros = () => {
  return (
    <div className="nosotros">
      <div className="nosotros-primer-card">
        <div className="nosotros-primer-card-izq"></div>
        <img src="/images/b1i4jEKvM.png" />
        <div className="nosotros-primer-card-der">
          <div className="nosotros-primer-card-der-arriba">
            <h5>
              Monitorea fácilmente los valores de las Criptos en{" "}
              <span className="nosotros-primer-card-der-arriba-azul">
                GoCrypto
              </span>
            </h5>
            <p>
              Monitorea tus criptomonedas favoritas en tiempo real y con gran
              facilidad
            </p>
          </div>
          <div className="nosotros-primer-card-der-abajo">
            <p className="nosotros-primer-card-der-abajo-p">
              Obtené los valores de las criptomendas que busques.{" "}
            </p>
            <p className="nosotros-primer-card-der-abajo-p">
              Obtené los valores de las criptomendas que busques.{" "}
            </p>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------ */}

      <div className="nosotros-primer-card">
        <div className="nosotros-primer-card-izq1">
          <div className="nosotros-primer-card-der-arriba">
            <h5>
              Monitorea fácilmente los valores de las Criptos en{" "}
              <span className="nosotros-primer-card-der-arriba-azul">
                GoCrypto
              </span>
            </h5>
            <p>
              Monitorea tus criptomonedas favoritas en tiempo real y con gran
              facilidad
            </p>
          </div>
          <div className="nosotros-primer-card-der-abajo">
            <p className="nosotros-primer-card-der-abajo-p">
              Obtené los valores de las criptomendas que busques.{" "}
            </p>
            <p className="nosotros-primer-card-der-abajo-p">
              Obtené los valores de las criptomendas que busques.{" "}
            </p>
          </div>
        </div>
        <img src="/images/Rxt6ybgBt.png" />
        <div className="nosotros-primer-card-izq"></div>
      </div>
    </div>
  );
}

export default Nosotros