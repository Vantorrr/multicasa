'use client';

import { useState } from 'react';
import Link from 'next/link';
import { User, Menu, Clock, X, ChevronRight, Phone, FileText, ShieldCheck, Home } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Главная', icon: Home, href: '/' },
    { name: 'Правила обмена', icon: FileText, href: '/rules' },
    { name: 'AML/KYC Политика', icon: ShieldCheck, href: '/aml-kyc' },
    { name: 'Контакты', icon: Phone, href: '/contacts' },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-8">
              <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full border-2 border-[#D4B483] flex items-center justify-center text-[#D4B483] font-bold text-sm">
                  MK
              </div>
              <span className="text-2xl font-bold tracking-tight hidden sm:block">
                  Multi<span className="text-[#D4B483]">Kassa</span>
              </span>
              </Link>

              {/* Desktop Schedule */}
              <div className="hidden md:flex flex-col text-xs text-gray-500 leading-tight border-l border-gray-200 pl-4">
                  <span className="font-semibold text-gray-900">Мы на связи ежедневно</span>
                  <span>с 9:00 до 21:00 МСК</span>
              </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 text-xs font-medium bg-[#F5F5F7] px-3 py-1.5 rounded-lg text-gray-600">
               <Clock className="w-3 h-3" />
               09:00 - 21:00
            </div>
            
            <button className="text-[#D4B483] hover:opacity-80 transition-opacity">
              <User className="w-6 h-6" />
            </button>
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="text-[#D4B483] border border-[#D4B483] rounded-full p-2 hover:bg-[#D4B483] hover:text-white transition-colors"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
            />
            
            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed inset-y-0 right-0 w-full max-w-xs bg-white shadow-2xl z-[70] flex flex-col"
            >
              {/* Drawer Header */}
              <div className="p-6 flex items-center justify-between border-b border-gray-100">
                <span className="text-xl font-bold">Меню</span>
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>

              {/* Drawer Content */}
              <div className="flex-1 overflow-y-auto p-4 space-y-2">
                {menuItems.map((item) => (
                  <Link 
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-[#F5F5F7] transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#F5F5F7] flex items-center justify-center group-hover:bg-white group-hover:shadow-sm transition-all">
                      <item.icon className="w-5 h-5 text-[#D4B483]" />
                    </div>
                    <span className="font-medium flex-1">{item.name}</span>
                    <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-gray-500" />
                  </Link>
                ))}
              </div>

              {/* Drawer Footer */}
              <div className="p-6 bg-[#F5F5F7] mt-auto">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#D4B483]">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="text-sm">
                    <div className="font-bold text-gray-900">09:00 - 21:00</div>
                    <div className="text-gray-500">Ежедневно, МСК</div>
                  </div>
                </div>
                <button className="w-full bg-[#D4B483] text-white font-bold py-3 rounded-xl hover:bg-[#B59561] transition-colors">
                  Написать менеджеру
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
