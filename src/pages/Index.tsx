import { BookOpen, Brain, Code } from "lucide-react";
import Navbar from "@/components/Navbar";
import FeatureCard from "@/components/FeatureCard";
import FAQ from "@/components/FAQ";
import ChatBot from "@/components/ChatBot";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-bg">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-6xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
              Break into coding —{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                no CS degree required
              </span>
            </h1>
            <p className="text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Master programming fundamentals, data structures, and web development 
              through carefully curated learning paths designed for self-taught developers.
            </p>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <FeatureCard
              title="No CS? Start Here"
              description="Complete beginner-friendly modules to teach you coding from scratch. Learn syntax, logic, and problem-solving skills step by step."
              icon={<BookOpen className="w-8 h-8" />}
              color="primary"
              href="/no-cs"
            />
            
            <FeatureCard
              title="DSA Box"
              description="Master Data Structures and Algorithms with a comprehensive roadmap covering arrays, trees, graphs, and dynamic programming."
              icon={<Brain className="w-8 h-8" />}
              color="secondary"
              href="/dsa"
            />
            
            <FeatureCard
              title="Web Dev Box"
              description="Build modern websites and applications. Learn HTML, CSS, JavaScript, React, and deployment from ground up."
              icon={<Code className="w-8 h-8" />}
              color="success"
              href="/webdev"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />
      
      {/* Floating Chatbot */}
      <ChatBot />
    </div>
  );
};

export default Index;
