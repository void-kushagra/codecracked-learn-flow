import { Code2 } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-glass bg-card/80 border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-primary p-2 rounded-lg shadow-soft">
              <Code2 className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Code Cracked
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-foreground hover:text-primary transition-smooth">
              Home
            </a>
            <a href="/no-cs" className="text-foreground hover:text-primary transition-smooth">
              No CS? Start Here
            </a>
            <a href="/dsa" className="text-foreground hover:text-primary transition-smooth">
              DSA Box
            </a>
            <a href="/webdev" className="text-foreground hover:text-primary transition-smooth">
              Web Dev Box
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;