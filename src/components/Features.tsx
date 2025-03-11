
import React from 'react';
import { useInView } from '@/utils/animations';
import { cn } from '@/lib/utils';
import AnimatedCard from './AnimatedCard';
import { 
  Mic, 
  User, 
  Zap, 
  Calendar, 
  Sparkles, 
  Globe,
  BarChart3,
  Lightbulb,
  Search,
  Mail
} from 'lucide-react';

const Features: React.FC = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const hostFeatures = [
    {
      icon: <Mic size={24} />,
      title: "Sync Your Podcast",
      description: "Connect to Apple Podcasts, Spotify, and Google Podcasts to import your show data.",
    },
    {
      icon: <Search size={24} />,
      title: "AI Guest Matching",
      description: "Our AI analyzes your content to recommend guests that perfectly fit your style and topics.",
    },
    {
      icon: <User size={24} />,
      title: "Guest Profiles",
      description: "Access detailed guest profiles with social reach and past speaking engagements.",
    },
    {
      icon: <Sparkles size={24} />,
      title: "Smart Questions",
      description: "Generate custom interview questions based on guest expertise and trending topics.",
    },
    {
      icon: <Calendar size={24} />,
      title: "Easy Scheduling",
      description: "Sync with Calendly and Google Calendar for seamless guest booking.",
    },
  ];

  const guestFeatures = [
    {
      icon: <Globe size={24} />,
      title: "Find Your Audience",
      description: "Our AI finds podcasts that match your industry, expertise, and personal brand.",
    },
    {
      icon: <BarChart3 size={24} />,
      title: "Audience Insights",
      description: "Get host details, audience size, and engagement metrics to pitch the right shows.",
    },
    {
      icon: <Mail size={24} />,
      title: "AI Email Writer",
      description: "Our AI writes personalized outreach emails to podcast hosts for better booking rates.",
    },
    {
      icon: <Lightbulb size={24} />,
      title: "Topic Suggestions",
      description: "Get AI-powered topic suggestions that will resonate with each podcast's audience.",
    },
    {
      icon: <Zap size={24} />,
      title: "Track Applications",
      description: "Monitor your pitches, acceptances, and upcoming appearances in one dashboard.",
    },
  ];

  return (
    <section 
      id="features"
      ref={ref as React.RefObject<HTMLDivElement>}
      className="py-20 bg-gradient-to-b from-white to-pod-light/50"
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div 
            className={cn(
              "inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium mb-4 transition-all duration-500",
              "bg-pod-accent/10 text-pod-accent border border-pod-accent/20",
              isInView ? "opacity-100" : "opacity-0"
            )}
          >
            <Zap size={16} className="mr-2" />
            <span>Features</span>
          </div>

          <h2 
            className={cn(
              "text-3xl md:text-4xl font-bold mb-6 transition-all duration-700",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
            style={{ transitionDelay: "100ms" }}
          >
            Powerful Tools for <span className="text-gradient">Hosts & Guests</span>
          </h2>

          <p 
            className={cn(
              "text-lg text-pod-gray transition-all duration-700",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
            style={{ transitionDelay: "200ms" }}
          >
            Our AI-powered platform offers specialized tools for both podcast hosts seeking guests 
            and experts looking to share their knowledge on podcasts.
          </p>
        </div>

        <div className="mb-20">
          <h3 
            className={cn(
              "text-2xl font-bold mb-8 text-center transition-all duration-700",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
            style={{ transitionDelay: "300ms" }}
          >
            <span className="text-pod-primary">Podcast Host</span> Features
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hostFeatures.map((feature, index) => (
              <AnimatedCard
                key={`host-${index}`}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={index + 4}
              />
            ))}
          </div>
        </div>

        <div>
          <h3 
            className={cn(
              "text-2xl font-bold mb-8 text-center transition-all duration-700",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
            style={{ transitionDelay: "300ms" }}
          >
            <span className="text-pod-accent">Podcast Guest</span> Features
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guestFeatures.map((feature, index) => (
              <AnimatedCard
                key={`guest-${index}`}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={index + 4}
                className="bg-gradient-to-br from-white to-pod-light border border-white/20"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
