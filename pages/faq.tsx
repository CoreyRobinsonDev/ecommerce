import Link from "next/link";
import Head from "next/head";
import { AiOutlineMessage,AiOutlineMail } from "react-icons/ai";
import { BsPlus } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";
import { useState } from "react";
import { motion } from "framer-motion";

import styles from "../styles/faq.module.css";
import FX from "../styles/FX.module.css";

const faqs = [
  {q: "How do I return or exchange an item I bought online?", a: "You have up to 30 days from ship date to return or exchange items by mail that are purchased."},
  {q: "What's the status of my order?", a: "As soon as you place your order, you can see where it is on its way to your door."},
  {q: "Can I track the shipment of my order?", a: "As soon as your order ships, we will send you an email with the tracking information."},
  {q: "Can I change or cancel my order?", a: "Yes."},
  {q: "Do you guys offer a refund or exchange?", a: "Yes."},
]

const FAQ = () => {
  return <>
    <Head>
      <title>Artisan | About Us</title>
    </Head>
    <main className={styles.container}>
      <header className={styles.header_container}>
        <span className={styles.breadcrumb}>
          <Link href="/"><a className={FX.hover}>HOME</a></Link>
          <p>{">"}</p> 
          <Link href="/faq"><a className={FX.hover}>FAQs</a></Link>
        </span>
        <h1 className={styles.title}>FAQS</h1>
      </header>
      <p>Below FAQ are some common concerns of our clients before purchasing an item. If you have other questions, please just send it to <a href="#" className={styles.underline}>example@domain.com</a>.</p>
      <section className={styles.content_container}>
        <div>
          <h2 className={styles.content__title}>Need Help?</h2>
          <p>If you have an issue or question that requires immediate assistance, you can click the button below to chat live with a Customer Service representative. If we are not available, drop us an email and we will get back to you within 20-36 hours!</p>
          <div className={styles.content__contact_container}>
            <a href="#">
              <AiOutlineMessage/>
              <p>Message Us</p>
            </a>
            <a href="#"> 
              <AiOutlineMail/>
              <p>Contact Us</p>
            </a>
          </div>
        </div>
        <div>
          <h2 className={styles.content__title}>Questions</h2>
          {faqs.map(({q, a}, key) => <Card key={key} question={q} answer={a} />)}
        </div>
      </section>
    </main>
  </>
}

function Card({question, answer}: {question: string, answer: string}) {
  const [isOpen, setIsOpen] = useState(false);

  return <button
    className={styles.card}
    onClick={() => setIsOpen(!isOpen)}
  >
    <motion.span
      className={styles.card__question}
      transition={{type: "tween"}}
      animate={isOpen ? {borderBottom: "1px solid"} : {borderBottom: "1px transparent"}}
    ><p>{`Q: "${question}"`}</p> <p>{isOpen ? <BiMinus /> : <BsPlus />}</p></motion.span>
    <motion.p
      className={styles.card__answer}
      transition={{type: "tween"}}
      animate={isOpen ? {display: "block", opacity: 100} : {display: "none", opacity: 0}}
    >{answer}</motion.p>
  </button>
}
export default FAQ;