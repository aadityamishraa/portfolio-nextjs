import { Slide } from "../animation/Slide";
import Image from "next/image";
import { Metadata } from "next";
import PageHeading from "@/app/components/shared/PageHeading";

export const metadata: Metadata = {
  title: "Contact | Aaditya Mishra",
  metadataBase: new URL("https://aadityamishra.in/contact"),
  description: "Contact Aaditya Mishra",
  openGraph: {
    title: "Contact | Aaditya Mishra",
    url: "https://aadityamishra.in/contact",
    description: "Contact Aaditya Mishra",
    images:
      "https://res.cloudinary.com/dnxtiwx4g/image/upload/v1723312991/portfolio/website_image.png",
  },
};


export default function Contact() {
  return (
    <main className="max-w-7xl mx-auto md:px-16 px-6 lg:mt-32 mt-20">
      <PageHeading
        title="Contact"
        description="This page is still under construction..."
      />
      <figure className="my-6">
        <Slide delay={0.12} className="flex flex-wrap gap-2">
          {/* {images.map((image) => (
            <Image
              key={image.id}
              src={image.src}
              alt="playing guitar"
              width={350}
              height={800}
              className="dark:bg-primary-bg bg-secondary-bg"
            />
          ))} */}
          <p></p>
        </Slide>
      </figure>
    </main>
  );
}
