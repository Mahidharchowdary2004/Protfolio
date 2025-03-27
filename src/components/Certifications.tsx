import type React from "react"
import { Award } from "lucide-react"
import AnimatedSection from "./AnimatedSection"

interface Certification {
  title: string
  issuer: string
  date: string
  description?: string
  link?: string
}

const certifications: Certification[] = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    date: "April 30, 2024 – April 30, 2027",
    description:
      "Certification awarded to NALLAPANENI MAHIDHAR for successfully completing the AWS Certified Cloud Practitioner exam. Verification available at AWS Verification Link.",
    link: "https://www.credly.com/badges/e2ee70a2-39be-410e-8d8c-1d82a9417c80/public_url",
  },
  {
    title: "Red Hat Certified Enterprise Application Developer",
    issuer: "Red Hat, Inc.",
    date: "December 24, 2024",
    description:
      "The Red Hat Certified Enterprise Application Developer certifies skills in developing secure, scalable Java EE applications using Red Hat technologies.",
    link: "https://www.credly.com/badges/6283d218-e473-42f4-8c3a-cd1b7f8876db/public_url",
  },
  {
    title: "AI Associate",
    issuer: "Salesforce",
    date: "October 17, 2024",
    description:
      "The AI Associate certification by Salesforce validates foundational AI knowledge, focusing on concepts, ethical practices, and applying AI tools within the Salesforce ecosystem.",
    link: "https://ibm.com/",
  },
  {
    title: "Data Science Job Simulation",
    issuer: "Forage",
    date: "2021",
    description:
      "The Data Science Job Simulation certification by Forage showcases practical skills in data analysis, feature engineering, modeling, and deriving insights for business solutions.",
    link: "https://udemy.com/",
  },
]

const Certifications = () => {
  return (
    <AnimatedSection id="certifications" className="bg-secondary/50 dark:bg-secondary/10 py-16">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading">Certifications</h2>
          <p className="section-subheading mx-auto max-w-2xl">
            A collection of my professional certifications that demonstrate my commitment to continuous growth and excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* First Two Cards */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold font-display flex items-center gap-2 border-b pb-2 border-primary/20">
              <Award className="text-primary h-6 w-6" />
              <span>Professional Certifications</span>
            </h3>

            <div className="grid grid-cols-1 gap-8">
              {certifications.slice(0, 2).map((cert) => (
                <div
                  key={cert.title}
                  className="glass-card rounded-2xl p-8 space-y-6 transition-all hover:shadow-lg hover:translate-y-[-2px] h-[450px] flex flex-col"
                >
                  <div className="flex justify-between items-start flex-wrap gap-3">
                    <h4 className="text-2xl font-bold leading-tight">{cert.title}</h4>
                    <span className="text-sm text-muted-foreground px-3 py-1.5 bg-primary/10 rounded-full">
                      {cert.date}
                    </span>
                  </div>

                  <p className="text-primary font-medium text-lg">{cert.issuer}</p>

                  {cert.description && (
                    <p className="text-muted-foreground text-base leading-relaxed flex-grow">
                      {cert.description}
                    </p>
                  )}

                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:underline text-base font-medium group mt-auto"
                      aria-label={`View certificate for ${cert.title}`}
                    >
                      View Certificate
                      <span className="transition-transform group-hover:translate-x-1">→</span>
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Second Two Cards */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 gap-8">
              {certifications.slice(2, 4).map((cert) => (
                <div
                  key={cert.title}
                  className="glass-card rounded-2xl p-8 space-y-6 transition-all hover:shadow-lg hover:translate-y-[-2px] h-[450px] flex flex-col"
                >
                  <div className="flex justify-between items-start flex-wrap gap-3">
                    <h4 className="text-2xl font-bold leading-tight">{cert.title}</h4>
                    <span className="text-sm text-muted-foreground px-3 py-1.5 bg-primary/10 rounded-full">
                      {cert.date}
                    </span>
                  </div>

                  <p className="text-primary font-medium text-lg">{cert.issuer}</p>

                  {cert.description && (
                    <p className="text-muted-foreground text-base leading-relaxed flex-grow">
                      {cert.description}
                    </p>
                  )}

                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:underline text-base font-medium group mt-auto"
                      aria-label={`View certificate for ${cert.title}`}
                    >
                      View Certificate
                      <span className="transition-transform group-hover:translate-x-1">→</span>
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}

export default Certifications

