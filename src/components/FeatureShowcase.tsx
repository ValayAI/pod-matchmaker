
import React from 'react';
import { useInView } from '@/utils/animations';
import { cn } from '@/lib/utils';
import { BrainCircuit, TrendingUp, BadgeCheck } from 'lucide-react';

const FeatureShowcase: React.FC = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section 
      ref={ref as React.RefObject<HTMLDivElement>}
      className="py-20 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-pod-light/50"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-pod-primary opacity-5 blur-[100px]"></div>
        <div className="absolute bottom-1/3 left-1/3 w-96 h-96 rounded-full bg-pod-accent opacity-5 blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div 
            className={cn(
              "inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium mb-4 transition-all duration-500",
              "bg-pod-primary/10 text-pod-primary border border-pod-primary/20",
              isInView ? "opacity-100" : "opacity-0"
            )}
          >
            <BrainCircuit size={16} className="mr-2" />
            <span>AI-Powered</span>
          </div>

          <h2 
            className={cn(
              "text-3xl md:text-4xl font-bold mb-6 transition-all duration-700",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
            style={{ transitionDelay: "100ms" }}
          >
            <span className="text-gradient">Bonus Features</span> You'll Love
          </h2>

          <p 
            className={cn(
              "text-lg text-pod-gray transition-all duration-700",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
            style={{ transitionDelay: "200ms" }}
          >
            Our advanced AI tools go beyond basic matching to help you create better content,
            reach wider audiences, and maximize the impact of each podcast episode.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Feature 1: Trending Topics Scanner */}
          <div 
            className={cn(
              "relative transition-all duration-1000",
              isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-16"
            )}
            style={{ transitionDelay: "300ms" }}
          >
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-lg relative z-10">
              <div className="absolute top-0 left-0 w-full h-full bg-card-shine opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-pod-primary/10 text-pod-primary mr-4">
                  <TrendingUp size={24} />
                </div>
                <h3 className="text-2xl font-bold">Trending Topics Scanner</h3>
              </div>
              
              <p className="text-pod-gray mb-6">
                Our AI constantly analyzes thousands of podcasts across all major platforms to identify trending topics in your industry. Get ahead of the curve with real-time insights into what audiences are engaging with most.
              </p>
              
              <div className="bg-pod-light rounded-xl p-4 border border-gray-100">
                <div className="flex justify-between mb-4">
                  <div className="text-sm font-medium text-pod-dark">Topic Popularity</div>
                  <div className="text-sm text-pod-gray">Last 30 days</div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <div className="text-pod-dark">AI in Content Creation</div>
                      <div className="text-pod-primary font-medium">92%</div>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-pod-primary rounded-full" style={{width: '92%'}}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <div className="text-pod-dark">Remote Work Strategies</div>
                      <div className="text-pod-primary font-medium">78%</div>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-pod-primary rounded-full" style={{width: '78%'}}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <div className="text-pod-dark">Mental Health at Work</div>
                      <div className="text-pod-primary font-medium">65%</div>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-pod-primary rounded-full" style={{width: '65%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-4 -right-4 w-full h-full bg-pod-primary/5 rounded-2xl -z-10 transform rotate-2"></div>
          </div>

          {/* Feature 2: Viral Episode Predictor */}
          <div 
            className={cn(
              "relative transition-all duration-1000",
              isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16"
            )}
            style={{ transitionDelay: "500ms" }}
          >
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-lg relative z-10">
              <div className="absolute top-0 left-0 w-full h-full bg-card-shine opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-pod-accent/10 text-pod-accent mr-4">
                  <BadgeCheck size={24} />
                </div>
                <h3 className="text-2xl font-bold">Smart Pitch Generator</h3>
              </div>
              
              <p className="text-pod-gray mb-6">
                Our AI analyzes a podcast's content, style, and audience to craft personalized pitches that resonate with hosts. Stand out from generic outreach emails with tailored messages that highlight your unique value.
              </p>
              
              <div className="bg-pod-light rounded-xl p-4 border border-gray-100 relative">
                <div className="absolute -top-3 right-4 px-3 py-1 text-xs font-medium bg-pod-accent text-white rounded-full">
                  AI Generated
                </div>
                
                <div className="pt-4 space-y-2">
                  <div className="flex items-center">
                    <div className="w-16 text-right text-xs text-pod-gray mr-2">Subject:</div>
                    <div className="text-sm font-medium">Cybersecurity Expert Available for Your Tech Innovation Podcast</div>
                  </div>
                  
                  <div className="flex">
                    <div className="w-16 text-right text-xs text-pod-gray mr-2">To:</div>
                    <div className="text-sm">Sarah Johnson, Tech Innovation Podcast</div>
                  </div>
                  
                  <div className="border-t border-gray-100 my-3 pt-3">
                    <p className="text-sm text-pod-gray mb-2">Hi Sarah,</p>
                    <p className="text-sm text-pod-gray mb-2">I loved your recent episode with Jamie Smith on AI ethics. Your discussion about data privacy resonated with my work in cybersecurity over the past decade.</p>
                    <p className="text-sm text-pod-gray mb-2">I specialize in helping companies protect customer data while innovating - a topic I noticed comes up frequently with your guests.</p>
                    <p className="text-sm text-pod-gray">Would you be interested in discussing the balance between innovation and security on an upcoming episode?</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-4 -left-4 w-full h-full bg-pod-accent/5 rounded-2xl -z-10 transform -rotate-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase;
