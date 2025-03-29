import React, { useState, useEffect } from 'react';
import { Card, CardContent } from './ui/Card';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaWhatsapp, FaInstagram, FaCopy, FaShareAlt } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const MotivationalQuotesPage = () => {
  const [motivationalQuotes, setMotivationalQuotes] = useState([]);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    async function loadMotivationalQuotes() {
      try {
        const response = await fetch('/quotes.json');
        const data = await response.json();
        const filteredQuotes = data.filter((q) => q.tags.includes('Motivational'));
        setMotivationalQuotes(filteredQuotes);
        setTimeout(() => setFadeIn(true), 100);
      } catch (error) {
        console.error('Error loading motivational quotes:', error);
      }
    }

    loadMotivationalQuotes();
  }, []);

  const handleCopy = (quote) => {
    navigator.clipboard.writeText(quote);
    toast.success('Quote copied to clipboard!', {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className="flex flex-col bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-gray-900 dark:to-indigo-950 text-gray-900 dark:text-white relative overflow-hidden">
      <main className="relative z-10 flex-grow">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 transition-all duration-500">
            Motivational Quotes
          </h1>
          <div className="flex flex-col items-center space-y-16">
            {motivationalQuotes.map((quote) => (
              <div
                key={quote._id}
                className={`transition-all duration-700 transform ${
                  fadeIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                } w-full max-w-3xl`}
              >
                <Card className="backdrop-blur-lg bg-white/70 dark:bg-gray-800/40 border border-white/20 dark:border-gray-700/30 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-102 overflow-hidden rounded-2xl">
                  <CardContent className="p-0">
                    <div className="relative p-8 md:p-10">
                      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-100/40 to-indigo-100/40 dark:from-blue-900/20 dark:to-indigo-900/20 z-0"></div>
                      <div className="relative z-10">
                        <blockquote className="font-serif italic text-xl md:text-2xl text-center leading-relaxed text-gray-800 dark:text-gray-100 transition-colors duration-300 mb-6">
                          "{quote.content}"
                          <div className="mt-2 w-16 h-1 mx-auto bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full"></div>
                        </blockquote>
                        <p className="mt-6 text-right font-medium text-gray-700 dark:text-gray-300 transition-colors duration-300">
                          — {quote.author}
                        </p>
                      </div>
                    </div>
                    <div className="py-4 border-t border-gray-200/50 dark:border-gray-700/50 flex justify-between items-center bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                      <div className="flex gap-4">
                        <button
                          onClick={() => handleCopy(quote.content)}
                          className="flex items-center gap-2 px-4 py-2 rounded-full text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-300"
                          aria-label="Copy quote"
                        >
                          <FaCopy className="h-4 w-4" />
                          <span className="text-sm font-medium">Copy</span>
                        </button>
                      </div>
                      <div className="flex gap-4">
                        <button
                          onClick={() => handleWhatsAppShare(quote.content, quote.author)}
                          className="flex items-center gap-2 px-4 py-2 rounded-full text-gray-600 hover:text-green-600 dark:text-gray-400 dark:hover:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/30 transition-all duration-300"
                          aria-label="Share on WhatsApp"
                        >
                          <FaWhatsapp className="h-4 w-4" />
                          <span className="text-sm font-medium">WhatsApp</span>
                        </button>
                        <button
                          onClick={() => handleInstagramShare(quote.content, quote.author)}
                          className="flex items-center gap-2 px-4 py-2 rounded-full text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-all duration-300"
                          aria-label="Share on Instagram"
                        >
                          <FaInstagram className="h-4 w-4" />
                          <span className="text-sm font-medium">Instagram</span>
                        </button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </main>
      <ToastContainer />
    </div>
  );
};

export default MotivationalQuotesPage;