import { PlayCircle, ExternalLink, ArrowLeft } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";

const DSA = () => {
  const topics = [
    {
      title: "Arrays & Hashing",
      description: "Master array operations, two pointers, sliding window, and hash map techniques.",
      videoId: "KLlXCFG5TnA", // Striver - Arrays
      problemLink: "https://leetcode.com/problems/contains-duplicate/"
    },
    {
      title: "Sorting Algorithms",
      description: "Learn bubble sort, merge sort, quick sort and their time complexities.",
      videoId: "HGk_ypEuS24", // Striver - Sorting
      problemLink: "https://leetcode.com/problems/sort-colors/"
    },
    {
      title: "Binary Search",
      description: "Master binary search pattern and its variations for efficient searching.",
      videoId: "f6UU7V3szVw", // Striver - Binary Search
      problemLink: "https://leetcode.com/problems/binary-search/"
    },
    {
      title: "Linked Lists",
      description: "Understand node structures, reversing, cycle detection, and merging.",
      videoId: "Nq7ok-OyEpg", // Striver - Linked Lists
      problemLink: "https://leetcode.com/problems/reverse-linked-list/"
    },
    {
      title: "Stacks & Queues",
      description: "Learn LIFO and FIFO data structures with real-world applications.",
      videoId: "XEZc4UyT0zI", // Striver - Stacks & Queues
      problemLink: "https://leetcode.com/problems/valid-parentheses/"
    },
    {
      title: "Trees & BST",
      description: "Binary trees, traversals, BST properties, and tree construction.",
      videoId: "f7JOBJIC-NA", // Striver - Trees
      problemLink: "https://leetcode.com/problems/maximum-depth-of-binary-tree/"
    },
    {
      title: "Recursion & Backtracking",
      description: "Master recursive thinking and solve complex problems using backtracking.",
      videoId: "bO9HF_1p2_Y", // Striver - Recursion
      problemLink: "https://leetcode.com/problems/subsets/"
    },
    {
      title: "Dynamic Programming",
      description: "Learn memoization, tabulation, and solve optimization problems efficiently.",
      videoId: "tyB0ztf0DNY", // Striver - DP
      problemLink: "https://leetcode.com/problems/climbing-stairs/"
    },
    {
      title: "Graphs",
      description: "BFS, DFS, shortest paths, and advanced graph algorithms.",
      videoId: "M3_pLsDdeuU", // Striver - Graphs
      problemLink: "https://leetcode.com/problems/number-of-islands/"
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
              DSA Box
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Complete Data Structures & Algorithms roadmap curated by Striver. 
              Master problem-solving skills essential for coding interviews and competitive programming.
            </p>
          </div>
        </div>

        {/* DSA Topics */}
        <div className="grid gap-8">
          {topics.map((topic, index) => (
            <Card key={index} className="backdrop-blur-glass bg-card/80 border-border/50 shadow-soft hover:shadow-medium transition-all duration-300">
              <div className="p-8">
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Topic Info */}
                  <div className="lg:w-1/3">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-secondary rounded-full flex items-center justify-center font-bold text-accent-foreground">
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
                      <Button asChild className="bg-gradient-secondary">
                        <a 
                          href={`https://www.youtube.com/watch?v=${topic.videoId}`}
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <PlayCircle className="w-5 h-5" />
                          Watch Striver
                        </a>
                      </Button>
                      <Button variant="outline" asChild>
                        <a 
                          href={topic.problemLink}
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <ExternalLink className="w-5 h-5" />
                          Solve Problem
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

export default DSA;