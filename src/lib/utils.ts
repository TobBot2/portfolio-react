import { useEffect, useState } from "react";
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { ProjectTag } from "./types"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function useIsVisible(ref: any) {
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(([entry]) => {
          setIntersecting(entry.isIntersecting)
      });
      
      observer.observe(ref.current);
      return () => {
        observer.disconnect();
      };
    }, [ref]);
  
    return isIntersecting;
  }

export function getProjectTagBorderColor(tag: ProjectTag) {
	switch (tag) {
		case "C++":
			return "border-[grey]";
		case "Unity":
			return "border-[dodgerblue]";
		case "React":
			return "border-[dodgerblue]";
		case "C#":
			return "border-[grey]";
		case "Python":
      return "border-[grey]";
    case "Blender":
      return "border-[forestgreen]";
    case "OnShape":
      return "border-[forestgreen]";
    case "Group":
			return "border-[crimson]";
		case "Solo":
			return "border-[crimson]";
		case "Class":
			return "border-[saddlebrown]";
		case "WIP":
			return "border-[khaki]";
	}
}
