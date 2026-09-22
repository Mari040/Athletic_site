import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Coaches from "@/components/Coaches/Coaches"
import Schedule from "@/components/Schedule/Schedule"
import styles from "./page.module.css";


export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <Hero />
      <Coaches />
      <Schedule />
    </div>
  );
}