
import { Briefcase, Calendar } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  skills: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Frontend Development Intern",
    company: "Prodigy Infotech",
    location: "Remote",
    period: "Jun 2023 - Jul 2023",
    description: [
      "Developed responsive web applications using Django and modern web technologies.",
      "Collaborated with UI/UX designers to implement user-friendly interfaces.",
      "Participated in code reviews and team meetings to enhance development practices.",
      "Optimized website performance and ensured cross-browser compatibility."
    ],
    skills: ["Django", "HTML/CSS", "JavaScript", "Bootstrap", "Responsive Design"],
  },
];

const Experience = () => {
  return (
    <AnimatedSection id="experience">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-heading">Work Experience</h2>
          <p className="section-subheading mx-auto">
            My professional journey and internships that have shaped my practical skills.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <div
              key={experience.title}
              className="relative pl-8 pb-12 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-px before:bg-border last:before:hidden last:pb-0"
            >
              <div className="absolute left-0 top-2 w-8 h-8 -translate-x-1/2 bg-background border border-border rounded-full flex items-center justify-center text-primary">
                <Briefcase size={16} />
              </div>
              
              <div className="glass-card rounded-2xl p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold font-display">{experience.title}</h3>
                    <p className="text-primary">{experience.company}</p>
                  </div>
                  
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar size={16} />
                    <span>{experience.period}</span>
                  </div>
                </div>
                
                <p className="text-muted-foreground italic mb-4">{experience.location}</p>
                
                <ul className="space-y-2 mb-6">
                  {experience.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2">
                  {experience.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm font-medium bg-secondary text-foreground rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
          
          <div className="flex justify-center mt-12">
            <div className="glass-card rounded-2xl p-8 text-center max-w-lg">
              <h3 className="text-xl font-bold mb-4">Looking for Opportunities</h3>
              <p className="text-muted-foreground">
                I'm currently seeking internships and entry-level positions in data science, machine learning, 
                and software development. If you're interested in collaborating, please get in touch!
              </p>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Experience;
