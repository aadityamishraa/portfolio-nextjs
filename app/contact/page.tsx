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
        description="I love collaborating with creative folks, so don't hesitate to reach out and say hi!"
      />
      <figure className="my-6">
        <Slide delay={0.12} className="flex flex-wrap gap-2">
          <div className="w-full md:w-1/3 p-8 dark:bg-primary-bg bg-zinc-50 border border-transparent dark:hover:border-zinc-700 hover:border-zinc-200 rounded-lg">
            <form
              action="https://formsubmit.com/db029a55bb2e015170b7ececeb43b58d"
              method="POST"
              className="flex flex-col gap-4"
              autoComplete="off"
            >
              <input
                className="h-12 rounded-lg p-4 focus:outline-none "
                type="text"
                name="name"
                placeholder="Your name here..."
                required
              />
              <input
                className="h-12 rounded-lg p-4 focus:outline-none "
                type="email"
                name="email"
                placeholder="Enter your email"
                required
              />
              <textarea
                name="message"
                className="h-40 w-full rounded-lg p-4 resize-none overflow-y-auto focus:outline-none focus:border-zinc-200 dark:focus:border-zinc-700"
                placeholder="Say me Hi! 😊"
              ></textarea>
              <button className="bg-primary-color p-2 rounded-lg" type="submit">
                Send
              </button>

              <input
                type="hidden"
                name="_next"
                value="https://aadityamishra.in/contact/submitted"
              />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
            </form>
          </div>
        </Slide>
      </figure>
    </main>
  );
}
