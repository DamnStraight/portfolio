import React from "react";
import { TechStack } from "../components/TechPill";

export default interface ProjectTemplate {
  title: string,
  description: string,
  detailedDescription?: string,
  notableTasks: string[],
  techStack: TechStack[];
  images?: string[]; 
  repoUrl: string;
}