import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, SendIcon, Github, Linkedin, Calendar, Code2, Brain } from 'lucide-react';
import AnimatedSection from "./AnimatedSection";
import { z } from "zod";

// Contact form schema
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(3, { message: "Subject must be at least 3 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" })
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    try {
      contactFormSchema.parse(formData);
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Partial<Record<keyof ContactFormData, string>> = {};
        error.errors.forEach(err => {
          if (err.path[0]) {
            newErrors[err.path[0] as keyof ContactFormData] = err.message;
          }
        });
        setErrors(newErrors);
      }
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: "Form validation failed",
        description: "Please check the form for errors",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      });
      
      if (!response.ok) {
        throw new Error('Failed to send message. Please try again later.');
      }
      
      const data = await response.json();
      
      toast({
        title: "Message sent successfully",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Failed to send message",
        description: error instanceof Error ? error.message : "There was a problem sending your message. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatedSection id="contact" className="bg-secondary/50 dark:bg-secondary/10 relative overflow-hidden py-16">
      {/* Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50 origin-left"
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
      />
      
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a question or want to discuss a potential collaboration? Reach out using the form below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-border/50 transition-all duration-300 hover:shadow-xl">
            <h3 className="text-2xl font-bold font-display mb-6 text-foreground">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className={`w-full transition-all duration-200 ${errors.name ? "border-destructive" : ""}`}
                  aria-invalid={errors.name ? "true" : "false"}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="text-destructive text-sm">{errors.name}</p>
                )}
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="yourname@example.com"
                  className={`w-full transition-all duration-200 ${errors.email ? "border-destructive" : ""}`}
                  aria-invalid={errors.email ? "true" : "false"}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="text-destructive text-sm">{errors.email}</p>
                )}
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can I help you?"
                  className={`w-full transition-all duration-200 ${errors.subject ? "border-destructive" : ""}`}
                  aria-invalid={errors.subject ? "true" : "false"}
                  aria-describedby={errors.subject ? "subject-error" : undefined}
                />
                {errors.subject && (
                  <p id="subject-error" className="text-destructive text-sm">{errors.subject}</p>
                )}
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  className={`min-h-[150px] w-full transition-all duration-200 ${errors.message ? "border-destructive" : ""}`}
                  aria-invalid={errors.message ? "true" : "false"}
                  aria-describedby={errors.message ? "message-error" : undefined}
                />
                {errors.message && (
                  <p id="message-error" className="text-destructive text-sm">{errors.message}</p>
                )}
              </div>
              
              <Button 
                type="submit" 
                className="w-full transition-all duration-300 hover:shadow-md hover:translate-y-[-2px]" 
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <SendIcon size={16} />
                    Send Message
                  </span>
                )}
              </Button>
            </form>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold font-display mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                Contact Information
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 hover-lift">
                  <div className="bg-primary/10 p-3 rounded-full text-primary animate-float">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <a
                      href="mailto:nallapanenimahidhar2004@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      nallapanenimahidhar2004@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 hover-lift">
                  <div className="bg-primary/10 p-3 rounded-full text-primary animate-float" style={{ animationDelay: '0.2s' }}>
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <a
                      href="tel:+91 8688131949"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +91 8688131949
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 hover-lift">
                  <div className="bg-primary/10 p-3 rounded-full text-primary animate-float" style={{ animationDelay: '0.4s' }}>
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium">Location</h4>
                    <p className="text-muted-foreground">Nellore, Andhra Pradesh, India</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-border/50 transition-all duration-300 hover:shadow-xl">
              <h3 className="text-xl font-bold font-display mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                Connect with Me
              </h3>
              <p className="text-muted-foreground mb-6">
                Follow me on social media or check out my profiles on professional platforms.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <Button asChild variant="outline" size="lg" className="flex items-center gap-2 transition-all duration-300 hover:bg-primary/10">
                  <a
                    href="https://github.com/Mahidharchowdary2004"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                  >
                    <Github size={18} />
                    GitHub
                  </a>
                </Button>
                
                <Button asChild variant="outline" size="lg" className="flex items-center gap-2 transition-all duration-300 hover:bg-primary/10">
                  <a
                    href="https://www.linkedin.com/in/nallapaneni-mahidhar/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin size={18} />
                    LinkedIn
                  </a>
                </Button>

                <Button asChild variant="outline" size="lg" className="flex items-center gap-2 transition-all duration-300 hover:bg-primary/10">
                  <a
                    href="https://www.codechef.com/users/mahidhar2004"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="CodeChef Profile"
                  >
                    <Code2 size={18} />
                    CodeChef
                  </a>
                </Button>

                <Button asChild variant="outline" size="lg" className="flex items-center gap-2 transition-all duration-300 hover:bg-primary/10">
                  <a
                    href="https://leetcode.com/mahidhar2004/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LeetCode Profile"
                  >
                    <Brain size={18} />
                    LeetCode
                  </a>
                </Button>
              </div>
            </div>
            
           
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Contact;