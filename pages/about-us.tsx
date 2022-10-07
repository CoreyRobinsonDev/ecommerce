import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import FX from "../styles/FX.module.css";
import styles from "../styles/aboutUs.module.css";

const AboutUs = () => {
  return <>
    <Head>
      <title>Artisan | About Us</title>
    </Head>
      <div className={styles.banner}>
        <div className={styles.banner_content}>
          <span className={styles.breadcrumb}>
          <Link href="/"><a className={FX.hover}>HOME</a></Link>
          {">"}
          <Link href="/about-us"><a className={FX.hover}>ABOUT US</a></Link>
        </span>
        <h1 className={styles.title}>ABOUT US</h1>
        </div>
        
      </div>
      <header className={styles.header}>
        <h2>BEHIND THE SCENE</h2>
        <p>Phasellus lorem malesuada ligula pulvinar commodo maecenas suscipit auctom.</p>
      </header>
    <main className={styles.container}>
      <section>
        <article className={styles.card}>
          <div className={styles.img} style={{
            backgroundImage: "url(/pictures/about1.jpg)",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"}}>
          </div>
          <div className={styles.card__content}>
            <h3>OUR MISSION</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec et odio pellentesque diam volutpat commodo sed egestas. Ipsum dolor sit amet consectetur adipiscing elit. Eget lorem dolor sed viverra ipsum nunc aliquet. Egestas maecenas pharetra convallis posuere morbi leo urna. Nisl pretium fusce id velit ut tortor pretium. Enim eu turpis egestas pretium.</p>
          </div>
        </article>
        <article className={styles.card}>
          <div className={styles.card__content}>
            <h3>OUR STORY</h3>
            <p>At auctor urna nunc id cursus. Et malesuada fames ac turpis. Cras adipiscing enim eu turpis egestas. Aliquam ut porttitor leo a diam. Risus pretium quam vulputate dignissim suspendisse in est ante in. Mattis pellentesque id nibh tortor. Ac felis donec et odio. Consectetur adipiscing elit ut aliquam purus sit amet luctus venenatis. Odio eu feugiat pretium nibh ipsum consequat nisl. Ac felis donec et odio pellentesque diam volutpat. Leo vel fringilla est ullamcorper eget nulla.</p>
          </div>
          <div className={styles.img} style={{
            backgroundImage: "url(/pictures/about2.jpg)",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"}}>
          </div>
        </article>
        <article className={styles.card}>
          <div className={styles.img} style={{
            backgroundImage: "url(/pictures/about3.jpg)",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"}}>
          </div>
          <div className={styles.card__content}>
            <h3>OUR APPROACH</h3>
            <p>In nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Ornare quam viverra orci sagittis. Non diam phasellus vestibulum lorem sed risus ultricies. Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra. Molestie a iaculis at erat pellentesque. Tempus iaculis urna id volutpat lacus laoreet non.  </p>
          </div>
        </article>
      </section>
      <section>
        <header className={styles.header}>
          <h3>MEET THE TEAM</h3>
          <p>Phasellus lorem malesuada ligula pulvinar commodo maecenas suscipit auctom.</p>
        </header>
        <div className={styles.team}>
          <article  className={styles.team__card}>
            <Image
              src={"/pictures/team1.webp"}
              alt="Managing director"
              width={500}
              height={500}
              />
            <h4>ALISA</h4>
            <p>Managing Director</p>
          </article>
          <article className={styles.team__card}>
            <Image
              src={"/pictures/team2.webp"}
              alt="Art director"
              width={500}
              height={500}
              />
            <h4>MONICA</h4>
            <p>Art Director</p>
          </article>
          <article className={styles.team__card}>
            <Image
              src={"/pictures/team3.webp"}
              alt="Fashion designer"
              width={500}
              height={500}
              />
            <h4>TRACY</h4>
            <p>Fashion Designer</p>
          </article>
        </div>
      </section>
    </main>
  </>
}
export default AboutUs;