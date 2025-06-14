import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FallbackPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Welcome to Visdak
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto">
            Create stunning business websites with our multi-template platform.
            Choose from various designs tailored for your industry.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Template-Based Demos
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <DemoCard
              title="Be On Mirrors Salon"
              description="Premium unisex salon template"
              link="http://be-on-mirrors.localhost:3000"
            />
            <DemoCard
              title="Coming Soon"
              description="More templates coming soon"
              disabled={true}
            />
            <DemoCard
              title="Coming Soon"
              description="More templates coming soon"
              disabled={true}
            />
          </div>
        </div>

        <div className="text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-indigo-600 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all"
          >
            Start Your Free Trial
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </div>
  );
}

function DemoCard({ title, description, link, disabled }) {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-all">
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="text-white/80 mb-4">{description}</p>
      {!disabled ? (
        <Link
          href={link}
          className="inline-flex items-center text-sm font-medium hover:underline"
        >
          View Demo <ArrowRight size={16} className="ml-1" />
        </Link>
      ) : (
        <span className="text-white/60 text-sm font-medium">Coming Soon</span>
      )}
    </div>
  );
}
