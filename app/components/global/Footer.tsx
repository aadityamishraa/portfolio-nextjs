import Social from "../shared/Social";
import UnmountStudio from "./Unmount";

export default function Footer() {
  return (
    <UnmountStudio>
      <footer className="border-t dark:border-zinc-800 border-zinc-100 mt-28 min-h-full relative">
        <div className="max-w-7xl mx-auto flex lg:flex-row flex-col items-center lg:justify-between justify-center md:px-16 py-2">
          <Social type="social" />
          <div className="flex flex-col lg:items-end items-center lg:text-start text-center">
            <small className="text-zinc-500">
              Copyright &copy; Aaditya Mishra {new Date().getFullYear()} All
              rights Reserved
            </small>
          </div>
        </div>
      </footer>
    </UnmountStudio>
  );
}
