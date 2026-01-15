"use client";

import Link from "next/link";
import { Github, Instagram, Mail, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/marianopolis-research-team",
    icon: Github,
    label: "Follow us on GitHub",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/marianopolisresearch/",
    icon: Instagram,
    label: "Follow us on Instagram",
  },
  {
    name: "Discord",
    href: "https://discord.gg/qtjTXya5mf",
    icon: MessageCircle,
    label: "Join our Discord server",
  },
  {
    name: "Email",
    href: "mailto:marianopolisresearch@maristudentunion.com",
    icon: Mail,
    label: "Send us an email",
  },
];

const footerLinks = {
  explore: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about/" },
    { label: "Research", href: "/research/" },
    { label: "Archives", href: "/archives/" },
  ],
  resources: [
    {
      label: "Apply to Project",
      href: "https://docs.google.com/forms/d/e/1FAIpQLSeCi9QrOVWp9tC5Gy3y2mw621uwWzfuUr3HEAW2lFXtQSMzNQ/viewform?usp=dialog",
    },
    { label: "Past Papers", href: "/archives/" },
    {
      label: "GitHub Repos",
      href: "https://github.com/marianopolis-research-team",
    },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-accent text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                <img src="/images/logos/light.png" alt="MRT Logo" />
              </div>
              <h3 className="text-xl font-bold">MRT</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              MRT is a club that hopes to foster the development of an
              interconnected community at Marianopolis focused on scientific
              innovation and research. Whether it be through interesting
              seminars and roundtable discussions or through research projects,
              we wish to spark interest in young talents across the campus to
              adorn in <span className="text-xs opacity-50">(hopefully!)</span> ground-breaking research that
              will tackle issues close to heart!
            </p>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold mb-4 text-secondary">Explore</h4>
              <ul className="space-y-2">
                {footerLinks.explore.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-300 text-sm hover:text-secondary transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-secondary">Resources</h4>
              <ul className="space-y-2">
                {footerLinks.resources.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-300 text-sm hover:text-secondary transition-colors duration-200"
                      target={
                        link.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        link.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4 text-secondary">
              Connect With Us
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center hover:bg-secondary hover:text-primary transition-colors duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
            <p className="text-gray-300 text-sm mt-4">
              Questions? Reach out at{" "}
              <a
                href="mailto:marianopolisresearch@maristudentunion.com"
                className="text-secondary hover:underline"
              >
                marianopolisresearch@maristudentunion.com
              </a>
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary/30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-300 text-sm">
              © {currentYear} Marianopolis Research Team. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link
                href="/archives/"
                className="text-gray-300 hover:text-secondary transition-colors"
              >
                Archives
              </Link>
              <span className="text-gray-500">•</span>
              <a
                href="https://github.com/marianopolis-research-team/mrt-website"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-secondary transition-colors"
              >
                View Source
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
