import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Star, Code } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { cn } from "@/lib/utils";

interface Project {
    title: string;
    description: string;
    technologies: string[];
    github: string;
    demo?: string;
    image: string;
    featured?: boolean;
}

const projects: Project[] = [
  {
    title: "Online Car Rental System",
    description: "A user-friendly car rental platform ensuring secure authentication and seamless booking experience, with a 30% performance improvement achieved through technical troubleshooting.",
    technologies: ["MongoDB", "React.js", "Node.js"],
    github: "Online Car Rental System",
    image: "\project1.png",
    featured: true,
  },
    {
        title: "Online Job Portal",
        description: "A comprehensive platform connecting job seekers and employers, featuring job listings, application tracking, and user profiles.",
        technologies: ["Django", "PostgreSQL", "Bootstrap", "HTML,CSS"],
        github: "https://github.com/Mahidharchowdary2004/job-portal-",
        image: "\project2.jpg",
        featured: true,
    },
    
    {
        title: "CAREER ASSESSMENT TOOL FOR STUDENTS",
        description: "Created a web-based career assessment platform to guide students in career decision-making through personalized insights and recommendations.",
        technologies: ["MySQL", "Spring Boot", "JSP"],
        github: "https://github.com/Mahidharchowdary2004/web-based-career-assessment-tool-for-students",
        image: "\project3.png",
        featured: true,
    },
];

const Projects = () => {
    return (
        <AnimatedSection 
            id="projects" 
            className="bg-secondary/30 dark:bg-secondary/10 relative overflow-hidden"
        >
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl -z-0"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/5 rounded-full filter blur-3xl -z-0"></div>

            <div className="container max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="section-heading">Featured Projects</h2>
                    <p className="section-subheading mx-auto">
                        Explore some of my key projects that demonstrate my technical abilities and problem-solving skills.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {projects.map((project, index) => (
                        <div
                            key={project.title}
                            className={cn(
                                "glass-card rounded-2xl overflow-hidden shadow-lg transition-all hover:shadow-xl hover:-translate-y-1 card-hover",
                                project.featured && "md:col-span-2 lg:grid lg:grid-cols-2 lg:items-center"
                            )}
                        >
                            <div
                                className={cn(
                                    "aspect-video overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/20",
                                    project.featured && "lg:h-full"
                                )}
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform hover:scale-105"
                                />
                            </div>

                            <div className="p-6 lg:p-8 space-y-4">
                                {project.featured && (
                                    <div className="inline-flex items-center gap-1 px-2.5 py-0.5 text-xs font-medium bg-primary/10 text-primary rounded-full mb-2">
                                        <Star size={12} className="mr-1" />
                                        Featured Project
                                    </div>
                                )}

                                <h3 className="text-2xl font-bold font-display">{project.title}</h3>

                                <p className="text-muted-foreground">{project.description}</p>

                                <div className="flex flex-wrap gap-2 pt-2">
                                    {project.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-2.5 py-0.5 text-xs font-medium bg-secondary text-muted-foreground rounded-full"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-4 pt-4">
                                    <Button asChild variant="outline" size="sm" className="gap-2 rounded-full">
                                        <a 
                                            href={project.github} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                        >
                                            <Github size={16} />
                                            <span>Code</span>
                                        </a>
                                    </Button>

                                    {project.demo && (
                                        <Button asChild size="sm" className="gap-2 rounded-full">
                                            <a 
                                                href={project.demo} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                            >
                                                <ExternalLink size={16} />
                                                <span>Live Demo</span>
                                            </a>
                                        </Button>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Button 
                        asChild 
                        variant="outline" 
                        size="lg" 
                        className="rounded-full gap-2 hover:bg-primary/10"
                    >
                        <a 
                            href="https://github.com/Mahidharchowdary2004" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <Code size={18} />
                            <span>View All Projects on GitHub</span>
                        </a>
                    </Button>
                </div>
            </div>
        </AnimatedSection>
    );
};

export default Projects;
