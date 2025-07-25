import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How do I start coding?",
      answer: "Start with our 'No CS? Start Here' section! It takes you through the fundamentals step by step, beginning with basic syntax and gradually building up to more complex concepts. No prior experience needed!"
    },
    {
      question: "What is DSA?",
      answer: "DSA stands for Data Structures and Algorithms. It's the foundation of computer science that teaches you how to organize data efficiently and solve problems systematically. Essential for coding interviews and becoming a better programmer!"
    },
    {
      question: "Do I need a CS degree to learn this?",
      answer: "Absolutely not! Many successful developers are self-taught. What matters is your dedication, practice, and consistency. Our platform is specifically designed for people without a CS background to learn effectively."
    },
    {
      question: "How long does it take to become job-ready?",
      answer: "It varies by person, but with consistent practice (2-3 hours daily), you can become job-ready in 6-12 months. Focus on building projects and practicing coding problems regularly."
    },
    {
      question: "Which programming language should I start with?",
      answer: "We recommend starting with Python or JavaScript. Python is beginner-friendly with simple syntax, while JavaScript lets you build both websites and applications. Choose based on your goals!"
    },
    {
      question: "What's the difference between the three boxes?",
      answer: "'No CS? Start Here' is for complete beginners, 'DSA Box' focuses on algorithms and problem-solving skills, and 'Web Dev Box' teaches you to build websites and web applications."
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Got questions? We've got answers to help you get started.
          </p>
        </div>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="backdrop-blur-glass bg-card/50 border border-border/50 rounded-xl px-6 shadow-soft hover:shadow-medium transition-all duration-300"
            >
              <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary transition-smooth py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;