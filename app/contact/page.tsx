import { Instrument_Serif } from "next/font/google";
import Link from "next/link";
import { SendHorizonal } from "lucide-react"

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
});

const page = () => {
  return (  
    <main className="w-screen min-h-screen bg-[#1C2802] flex flex-col bg-[url('/blinds.jpg')] bg-blend-overlay bg-contain bg-no-repeat bg-center">
      <nav className="w-full flex px-12 pt-12 justify-end">
          <div className="flex flex-col justify-center items-center gap-2">
              <Link href="/" className="text-white/80 hover:text-[#717C55]">Home</Link>
              <Link href="/work" className="text-white/80 hover:text-[#717C55]">Works</Link>
              <Link href="/about" className="text-white/80 hover:text-[#717C55]">About</Link>
              <Link href="/contact" className="text-white flex gap-1 font-medium"><span>•</span><span>Contact</span></Link>
          </div>
      </nav>
      <div className="text-white/90 mt-10">
        <h1 className={`${instrumentSerif.className} text-5xl md:text-7xl text-center`}>
          Let&apos;s work <em>together.</em>
        </h1>
      </div>
      <div className="text-white/90 mt-12 flex justify-center">
        <p className="w-full max-w-5xl text-[17px] text-center px-2 md:px-60 md:text-[18px]">Whether you have a specific project in mind or just want to say hi, I’m always open to discussing new opportunities and bringing big ideas to life. Reach out via any of the channels below.</p>
      </div>
      <div className="text-white/90 mt-15 flex flex-col justify-center items-center gap-1 text-[18px]">
        <span>Shaurya Singh</span>
        <a
          href="mailto:theshaurya035@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center items-center gap-1"
        >
          theshaurya035@gmail.com
          <SendHorizonal size={16} />
        </a>
      </div>
      <div className="text-white/90 flex justify-center gap-7 mt-10">
        <a
          href="https://www.instagram.com/stephanosnikitis"
          target="_blank"
          rel="noopener noreferrer"
          className="border rounded-full px-3 py-1"
        >
          Instagram
        </a>
        <a
          href="https://www.linkedin.com/in/shaurya-singh-957485325"
          target="_blank"
          rel="noopener noreferrer"
          className="border rounded-full px-3 py-1"
        >
          LinkedIn
        </a>
      </div>
    </main>
  )
}

export default page;