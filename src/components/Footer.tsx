
import { ArrowUp, Github, Linkedin, Mail, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-secondary/40 dark:bg-secondary/20 py-12 px-4 backdrop-blur-sm">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent -z-10"></div>
      
      <div className="container max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h2 className="text-2xl font-display font-bold tracking-tight">
              Portfolio<span className="text-primary">.</span>
            </h2>
            <p className="text-muted-foreground mt-2">
              Data Science & Web Development
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="flex items-center space-x-6">
              <a
                href="https://github.com/Mahidharchowdary2004"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors hover:scale-110 transform"
                aria-label="GitHub Profile"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/nallapaneni-mahidhar/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors hover:scale-110 transform"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:nallapanenimahidhar2004@gmail.com"
                className="text-foreground/70 hover:text-primary transition-colors hover:scale-110 transform"
                aria-label="Email Me"
              >
                <Mail size={20} />
              </a>
            </div>
            
            <Button
              variant="outline"
              size="icon"
              className="rounded-full hover:bg-primary/10 hover:text-primary"
              onClick={scrollToTop}
              aria-label="Scroll to top"
            >
              <ArrowUp size={18} />
            </Button>
          </div>
        </div>
        
        <div className="border-t border-border/30 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {currentYear} Portfolio. Built with <Heart size={12} className="inline text-primary mx-1" /> by Nallapaneni Mahidhar
          </p>
          
          <div className="flex space-x-8">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms
            </a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
