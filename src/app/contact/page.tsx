import PageHeader from "@/components/common/PageHeader";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
};

const Contact = () => {
  return (
    <div className="mx-auto max-w-3xl">
      <PageHeader title="Contact" />

      <div className="text-center">
        ShinCodeへのコンタクトは
        <Link
          href="https://x.com/Shin_Engineer"
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 font-bold"
        >
          Xアカウント
        </Link>
        または
        <strong>shincodeinc@gmail.com</strong>
        まで御願いします。
      </div>
    </div>
  );
};

export default Contact;
