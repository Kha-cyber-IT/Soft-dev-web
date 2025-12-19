import React from 'react';
import { Page, NavigationProps } from '../types';

export const Home: React.FC<NavigationProps> = ({ setPage }) => {
  return (
    <div className="animate-fade-in text-center pt-8">
      {/* Logo Container */}
      <div className="inline-flex justify-center items-center bg-white p-4 rounded-xl shadow-lg mb-8 w-4/5 md:w-3/5">
        <img src="https://i.postimg.cc/HW79Ljpk/1763367303077.png" 
             alt="The Potter's House Logo" 
             className="h-14 md:h-24 w-auto mx-auto" />
      </div>

      {/* Mission Text */}
      <div className="mb-10 px-4">
        <h1 className="text-4xl md:text-7xl lg:text-8xl font-black mb-6 text-blue-400 font-heading leading-tight tracking-tight">
            Our mission is simple.
        </h1>
        
        <h2 className="text-2xl md:text-5xl lg:text-6xl font-light mb-10 text-white/90 tracking-wide">
            To bring the Truth of Jesus Christ to the world!
        </h2>

        <p className="text-lg md:text-2xl lg:text-3xl leading-relaxed text-white/80 max-w-5xl mx-auto">
            We are completely centered around Jesus Christ. 
            <span className="font-semibold text-blue-400"> His love. His power. His message.</span>
            This is the single greatest hope we have of true life and true transformation!
        </p>
      </div>

      {/* Who We Are Button */}
      <div className="mb-16">
          <button onClick={() => setPage(Page.AboutUs)} className="bg-blue-600 text-white font-bold py-4 px-10 rounded-full shadow-lg hover:bg-blue-500 active:scale-95 transition-all uppercase tracking-widest font-heading text-lg">
              Who we are
          </button>
      </div>
      
      {/* Services Section */}
      <div className="mb-16 px-4">
          <h3 className="inline-block bg-teal-600 text-white text-lg font-bold py-2 px-6 rounded-full shadow-md mb-8 uppercase tracking-widest font-heading">
              Church Weekly Services
          </h3>
          
          <div className="text-left max-w-md mx-auto space-y-6">
              <div>
                  <h4 className="text-xl font-bold mb-3"> 
                      <span className="bg-teal-600 text-white rounded-md px-2 py-1 font-heading">Sunday</span>
                  </h4>
                  <ul className="list-none space-y-3 pl-4">
                      <li className="flex items-start"> 
                          <span className="bg-teal-600 text-white text-sm font-bold rounded-md px-2 py-1 mr-3 w-20 text-center flex-shrink-0">9AM</span> 
                          <span className="text-white/90">Bible Study and Children's Sunday School</span>
                      </li>
                      <li className="flex items-start"> 
                          <span className="bg-teal-600 text-white text-sm font-bold rounded-md px-2 py-1 mr-3 w-20 text-center flex-shrink-0">10AM</span> 
                          <span className="text-white/90">Morning Worship Service</span>
                      </li>
                      <li className="flex items-start"> 
                          <span className="bg-teal-600 text-white text-sm font-bold rounded-md px-2 py-1 mr-3 w-20 text-center flex-shrink-0">5PM</span> 
                          <span className="text-white/90">Evening Worship Service</span>
                      </li>
                  </ul>
              </div>
              
              <div>
                  <h4 className="text-xl font-bold mb-3"> 
                      <span className="bg-teal-600 text-white rounded-md px-2 py-1 font-heading">Wednesday</span>
                  </h4>
                  <ul className="list-none space-y-3 pl-4">
                      <li className="flex items-start"> 
                          <span className="bg-teal-600 text-white text-sm font-bold rounded-md px-2 py-1 mr-3 w-20 text-center flex-shrink-0">7PM</span> 
                          <span className="text-white/90">Midweek Worship Service</span>
                      </li>
                  </ul>
              </div>
          </div>
      </div>

      {/* What's Happening Section */}
      <div className="mb-16 px-4">
          <hr className="border-t border-white/20 max-w-xs mx-auto my-8" />
          <h3 className="text-2xl font-bold text-blue-300 mb-4 uppercase font-heading tracking-widest">WHAT'S HAPPENING</h3>
          <a href="https://whatsapp.com/channel/0029Vb5ddJxCHDymMM02UE3G" target="_blank" className="text-white text-lg underline decoration-blue-500 underline-offset-4 font-medium mb-6 block">Join WhatsApp Channel</a>
          
          <div className="flex justify-center mb-8">
              <div className="bg-white p-2 rounded-lg shadow-md">
                  <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://whatsapp.com/channel/0029Vb5ddJxCHDymMM02UE3G" alt="QR Code" className="w-32 h-32" />
              </div>
          </div>
          
          <div className="mt-10">
              <h4 className="inline-block bg-teal-600 text-white text-base font-bold py-2 px-5 rounded-full shadow-md mb-4 border border-white/20 font-heading uppercase tracking-widest">New to The Potter's House?</h4>
              <p className="text-lg text-gray-200 max-w-md mx-auto">Get in touch with a staff member and let us know how we can help.</p>
          </div>
      </div> 

      {/* Bottom Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-16">
          <button onClick={() => setPage(Page.GetConnected)} className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-blue-500 active:scale-95 transition-all uppercase tracking-widest font-heading">Get connected</button>
          <button onClick={() => setPage(Page.PlanAVisit)} className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-blue-500 active:scale-95 transition-all uppercase tracking-widest font-heading">Plan a Visit</button>
      </div>

      {/* Broadcast Section */}
      <div className="mb-24 px-4 relative overflow-hidden rounded-3xl group max-w-5xl mx-auto">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110 opacity-60 z-0" 
            style={{ backgroundImage: "url('https://i.postimg.cc/026T1kg6/1766087333269.jpg')" }}
          ></div>
          <div className="absolute inset-0 bg-black/40 z-1"></div>
          
          <div className="relative z-10 py-20 px-6">
              <div className="flex flex-col items-center justify-center gap-4 mb-8">
                  <div className="bg-white/10 p-4 rounded-full backdrop-blur-md border border-white/20 shadow-xl">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-red-500" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.226-11.63-.226-15.234 0C.486 3.407 0 4.888 0 7.5v9c0 2.612.486 4.093 4.381 4.316 3.604.226 11.63.226 15.234 0 3.896-.223 4.381-1.704 4.381-4.316v-9c0-2.612-.486-4.093-4.381-4.316zM9 16.5v-9L16 12l-7 4.5z"/></svg>
                  </div>
                  <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter font-heading text-shadow-strong">Watch our archived broadcasts!</h3>
              </div>
              <button 
                onClick={() => window.open('https://m.youtube.com/channel/UCHUgOJkBGl1760u1fxAFvyA', '_blank', 'noopener,noreferrer')} 
                className="liquid-glass text-white font-bold py-5 px-14 rounded-full shadow-[0_0_25px_rgba(168,85,247,0.7)] hover:shadow-[0_0_35px_rgba(168,85,247,0.9)] border border-purple-500/50 hover:bg-white/10 active:scale-95 transition-all uppercase tracking-widest font-heading text-lg"
              >
                  Watch Now
              </button>
          </div>
      </div>
    </div>
  );
};