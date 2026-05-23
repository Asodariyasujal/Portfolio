/**
 * Utility functions for generating JSON-LD structured data
 */

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sujal Asodariya",
  url: "https://yourportfolio.com", // Update with your domain
  image: "https://yourportfolio.com/profile-image.jpg", // Update with your profile image
  description: "Full-Stack Developer & Odoo Developer",
  jobTitle: "Full-Stack Developer",
  email: "your-email@example.com", // Update with your email
  sameAs: [
    "https://linkedin.com/in/yourprofile", // Update with your LinkedIn
    "https://github.com/yourprofile", // Update with your GitHub
    "https://twitter.com/yourprofile", // Update if you have Twitter
  ],
  knowsAbout: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "C++",
    "MongoDB",
    "PostgreSQL",
    "Docker",
    "AWS",
  ],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Sujal Asodariya - Portfolio",
  url: "https://yourportfolio.com", // Update with your domain
  description:
    "A developer portfolio showcasing projects, experience, coding achievements, and tech stack.",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://yourportfolio.com/projects?search={search_term_string}",
    },
    query_input: "required name=search_term_string",
  },
};

export const breadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: `https://yourportfolio.com${item.url}`, // Update with your domain
  })),
});

export const projectSchema = (project) => ({
  "@context": "https://schema.org",
  "@type": "SoftwareSourceCode",
  name: project.title,
  description: project.description,
  url: project.url || "https://yourportfolio.com/projects",
  author: {
    "@type": "Person",
    name: "Sujal Asodariya",
  },
  programmingLanguage: project.technologies || [],
  image: project.image,
  dateCreated: project.dateCreated,
  dateModified: project.dateModified,
});

export const experienceSchema = (experience) => ({
  "@context": "https://schema.org",
  "@type": "EmploymentEvent",
  jobTitle: experience.title,
  hiringOrganization: {
    "@type": "Organization",
    name: experience.company,
  },
  employmentType: experience.type || "Full-time",
  startDate: experience.startDate,
  endDate: experience.endDate || "",
  description: experience.description,
  url: experience.companyUrl,
});

export const aggregateRatingSchema = (rating) => ({
  "@context": "https://schema.org",
  "@type": "AggregateRating",
  ratingValue: rating.value,
  bestRating: rating.bestRating || 5,
  worstRating: rating.worstRating || 0,
  ratingCount: rating.count,
  reviewCount: rating.reviewCount,
});

/**
 * Component to render JSON-LD script tag
 */
export function JsonLdScript({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
