import PageHeading from "@/app/components/shared/PageHeading";
import Link from "next/link";

export default function Contact() {
  return (
    <main className="max-w-7xl mx-auto md:px-16 px-6 lg:mt-32 mt-20">
      <PageHeading
        title="Congratulations! 🎉 Your response has been recorded"
      />
    
      <Link href={"/contact"} className="px-8 py-4 rounded-lg bg-green-600">Submit another response</Link>
    </main>
  );
}
