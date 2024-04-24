import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
    <Link href={"/displayproduct"}>See Products</Link>
    <Link href={"/addProducts"}>go to Add Product page</Link>
    </main>
  );
}
