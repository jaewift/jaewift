"use client";

import { ResultResponse } from "@/shared/types/result-response";
import { Project } from "@/entities/project/types";
import Reveal from "@/shared/ui/Reveal";
import SectionTitle from "@/shared/ui/SectionTitle";
import { Link } from "@cher1shrxd/loading";
import ProjectCard from "@/widgets/projects/ui/ProjectCard";

interface Props {
  projects: ResultResponse<Project>[];
}

const HomeContent = ({ projects }: Props) => {
  return (
    <>
      <section className="w-full max-w-440 mx-auto px-4 flex flex-col gap-8 mb-16 md:mb-32">
        <Reveal triggerOnce>
          <div className="flex flex-col items-start gap-4">
            <SectionTitle>RECENT PROJECTS</SectionTitle>
            <Link
              href="/projects"
              className="text-sm sm:text-base text-primary whitespace-nowrap text-nowrap self-end hover:underline">
              View All →
            </Link>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project.properties}
              projectId={project.id}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default HomeContent;
