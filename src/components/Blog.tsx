
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "./AnimatedSection";

interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    title: "Getting Started with Machine Learning: A Beginner's Guide",
    excerpt: "An introduction to key machine learning concepts, algorithms, and resources for beginners.",
    date: "April 15, 2023",
    tags: ["Machine Learning", "Python", "Data Science"],
    image: "/placeholder.svg",
  },
  {
    title: "The Role of IoT in Smart Agriculture",
    excerpt: "Exploring how IoT technologies are revolutionizing farming practices and agricultural productivity.",
    date: "March 10, 2023",
    tags: ["IoT", "Agriculture", "Sensors"],
    image: "/placeholder.svg",
  },
  {
    title: "Understanding NoSQL Databases: MongoDB vs. Redis",
    excerpt: "A comparison of popular NoSQL databases and when to use each one for your projects.",
    date: "February 22, 2023",
    tags: ["Databases", "MongoDB", "Redis", "NoSQL"],
    image: "/placeholder.svg",
  },
];

const Blog = () => {
  return (
    <AnimatedSection id="blog">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-heading">Blog</h2>
          <p className="section-subheading mx-auto">
            My thoughts, insights, and tutorials on data science, programming, and technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.title}
              className="glass-card rounded-2xl overflow-hidden transition-all hover:shadow-lg"
            >
              <div className="aspect-video overflow-hidden bg-muted">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              
              <div className="p-6 space-y-4">
                <div className="flex flex-wrap gap-2 mb-2">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 text-xs font-medium bg-secondary text-foreground rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                  {post.tags.length > 2 && (
                    <span className="px-2.5 py-0.5 text-xs font-medium bg-secondary text-foreground rounded-full">
                      +{post.tags.length - 2}
                    </span>
                  )}
                </div>
                
                <h3 className="text-xl font-bold font-display line-clamp-2">{post.title}</h3>
                
                <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
                
                <div className="flex justify-between items-center pt-2">
                  <span className="text-sm text-muted-foreground">{post.date}</span>
                  
                  <Button variant="ghost" size="sm" className="p-0 h-auto">
                    <span className="text-primary flex items-center gap-1">
                      Read More <ArrowRight size={14} />
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg" className="rounded-full">
            <a href="#">View All Posts</a>
          </Button>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Blog;
