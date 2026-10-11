import type { JourneyMilestone } from './Journey';

// Stage names come from existing copy: the Process ("Discover → Design → Build →
// Evolve") and the PurposeBased path (know yourself, find purpose, epic life).
const HB_STAGES = ['Discover', 'Design', 'Build', 'Evolve'];
const PB_STAGES = ['Know yourself', 'Find purpose', 'Epic life'];

const pair = (stages: string[], targets: string[]): JourneyMilestone[] =>
  stages.map((label, i) => ({ label, target: targets[i] })).filter((m) => Boolean(m.target));

/** HumanBased milestones beside four sections (selectors in page order). */
export const HB_JOURNEY = (
  targets: [string, string, string, string],
  labels: string[] = HB_STAGES,
): JourneyMilestone[] => pair(labels, targets);

/** About page: the milestones carry the page's own section names. */
export const ABOUT_LABELS = ['Our Why', 'Founding Team', 'What We Stand For', 'Get in Touch'];

/** PurposeBased milestones beside three sections (selectors in page order). */
export const PB_JOURNEY = (targets: [string, string, string]): JourneyMilestone[] =>
  pair(PB_STAGES, targets);
