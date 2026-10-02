import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Coaches from "@/components/Coaches/Coaches"
import Schedule from "@/components/Schedule/Schedule"
import Price from "../components/Price/Price";
import Contacts from "@/components/Contacts/Contacts";
import styles from "./page.module.css";
import Reviews from "../components/Reviews/Reviews";
import Achievements from "../components/Achievements/Achievements";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <Hero />
      <Coaches />
      <Achievements />
      < Reviews />
      <Schedule />
      <Price />
      <Contacts />
    </div>
  );
}