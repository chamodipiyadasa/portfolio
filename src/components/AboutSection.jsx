import { Briefcase, Code, User } from "lucide-react"

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Web Developer Who Loves to Build and Learn
            </h3>
            <p className="text-muted-foreground">
              My journey in tech started with web development and quickly became a passion. I enjoy working on both the frontend and backend to create complete solutions.
            </p>
            <p className="text-muted-foreground">
              While the web is my comfort zone, mobile development is a growing interest that I'm continuing to explore through side projects and learning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a
                href="/cv/Resume_Chamodi_Piyadasa.pdf"
                download="Resume_Chamodi_Piyadasa.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 text-center"
              >
                Download CV
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">I focus on building responsive and functional websites that offer a smooth user experience. I enjoy working on both the frontend and backend, making sure everything looks great and works well together.</p>
                </div>
              </div>
            </div>
            
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Design</h4>
                  <p className="text-muted-foreground">I've worked on a few projects where I handled both the design and development. This helped me understand how important a good user experience is. I use wireframes or basic mockups to plan out the design before I build the actual interface.</p>
                </div>
              </div>
            </div>
            
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Project Management</h4>
                  <p className="text-muted-foreground">I enjoy managing team projects by setting clear goals, creating timelines, and making sure everyone stays aligned. I use tools like Trello or Notion to organize tasks and communicate updates, which helps keep everything running smoothly.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}