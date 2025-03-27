import { GraduationCap, BookOpen, Code, Database } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const About = () => {
  return (
    <AnimatedSection id="about" className="bg-secondary/50 dark:bg-secondary/10">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-heading">About Me</h2>
          <p className="section-subheading mx-auto">
            Get to know my background, education, and what drives my passion for data science.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-display font-bold">My Journey</h3>
            <p className="text-lg text-muted-foreground">
            I am a dedicated Computer Science and Engineering student specializing in Data Science 
            and Big Data Analytics at KL University. My academic journey has equipped me with strong 
            analytical skills and proficiency in various programming languages and frameworks.
            </p>
            <p className="text-lg text-muted-foreground">
            Passionate about solving complex problems through data-driven approaches, I am continuously 
            expanding my expertise in artificial intelligence and embedded systems. I believe in harnessing
            technology to transform industries and enhance lives.
            </p>
            <p className="text-lg text-muted-foreground">
            My goal is to apply my technical skills and creative thinking to develop innovative solutions in 
            data science and software development, while eagerly embracing new technologies to tackle real-world challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card rounded-2xl p-6 space-y-4">
              <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center text-primary">
                <GraduationCap size={24} />
              </div>
              <h4 className="text-xl font-bold">Education</h4>
              <div className="space-y-4">
                <div>
                  <p className="font-medium">B.Tech in Computer Science</p>
                  <p className="text-sm text-muted-foreground">KL University, Vijayawada</p>
                  <p className="text-sm text-muted-foreground">2022 - 2026</p>
                  <p className="text-sm text-primary font-medium">CGPA: 8.5/10</p>
                </div>
                <div>
                  <p className="font-medium">Specialization</p>
                  <p className="text-sm text-muted-foreground">Data Science & Big Data Analytics</p>
                </div>
                <div>
                  <p className="font-medium">Intermediate (12th)</p>
                  <p className="text-sm text-muted-foreground">Narayana Junior College, Vijayawada</p>
                  <p className="text-sm text-muted-foreground">2020 - 2022</p>
                  <p className="text-sm text-primary font-medium">Percentage: 74.1%</p>
                </div>
                <div>
                  <p className="font-medium">SSC (10th)</p>
                  <p className="text-sm text-muted-foreground">Narayana High School, Vijayawada</p>
                  <p className="text-sm text-muted-foreground">2019 - 2020</p>
                  <p className="text-sm text-primary font-medium">Marks: 595/600</p>
                </div>
                
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6 space-y-4">
              <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center text-primary">
                <BookOpen size={24} />
              </div>
              <h4 className="text-xl font-bold">Interests</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  Artificial Intelligence
                </li>
               
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  Data Visualization and Analysis
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  Web Development
                </li>
              </ul>
            </div>

            <div className="glass-card rounded-2xl p-6 space-y-4">
              <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center text-primary">
                <Code size={24} />
              </div>
              <h4 className="text-xl font-bold">Languages</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  Java
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  Python
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  C
                </li>
              </ul>
            </div>

            <div className="glass-card rounded-2xl p-6 space-y-4">
              <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center text-primary">
                <Database size={24} />
              </div>
              <h4 className="text-xl font-bold">Databases</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  MySQL
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  MongoDB
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  SQL
                </li>
                
              </ul>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default About;
