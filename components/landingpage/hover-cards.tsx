import { HoverEffect } from "../ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="container-fluid bg-black py-5 md:py-10n md:text-center ">
      <div className=" container   mx-auto px-8   ">
        <div className="content   mt-10 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-6xl text-white font-bold">
            Core Features That Make It Valuable
          </h2>
        </div>

        <HoverEffect items={projects} />
      </div>
    </div>
  );
}
export const projects = [
  {
    title: "Conversation AI",
    description:
      "An AI-driven solution that enables natural language understanding and conversation capabilities for customer support, virtual assistants, and chatbots.",
  },
  {
    title: "Image Generation",
    description:
      "Utilizes deep learning algorithms to create realistic images from text descriptions or modify existing images, offering powerful tools for artists and designers.",
  },
  {
    title: "Code Generation",
    description:
      "An AI tool that automatically generates code snippets or entire applications based on user inputs, streamlining the development process and enhancing productivity.",
  },
  {
    title: "Music Generation",
    description:
      "An AI system that composes original music tracks based on specified genres or styles, providing musicians with innovative tools for creativity.",
  },
  {
    title: "Video Generation",
    description:
      "Uses machine learning techniques to create video content from scratch or transform existing videos, making it easier for creators to produce engaging visual stories.",
  },
  {
    title: "Predictive Analytics",
    description:
      "Employs AI algorithms to analyze historical data and make predictions about future trends, enabling businesses to make data-driven decisions.",
  },
  {
    title: "Personalized Recommendations",
    description:
      "An AI service that analyzes user behavior to provide tailored recommendations, enhancing user experience in e-commerce, streaming, and content delivery.",
  },
  {
    title: "Data Science ",
    description:
      "An AI service that analyzes user behavior to provide tailored recommendations, enhancing user experience in e-commerce, streaming, and content delivery.",
  },
];

export default CardHoverEffectDemo;
