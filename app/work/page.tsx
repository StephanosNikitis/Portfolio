import ProjectCard, { Project } from "@/components/ProjectCard";
import { Fraunces } from "next/font/google";
import Link from "next/link";

const fraunces = Fraunces({ 
  subsets: ['latin'], 
  weight: ['900'],
  style: ['normal']
})

const projects: Project[] = [
  {
    title: "DevOps Dashboard",
    description:
      "Real-time DevOps dashboard — live metrics over SSE, Redis time-series, GitHub webhook intake with HMAC verification, duration-based alerts with Slack notifications.",
    badges: ["Next.js", "TypeScript", "Drizzle ORM", "Upstash Redis", "Neon Postgres"],
    link: "https://github.com/StephanosNikitis/DevOps_Dashboard",
  },
  {
    title: "Realtime Chat App",
    description:
      "A full-stack chat application enabling instant messaging with real-time updates, online presence, and a responsive user interface.",
    badges: ["React.js", "TypeScript", "Express.js", "Node.js", "MongoDB", "Socket.io", "Gemini AI"],
    link: "https://github.com/StephanosNikitis/Realtime-Chat-App",
  },
  {
    title: "LiveBoard",
    description:
      "A collaborative, real-time whiteboard with real-time database, whiteboard from scratch with ability to add shapes like Rectangles and Ellipses, Sticky notes and Pencil drawing.",
    badges: ["Next.js", "Clerk", "Convex", "LiveBlocks"],
    link: "https://github.com/StephanosNikitis/LiveBoard",
  },
  {
    title: "Stake Mine",
    description: "Web-based browser game with hidden mines and real-time point staking mechanics.",
    badges: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/StephanosNikitis/Stake-Mine-App"
  },
];

const page = () => {
  return (
    <main className="min-h-screen bg-[#EFEDE7]">
      <nav className="w-full flex justify-between px-12 pt-12">
          <div>
              <span className={`${fraunces.className} text-[#3A4A16] text-2xl`}>Shaurya Singh</span>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
              <Link href="/" className="text-[#717C55]">Home</Link>
              <Link href="/work" className="flex gap-1 text-[#3A4A16] font-medium"><span>•</span><span>Works</span></Link>
              <Link href="/about" className="text-[#717C55]">About</Link>
              <Link href="/contact" className="text-[#717C55]">Contact</Link>
          </div>
      </nav>
      <div className="w-full px-12">
        <h1 className="text-3xl font-bold mt-20">Featured Projects</h1>
      </div>
      <div className="w-full px-12 py-10 grid gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </main>
  )
}

export default page