import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src={
            "https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          fill={true}
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quo
            aliquam ipsum consequatur illum, eos, officiis molestiae animi quia
            facere commodi ipsa cupiditate dolorum ut. Voluptatum dolores, nemo
            cumque officiis odit eos ut! Earum vel facilis Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Ad optio praesentium consequuntur
            ut cum numquam repudiandae, quo dolore mollitia obcaecati aliquid
            fugiat labore fugit repellendus similique ea laborum tempora alias
            iusto quas dolor quidem reiciendis assumenda vel. Quasi, quis
            laborum est, dignissimos nobis dolorem omnis, vel earum quo ab
            ipsam!
            <br />
            <br />
            harum odio hic sit soluta laborum cum, dignissimos autem libero
            aliquam corrupti vero adipisci consectetur fuga, temporibus labore
            quasi ipsa eum! Commodi, animi nisi! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Maiores, dolorem quisquam doloribus
            commodi qui temporibus recusandae delectus illum excepturi
            perspiciatis?
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
            nulla minima ducimus beatae, qui distinctio cumque dignissimos ullam
            officiis laboriosam dolorem reiciendis sapiente accusamus ratione
            facere.
            <br />
            <br />
            Sunt architecto qui odit asperiores eos voluptatum id sapiente. Ad
            accusamus, explicabo ratione cum quis atque laboriosam aspernatur
            architecto.
            <br />
            <br />
            -Dynamic Websites
            <br />
            <br />
            -Fast and Handy
            <br />
            <br />
            -Mobile Apps
          </p>
          <Button url={"/contact"} text={"Contact"} />
        </div>
      </div>
    </div>
  );
};

export default About;
