import { Button } from "@/components/ui/button"
import { ArrowDownToLine, Github, Linkedin, Mail, FileText, Code2, Brain } from "lucide-react"
import { cn } from "@/lib/utils"

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-20 overflow-hidden relative">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl opacity-60"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-blue-500/10 rounded-full filter blur-3xl opacity-70"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-purple-500/10 rounded-full filter blur-3xl opacity-60"></div>
      </div>

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div className="lg:w-1/2 space-y-8">
            <div className="space-y-2">
              <div className="inline-block bg-primary/10 dark:bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium animate-fade-in-up shadow-sm backdrop-blur-sm">
                Software Developer
              </div>
              <h1
                className="text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight animate-fade-in-up"
                style={{ animationDelay: "200ms" }}
              >
                Hello, I'm <span className="text-gradient">Nallapaneni Mahidhar</span>
              </h1>
              <h2
                className="text-xl sm:text-2xl md:text-3xl font-medium text-muted-foreground animate-fade-in-up"
                style={{ animationDelay: "400ms" }}
              >
                Fresher
              </h2>
            </div>

            <p
              className="text-lg text-muted-foreground max-w-xl animate-fade-in-up"
              style={{ animationDelay: "600ms" }}
            >
              I am a Computer Science and Engineering student at KL University, with a strong passion for data science, web development, and software development. Currently pursuing my degree, I am eager to leverage my skills and knowledge to create innovative solutions and contribute to impactful projects
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: "800ms" }}>
              <Button
                asChild
                size="lg"
                className="rounded-full shadow-lg hover:shadow-primary/20 hover:shadow-xl transition-all"
              >
                <a href="#contact">Get in Touch</a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full backdrop-blur-sm border-opacity-50 hover:bg-background/50"
              >
                <a href="#about">
                  <span>Learn More</span>
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full backdrop-blur-sm border-opacity-50 hover:bg-background/50 group"
              >
                <a 
                  href="https://drive.google.com/file/d/16nrlDaLcOUJYPYD8b1m2rgusPKbJv-Ti/view?usp=sharing" 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="flex items-center gap-2">
                    <FileText className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span>View Resume</span>
                    <ArrowDownToLine className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                  </span>
                </a>
              </Button>
            </div>

            <div className="flex space-x-6 pt-4 animate-fade-in-up" style={{ animationDelay: "1000ms" }}>
              <a
                href="https://github.com/Mahidharchowdary2004"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors hover:scale-110 transform"
                aria-label="GitHub Profile"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/nallapaneni-mahidhar/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors hover:scale-110 transform"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:nallapanenimahidhar2004@gmail.com"
                className="text-foreground/70 hover:text-primary transition-colors hover:scale-110 transform"
                aria-label="Email Me"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div
            className={cn(
              "mt-12 lg:mt-0 lg:w-5/12 relative animate-blur-in",
              "aspect-square rounded-3xl overflow-hidden",
              "shadow-xl shadow-primary/10",
              "flex items-center justify-center",
            )}
          >
            {/* Full Image Display */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent z-0"></div>
            <div className="absolute inset-0 flex items-center justify-center p-4">
              <img
                src="\mahidhar1.png"
                alt="Nallapaneni Mahidhar"
                className="max-w-full max-h-full object-contain rounded-2xl"
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <a
            href="#about"
            aria-label="Scroll to About section"
            className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors group"
          >
            <span className="text-xs mb-2 group-hover:translate-y-1 transition-transform">Scroll Down</span>
            <ArrowDownToLine size={20} className="group-hover:translate-y-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero