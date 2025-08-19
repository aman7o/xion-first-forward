import React from 'react';
import { Button } from '@/components/ui/button';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Particles } from '@/components/Particles';
import { CounterAnimation } from '@/components/CounterAnimation';
import { ChevronDown, ExternalLink, Twitter, MessageCircle } from 'lucide-react';
import xionLogo from '@/assets/xion-logo.png';
import { SmoothScrollLink } from '@/components/SmoothScrollLink';
import investorsLogos from '@/assets/investors-logos.png';

const XionPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border-subtle">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <img src={xionLogo} alt="XION" className="h-8" />
          </div>
          
          <div className="hidden md:flex space-x-8 text-sm">
            <SmoothScrollLink to="#consumer" className="text-text-muted hover:text-electric-blue">
              Consumer Blockchain
            </SmoothScrollLink>
            <SmoothScrollLink to="#walletless" className="text-text-muted hover:text-electric-blue">
              Walletless
            </SmoothScrollLink>
            <SmoothScrollLink to="#gasless" className="text-text-muted hover:text-electric-blue">
              Gasless
            </SmoothScrollLink>
            <SmoothScrollLink to="#compliant" className="text-text-muted hover:text-electric-blue">
              EU Compliant
            </SmoothScrollLink>
            <SmoothScrollLink to="#whats-next" className="text-text-muted hover:text-electric-blue">
              What's Next
            </SmoothScrollLink>
          </div>
          
          <Button 
            variant="electric" 
            size="sm"
            onClick={() => window.open('https://xion.burnt.com', '_blank')}
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Learn More
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="particles">
          <Particles density={60} color="#00D4FF" speed={0.3} />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <div className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <img src={xionLogo} alt="XION Logo" className="h-16 mx-auto mb-6 opacity-90" />
          </div>
          
          <div className="animate-slide-up" style={{ animationDelay: '1s' }}>
            <h2 className="text-hero mb-6">A HISTORY OF FIRSTS</h2>
          </div>
          
          <div className="animate-slide-up" style={{ animationDelay: '1.5s' }}>
            <p className="text-subtitle mb-8">Being first is what we're known for.</p>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: '2s' }}>
            <p className="text-body-large mb-12 max-w-4xl mx-auto text-text-muted">
              From consumer blockchain to chain abstraction, from walletless infrastructure to regulatory compliance, 
              XION has consistently pioneered breakthrough innovations that bring Web3 to mainstream audiences.
            </p>
          </div>
          
          <div className="animate-scale-in" style={{ animationDelay: '3s' }}>
            <div className="flex flex-col items-center">
              <ChevronDown className="w-6 h-6 text-text-subtle animate-bounce" />
              <span className="text-sm text-text-subtle mt-2">Discover Our Journey</span>
            </div>
          </div>
        </div>
      </section>

      {/* First Consumer Blockchain */}
      <section id="consumer" className="py-20 px-6 bg-background-section">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="text-section-title mb-12 text-center">FIRST TO LAUNCH A CONSUMER BLOCKCHAIN</h2>
          </ScrollReveal>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <ScrollReveal delay={200}>
                <p className="text-body-large">
                  While the industry focused on DeFi protocols and trader tools, XION built something different. 
                  A blockchain designed from the ground up for everyday users and real-world applications.
                </p>
              </ScrollReveal>
              
              <ScrollReveal delay={400}>
                <p className="text-body-large">
                  XION's consumer-first approach attracted over 100+ global brands including Uber, BMW, Amazon Prime, 
                  The North Face, and Temu. These companies didn't want crypto complexity – they wanted seamless Web3 experiences for their customers.
                </p>
              </ScrollReveal>
              
              <ScrollReveal delay={600}>
                <p className="text-body-large">
                  The result speaks for itself: over 2.5 million users actively utilizing products built on XION, 
                  with 1.49+ million brand interactions and counting. This is what mainstream blockchain adoption looks like.
                </p>
              </ScrollReveal>
              
              <ScrollReveal delay={800}>
                <div className="bg-card border border-electric-blue rounded-xl p-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-electric-blue">
                        <CounterAnimation end={2500000} suffix="+" />
                      </div>
                      <div className="text-sm text-text-muted">Active Users</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-electric-blue">
                        <CounterAnimation end={100} suffix="+" />
                      </div>
                      <div className="text-sm text-text-muted">Global Brands</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-electric-blue">
                        <CounterAnimation end={1490000} suffix="+" />
                      </div>
                      <div className="text-sm text-text-muted">Brand Interactions</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-electric-blue">
                        <CounterAnimation end={70000} suffix="+" />
                      </div>
                      <div className="text-sm text-text-muted">Daily Active Users</div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
            
            <ScrollReveal delay={1000}>
              <div className="video-placeholder h-80"></div>
            </ScrollReveal>
          </div>
          
          <ScrollReveal delay={1200}>
            <blockquote className="text-center mt-16">
              <p className="text-2xl font-medium italic text-electric-blue mb-4">
                "We're seeing the future of Web3 unfold, where blockchain technology becomes accessible to mainstream audiences."
              </p>
              <cite className="text-text-muted">- Burnt Banksy, Founder</cite>
            </blockquote>
          </ScrollReveal>
        </div>
      </section>

      {/* Walletless L1 */}
      <section id="walletless" className="py-20 px-6 bg-background-darker">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <ScrollReveal>
                <h2 className="text-section-title mb-8">FIRST WALLETLESS L1 BLOCKCHAIN</h2>
              </ScrollReveal>
              
              <ScrollReveal delay={200}>
                <p className="text-body-large">
                  Traditional wallets create a staggering 95%+ drop-off in user onboarding. Seed phrases, private keys, 
                  browser extensions – these aren't features, they're barriers.
                </p>
              </ScrollReveal>
              
              <ScrollReveal delay={400}>
                <p className="text-body-large">
                  XION eliminated them entirely through protocol-level account abstraction. Users log in with their email address 
                  across any device. No downloads, no setup, no technical knowledge required.
                </p>
              </ScrollReveal>
              
              <ScrollReveal delay={600}>
                <p className="text-body-large">
                  This breakthrough enabled XION to achieve a 97% user conversion rate compared to the industry average of just 5%. 
                  When you remove friction, adoption follows.
                </p>
              </ScrollReveal>
              
              <ScrollReveal delay={800}>
                <div className="bg-electric-blue text-black rounded-xl p-6">
                  <div className="grid grid-cols-2 gap-4 text-center font-semibold">
                    <div>✓ Email login</div>
                    <div>✓ Cross-device access</div>
                    <div>✓ No seed phrases</div>
                    <div>✓ Account recovery</div>
                  </div>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={1000}>
                <div className="bg-background-dark border border-border-subtle rounded-xl p-6">
                  <p className="text-electric-blue font-medium">
                    Powered by Meta Accounts – smart contract accounts with Web2 authentication methods built at the protocol level
                  </p>
                </div>
              </ScrollReveal>
            </div>
            
            <ScrollReveal delay={1200}>
              <div className="video-placeholder h-80"></div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Gas Elimination */}
      <section id="gasless" className="py-20 px-6 bg-background relative overflow-hidden">
        <div className="particles">
          <Particles density={30} color="#00D4FF" speed={0.2} />
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-section-title mb-12">FIRST TO ELIMINATE GAS COMPLEXITY</h2>
          </ScrollReveal>
          
          <div className="space-y-8 mb-12">
            <ScrollReveal delay={200}>
              <p className="text-body-large max-w-4xl mx-auto">
                Gas fees represent one of Web3's biggest adoption hurdles. The concept is foreign to mainstream users. 
                The process of acquiring gas tokens creates friction. The unpredictable costs cause frustration.
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={400}>
              <p className="text-body-large max-w-4xl mx-auto">
                XION solved this through complete gas abstraction at the protocol level. Users never see gas fees, 
                never calculate them, never run out of them. The experience feels like any Web2 application.
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={600}>
              <p className="text-body-large max-w-4xl mx-auto">
                Built-in paymasters and parameterized fee layers handle everything behind the scenes. 
                Developers can sponsor transactions or implement custom fee structures. Users just interact naturally.
              </p>
            </ScrollReveal>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <ScrollReveal delay={800}>
              <div className="border-l-4 border-red-500 bg-card p-6 rounded-r-xl">
                <h3 className="font-semibold mb-3 text-red-400">BEFORE</h3>
                <p className="text-text-muted">
                  Calculate gas → Acquire tokens → Hope prices don't spike → Transaction fails → Start over
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={1000}>
              <div className="border-l-4 border-green-500 bg-card p-6 rounded-r-xl">
                <h3 className="font-semibold mb-3 text-green-400">AFTER</h3>
                <p className="text-text-muted">
                  Click button → Transaction completes → That's it
                </p>
              </div>
            </ScrollReveal>
          </div>
          
          <ScrollReveal delay={1200}>
            <div className="bg-electric-blue-dark text-electric-blue rounded-xl p-6 mb-8">
              <p className="font-semibold text-lg">
                Gasless transactions • Protocol-level abstraction • Seamless user experience
              </p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={1400}>
            <div className="video-placeholder h-80 max-w-2xl mx-auto"></div>
          </ScrollReveal>
        </div>
      </section>

      {/* Investors Section */}
      <section className="py-16 px-6 bg-background-section">
        <div className="max-w-6xl mx-auto text-center">
          <ScrollReveal>
            <h3 className="text-xl font-medium text-text-muted mb-8">BACKED BY THE BEST</h3>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <img src={investorsLogos} alt="Top-tier investors including Multicoin, Animoca, Circle, Hashkey, Arrington Capital, Spartan" className="max-h-12" />
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={400}>
            <p className="text-sm text-text-subtle mt-6">
              Raised $36M from Multicoin, Animoca, Circle, Hashkey, Arrington Capital, Spartan, and more
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* MICA Compliance */}
      <section id="compliant" className="py-20 px-6 bg-gradient-to-b from-blue-950/20 to-background-section">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="text-section-title mb-12 text-center">FIRST EU TITLE II COMPLIANT L1 BLOCKCHAIN</h2>
          </ScrollReveal>
          
          <div className="space-y-8 mb-12">
            <ScrollReveal delay={200}>
              <p className="text-body-large text-center max-w-4xl mx-auto">
                On March 13, 2025, XION made history at the New York Stock Exchange, announcing compliance with EU Title II 
                regulations under the Markets in Crypto-Assets (MiCA) framework.
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={400}>
              <p className="text-body-large text-center max-w-4xl mx-auto">
                This regulatory milestone opened doors for institutional adoption across Europe, providing the clarity and 
                security needed for both institutions and individuals to confidently engage with digital assets.
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={600}>
              <p className="text-body-large text-center max-w-4xl mx-auto">
                The compliance enables unbridled access to a blockchain that bridges Web2 and Web3, offering regulatory 
                clarity alongside user-friendly infrastructure. It's not just about following rules – it's about expanding access.
              </p>
            </ScrollReveal>
          </div>
          
          <ScrollReveal delay={800}>
            <blockquote className="text-center my-16">
              <p className="text-4xl font-bold text-electric-blue mb-4">
                "I have never been more excited for the future of this industry"
              </p>
              <cite className="text-text-subtle">- Burnt Banksy, speaking at the New York Stock Exchange</cite>
            </blockquote>
          </ScrollReveal>
          
          <ScrollReveal delay={1000}>
            <div className="bg-card border-2 border-yellow-500 rounded-xl p-6 text-center mb-8">
              <p className="font-semibold text-lg mb-2">
                First L1 on mainnet to release MiCA Title II whitepaper
              </p>
              <p className="text-text-muted">
                Opens access for 450M+ European users
              </p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={1200}>
            <div className="video-placeholder h-80 max-w-3xl mx-auto"></div>
          </ScrollReveal>
        </div>
      </section>

      {/* USDC Integration */}
      <section className="py-20 px-6 bg-background-darker">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <ScrollReveal>
                <h2 className="text-section-title mb-8">FIRST TO PAY GAS WITH USDC</h2>
              </ScrollReveal>
              
              <ScrollReveal delay={200}>
                <p className="text-body-large">
                  Most blockchains require users to acquire native tokens for gas fees. This creates a complex multi-step process: 
                  find the right token, buy it on an exchange, bridge it to the network, hope you have enough.
                </p>
              </ScrollReveal>
              
              <ScrollReveal delay={400}>
                <p className="text-body-large">
                  XION eliminated this friction entirely. Users pay gas fees directly in USDC – a familiar, stable currency 
                  they likely already hold. The protocol automatically handles everything behind the scenes.
                </p>
              </ScrollReveal>
              
              <ScrollReveal delay={600}>
                <p className="text-body-large">
                  When users pay gas in USDC, the protocol automatically converts those funds to purchase $XION tokens. 
                  Users get a seamless experience, while value accrues to the ecosystem organically.
                </p>
              </ScrollReveal>
              
              <ScrollReveal delay={800}>
                <div className="bg-card border border-electric-blue rounded-xl p-6">
                  <div className="text-center text-lg font-medium text-electric-blue">
                    User pays USDC → Protocol converts → $XION purchased → Transaction executes → Everyone wins
                  </div>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={1000}>
                <div className="bg-electric-blue-dark text-electric-blue rounded-xl p-6">
                  <p className="font-semibold text-lg text-center">
                    Powered by strategic partnership with Circle, the issuer of USDC
                  </p>
                </div>
              </ScrollReveal>
            </div>
            
            <div className="space-y-6">
              <ScrollReveal delay={1200}>
                <div className="video-placeholder h-64"></div>
              </ScrollReveal>
              
              <ScrollReveal delay={1400}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-card border border-electric-blue rounded-xl p-4 text-center">
                    <div className="text-sm font-medium">Familiar stablecoin payments</div>
                  </div>
                  <div className="bg-card border border-electric-blue rounded-xl p-4 text-center">
                    <div className="text-sm font-medium">No volatile token requirements</div>
                  </div>
                  <div className="bg-card border border-electric-blue rounded-xl p-4 text-center">
                    <div className="text-sm font-medium">Sustainable token economics</div>
                  </div>
                  <div className="bg-card border border-electric-blue rounded-xl p-4 text-center">
                    <div className="text-sm font-medium">Seamless user experience</div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Bybit Launchpool */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-6xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-section-title mb-12">FIRST EVER BYBIT EU LAUNCHPOOL</h2>
          </ScrollReveal>
          
          <div className="space-y-8 mb-12">
            <ScrollReveal delay={200}>
              <p className="text-body-large max-w-4xl mx-auto">
                On August 14, 2025, XION broke new ground once again, becoming the inaugural Launchpool project on 
                Bybit's EU exchange following their MiCAR license approval.
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={400}>
              <p className="text-body-large max-w-4xl mx-auto">
                This partnership opens regulated access to $XION for 450M+ users across the European Economic Area, 
                demonstrating how regulatory compliance accelerates rather than hinders innovation.
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={600}>
              <p className="text-body-large max-w-4xl mx-auto">
                The collaboration reinforces XION's position as the blockchain that consistently pioneers new paths for the industry, 
                setting precedents for mainstream crypto adoption in regulated markets.
              </p>
            </ScrollReveal>
          </div>
          
          <ScrollReveal delay={800}>
            <div className="bg-card border border-electric-blue rounded-xl p-6 mb-8">
              <div className="grid md:grid-cols-4 gap-4 text-center font-semibold">
                <div>
                  <div className="text-electric-blue">Total Pool</div>
                  <div>100,000 XION</div>
                </div>
                <div>
                  <div className="text-electric-blue">XION Stakers</div>
                  <div>60% APR</div>
                </div>
                <div>
                  <div className="text-electric-blue">MNT Stakers</div>
                  <div>36% APR</div>
                </div>
                <div>
                  <div className="text-electric-blue">USDC Stakers</div>
                  <div>24% APR</div>
                </div>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={1000}>
            <blockquote className="mb-8">
              <p className="text-3xl font-medium italic text-electric-blue mb-4">
                "Today's launch with XION demonstrates how regulation can accelerate rather than hinder innovation"
              </p>
              <cite className="text-text-subtle">- Mazurka Zheng, CEO of Bybit EU</cite>
            </blockquote>
          </ScrollReveal>
          
          <ScrollReveal delay={1200}>
            <div className="inline-flex items-center justify-center w-32 h-32 bg-electric-blue text-black rounded-full font-bold text-center mb-8">
              <div>
                <div className="text-sm">PIONEERING</div>
                <div className="text-xs">REGULATED CRYPTO</div>
                <div className="text-xs">IN EUROPE</div>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={1400}>
            <div className="video-placeholder h-80 max-w-2xl mx-auto"></div>
          </ScrollReveal>
        </div>
      </section>

      {/* What's Next */}
      <section id="whats-next" className="py-32 px-6 bg-background relative overflow-hidden">
        <div className="particles">
          <Particles density={80} color="#00D4FF" speed={0.4} />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-hero mb-12 text-electric-blue-glow">THE NEXT FIRST IS COMING</h2>
          </ScrollReveal>
          
          <div className="space-y-8 mb-16">
            <ScrollReveal delay={200}>
              <p className="text-2xl text-text-secondary">
                Every breakthrough was just the beginning. Every first led to the next innovation. Every barrier removed opened new possibilities.
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={400}>
              <div className="text-5xl font-bold text-electric-blue animate-glow-pulse">
                [REDACTED] LAUNCH INCOMING
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={600}>
              <p className="text-xl text-text-muted">
                XION has built a history of firsts. Soon, we'll add another first to the list.
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={800}>
              <p className="text-lg text-text-subtle">
                And one thing is for certain, it definitely won't be the last.
              </p>
            </ScrollReveal>
          </div>
          
          <ScrollReveal delay={1000}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                variant="electric" 
                size="lg" 
                className="w-full sm:w-auto"
                onClick={() => window.open('https://twitter.com/burnt_xion', '_blank')}
              >
                <Twitter className="w-5 h-5 mr-2" />
                Follow @burnt_xion
              </Button>
              
              <Button 
                variant="dark" 
                size="lg" 
                className="w-full sm:w-auto"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Join Discord
              </Button>
              
              <Button 
                variant="electric-outline" 
                size="lg" 
                className="w-full sm:w-auto"
                onClick={() => window.open('https://xion.burnt.com', '_blank')}
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Learn More
              </Button>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={1200}>
            <p className="text-sm text-electric-blue mt-12">
              Being first is what we're known for.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-background border-t border-border-subtle">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <p className="text-sm text-text-faded">
            Created for the XION 4th Weekly Content Competition • August 2025
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 text-text-subtle">
            <a href="https://xion.burnt.com" target="_blank" rel="noopener noreferrer" className="hover:text-electric-blue transition-colors">
              Website: xion.burnt.com
            </a>
            <a href="https://twitter.com/burnt_xion" target="_blank" rel="noopener noreferrer" className="hover:text-electric-blue transition-colors">
              Twitter: @burnt_xion
            </a>
            <a href="#" className="hover:text-electric-blue transition-colors">
              Discord: [link]
            </a>
          </div>
          
          <p className="text-xs text-text-faded max-w-3xl mx-auto">
            XION is the first walletless L1 blockchain purpose-built for consumer adoption through chain abstraction. 
            Raised $36M from Multicoin, Animoca, Circle, Hashkey, Arrington Capital, Spartan, and more.
          </p>
          
          <p className="text-xs text-text-faded italic">
            "Everyone, regardless of technical knowledge, should have access to true ownership."
          </p>
        </div>
      </footer>
    </div>
  );
};

export default XionPage;