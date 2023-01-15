import { createContext } from "react";
import { SSProject } from "../../types";

export const FeatureVideoContext = createContext<string>("");
export const ProjectDataContext = createContext<SSProject[]>([]);
