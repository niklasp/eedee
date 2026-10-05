import {
  aboutData,
  awardsData,
  contactData,
  portfolioData,
  servicesData,
} from "@/lib/siteData";
import {
  absoluteUrl,
  founderName,
  homeDescription,
  siteName,
  studioTagline,
} from "@/lib/seoData";

// llms.txt (https://llmstxt.org) and llms-full.txt, generated from the same
// data as the pages so they stay in sync.

const projectUrl = (slug: string) => absoluteUrl(`/portfolio/${slug}`);

function header() {
  return [
    `# ${siteName}`,
    "",
    `> ${homeDescription}`,
    "",
    `${siteName} (${absoluteUrl("/")}) is a ${studioTagline}. It designs and builds web3 apps, React and Next.js interfaces and WordPress block editor plugins, from UX research to shipped product. It was founded by ${founderName}, a senior fullstack developer with a frontend focus, freelancing since 2005, with a master's degree in History of Science and a bachelor's in Computer Science.`,
    "",
    `Contact: ${contactData.mainData.email}`,
    "",
  ];
}

function services() {
  return [
    "## Services",
    "",
    ...servicesData.services.map((s) => `- ${s.title}: ${s.description}`),
    "",
  ];
}

export function llmsTxt() {
  return [
    ...header(),
    ...services(),
    "## Work",
    "",
    ...portfolioData.projects.map(
      (p) => `- [${p.title}](${projectUrl(p.slug)}): ${p.description}`
    ),
    "",
    "## Founder",
    "",
    `- ${founderName}: ${aboutData.skills.map((s) => s.name).join(", ")}`,
    ...aboutData.connect.map((c) => `- [${c.label}](${c.url})`),
    "",
    "## Optional",
    "",
    `- [Full text for language models](${absoluteUrl("/llms-full.txt")}): every project with client, services, stack and duration, plus achievements`,
    `- [Sitemap](${absoluteUrl("/sitemap.xml")})`,
    "",
  ].join("\n");
}

export function llmsFullTxt() {
  const projects = portfolioData.projects.flatMap((p) => {
    const client = "client" in p && p.client ? p.client : undefined;
    const duration = "duration" in p && p.duration ? p.duration : undefined;
    return [
      `### ${p.title}`,
      "",
      p.description,
      "",
      `- Page: ${projectUrl(p.slug)}`,
      `- Live: ${p.projectLink.url}`,
      ...(client ? [`- Client: ${client}`] : []),
      ...(duration ? [`- Duration: ${duration}`] : []),
      `- Services: ${p.services.map((s) => s.name).join(", ")}`,
      `- Stack: ${(p.categories ?? []).map((c) => c.name).join(", ")}`,
      "",
    ];
  });
  return [
    ...header(),
    ...services(),
    "## Work",
    "",
    ...projects,
    "## Achievements",
    "",
    ...awardsData.awards.map(
      (a) => `- ${a.title} (${a.date}): ${a.description}`
    ),
    "",
    "## Founder",
    "",
    `${founderName}. Skills: ${aboutData.skills.map((s) => s.name).join(", ")}.`,
    "",
    ...aboutData.connect.map((c) => `- [${c.label}](${c.url})`),
    "",
  ].join("\n");
}
