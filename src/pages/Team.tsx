import { css } from "../../styled-system/css";

export const Team = () => {
  return (
    <div className={css({ paddingX: "1.5rem", marginY: "10px" })}>
      <h1>À propos de nous</h1>
      <div
        className={css({
          display: "flex",
          alignItems: "start",
          gap: "20px",
          mt: "20px",
          flexWrap: { base: "wrap", sm: "unset" },
        })}
      >
        <img src="../../team.jpg" />
        <div>
          <p>
            Nous sommes une petite équipe de passionnés de châles tibétains. Nous avons décidé de créer ce site pour
            partager notre passion avec le monde entier.
          </p>
          <br />
          <p>
            Nous avons commencé à collectionner les châles tibétains il y a 10 ans. Nous avons commencé par en acheter
            quelques uns, puis nous avons commencé à en acheter de plus en plus. Aujourd'hui, nous avons une collection
            de plus de 50 châles tibétains.
          </p>
          <br />
          <p>
            Nous avons décidé de créer ce site pour partager notre passion avec le monde entier. Nous espérons que vous
            apprécierez notre collection de châles tibétains autant que nous.
          </p>
        </div>
      </div>
    </div>
  );
};
