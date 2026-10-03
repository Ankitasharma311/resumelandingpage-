export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  categoryClass: string;
  statusBadge: string;
  statusClass: string;
  description: string;
  problemSolved: string;
  keyFeatures?: string[];
  graphSteps?: Array<{ letter: string; name: string; color: string }>;
  tags: string[];
  githubStatus: string;
  demoStatus: string;
  fullDetails?: {
    overview: string;
    architecture: string[];
    technicalHighlights: string[];
    learningOutcomes: string[];
  };
}

export interface SkillCategory {
  title: string;
  subtitle: string;
  tag: string;
  tagClass: string;
  iconType: string;
  items: Array<{
    name: string;
    tag?: string;
    tagClass?: string;
    highlight?: boolean;
    description?: string;
  }>;
  footerNote?: string;
}
