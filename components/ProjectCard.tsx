import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export type Project = {
  title: string;
  description: string;
  badges: string[];
  link: string;
};

type ProjectCardProps = {
  project: Project;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Link href={project.link} target="_blank" rel="noopener noreferrer">
      <article className="group border-b border-[#4f453f]/50 pb-8 transition-all duration-300 hover:border-[#100400] cursor-pointer hover:-translate-y-2">
          <div className="flex justify-between items-start mb-5">
              <h2 className="text-xl">{project.title}</h2>
              <ArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:scale-125" />
          </div>
          <p className="text-[#4f453f] mb-6 line-clamp-2">
              {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
              {project.badges.map((badge) => (
                  <span key={badge} className="px-3 py-1 rounded-full border border-[#d3c4bb] text-[#4f453f]">
                      {badge}
                  </span>
              ))}
          </div>
      </article>
    </Link>
  )
}

export default ProjectCard