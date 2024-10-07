import Image from "next/image";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import BlurredShape from "@/public/images/blurred-shape.svg";
import FeaturesImage from "@/public/images/features.png";

const industries = [
    {
        "name": "Healthcare",
        "description": "Enhance patient care, automate diagnostics, and streamline administration."
    },
    {
        "name": "Finance & Banking",
        "description": "Automate processes, detect fraud, and offer personalized financial services."
    },
    {
        "name": "Retail & E-commerce",
        "description": "Optimize inventory, personalize shopping, and improve customer service."
    },
    {
        "name": "Manufacturing",
        "description": "Automate production, predict maintenance, and optimize supply chains."
    },
    {
        "name": "Logistics & Transportation",
        "description": "Optimize routes, track inventory, and improve fleet management."
    },
    {
        "name": "Education",
        "description": "Create personalized learning, automate grading, and offer AI tutoring."
    },
    {
        "name": "Real Estate",
        "description": "Optimize property valuation, market trends, and customer interactions."
    },
    {
        "name": "Legal Services",
        "description": "Automate document review, legal research, and predict case outcomes."
    },
    {
        "name": "Marketing & Advertising",
        "description": "Analyze behavior, personalize campaigns, and optimize ad spending."
    },
    {
        "name": "Hospitality & Tourism",
        "description": "Enhance guest experiences, automate bookings, and predict demand."
    },
    {
        "name": "Human Resources",
        "description": "Streamline recruitment, monitor performance, and improve engagement."
    },
    {
        "name": "Telecommunications",
        "description": "Optimize networks, improve customer service, and predict churn."
    },
    {
        "name": "Energy & Utilities",
        "description": "Optimize energy consumption, predict malfunctions, and manage grids."
    },
    {
        "name": "Agriculture",
        "description": "Monitor crops, predict yields, and automate farming processes."
    },
    {
        "name": "Entertainment & Media",
        "description": "Personalize content, improve recommendations, and enhance user engagement."
    }
]

export default function Features() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,theme(colors.slate.400/.25),transparent)1] md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-4 text-center md:pb-12">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-green-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-green-200/50">
              <span className="inline-flex bg-gradient-to-r from-green-500 to-green-200 bg-clip-text text-transparent">
                Who We Serve?
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.green.200),theme(colors.gray.50),theme(colors.green.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
                Streamline Your Business with Advanced AI
            </h2>
            <p className="text-lg text-green-200/65">
                Our innovative AI solutions simplify complex processes, boosting productivity across your organization. Let us help you achieve operational excellence and sustainable growth.
            </p>
          </div>
          {/* Items */}
          <div className="mx-auto grid max-w-sm gap-12 sm:max-w-none sm:grid-cols-2 md:gap-x-14 md:gap-y-16 lg:grid-cols-3">
              {industries.map((industry, index) => (
                  <article>
                      <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                          {industry.name}
                      </h3>
                      <p className="text-green-200/65">
                          {industry.description}
                      </p>
                  </article>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
