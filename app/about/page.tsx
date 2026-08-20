import { Fraunces, Instrument_Serif } from "next/font/google";
import Link from "next/link";
import { FileText } from "lucide-react"

const fraunces = Fraunces({ 
  subsets: ['latin'], 
  weight: ['900'],
  style: ['normal']
})

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
});

const page = () => {
  return (
    <main className="w-screen min-h-screen bg-[#EFEDE7]">
      <nav className="w-full flex justify-between px-12 pt-12">
          <div>
              <span className={`${fraunces.className} text-[#3A4A16] text-2xl`}>Shaurya Singh</span>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
              <Link href="/" className="text-[#717C55]">Home</Link>
              <Link href="/work" className="text-[#717C55]">Works</Link>
              <Link href="/about" className="flex gap-1 text-[#3A4A16] font-medium"><span>•</span><span>About</span></Link>
              <Link href="/contact" className="text-[#717C55]">Contact</Link>
          </div>
      </nav>
      <div className="w-full px-15 mt-6 md:mt-10">
        <h1 className={`${instrumentSerif.className} text-3xl md:text-5xl text-[#3A4A16] font-bold`}>
          Hey, I&apos;m Shaurya Singh 
        </h1>
        <p className="text-[#717C55] pt-8 md:text-xl">
          I&apos;m currently pursuing B.Tech in Computer Science and Engineering at IIIT Ranchi. I am passionate about full-stack web development and enjoy building scalable, user-friendly applications.
          <br />
          <br />
          I also enjoy solving algorithmic problems and continuously learning new technologies to improve my development skills.
          <br />
          <br />
          I am currently seeking opportunities to apply my knowledge, contribute to impactful projects, and grow as a software developer.
          <br />
          <br />
          Independent by nature, collaborative by choice.
        </p>
        <Link href="https://drive.google.com/file/d/1nAMM3pLHfpBiS0TIevghqYzERFhikOAN/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="flex mt-6 md:mt-13 border rounded-full w-fit px-3 py-2 gap-2 text-[#717C55]">
          <FileText />
          <span>View Resume</span>
        </Link>
      </div>
    </main>
  )
}

export default page;