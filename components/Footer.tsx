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

  const ministries = [
    { page: Page.Ministries, label: "One80 Live" },
    { page: Page.Recovery, label: "Recovery Ministry" },
    { page: Page.ChildrensMinistry, label: "Children's Ministry" },
    { page: Page.ChurchPlanting, label: "Church Planting" },
    { page: Page.OurVision, label: "Our Vision" },
    { page: Page.StatementOfFaith, label: "Beliefs" },
  ];

  const socialLinks = [
    { 
      icon: <MessageCircle className="h-5 w-5" />, 
      label: "WhatsApp", 
      url: "https://whatsapp.com/channel/0029Vb5ddJxCHDymMM02UE3G",
      color: "hover:bg-green-600 hover:shadow-[0_0_15px_rgba(22,163,74,0.5)]" 
    },
    { 
      icon: <Music className="h-5 w-5" />, 
      label: "Spotify", 
      url: "https://open.spotify.com/show/4vp0VQPypNmILRJcIfn1lc",
      color: "hover:bg-green-500 hover:shadow-[0_0_15px_rgba(34,197,94,0.5)]" 
    },
    { 
      icon: <Youtube className="h-5 w-5" />, 
      label: "YouTube", 
      url: "https://m.youtube.com/channel/UCHUgOJkBGl1760u1fxAFvyA",
      color: "hover:bg-red-600 hover:shadow-[0_0_15px_rgba(220,38,38,0.5)]" 
    },
    { 
      icon: <MapIcon className="h-5 w-5" />, 
      label: "Maps", 
      url: "https://maps.app.goo.gl/Q9CmxXAhxE1ypid59",
      color: "hover:bg-blue-600 hover:shadow-[0_0_15px_rgba(37,99,235,0.5)]" 
    },
  ];

  return (
    <footer className="mt-24 liquid-glass rounded-3xl overflow-hidden shadow-2xl relative z-10">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="bg-white p-1 rounded-lg">
                <img src="https://i.postimg.cc/HW79Ljpk/1763367303077.png" alt="Logo" className="h-8 w-auto" />
              </div>
              <span className="font-bold text-xl text-white">The Potter's House</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              Serving the community of Eldorado Park since 1997. A lighthouse of hope and spiritual transformation for Southern Africa.
            </p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a 
                  key={social.label}
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`p-3 bg-white/5 rounded-full text-white/70 hover:text-white transition-all duration-300 border border-white/10 active:scale-90 ${social.color}`}
                  title={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-blue-400 text-sm uppercase tracking-widest mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}><button onClick={() => setPage(link.page)} className="text-white/50 hover:text-white transition-colors text-base text-left">{link.label}</button></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-blue-400 text-sm uppercase tracking-widest mb-6">Ministries</h4>
            <ul className="space-y-3">
              {ministries.map((m) => (
                <li key={m.label}><button onClick={() => setPage(m.page)} className="text-white/50 hover:text-white transition-colors text-base text-left">{m.label}</button></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-blue-400 text-sm uppercase tracking-widest mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li className="flex gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-blue-400" />
                <a href="https://maps.app.goo.gl/Q9CmxXAhxE1ypid59" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">11 Alberta Str, Eldorado Park</a>
              </li>
              <li className="flex gap-3">
                <Mail className="h-5 w-5 shrink-0 text-blue-400" />
                <a href="mailto:joburg@worldcfm.com" className="hover:text-white transition-colors">joburg@worldcfm.com</a>
              </li>
              <li className="flex gap-3">
                <Phone className="h-5 w-5 shrink-0 text-blue-400" />
                <a href="tel:+27825166638" className="hover:text-white transition-colors">+27 82 516 6638</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/5 text-center text-white/30 text-xs">
          © {new Date().getFullYear()} The Potter's House Christian Fellowship Eldorado Park. All rights reserved.
        </div>
      </div>
    </footer>
  );
};