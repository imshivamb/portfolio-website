import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";
import { SectionName } from "./types";



export function useSectionInView( sectionName: SectionName, threshold = 0.75 ) {
    const { ref, inView } = useInView({
        threshold
      });
      const { setActiveSection, lastClick } = useActiveSectionContext();
    
      useEffect(() => {
        if (inView && Date.now() - lastClick > 1000) {
          setActiveSection(sectionName);
        }
      }, [inView, setActiveSection, lastClick, sectionName]);

      return {
        ref
      }
    
}