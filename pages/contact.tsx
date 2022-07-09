import { MainLayout } from "../components/layouts/MainLayout";
import Link from "next/link";

export default function Contact() {
  return (
    <MainLayout>
        <h1 className={"title"}>
          Welcome to <Link href="/">Contact</Link>
        </h1>
    </MainLayout>
  );
}
