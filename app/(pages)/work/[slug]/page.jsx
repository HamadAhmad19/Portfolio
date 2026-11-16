import React from "react";
import { notFound } from "next/navigation";
import workProjects from "@/app/data/workProjects.json";
import ProjectCaseStudy from "@/app/components/projectCaseStudy.jsx";

export function generateStaticParams() {
  return workProjects.map((project) => ({
    slug: project.slug,
  }));
}

const WorkDetailPage = ({ params }) => {
  const project = workProjects.find((item) => item.slug === params.slug);

  if (!project) {
    notFound();
  }

  return <ProjectCaseStudy project={project} />;
};

export default WorkDetailPage;
