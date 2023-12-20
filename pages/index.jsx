import styles from "../styles/Home.module.css";
import InstructionsComponent from "../components/InstructionsComponent";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <div>
      <main className={styles.main}>
        <button className="bg-white" onClick={() => { router.push('/bets') }} > Hello World </button>
        <InstructionsComponent></InstructionsComponent>
      </main>
    </div>
  );
}
