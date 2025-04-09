import Image from "next/image";
import styles from "../styles.module.css";
import parc from "../public/header_bg.jpg";

export const Hero = () => {
  return (
    <>
      <div className={styles.bgWrap}>
        <Image
          src={parc}
          alt="photo d'une projection de film en plein air dans un parc"
          placeholder="blur"
          quality={100}
          fill
          sizes="100vw"
          className="object-cover object-center -z-10"
        />
      </div>
      <div className={styles.bgText}>
        <h1 className="text-5xl font-bold mb-4 text-center [text-shadow:3px_3px_3px_rgba(0,0,0,1)]">
          Festival du Film en Plein air <br /> 5 - 8 Août 2025
        </h1>
        <p className="text-lg mb-8 [text-shadow:3px_3px_6px_rgba(0,0,0,1)]">
          Découvrez les films qui vous feront vibrer sous les étoiles.
        </p>
        <a
          href="/films"
          className="bg-yellow-300 hover:bg-yellow-400 text-black font-bold py-2 px-4 rounded"
        >
          Explorer les films
        </a>
      </div>
    </>
  );
};
