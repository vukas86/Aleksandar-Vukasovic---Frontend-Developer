import { useState, useEffect } from "react";
import styles from "./Main.module.css";

function Main() {
  const [rockets, setRockets] = useState([]);

  useEffect(() => {
    const fetchRockets = async () => {
      const res = await fetch("https://api.spacexdata.com/v4/rockets");
      const data = await res.json();
      setRockets(data);
    };

    fetchRockets();
  }, []);

  console.log(rockets);

  return (
    <article className={styles.mainContainer}>
      <section>
        {rockets.map((rocket) => {
          <div key={rocket.id}>
            <h3>{rocket.name}</h3>
          </div>;
        })}
      </section>
    </article>
  );
}

export default Main;
