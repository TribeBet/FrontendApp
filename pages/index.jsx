import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <div>
      <main className={styles.main}>
        <button className="bg-white" onClick={() => { router.push('/bets') }} > Hello World </button>

      </main>
    </div>
  );
}
