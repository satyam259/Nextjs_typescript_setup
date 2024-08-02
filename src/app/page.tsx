
import { Metadata } from "next";
import DefaultLayout from "@/components/layout/DefaultLayout";

export const metadata: Metadata = {
  title:
    "Next js",
  description: "First One",
};

export default function Home() {
  return (
    <>
      <DefaultLayout>
      <div>
        <h1>Home</h1>
      </div>
      </DefaultLayout>
    </>
  );
}
