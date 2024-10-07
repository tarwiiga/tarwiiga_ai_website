import Image from "next/image";
import WorflowImg01 from "@/public/images/workflow-01.png";
import WorflowImg02 from "@/public/images/workflow-02.png";
import WorflowImg03 from "@/public/images/workflow-03.png";
import Spotlight from "@/components/spotlight";

const cards = [
    {
        "title": "Tailored AI Solutions",
        "description": "We offer customized AI strategies that align with your business goals. From automation to predictive analytics, we help streamline your operations and improve efficiency.",
        "image": WorflowImg01
    },
    {
        "title": "Innovation That Drives Growth",
        "description": "Stay ahead of the curve with cutting-edge AI technologies that empower you to make smarter decisions, save time, and increase productivity.",
        "image": WorflowImg02
    },
    {
        "title": "Seamless Integration",
        "description": "Our AI tools are designed to integrate effortlessly with your existing systems, ensuring a smooth transition and minimal disruption to your business processes.",
        "image": WorflowImg03
    },
]

export default function Workflows() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-green-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-green-200/50">
              <span className="inline-flex bg-gradient-to-r from-green-500 to-green-200 bg-clip-text text-transparent">
                Why Choose Tarwiiga AI?
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.green.200),theme(colors.gray.50),theme(colors.green.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Transform Your Business with Custom AI
            </h2>
            <p className="text-lg text-green-200/65">
              We leverage cutting-edge artificial intelligence to drive innovation. Our tailored solutions empower you to streamline operations and enhance customer engagement.
            </p>
          </div>
          {/* Spotlight items */}
          <Spotlight className="group mx-auto grid max-w-sm items-start gap-6 lg:max-w-none lg:grid-cols-3">
            {/* Card 1 */}
            {cards.map((card) => (
                <div
                    className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-green-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-green-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 after:hover:opacity-20 before:group-hover:opacity-100"
                >
                  <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-gradient-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                    {/* Image */}
                    <Image
                        className="inline-flex"
                        src={card.image}
                        width={350}
                        height={288}
                        alt="Workflow 01"
                    />
                    {/* Content */}
                    <div className="p-6">
                      <div className="mb-3">
                    <span
                        className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,theme(colors.gray.700/.15),theme(colors.gray.700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60">
                      <span className="bg-gradient-to-r from-green-500 to-green-200 bg-clip-text text-transparent">
                        {card.title}
                      </span>
                    </span>
                      </div>
                      <p className="text-green-200/65">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>
            ))}
          </Spotlight>
        </div>
      </div>
    </section>
  );
}
