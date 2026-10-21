import type { ReactNode } from "react";
import type { CvRenderProps, CvTemplateId } from "./types";
import { CvTemplateClassic, CvTemplateMinimal, CvTemplateElegant } from "./templates-a";
import { CvTemplateSidebar, CvTemplateExecutive, CvTemplateTimeline } from "./templates-b";

export const CV_TEMPLATE_IDS: CvTemplateId[] = [
  "classic",
  "minimal",
  "elegant",
  "sidebar",
  "executive",
  "timeline",
];

export function renderCvTemplate(id: CvTemplateId, props: CvRenderProps): ReactNode {
  switch (id) {
    case "classic":
      return <CvTemplateClassic {...props} />;
    case "minimal":
      return <CvTemplateMinimal {...props} />;
    case "elegant":
      return <CvTemplateElegant {...props} />;
    case "sidebar":
      return <CvTemplateSidebar {...props} />;
    case "executive":
      return <CvTemplateExecutive {...props} />;
    case "timeline":
      return <CvTemplateTimeline {...props} />;
  }
}
