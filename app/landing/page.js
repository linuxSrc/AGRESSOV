"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Building2, MapPin, Phone, Send, Smile } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Component() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects = [
    {
      id: "01",
      title: "Square Project",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: "02",
      title: "Square Project",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: "03",
      title: "Square Project",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: "04",
      title: "Square Project",
      image: "/placeholder.svg?height=600&width=800",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <header className="relative h-screen">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Modern building at night"
          className="object-cover"
          fill
          priority
        />
        <div className="absolute inset-0 bg-black/50">
          <nav className="container mx-auto flex items-center justify-between p-6">
            <Link href="/" className="text-2xl font-bold">
              AGRESSOV
            </Link>
            <button className="lg:hidden">
              <svg
                className=" h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-16 6h16"
                />
              </svg>
            </button>
            <div className="hidden lg:flex items-center space-x-8">
              <Link href="#about" className="hover:text-gold transition-colors">
                About
              </Link>
              <Link
                href="#projects"
                className="hover:text-gold transition-colors"
              >
                Projects
              </Link>
              <Link
                href="#contact"
                className="hover:text-gold transition-colors"
              >
                Contact
              </Link>
            </div>
          </nav>
          <div className="container mx-auto flex h-[calc(100vh-80px)] items-center justify-center text-center">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl md:text-7xl">
                WITH YOU.
                <br />
                ALWAYS
              </h1>
              <Button
                className="bg-[#C5A572] text-white hover:bg-[#B89661] transition-colors"
                size="lg"
              >
                Book now
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-24 bg-zinc-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#C5A572] mb-12">ABOUT US</h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-300">
                A Union of Agressov Group & Abbott Hotels. Both have been
                pioneers from almost 3 decades in Real Estate & Hospitality
                respectively. They have left a benchmark in their own fields &
                now have joined hands to make an alliance.
              </p>
              <p className="text-gray-300">
                United Emperors is a perfect consolidation of Real Estate &
                Hospitality industry.
              </p>
              <Button
                variant="outline"
                className="text-[#C5A572] border-[#C5A572] hover:bg-[#C5A572] hover:text-white"
              >
                Learn more
              </Button>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/placeholder.svg?height=800&width=1200"
                alt="Aerial city view"
                className="object-cover rounded-lg"
                fill
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-4">
              <Smile className="h-12 w-12 text-[#C5A572]" />
              <div>
                <h3 className="text-3xl font-bold">1000</h3>
                <p className="text-gray-400">Room alloted</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Building2 className="h-12 w-12 text-[#C5A572]" />
              <div>
                <h3 className="text-3xl font-bold">12</h3>
                <p className="text-gray-400">Buildings</p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#C5A572]">
                And your happiness.
              </h3>
              <p className="text-xl">Priceless...</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-zinc-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#C5A572] mb-12">PROJECTS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <div key={project.id} className="group relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={500}
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-[#C5A572] text-lg">{project.id}</div>
                    <h3 className="text-xl font-bold">{project.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#C5A572] mb-12">CONTACTS</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <form className="space-y-6">
              <Input
                className="bg-transparent border-zinc-700 focus:border-[#C5A572]"
                placeholder="Name"
                type="text"
              />
              <Input
                className="bg-transparent border-zinc-700 focus:border-[#C5A572]"
                placeholder="Email"
                type="email"
              />
              <Input
                className="bg-transparent border-zinc-700 focus:border-[#C5A572]"
                placeholder="Phone"
                type="tel"
              />
              <Textarea
                className="bg-transparent border-zinc-700 focus:border-[#C5A572]"
                placeholder="Message"
                rows={4}
              />
              <Button className="w-full bg-[#C5A572] hover:bg-[#B89661]">
                <Send className="mr-2 h-4 w-4" />
                Send
              </Button>
            </form>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Phone className="h-5 w-5 text-[#C5A572]" />
                <span>000 - XXXX4120 / 000 - XXXX4144</span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="h-5 w-5 text-[#C5A572]" />
                <span>
                  8th floor, The Allures, XYZ Beach road, Dreamland, Fantasy
                  Land, Unknown - 000 000
                </span>
              </div>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-[#C5A572]">
                  Facebook
                </Link>
                <Link href="#" className="text-gray-400 hover:text-[#C5A572]">
                  Twitter
                </Link>
                <Link href="#" className="text-gray-400 hover:text-[#C5A572]">
                  Instagram
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © All Rights Reserved 2024
            </div>
            <div className="flex space-x-6">
              <Link
                href="#"
                className="text-sm text-gray-400 hover:text-[#C5A572]"
              >
                Site Map
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-400 hover:text-[#C5A572]"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-400 hover:text-[#C5A572]"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
