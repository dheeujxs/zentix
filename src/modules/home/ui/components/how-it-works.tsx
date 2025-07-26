import { Container } from "@/modules/home/ui/components/container"
import { UserPlus, Settings, Cpu, BarChart2 } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: <UserPlus className="h-10 w-10 text-indigo-600" />,
    title: "Sign Up & Connect",
    description:
      "Create your free account and securely connect your data sources or tools with our AI platform.",
  },
  {
    number: "02",
    icon: <Settings className="h-10 w-10 text-indigo-600" />,
    title: "Configure AI Settings",
    description:
      "Customize AI models and workflows to fit your specific business needs.",
  },
  {
    number: "03",
    icon: <Cpu className="h-10 w-10 text-indigo-600" />,
    title: "Automate & Analyze",
    description:
      "Leverage AI to automate repetitive tasks and generate real-time insights.",
  },
  {
    number: "04",
    icon: <BarChart2 className="h-10 w-10 text-indigo-600" />,
    title: "Review & Improve",
    description:
      "Monitor performance through interactive dashboards and optimize your settings for continuous improvement.",
  },
]

export const HowItWorks = () => {
  return (
    <section className="py-24 bg-gray-50">
      <Container>
        <h2 className="text-4xl font-bold text-center mb-20">How It Works</h2>
        <div className="flex flex-col md:flex-row md:space-x-12 space-y-12 md:space-y-0 max-w-6xl mx-auto">
          {steps.map(({ number, icon, title, description }) => (
            <div
              key={number}
              className="relative flex flex-col items-center bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-indigo-600 text-white rounded-full w-14 h-14 flex items-center justify-center text-xl font-semibold shadow-md">
                {number}
              </div>
              <div className="mb-6">{icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-center">{title}</h3>
              <p className="text-gray-600 max-w-xs text-center">{description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
