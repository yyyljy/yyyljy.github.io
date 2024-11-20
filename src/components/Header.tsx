"use client";

import React, { useState, useEffect } from "react";

const Header = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "skills", "projects", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed w-full z-50 bg-slate-900/95 backdrop-blur-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-400 hover:text-blue-300 transition-colors">
            Jeff
          </div>
          <div className="hidden md:flex space-x-8">
            {["About", "Skills", "Career", "Contact"].map((item) => (
              <a
                key={item}
                href={`/#${item.toLowerCase()}`}
                className={`text-slate-300 hover:text-blue-400 transition-colors ${
                  activeSection === item.toLowerCase() ? "text-blue-400" : ""
                }`}
              >
                {item}
              </a>
            ))}
            <a
              href="/projects"
              className="text-slate-300 hover:text-blue-400 transition-colors"
            >
              Projects
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
