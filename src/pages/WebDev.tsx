import { PlayCircle, ExternalLink, ArrowLeft } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";

const WebDev = () => {
  const topics = [
    {
      title: "HTML Fundamentals",
      description: "Learn the structure of web pages with semantic HTML5 elements.",
      videoId: "HcOc7P5BMi4", // CodeWithHarry - HTML
      projectLink: "https://www.frontendmentor.io/challenges/huddle-landing-page-with-a-single-introductory-section-B_2Wvxgi0"
    },
    {
      title: "CSS Styling & Layout",
      description: "Master CSS selectors, flexbox, grid, and responsive design principles.",
      videoId: "Edsxf_NBFrw", // CodeWithHarry - CSS
      projectLink: "https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa"
    },
    {
      title: "JavaScript Basics",
      description: "Learn variables, functions, DOM manipulation, and event handling.",
      videoId: "ER9SspLe4Hg", // CodeWithHarry - JavaScript
      projectLink: "https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29"
    },
    {
      title: "Advanced JavaScript",
      description: "ES6+, async/await, promises, modules, and modern JavaScript features.",
      videoId: "2ji-hnTwaGI", // CodeWithHarry - Advanced JS
      projectLink: "https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW"
    },
    {
      title: "React Fundamentals",
      description: "Components, JSX, props, state, and the React ecosystem.",
      videoId: "RGKi6LSPDLU", // CodeWithHarry - React
      projectLink: "https://github.com/john-smilga/react-projects"
    },
    {
      title: "React Hooks & State",
      description: "useState, useEffect, custom hooks, and state management patterns.",
      videoId: "j942wKiXFu8", // CodeWithHarry - React Hooks
      projectLink: "https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6"
    },
    {
      title: "API Integration",
      description: "Fetch data, handle responses, and integrate with REST APIs.",
      videoId: "cuEtnrL9-H0", // CodeWithHarry - APIs
      projectLink: "https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca"
    },
    {
      title: "Node.js & Backend",
      description: "Server-side JavaScript, Express.js, and building REST APIs.",
      videoId: "ohIAiuHMKMI", // CodeWithHarry - Node.js
      projectLink: "https://github.com/bradtraversy/node_crash_course"
    },
    {
      title: "Database & MongoDB",
      description: "NoSQL databases, CRUD operations, and data modeling.",
      videoId: "J6mDkcqU_ZE", // CodeWithHarry - MongoDB
      projectLink: "https://github.com/bradtraversy/mern_shopping_list"
    },
    {
      title: "Full Stack Project",
      description: "Build and deploy a complete MERN stack application.",
      videoId: "7CqJlxBYj-M", // CodeWithHarry - MERN
      projectLink: "https://github.com/bradtraversy/devconnector_2.0"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-bg">
      <Navbar />
      
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <Button variant="outline" asChild>
              <a href="/" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </a>
            </Button>
          </div>
          
          <div className="text-center">
            <h1 className="text-5xl font-bold text-foreground mb-4">
              Web Dev Box
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Complete modern web development roadmap with CodeWithHarry. 
              Build stunning websites and full-stack applications from frontend to backend.
            </p>
          </div>
        </div>

        {/* Web Dev Topics */}
        <div className="grid gap-8">
          {topics.map((topic, index) => (
            <Card key={index} className="backdrop-blur-glass bg-card/80 border-border/50 shadow-soft hover:shadow-medium transition-all duration-300">
              <div className="p-8">
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Topic Info */}
                  <div className="lg:w-1/3">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-success rounded-full flex items-center justify-center font-bold text-success-foreground">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground">
                          {topic.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                      {topic.description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button asChild className="bg-gradient-success">
                        <a 
                          href={`https://www.youtube.com/watch?v=${topic.videoId}`}
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <PlayCircle className="w-5 h-5" />
                          Watch Harry
                        </a>
                      </Button>
                      <Button variant="outline" asChild>
                        <a 
                          href={topic.projectLink}
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <ExternalLink className="w-5 h-5" />
                          Build Project
                        </a>
                      </Button>
                    </div>
                  </div>
                  
                  {/* Video Embed */}
                  <div className="lg:w-2/3">
                    <div className="aspect-video rounded-xl overflow-hidden shadow-medium">
                      <iframe
                        src={`https://www.youtube.com/embed/${topic.videoId}`}
                        title={topic.title}
                        className="w-full h-full"
                        allowFullScreen
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WebDev;