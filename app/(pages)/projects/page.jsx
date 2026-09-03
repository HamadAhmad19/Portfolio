"use client";
import React from "react";
import Projects from "@/app/components/projects.jsx";

const ProjectsPage = () => {
  return (
    <div className="pt-16">
      <Projects showSeeMoreLink={false} />
    </div>
  );
};

export default ProjectsPage;
