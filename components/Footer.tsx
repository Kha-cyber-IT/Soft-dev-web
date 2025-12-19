import React from 'react';
import { Page, NavigationProps } from '../types';
import { MapPin, Mail, Phone, Youtube, Music, MessageCircle, Map as MapIcon } from 'lucide-react';

export const Footer: React.FC<NavigationProps> = ({ setPage }) => {
  const quickLinks = [
    { page: Page.Home, label: "Home" },
    { page: Page.AboutUs, label: "About Us" },
    { page: Page.NewBuilding, label: "New Building" },
    { page: Page.OurStaff, label: "Our Staff" },
    { page: Page.Give, label: "Give" },
    { page: Page.Stories, label: "Stories" },
    { page: Page.GetConnected, label: "Contact" },
  ];

  const ministriesList = [
    { page: Page.Ministries, label: "One80 Live" },
    { page: Page.Recovery, label: "Recovery Ministry" },
    { page: Page.ChildrensMinistry, label: "Children's Ministry" },
    { page: Page.ChurchPlanting, label: "Church Planting" },
    { page: Page.OurVision, label: "Our Vision" },
    { page: Page.StatementOfFaith, label: "Beliefs" },
  ];

  const socialLinks = [
    { 
      icon: <MessageCircle className="h-6 w-6" />, 
      label: "WhatsApp", 
      url: "https://whatsapp.com/channel/0029Vb5ddJxCHDymMM02UE3G",
      color: "hover:bg-green-600 hover:shadow-[0_0_20px_rgba(22,163,74,0.6)]" 
    },
    { 
      icon: <Music className="h-6 w-6" />, 
      label: "Spotify", 
      url: "https://open.spotify.com/show/4vp0VQPypNmILRJcIfn1lc",
      color: "hover:bg-green-500 hover:shadow-[0_0_20px_rgba(34,197,94,0.6)]" 
    },
    { 
      icon: <Youtube className="h-6 w-6" />, 
      label: "YouTube", 
      url: "https://m.youtube.com/channel/UCHUgOJkBGl1760u1fxAFvyA",
      color: "hover:bg-red-600 hover:shadow-[0_0_20px_rgba(220,38,38,0.6)]" 
    },
    { 
      icon: <MapIcon className="h-6 w-6" />, 
      label: "Maps", 
      url: "https://maps.app.goo.gl/Q9CmxXAhxE1ypid59",
      color: "hover:bg-blue-600 hover:shadow-[0_0_20px_rgba(37,99,235,0.6)]" 
    },
  ];

  return (
    <footer className="mt-24 liquid-glass rounded-3xl overflow-hidden shadow-2xl relative z-10 border border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="bg-white p-2 rounded-xl shadow-lg">
                <img src="https://i.postimg.cc/HW79Ljpk/1763367303077.png" alt="Logo" className="h-10 w-auto" />
              </div>
              <span className="font-black text-2xl text-white tracking-tighter uppercase font-heading">PH ELDOS</span>
            </div>
            <p className="text-white/50 text-base leading-relaxed">
              Serving the community of Eldorado Park since 1997. A lighthouse of hope and spiritual transformation for Southern Africa.
            </p>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social) => (
                <a 
                  key={social.label}
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`p-4 bg-white/5 rounded-2xl text-white/70 hover:text-white transition-all duration-300 border border-white/10 active:scale-90 ${social.color}`}
                  title={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-black text-blue-400 text-sm uppercase tracking-widest mb-8 font-heading">Quick Links</h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button onClick={() => setPage(link.page)} className="text-white/50 hover:text-white transition-colors text-lg text-left font-medium">
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-black text-blue-400 text-sm uppercase tracking-widest mb-8 font-heading">Ministries</h4>
            <ul className="space-y-4">
              {ministriesList.map((m) => (
                <li key={m.label}>
                  <button onClick={() => setPage(m.page)} className="text-white/50 hover:text-white transition-colors text-lg text-left font-medium">
                    {m.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-black text-blue-400 text-sm uppercase tracking-widest mb-8 font-heading">Contact Us</h4>
            <ul className="space-y-6 text-base text-white/50">
              <li className="flex gap-4">
                <div className="bg-white/5 p-2 rounded-lg"><MapPin className="h-5 w-5 shrink-0 text-blue-400" /></div>
                <a href="https://maps.app.goo.gl/Q9CmxXAhxE1ypid59" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">11 Alberta Str,<br/>Eldorado Park</a>
              </li>
              <li className="flex gap-4">
                <div className="bg-white/5 p-2 rounded-lg"><Mail className="h-5 w-5 shrink-0 text-blue-400" /></div>
                <a href="mailto:joburg@worldcfm.com" className="hover:text-white transition-colors">joburg@worldcfm.com</a>
              </li>
              <li className="flex gap-4">
                <div className="bg-white/5 p-2 rounded-lg"><Phone className="h-5 w-5 shrink-0 text-blue-400" /></div>
                <a href="tel:+27825166638" className="hover:text-white transition-colors">+27 82 516 6638</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-20 pt-10 border-t border-white/5 text-center text-white/30 text-sm font-medium">
          © {new Date().getFullYear()} The Potter's House Christian Fellowship Eldorado Park. All rights reserved.
        </div>
      </div>
    </footer>
  );
};