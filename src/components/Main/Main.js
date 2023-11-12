import { useState, useEffect } from "react";
import Button from "../Button";

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
      <section className={styles.mainSection}>
        {rockets.map((rocket) => (
          <div key={rocket.id} className={styles.mainCard}>
            <img src={rocket.flickr_images[0]} alt={rocket.name}></img>
            <h3>{rocket.name}</h3>
            <p>{rocket.description}</p>
            <Button
              background="white"
              buttonText="READ MORE"
              className={styles.mainBtn}
            />
          </div>
        ))}
      </section>
    </article>
  );
}

export default Main;
