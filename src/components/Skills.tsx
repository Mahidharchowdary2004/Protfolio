
import { useState } from "react";
import { cn } from "@/lib/utils";
import AnimatedSection from "./AnimatedSection";

interface Skill {
  name: string;
  proficiency: number; // 0-100
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Programming",
    skills: [
      { name: "Java", proficiency: 75 },
      { name: "Python", proficiency: 80 },
      { name: "C", proficiency: 75 },
      
    ],
  },
  {
    title: "Web Development",
    skills: [
      { name: "Django", proficiency: 85 },
      { name: "React", proficiency: 80 },
      
      { name: "HTML/CSS", proficiency: 90 },
      { name: "Spring Boot", proficiency: 70 },
    ],
  },
  {
    title: "Data Science & AI",
    skills: [
      { name: "SQL", proficiency: 85 },
      
      { name: "Data Visualization", proficiency: 80 },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "MYSQL", proficiency: 80 },
      { name: "AWS", proficiency: 75 },
      { name: "Jupyter Lab", proficiency: 85 },
      { name: "GitHub", proficiency: 85 },
      { name: "MongoDB", proficiency: 80 },
    ],
  },
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].title);

  return (
    <AnimatedSection id="skills">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-heading">Technical Skills</h2>
          <p className="section-subheading mx-auto">
            A comprehensive look at my technical abilities, tools, and platforms I'm proficient in.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {skillCategories.map((category) => (
            <button
              key={category.title}
              onClick={() => setActiveCategory(category.title)}
              className={cn(
                "px-6 py-3 rounded-full font-medium transition-all",
                activeCategory === category.title
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-secondary hover:bg-secondary/80 text-foreground"
              )}
            >
              {category.title}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories
            .filter((category) => category.title === activeCategory)
            .map((category) => (
              <div key={category.title} className="space-y-6 animate-fade-in">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.proficiency}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.proficiency}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            ))}

          <div className="glass-card rounded-2xl p-8 flex items-center justify-center">
            <div className="text-center space-y-4">
              <div className="inline-flex justify-center items-center w-20 h-20 bg-primary/10 rounded-full">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-primary"></div>
                </div>
              </div>
              <h3 className="text-2xl font-bold font-display">Always Learning</h3>
              <p className="text-muted-foreground">
                I'm continuously expanding my skill set by learning new technologies 
                and improving existing ones.
              </p>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Skills;
