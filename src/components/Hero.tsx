
import React from 'react';
import { ArrowRight, Sparkles, Zap } from 'lucide-react';
import { useInView } from '@/utils/animations';
import { cn } from '@/lib/utils';

const Hero: React.FC = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section 
      ref={ref as React.RefObject<HTMLDivElement>}
      className="relative pt-32 pb-20 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-pod-primary opacity-5 blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 rounded-full bg-pod-accent opacity-5 blur-[120px]" />
      </div>

      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          {/* Badge */}
          <div 
            className={cn(
              "inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium mb-6 transition-all duration-500",
              "bg-pod-primary/10 text-pod-primary border border-pod-primary/20",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            <Sparkles size={16} className="mr-2" />
            <span>AI-Powered Podcast Matchmaking</span>
          </div>

          {/* Headline */}
          <h1 
            className={cn(
              "text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 transition-all duration-700",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
            style={{ transitionDelay: "100ms" }}
          >
            Connect Podcast <span className="text-gradient">Hosts & Guests</span> with Perfect AI Matching
          </h1>

          {/* Subheadline */}
          <p 
            className={cn(
              "text-lg sm:text-xl text-pod-gray mb-8 transition-all duration-700",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
            style={{ transitionDelay: "200ms" }}
          >
            PodMatch uses AI to analyze your podcast style, topics, and audience to suggest the perfect guests and hosts — all while integrating with major podcast directories.
          </p>

          {/* CTA Buttons */}
          <div 
            className={cn(
              "flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 transition-all duration-700",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
            style={{ transitionDelay: "300ms" }}
          >
            <button className="px-8 py-3.5 rounded-full bg-gradient-to-r from-pod-primary to-pod-secondary text-white font-medium shadow-lg shadow-pod-primary/20 hover:shadow-xl hover:shadow-pod-primary/30 transition-all duration-300 w-full sm:w-auto button-shine">
              Get Started Free
            </button>
            <button className="px-8 py-3.5 rounded-full bg-white text-pod-dark font-medium border border-gray-200 hover:border-pod-primary/50 transition-all duration-300 flex items-center justify-center w-full sm:w-auto">
              How It Works <ArrowRight size={16} className="ml-2" />
            </button>
          </div>

          {/* Stats */}
          <div 
            className={cn(
              "grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-700",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
            style={{ transitionDelay: "400ms" }}
          >
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-pod-primary/10 text-pod-primary mb-2 mx-auto">
                <Zap size={20} />
              </div>
              <p className="text-3xl font-bold">8,500+</p>
              <p className="text-pod-gray">Active Podcasts</p>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-pod-accent/10 text-pod-accent mb-2 mx-auto">
                <Zap size={20} />
              </div>
              <p className="text-3xl font-bold">15,000+</p>
              <p className="text-pod-gray">Expert Guests</p>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-pod-success/10 text-pod-success mb-2 mx-auto">
                <Zap size={20} />
              </div>
              <p className="text-3xl font-bold">42,000+</p>
              <p className="text-pod-gray">Successful Matches</p>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div 
          className={cn(
            "relative max-w-5xl mx-auto mt-12 transition-all duration-1000",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
          style={{ transitionDelay: "500ms" }}
        >
          <div className="relative">
            {/* Shadow effect */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-pod-primary/5 to-transparent rounded-2xl transform translate-y-4 blur-xl"></div>
            
            {/* Main image with dashboard mockup */}
            <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-xl">
              <div className="aspect-[16/9] bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                <div className="w-full h-full bg-white p-4 overflow-hidden">
                  <div className="h-8 w-full bg-gray-100 rounded-lg mb-4 flex items-center px-4">
                    <div className="w-3 h-3 rounded-full bg-red-400 mr-2"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400 mr-2"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400 mr-2"></div>
                    <div className="h-4 w-64 bg-gray-200 rounded-md ml-4"></div>
                  </div>
                  
                  <div className="flex h-[calc(100%-32px)]">
                    <div className="w-64 h-full bg-gray-50 p-3 mr-4 rounded-lg border border-gray-100">
                      <div className="h-8 w-full bg-pod-primary rounded-lg mb-3 flex items-center justify-center text-white text-xs">Dashboard</div>
                      <div className="h-8 w-full bg-gray-100 rounded-lg mb-3"></div>
                      <div className="h-8 w-full bg-gray-100 rounded-lg mb-3"></div>
                      <div className="h-8 w-full bg-gray-100 rounded-lg"></div>
                      <div className="h-px w-full bg-gray-200 my-4"></div>
                      <div className="h-8 w-full bg-gray-100 rounded-lg mb-3"></div>
                      <div className="h-8 w-full bg-gray-100 rounded-lg"></div>
                    </div>
                    
                    <div className="flex-1 h-full">
                      <div className="h-12 w-full bg-white border-b border-gray-100 mb-4 flex justify-between items-center px-4">
                        <div className="h-6 w-40 bg-gray-100 rounded-md"></div>
                        <div className="h-8 w-32 bg-pod-primary rounded-lg"></div>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-4 mb-4">
                        <div className="h-24 rounded-lg bg-pod-primary/10 border border-pod-primary/20 p-3">
                          <div className="h-4 w-20 bg-gray-200 rounded-md mb-2"></div>
                          <div className="h-6 w-16 bg-white rounded-md"></div>
                        </div>
                        <div className="h-24 rounded-lg bg-pod-secondary/10 border border-pod-secondary/20 p-3">
                          <div className="h-4 w-20 bg-gray-200 rounded-md mb-2"></div>
                          <div className="h-6 w-16 bg-white rounded-md"></div>
                        </div>
                        <div className="h-24 rounded-lg bg-pod-accent/10 border border-pod-accent/20 p-3">
                          <div className="h-4 w-20 bg-gray-200 rounded-md mb-2"></div>
                          <div className="h-6 w-16 bg-white rounded-md"></div>
                        </div>
                      </div>
                      
                      <div className="h-64 bg-white rounded-lg border border-gray-100 p-4">
                        <div className="h-6 w-48 bg-gray-100 rounded-md mb-4"></div>
                        <div className="grid grid-cols-2 gap-3">
                          <div className="h-20 bg-gray-50 rounded-lg border border-gray-100 p-3 flex">
                            <div className="w-12 h-12 rounded-full bg-gray-200 mr-3"></div>
                            <div>
                              <div className="h-4 w-20 bg-gray-200 rounded-md mb-2"></div>
                              <div className="h-3 w-32 bg-gray-100 rounded-md mb-1"></div>
                              <div className="h-3 w-24 bg-gray-100 rounded-md"></div>
                            </div>
                          </div>
                          <div className="h-20 bg-gray-50 rounded-lg border border-gray-100 p-3 flex">
                            <div className="w-12 h-12 rounded-full bg-gray-200 mr-3"></div>
                            <div>
                              <div className="h-4 w-20 bg-gray-200 rounded-md mb-2"></div>
                              <div className="h-3 w-32 bg-gray-100 rounded-md mb-1"></div>
                              <div className="h-3 w-24 bg-gray-100 rounded-md"></div>
                            </div>
                          </div>
                          <div className="h-20 bg-gray-50 rounded-lg border border-gray-100 p-3 flex">
                            <div className="w-12 h-12 rounded-full bg-gray-200 mr-3"></div>
                            <div>
                              <div className="h-4 w-20 bg-gray-200 rounded-md mb-2"></div>
                              <div className="h-3 w-32 bg-gray-100 rounded-md mb-1"></div>
                              <div className="h-3 w-24 bg-gray-100 rounded-md"></div>
                            </div>
                          </div>
                          <div className="h-20 bg-pod-primary/5 rounded-lg border border-pod-primary/20 p-3 flex">
                            <div className="w-12 h-12 rounded-full bg-pod-primary/20 mr-3"></div>
                            <div>
                              <div className="h-4 w-20 bg-pod-primary/20 rounded-md mb-2"></div>
                              <div className="h-3 w-32 bg-pod-primary/10 rounded-md mb-1"></div>
                              <div className="h-3 w-24 bg-pod-primary/10 rounded-md"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
