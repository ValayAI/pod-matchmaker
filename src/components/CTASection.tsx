
import React from 'react';
import { useInView } from '@/utils/animations';
import { cn } from '@/lib/utils';
import UserTypeSelector from './UserTypeSelector';

const CTASection: React.FC = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const handleUserTypeSelect = (type: 'host' | 'guest') => {
    console.log(`Selected user type: ${type}`);
    // This would typically handle routing to specific onboarding flow
  };

  return (
    <section 
      ref={ref as React.RefObject<HTMLDivElement>}
      className="py-20 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-pod-light/50 to-white"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-pod-primary opacity-5 blur-[100px]"></div>
        <div className="absolute bottom-1/3 left-1/3 w-96 h-96 rounded-full bg-pod-accent opacity-5 blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4">
        <div 
          className={cn(
            "max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 transition-all duration-1000",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          )}
        >
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Find Your Perfect <span className="text-gradient">Podcast Match</span>?
            </h2>
            <p className="text-lg text-pod-gray">
              Join thousands of hosts and guests who are creating amazing podcast content together. 
              Start by telling us who you are.
            </p>
          </div>

          <UserTypeSelector onSelect={handleUserTypeSelect} />
        </div>
        
        <div className="mt-16 text-center max-w-3xl mx-auto">
          <h3 
            className={cn(
              "text-2xl font-bold mb-6 transition-all duration-700",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
            style={{ transitionDelay: "200ms" }}
          >
            Trusted by Podcasters Worldwide
          </h3>
          
          <div 
            className={cn(
              "flex flex-wrap justify-center items-center gap-8 md:gap-16 transition-all duration-1000",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
            style={{ transitionDelay: "400ms" }}
          >
            {/* Logos would go here - using placeholders */}
            <div className="text-pod-gray/40 font-bold text-2xl">SPOTIFY</div>
            <div className="text-pod-gray/40 font-bold text-2xl">APPLE</div>
            <div className="text-pod-gray/40 font-bold text-2xl">GOOGLE</div>
            <div className="text-pod-gray/40 font-bold text-2xl">STITCHER</div>
            <div className="text-pod-gray/40 font-bold text-2xl">OVERCAST</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
