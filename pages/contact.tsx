import Head from "next/head";
import Link from "next/link";
import { RiMessage2Fill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";

import styles from "../styles/contact.module.css";
import FX from "../styles/FX.module.css";

const Contact = () => {
  return <>
    <Head>
      <title>Artisan | Contact Us</title>
    </Head>
    
    <main className={styles.container}>
      <section className={styles.form_section}>
        <span className={styles.breadcrumbs}>
          <Link href="/"><a className={FX.hover}>HOME</a></Link>
          <span>{">"}</span>
          <Link href="/contact"><a className={FX.hover}>CONTACT US</a></Link>
      </span>
        <h1>CONTACT US</h1>
        <p className={styles.questions}>Have a question or comment?</p>
        <p className={styles.questions}>Use the form below to send us a message.</p>
        <form className={styles.form}>
          <label className={styles.label}>
            <span>Name</span>
            <input className={styles.input} type="text" required />
          </label>
          <label className={styles.label}>
            <span>Phone Number (optional)</span>
            <input className={styles.input} type="tel" />
          </label>
          <label className={styles.label}>
            <span>Email</span>
            <input className={styles.input} type="email" required />
          </label>
          <label className={styles.label}>
            <span>Comment</span>
            <textarea className={styles.input} required />
          </label>
          <button className={styles.form__submit} type="submit">SUBMIT CONTACT</button>
        </form>
      </section>
      <section className={styles.info_section}>
        <div className={styles.info_container}>
          <h2>Get In Touch!</h2>
          <p>We&#39;d love to hear from you - please use the form to send us your message or ideas.</p>
          <div>
            <p className={styles.contact_info}><RiMessage2Fill size={20} />TEXT: 123-456-7890</p>
            <p className={styles.contact_info }><MdEmail size={20} />email@domain.com</p>
          </div>
          <div>
            <p>123 Main Street</p>
            <p>San Francisco, CA 94105</p>
            <p>United States</p>
          </div>
        </div>
        <div>
          <p>Opening Hours:</p>
          <p>MON to SAT: 9:00AM - 10:00PM</p>
          <p>SUN: 10:00AM - 6:00PM</p>
        </div>
      </section>
    </main>
  </>
}
export default Contact;