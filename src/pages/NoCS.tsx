import { PlayCircle, ExternalLink, ArrowLeft } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";

const NoCS = () => {
  const modules = [
    {
      step: 1,
      title: "Basic Syntax & Variables",
      description: "Learn the fundamentals of programming - variables, data types, and basic operations.",
      videoId: "apGV9Kg7ics", // Kunal Kushwaha - Programming Basics
      leetcodeLink: "https://leetcode.com/problems/two-sum/"
    },
    {
      step: 2,
      title: "Control Flow & Loops",
      description: "Master if-else statements, loops, and decision making in programming.",
      videoId: "GhQdlIFylQ8", // Kunal - Control Flow
      leetcodeLink: "https://leetcode.com/problems/fizz-buzz/"
    },
    {
      step: 3,
      title: "Functions & Methods",
      description: "Learn to organize code with functions, parameters, and return values.",
      videoId: "vvanI8NRlSI", // Kunal - Functions
      leetcodeLink: "https://leetcode.com/problems/reverse-integer/"
    },
    {
      step: 4,
      title: "Arrays & Lists",
      description: "Work with collections of data and understand array manipulation.",
      videoId: "n60Dn0UsbEk", // Kunal - Arrays
      leetcodeLink: "https://leetcode.com/problems/running-sum-of-1d-array/"
    },
    {
      step: 5,
      title: "Object-Oriented Programming",
      description: "Introduction to classes, objects, and OOP principles.",
      videoId: "BSVKUk58K6U", // Kunal - OOP
      leetcodeLink: "https://leetcode.com/problems/design-parking-system/"
    },
    {
      step: 6,
      title: "Problem Solving Basics",
      description: "Learn systematic approaches to breaking down and solving coding problems.",
      videoId: "lOx4DtkX5Ac", // Kunal - Problem Solving
      leetcodeLink: "https://leetcode.com/problems/valid-parentheses/"
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
              No CS? Start Here
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Complete beginner's guide to programming. Start from zero and build your coding foundation 
              with carefully structured lessons from Kunal Kushwaha.
            </p>
          </div>
        </div>

        {/* Progress Steps */}
        <div className="space-y-8">
          {modules.map((module, index) => (
            <Card key={index} className="backdrop-blur-glass bg-card/80 border-border/50 shadow-soft hover:shadow-medium transition-all duration-300">
              <div className="p-8">
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Step Info */}
                  <div className="lg:w-1/3">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center font-bold text-primary-foreground">
                        {module.step}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground">
                          {module.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                      {module.description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button asChild className="bg-gradient-primary">
                        <a 
                          href={`https://www.youtube.com/watch?v=${module.videoId}`}
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <PlayCircle className="w-5 h-5" />
                          Watch Video
                        </a>
                      </Button>
                      <Button variant="outline" asChild>
                        <a 
                          href={module.leetcodeLink}
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <ExternalLink className="w-5 h-5" />
                          Practice Problem
                        </a>
                      </Button>
                    </div>
                  </div>
                  
                  {/* Video Embed */}
                  <div className="lg:w-2/3">
                    <div className="aspect-video rounded-xl overflow-hidden shadow-medium">
                      <iframe
                        src={`https://www.youtube.com/embed/${module.videoId}`}
                        title={module.title}
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

export default NoCS;