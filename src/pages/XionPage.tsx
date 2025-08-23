import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ScrollReveal } from '@/components/ScrollReveal';
import { CounterAnimation } from '@/components/CounterAnimation';
import { ChevronDown, ExternalLink, Twitter, MessageCircle, Menu, X, Play } from 'lucide-react';
import xionLogo from '@/assets/xion-logo-new.png';
import { SmoothScrollLink } from '@/components/SmoothScrollLink';

const XionPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden"
         style={{ background: 'var(--gradient-hero)' }}>
      {/* Navigation Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg">
        <div className="container mx-auto px-8 py-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img src={xionLogo} alt="XION" className="h-8 w-auto filter brightness-0 invert" />
            </div>
            
            <nav className="hidden lg:flex items-center space-x-16">
              <SmoothScrollLink to="consumer" className="text-white/70 hover:text-white transition-colors text-sm font-medium tracking-wider">
                Consumer
              </SmoothScrollLink>
              <SmoothScrollLink to="walletless" className="text-white/70 hover:text-white transition-colors text-sm font-medium tracking-wider">
                Walletless
              </SmoothScrollLink>
              <SmoothScrollLink to="gasless" className="text-white/70 hover:text-white transition-colors text-sm font-medium tracking-wider">
                Gasless
              </SmoothScrollLink>
              <SmoothScrollLink to="mica" className="text-white/70 hover:text-white transition-colors text-sm font-medium tracking-wider">
                MiCA
              </SmoothScrollLink>
              <SmoothScrollLink to="usdc" className="text-white/70 hover:text-white transition-colors text-sm font-medium tracking-wider">
                USDC
              </SmoothScrollLink>
              <SmoothScrollLink to="bybit" className="text-white/70 hover:text-white transition-colors text-sm font-medium tracking-wider">
                Bybit
              </SmoothScrollLink>
              <SmoothScrollLink to="next" className="text-white/70 hover:text-white transition-colors text-sm font-medium tracking-wider">
                What's Next
              </SmoothScrollLink>
            </nav>

            <div className="flex items-center space-x-6">
              <a 
                href="https://xion.burnt.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hidden md:block text-white/70 hover:text-white transition-colors text-sm font-medium tracking-wider"
              >
                Learn More
              </a>
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden text-white/70 hover:text-white transition-colors"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <nav className="lg:hidden mt-6 pb-6 border-t border-white/10 pt-6">
              <div className="flex flex-col space-y-4">
                <button onClick={() => { document.getElementById('consumer')?.scrollIntoView({ behavior: 'smooth' }); setMobileMenuOpen(false); }} className="text-white/70 hover:text-white transition-colors text-base font-medium text-left">
                  Consumer
                </button>
                <button onClick={() => { document.getElementById('walletless')?.scrollIntoView({ behavior: 'smooth' }); setMobileMenuOpen(false); }} className="text-white/70 hover:text-white transition-colors text-base font-medium text-left">
                  Walletless
                </button>
                <button onClick={() => { document.getElementById('gasless')?.scrollIntoView({ behavior: 'smooth' }); setMobileMenuOpen(false); }} className="text-white/70 hover:text-white transition-colors text-base font-medium text-left">
                  Gasless
                </button>
                <button onClick={() => { document.getElementById('mica')?.scrollIntoView({ behavior: 'smooth' }); setMobileMenuOpen(false); }} className="text-white/70 hover:text-white transition-colors text-base font-medium text-left">
                  MiCA
                </button>
                <button onClick={() => { document.getElementById('usdc')?.scrollIntoView({ behavior: 'smooth' }); setMobileMenuOpen(false); }} className="text-white/70 hover:text-white transition-colors text-base font-medium text-left">
                  USDC
                </button>
                <button onClick={() => { document.getElementById('bybit')?.scrollIntoView({ behavior: 'smooth' }); setMobileMenuOpen(false); }} className="text-white/70 hover:text-white transition-colors text-base font-medium text-left">
                  Bybit
                </button>
                <button onClick={() => { document.getElementById('next')?.scrollIntoView({ behavior: 'smooth' }); setMobileMenuOpen(false); }} className="text-white/70 hover:text-white transition-colors text-base font-medium text-left">
                  What's Next
                </button>
                <a 
                  href="https://xion.burnt.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-electric-blue font-medium text-base"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Learn More
                </a>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url('data:image/svg+xml,${encodeURIComponent(`
              <svg width="1200" height="800" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient id="grad1" cx="30%" cy="40%" r="40%">
                    <stop offset="0%" style="stop-color:rgb(0,212,255);stop-opacity:0.3" />
                    <stop offset="100%" style="stop-color:rgb(0,0,0);stop-opacity:1" />
                  </radialGradient>
                  <radialGradient id="grad2" cx="70%" cy="60%" r="35%">
                    <stop offset="0%" style="stop-color:rgb(0,212,255);stop-opacity:0.2" />
                    <stop offset="100%" style="stop-color:rgb(0,0,0);stop-opacity:1" />
                  </radialGradient>
                </defs>
                <rect width="100%" height="100%" fill="black"/>
                <circle cx="360" cy="320" r="200" fill="url(#grad1)" opacity="0.8"/>
                <circle cx="840" cy="480" r="180" fill="url(#grad2)" opacity="0.6"/>
                <g stroke="rgba(0,212,255,0.1)" stroke-width="1" fill="none">
                  <path d="M0,400 Q300,200 600,400 T1200,400" opacity="0.5"/>
                  <path d="M0,500 Q300,300 600,500 T1200,500" opacity="0.3"/>
                  <path d="M0,300 Q300,100 600,300 T1200,300" opacity="0.4"/>
                </g>
              </svg>
            `)})`,
          }}
        />
        
        {/* Aurora Effect */}
        <div className="aurora-background"></div>
        
        <div className="container mx-auto px-8 relative z-10 max-w-7xl">
          <div className="flex items-center justify-center">
            <div className="text-center">
              <ScrollReveal delay={0.8}>
                <h1 className="font-display text-7xl md:text-8xl lg:text-[9rem] font-light leading-none tracking-tight mb-12">
                  A History of
                  <br />
                  <span className="font-black text-electric-blue">Firsts</span>
                </h1>
              </ScrollReveal>
              
              <ScrollReveal delay={1.2}>
                <p className="text-2xl md:text-3xl text-accent-gray max-w-2xl mx-auto mb-20 font-light leading-relaxed">
                  Being first is what we're known for
                </p>
              </ScrollReveal>
            </div>
          </div>
          
          <ScrollReveal delay={2.5}>
            <div className="absolute bottom-12 left-8">
              <SmoothScrollLink to="consumer" className="group">
                <div className="flex flex-col items-start space-y-3 text-white/50 hover:text-white transition-colors">
                  <span className="text-sm tracking-[0.3em] uppercase font-light">Discover Our Journey</span>
                  <ChevronDown className="h-6 w-6 group-hover:animate-bounce" />
                </div>
              </SmoothScrollLink>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Consumer Blockchain Section */}
      <section id="consumer" className="relative min-h-screen flex items-center justify-center py-32">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: `url('data:image/svg+xml,${encodeURIComponent(`
              <svg width="1200" height="800" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
                <rect width="100%" height="100%" fill="#0a0a0a"/>
                <g opacity="0.3">
                  <circle cx="200" cy="200" r="3" fill="#00D4FF"/>
                  <circle cx="800" cy="150" r="2" fill="#00D4FF"/>
                  <circle cx="400" cy="600" r="4" fill="#00D4FF"/>
                  <circle cx="1000" cy="500" r="2" fill="#00D4FF"/>
                  <circle cx="150" cy="450" r="3" fill="#00D4FF"/>
                  <circle cx="950" cy="200" r="2" fill="#00D4FF"/>
                </g>
              </svg>
            `)})`,
          }}
        />
        
        <div className="container mx-auto px-8 relative z-10 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <ScrollReveal>
                <h2 className="font-display text-5xl md:text-6xl font-light leading-tight mb-16">
                  First to launch a
                  <br />
                  <span className="font-bold text-electric-blue">consumer blockchain</span>
                </h2>
              </ScrollReveal>
              
              <div className="space-y-10 text-lg text-white/80 leading-relaxed">
                <ScrollReveal delay={200}>
                  <p>
                    While the industry focused on DeFi protocols and trader tools, XION built something different. 
                    A blockchain designed from the ground up for everyday users and real-world applications.
                  </p>
                </ScrollReveal>
                
                <ScrollReveal delay={400}>
                  <p>
                    XION's consumer-first approach attracted over 100+ global brands including Uber, BMW, Amazon Prime, 
                    The North Face, and Temu.
                  </p>
                </ScrollReveal>
              </div>
              
              <ScrollReveal delay={600}>
                <div className="mt-12">
                  <p className="text-white/60 text-sm tracking-[0.2em] uppercase mb-4">Pure, versatile,</p>
                  <p className="text-white/60 text-sm tracking-[0.2em] uppercase">mainstream adoption</p>
                </div>
              </ScrollReveal>
            </div>
            
            <div className="space-y-8">
              
              {/* Floating Stats Card */}
              <ScrollReveal delay={800}>
                <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-light text-electric-blue mb-2">
                        <CounterAnimation end={2.5} suffix="M+" />
                      </div>
                      <div className="text-sm text-white/60 tracking-wide">Active Users</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-light text-electric-blue mb-2">
                        <CounterAnimation end={100} suffix="+" />
                      </div>
                      <div className="text-sm text-white/60 tracking-wide">Global Brands</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-light text-electric-blue mb-2">
                        <CounterAnimation end={1.49} suffix="M+" />
                      </div>
                      <div className="text-sm text-white/60 tracking-wide">Brand Interactions</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-light text-electric-blue mb-2">
                        <CounterAnimation end={70} suffix="K+" />
                      </div>
                      <div className="text-sm text-white/60 tracking-wide">Daily Active</div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
              
              {/* Quote Card */}
              <ScrollReveal delay={1000}>
                <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                  <blockquote className="text-xl font-light italic text-white/90 mb-4 leading-relaxed">
                    "We're seeing the future of Web3 unfold, where blockchain technology becomes accessible to mainstream audiences."
                  </blockquote>
                  <cite className="text-white/60 text-sm">— Burnt Banksy, Founder</cite>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Walletless Section */}
      <section id="walletless" className="relative min-h-screen flex items-center justify-center py-32 bg-gradient-to-b from-black to-gray-950">
        <div className="container mx-auto px-8 relative z-10 max-w-7xl">
          <div className="text-center mb-20">
            <ScrollReveal>
              <h2 className="text-6xl md:text-7xl font-light leading-tight mb-8">
                First <span className="font-black text-electric-blue">walletless</span>
                <br />
                L1 blockchain
              </h2>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <p className="text-xl text-white/70 max-w-4xl mx-auto leading-relaxed">
                Traditional wallets create a staggering 95%+ drop-off in user onboarding. 
                XION eliminated them entirely through protocol-level account abstraction.
              </p>
            </ScrollReveal>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <ScrollReveal delay={400}>
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 text-center">
                <div className="text-4xl font-light text-electric-blue mb-4">95%+</div>
                <div className="text-white/60 text-sm tracking-wide">Traditional Drop-off</div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={600}>
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 text-center">
                <div className="text-4xl font-light text-electric-blue mb-4">97%</div>
                <div className="text-white/60 text-sm tracking-wide">XION Conversion</div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={800}>
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 text-center">
                <div className="text-4xl font-light text-electric-blue mb-4">0</div>
                <div className="text-white/60 text-sm tracking-wide">Seed Phrases</div>
              </div>
            </ScrollReveal>
          </div>
          
          <ScrollReveal delay={1000}>
            <div className="text-center">
              <Button 
                variant="outline"
                size="lg"
                className="bg-electric-blue/10 border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-black"
              >
                Experience Walletless
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Gasless Section */}
      <section id="gasless" className="relative min-h-screen flex items-center justify-center py-32">
        <div className="container mx-auto px-8 relative z-10 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <ScrollReveal>
                <h2 className="text-6xl md:text-7xl font-light leading-tight mb-12">
                  First to eliminate
                  <br />
                  <span className="font-black text-electric-blue">gas complexity</span>
                </h2>
              </ScrollReveal>
              
              <div className="space-y-8 text-lg text-white/80 leading-relaxed">
                <ScrollReveal delay={200}>
                  <p>
                    Gas fees represent one of Web3's biggest adoption hurdles. XION solved this through 
                    complete gas abstraction at the protocol level.
                  </p>
                </ScrollReveal>
                
                <ScrollReveal delay={400}>
                  <p>
                    Users never see gas fees, never calculate them, never run out of them. 
                    The experience feels like any Web2 application.
                  </p>
                </ScrollReveal>
              </div>
            </div>
            
            <div className="space-y-8">
              <ScrollReveal delay={600}>
                <div className="bg-red-500/20 border border-red-500/30 rounded-3xl p-8">
                  <h3 className="text-red-400 font-medium mb-4 tracking-wide">BEFORE</h3>
                  <p className="text-white/70">
                    Calculate gas → Acquire tokens → Hope prices don't spike → Transaction fails → Start over
                  </p>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={800}>
                <div className="bg-green-500/20 border border-green-500/30 rounded-3xl p-8">
                  <h3 className="text-green-400 font-medium mb-4 tracking-wide">AFTER</h3>
                  <p className="text-white/70">
                    Click button → Transaction completes → That's it
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* MiCA Section */}
      <section id="mica" className="relative min-h-screen flex items-center justify-center py-32 bg-gradient-to-b from-gray-950 to-blue-950/20">
        <div className="container mx-auto px-8 relative z-10 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <ScrollReveal>
                <h2 className="text-6xl md:text-7xl font-light leading-tight mb-12">
                  First <span className="font-black text-electric-blue">EU Title II</span>
                  <br />
                  compliant L1 blockchain
                </h2>
              </ScrollReveal>
              
              <ScrollReveal delay={200}>
                <p className="text-xl text-white/70 leading-relaxed mb-8">
                  On March 13, 2025, XION made history at the New York Stock Exchange, announcing compliance 
                  with EU Title II regulations under the Markets in Crypto-Assets (MiCA) framework.
                </p>
              </ScrollReveal>
              
              <ScrollReveal delay={400}>
                <blockquote className="text-2xl md:text-3xl font-light italic text-electric-blue mb-6 leading-relaxed">
                  "I have never been more excited for the future of this industry"
                </blockquote>
              </ScrollReveal>
              
              <ScrollReveal delay={600}>
                <cite className="text-white/60 text-lg">— Burnt Banksy, speaking at the New York Stock Exchange</cite>
              </ScrollReveal>
              
              <ScrollReveal delay={800}>
                <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-3xl p-6 mt-8">
                  <p className="text-yellow-400 font-medium text-lg mb-2">
                    First L1 on mainnet to release MiCA Title II whitepaper
                  </p>
                  <p className="text-white/70">
                    Opens access for 450M+ European users
                  </p>
                </div>
              </ScrollReveal>
            </div>
            
            <div>
              <ScrollReveal delay={1000}>
                <div className="video-container">
                  <div className="bg-black/80 rounded-3xl p-8 h-full flex flex-col justify-center items-center border border-white/10">
                    <div className="text-center mb-6">
                      <Play className="w-16 h-16 text-electric-blue mx-auto mb-4" />
                      <h3 className="text-white font-medium text-lg mb-2">MiCA Compliance Announcement</h3>
                      <p className="text-white/60 text-sm">Historic NYSE moment</p>
                    </div>
                    <Button 
                      variant="outline"
                      size="lg"
                      className="bg-electric-blue/20 border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-black"
                      onClick={() => window.open('https://x.com/burnt_xion/status/1903806222706618649', '_blank')}
                    >
                      <ExternalLink className="w-5 h-5 mr-2" />
                      Watch on Twitter
                    </Button>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* USDC Section */}
      <section id="usdc" className="relative min-h-screen flex items-center justify-center py-32">
        <div className="container mx-auto px-8 relative z-10 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <ScrollReveal>
                <h2 className="text-6xl md:text-7xl font-light leading-tight mb-12">
                  First to pay gas
                  <br />
                  with <span className="font-black text-electric-blue">USDC</span>
                </h2>
              </ScrollReveal>
              
              <div className="space-y-8 text-lg text-white/80 leading-relaxed">
                <ScrollReveal delay={200}>
                  <p>
                    Most blockchains require users to acquire native tokens for gas fees. 
                    XION eliminated this friction entirely.
                  </p>
                </ScrollReveal>
                
                <ScrollReveal delay={400}>
                  <p>
                    Users pay gas fees directly in USDC – a familiar, stable currency they likely already hold. 
                    The protocol automatically handles everything behind the scenes.
                  </p>
                </ScrollReveal>
              </div>
              
              <ScrollReveal delay={600}>
                <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-6 mt-8 border border-white/10">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-electric-blue rounded-full"></div>
                      <span className="text-white/70">Familiar stablecoin payments</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-electric-blue rounded-full"></div>
                      <span className="text-white/70">No volatile token requirements</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-electric-blue rounded-full"></div>
                      <span className="text-white/70">Sustainable token economics</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
            
            <div>
              <ScrollReveal delay={800}>
                <div className="video-container">
                  <div className="bg-black/80 rounded-3xl p-8 h-full flex flex-col justify-center items-center border border-white/10">
                    <div className="text-center mb-6">
                      <Play className="w-16 h-16 text-electric-blue mx-auto mb-4" />
                      <h3 className="text-white font-medium text-lg mb-2">USDC Gas Integration</h3>
                      <p className="text-white/60 text-sm">Powered by Circle partnership</p>
                    </div>
                    <Button 
                      variant="outline"
                      size="lg"
                      className="bg-electric-blue/20 border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-black"
                      onClick={() => window.open('https://x.com/burnt_xion/status/1932452785297211758', '_blank')}
                    >
                      <ExternalLink className="w-5 h-5 mr-2" />
                      Watch Demo
                    </Button>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Bybit Section */}
      <section id="bybit" className="relative min-h-screen flex items-center justify-center py-32 bg-gradient-to-b from-black to-gray-950">
        <div className="container mx-auto px-8 relative z-10 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <ScrollReveal>
                <h2 className="text-6xl md:text-7xl font-light leading-tight mb-12">
                  First ever <span className="font-black text-electric-blue">Bybit EU</span>
                  <br />
                  Launchpool
                </h2>
              </ScrollReveal>
              
              <ScrollReveal delay={200}>
                <p className="text-xl text-white/70 leading-relaxed mb-8">
                  On August 14, 2025, XION broke new ground once again, becoming the inaugural Launchpool project 
                  on Bybit's EU exchange following their MiCAR license approval.
                </p>
              </ScrollReveal>
              
              <ScrollReveal delay={400}>
                <blockquote className="text-2xl md:text-3xl font-light italic text-electric-blue mb-6 leading-relaxed">
                  "Today's launch with XION demonstrates how regulation can accelerate rather than hinder innovation"
                </blockquote>
              </ScrollReveal>
              
              <ScrollReveal delay={600}>
                <cite className="text-white/60 text-lg">— Mazurka Zheng, CEO of Bybit EU</cite>
              </ScrollReveal>
            </div>
            
            <div>
              <ScrollReveal delay={800}>
                <div className="video-container">
                  <div className="bg-black/80 rounded-3xl p-8 h-full flex flex-col justify-center items-center border border-white/10">
                    <div className="text-center mb-6">
                      <Play className="w-16 h-16 text-electric-blue mx-auto mb-4" />
                      <h3 className="text-white font-medium text-lg mb-2">Bybit EU Launchpool Launch</h3>
                      <p className="text-white/60 text-sm">Historic regulatory milestone</p>
                    </div>
                    <Button 
                      variant="outline"
                      size="lg"
                      className="bg-electric-blue/20 border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-black"
                      onClick={() => window.open('https://x.com/burnt_xion/status/1955947636953055300', '_blank')}
                    >
                      <ExternalLink className="w-5 h-5 mr-2" />
                      Watch Launch
                    </Button>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
      
      {/* What's Next Section */}
      <section id="next" className="relative min-h-screen flex items-center justify-center py-32">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url('data:image/svg+xml,${encodeURIComponent(`
              <svg width="1200" height="800" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient id="mystery" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" style="stop-color:rgb(0,212,255);stop-opacity:0.4" />
                    <stop offset="100%" style="stop-color:rgb(0,0,0);stop-opacity:1" />
                  </radialGradient>
                </defs>
                <rect width="100%" height="100%" fill="black"/>
                <circle cx="600" cy="400" r="300" fill="url(#mystery)" opacity="0.6"/>
                <g stroke="rgba(0,212,255,0.2)" stroke-width="2" fill="none">
                  <circle cx="600" cy="400" r="150" opacity="0.8"/>
                  <circle cx="600" cy="400" r="200" opacity="0.6"/>
                  <circle cx="600" cy="400" r="250" opacity="0.4"/>
                </g>
              </svg>
            `)})`,
          }}
        />
        
        {/* Aurora Effect */}
        <div className="aurora-background"></div>
        
        <div className="container mx-auto px-8 relative z-10 max-w-7xl text-center">
          <ScrollReveal>
            <h2 className="text-7xl md:text-8xl lg:text-9xl font-light leading-tight mb-12">
              The next first
              <br />
              <span className="font-black text-electric-blue">is evolving</span>
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <p className="text-2xl md:text-3xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-16">
              Every breakthrough was just the beginning. Every first led to the next innovation.
              <br />
              XION has built a history of firsts. The pattern speaks for itself.
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={800}>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6 mb-16">
              <Button 
                variant="default"
                size="lg"
                className="bg-electric-blue text-black hover:bg-electric-blue/90 px-8 py-4"
                onClick={() => window.open('https://twitter.com/burnt_xion', '_blank')}
              >
                <Twitter className="w-5 h-5 mr-2" />
                Follow @burnt_xion
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20 px-8 py-4"
                onClick={() => window.open('https://discord.gg/burnt', '_blank')}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Join Discord
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                className="border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-black px-8 py-4"
                onClick={() => window.open('https://xion.burnt.com', '_blank')}
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Learn More
              </Button>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={1000}>
            <p className="text-electric-blue text-lg font-light tracking-[0.2em] uppercase">
              Being first is what we're known for.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Investors Section */}
      <section className="py-20 px-8 bg-gray-950/50">
        <div className="container mx-auto text-center max-w-6xl">
          <ScrollReveal>
            <h3 className="text-lg font-light text-white/60 mb-8 tracking-[0.3em] uppercase">Backed by the Best</h3>
          </ScrollReveal>
          
          <ScrollReveal delay={400}>
            <p className="text-sm text-white/50 mt-6">
              Raised $36M from Multicoin, Animoca, Circle, Hashkey, Arrington Capital, Spartan, and more
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-8 bg-black border-t border-white/10">
        <div className="container mx-auto text-center max-w-6xl">
          <div className="mb-8">
            
            <div className="flex flex-wrap justify-center items-center space-x-8 text-sm text-white/60">
              <a href="https://xion.burnt.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                Website
              </a>
              <a href="https://twitter.com/burnt_xion" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                Twitter
              </a>
              <a href="https://discord.gg/burnt" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                Discord
              </a>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8">
            <p className="text-white/50 text-sm leading-relaxed max-w-4xl mx-auto mb-4">
              XION is the first walletless L1 blockchain purpose-built for consumer adoption through chain abstraction. 
              Raised $36M from Multicoin, Animoca, Circle, Hashkey, Arrington Capital, Spartan, and more.
            </p>
            
            <p className="text-white/40 text-xs">
              Everyone, regardless of technical knowledge, should have access to true ownership.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default XionPage;