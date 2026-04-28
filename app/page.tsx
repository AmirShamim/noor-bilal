import React from 'react';
import { Heart, Share2, MapPin, Target, Shield, Activity, ArrowRight, Instagram, Twitter, Facebook } from 'lucide-react';
import Image from 'next/image';

export default function MutualAidPage() {
  return (
    <div className="min-h-screen bg-[#F9F8F6] text-[#1A1A1A] font-sans flex flex-col">
      {/* Navbar */}
      <nav className="h-16 px-4 md:px-8 flex items-center justify-between border-b border-[#E5E2DA] bg-white sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#4A5D4E] rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-bold">NB</span>
          </div>
          <span className="font-serif italic text-xl tracking-tight">Nour &amp; Bilal</span>
        </div>
        <div className="flex items-center gap-4 md:gap-6">
          <span className="hidden sm:inline text-sm font-medium text-[#6B6B6B]">Mutual Aid Fund</span>
          <button className="hidden sm:inline-flex items-center justify-center p-2 text-[#6B6B6B] hover:text-[#1A1A1A] transition-colors">
            <Share2 className="w-5 h-5" />
          </button>
          <button className="bg-[#D97706] hover:bg-[#B45309] text-white px-5 py-2 rounded-full text-sm font-bold shadow-sm flex items-center gap-2">
            <Heart className="w-4 h-4" />
            <span className="hidden sm:inline">Donate Now</span>
            <span className="sm:hidden">Donate</span>
          </button>
        </div>
      </nav>

      {/* Main Content Grid */}
      <main className="flex-1 p-4 md:p-6 grid grid-cols-1 lg:grid-cols-12 lg:grid-rows-6 gap-4 md:gap-6 max-w-[1400px] mx-auto w-full">
        
        {/* The Story Section (Left Span) */}
        <section className="order-2 lg:order-1 col-span-1 lg:col-span-4 lg:row-span-6 bg-white rounded-3xl border border-[#E5E2DA] p-6 lg:p-8 flex flex-col">
          <span className="text-[10px] uppercase tracking-widest font-bold text-[#D97706] mb-3">Our Story</span>
          <h2 className="text-3xl font-serif leading-tight mb-6">A Second Chance</h2>
          <div className="space-y-4 text-[#4A4A4A] leading-relaxed text-sm flex-1">
            <p>
              I was about to begin my happily married life a few months ago, with a simple dream of establishing a stable home with my wife and building our lives together. But suddenly, the war changed everything. Homes around us were destroyed, we lost our dream home, and I lost the job I used to support myself and my wife.
            </p>
            <p>
              Today, we face great difficulty in securing our most basic necessities: food, water, and even a safe place to sleep. Every day that passes is a new challenge to survive and to maintain our dignity as we begin a new life.
            </p>
            <p>
              Today, I appeal to you to be part of a second chance for us. Every contribution, no matter how small, helps us buy food, clothes, and perhaps even find a place where we can start our lives anew.
            </p>
            <div className="mt-8">
              <p className="font-serif text-lg text-[#D97706] italic border-l-2 border-[#D97706] pl-4">
                &quot;Every day that passes is a new challenge to survive and to maintain our dignity as we begin a new life.&quot;
              </p>
            </div>
          </div>
        </section>

        {/* Hero Section (Center-Right Wide) */}
        <section className="order-1 lg:order-2 col-span-1 lg:col-span-8 lg:row-span-3 bg-[#4A5D4E] rounded-3xl relative overflow-hidden flex flex-col justify-end p-6 lg:p-8 min-h-[400px]">
          <div className="absolute inset-0">
            <Image 
              src="https://picsum.photos/seed/resilience/1200/1600" 
              alt="Family placeholder representing resilience" 
              fill 
              className="object-cover opacity-40 mix-blend-overlay"
              referrerPolicy="no-referrer"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/90 via-[#1A1A1A]/40 to-transparent"></div>
          
          <div className="relative z-10 flex flex-col h-full justify-end">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-bold mb-4 w-fit">
              <MapPin className="w-3 h-3" />
              Gaza Strip, Palestine
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-5xl font-bold text-white leading-[1.1] mb-4">
              Resilience in Community
            </h1>
            <p className="text-white/80 max-w-2xl text-sm sm:text-base mb-8 leading-relaxed">
              We are building a bridge to our future. Partner with us as we secure our survival, rebuild our foundation, and protect our family&apos;s right to live with dignity.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mt-auto">
              <div className="flex flex-wrap gap-4 sm:gap-8">
                <div>
                  <div className="text-2xl sm:text-3xl font-serif text-white mb-0.5">502€</div>
                  <div className="text-[10px] text-white/60 font-bold uppercase tracking-wider">Raised</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-serif text-white mb-0.5">50,000€</div>
                  <div className="text-[10px] text-white/60 font-bold uppercase tracking-wider">Goal</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-serif text-white mb-0.5">23</div>
                  <div className="text-[10px] text-white/60 font-bold uppercase tracking-wider">Supporters</div>
                </div>
                <div className="hidden sm:block">
                  <div className="text-2xl sm:text-3xl font-serif text-white mb-0.5">9</div>
                  <div className="text-[10px] text-white/60 font-bold uppercase tracking-wider">Shares</div>
                </div>
              </div>
              
              <a
                href="https://chuffed.org/project/165852-nour-matar-and-her-husband-bilal-surviving-in-gaza"
                target="_blank"
                rel="noreferrer"
                className="bg-white text-[#1A1A1A] px-6 py-3 rounded-full font-bold shadow-xl hover:scale-105 transition-transform flex items-center justify-center gap-2 text-sm shrink-0"
              >
                Support Our Journey
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Impact & Expense Grid (Center Square) */}
        <section className="order-3 lg:order-3 col-span-1 lg:col-span-4 lg:row-span-3 bg-white rounded-3xl border border-[#E5E2DA] p-6 lg:p-8 flex flex-col">
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#9A9A9A]">Financial Breakdown</h3>
            <span className="text-[10px] font-bold text-[#D97706] bg-[#D97706]/10 px-2 py-1 rounded-sm">TRANSPARENT</span>
          </div>
          
          <p className="text-xs text-[#6B6B6B] mb-6 leading-relaxed">Every contribution directly supports our meticulously planned pathway to safety and stability.</p>

          <div className="space-y-6 flex-1">
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Target className="w-4 h-4 text-[#4A5D4E]" />
                  <span className="text-sm font-bold text-[#1A1A1A]">Border Crossing Fees</span>
                </div>
                <span className="text-sm font-mono font-bold">25,000€</span>
              </div>
              <p className="text-[11px] text-[#6B6B6B] leading-snug pl-6">
                The majority of our goal is dedicated to securing coordinated safe passage out of the conflict zone to begin our lives anew.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-[#D97706]" />
                  <span className="text-sm font-bold text-[#1A1A1A]">Daily Survival & Nutrition</span>
                </div>
                <span className="text-sm font-mono font-bold">15,000€</span>
              </div>
              <p className="text-[11px] text-[#6B6B6B] leading-snug pl-6">
                Essential funds for securing clean water, food, and critical medical supplies during the prolonged wait for passage.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-[#1A1A1A]" />
                  <span className="text-sm font-bold text-[#1A1A1A]">Resettlement Foundation</span>
                </div>
                <span className="text-sm font-mono font-bold">10,000€</span>
              </div>
              <p className="text-[11px] text-[#6B6B6B] leading-snug pl-6">
                Initial housing, documentation translation, and essential setup costs to begin rebuilding securely once we reach safety.
              </p>
            </div>
          </div>
        </section>

        {/* Updates Feed (Right Square) */}
        <section className="order-4 lg:order-4 col-span-1 lg:col-span-4 lg:row-span-3 bg-[#1A1A1A] rounded-3xl p-6 lg:p-8 text-white flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white/40">Recent Updates</h3>
            <button className="text-[10px] font-bold text-[#D97706] uppercase tracking-wider hover:underline flex items-center gap-1 transition-all">
              View All <ArrowRight className="w-3 h-3" />
            </button>
          </div>
          
          <div className="space-y-6 flex-1">
            <div className="border-l-2 border-[#D97706] pl-4 py-1">
              <div className="flex justify-between items-end mb-1">
                <h4 className="text-sm font-bold text-white">Milestone Reached</h4>
                <p className="text-[10px] text-white/40">Oct 12, 2023</p>
              </div>
              <p className="text-xs leading-relaxed font-light text-white/80">
                Thanks to the incredible support of this community, we have secured enough funds for our first month of clean water and vital medication. We are profoundly grateful for your solidarity in our darkest hours.
              </p>
            </div>

            <div className="border-l-2 border-white/20 pl-4 py-1">
              <div className="flex justify-between items-end mb-1">
                <h4 className="text-sm font-bold text-white">Campaign Launched</h4>
                <p className="text-[10px] text-white/40">Oct 1, 2023</p>
              </div>
              <p className="text-xs leading-relaxed font-light text-white/60">
                We have officially opened our mutual aid fund. This was a difficult step, but necessary for our survival. We ask that you share our story with your networks. Your amplification is just as important as your donations.
              </p>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="h-16 border-t border-[#E5E2DA] px-4 md:px-8 mt-6 flex items-center justify-between text-[#9A9A9A] text-[10px] font-bold uppercase tracking-widest bg-white">
        <div>&copy; {new Date().getFullYear()} Nour &amp; Bilal Mutual Aid</div>
        <div className="flex gap-4 md:gap-6">
          <a href="#" className="hover:text-[#1A1A1A] transition-colors"><Instagram className="w-3.5 h-3.5 md:hidden" /><span className="hidden md:inline">Instagram</span></a>
          <a href="#" className="hover:text-[#1A1A1A] transition-colors"><Twitter className="w-3.5 h-3.5 md:hidden" /><span className="hidden md:inline">Twitter / X</span></a>
          <a href="#" className="hover:text-[#1A1A1A] transition-colors"><Facebook className="w-3.5 h-3.5 md:hidden" /><span className="hidden md:inline">Facebook</span></a>
        </div>
      </footer>
    </div>
  );
}
