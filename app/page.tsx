"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Building2, MapPin, Phone, Send, Smile, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const projects = [
    {
      id: "01",
      title: "Luxury Apartments",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: "02",
      title: "Beachfront Villas",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: "03",
      title: "Urban Penthouses",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: "04",
      title: "Country Estates",
      image: "/placeholder.svg?height=600&width=800",
    },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <header className="relative h-screen">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Luxurious modern building at night"
          className="object-cover"
          fill
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30">
          <nav className="container mx-auto flex items-center justify-between p-6">
            <Link href="/" className="text-2xl font-bold text-[#C5A572]">
              AGRESSOV
            </Link>
            <button className="lg:hidden z-50" onClick={toggleMenu}>
              {isMenuOpen ? (
                <X className="h-6 w-6 text-[#C5A572]" />
              ) : (
                <svg
                  className="h-6 w-6 text-[#C5A572]"
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
              )}
            </button>
            <div
              className={`fixed inset-0 bg-black/90 z-40 flex items-center justify-center ${
                isMenuOpen ? "block" : "hidden"
              } lg:relative lg:bg-transparent lg:flex lg:items-center lg:space-x-8`}
            >
              <div className="flex flex-col items-center space-y-6 lg:flex-row lg:space-y-0 lg:space-x-8">
                <Link
                  href="#about"
                  className="text-2xl lg:text-base hover:text-[#C5A572] transition-colors"
                  onClick={toggleMenu}
                >
                  About
                </Link>
                <Link
                  href="#projects"
                  className="text-2xl lg:text-base hover:text-[#C5A572] transition-colors"
                  onClick={toggleMenu}
                >
                  Projects
                </Link>
                <Link
                  href="#contact"
                  className="text-2xl lg:text-base hover:text-[#C5A572] transition-colors"
                  onClick={toggleMenu}
                >
                  Contact
                </Link>
              </div>
            </div>
          </nav>
          <div className="container mx-auto flex h-[calc(100vh-80px)] items-center justify-center text-center px-4">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
                WITH YOU.
                <br />
                <span className="text-[#C5A572]">ALWAYS</span>
              </h1>
              <p className="max-w-2xl mx-auto text-xl text-gray-300">
                Experience luxury living like never before with our exclusive
                properties and unparalleled service.
              </p>
              <Button
                className="bg-[#C5A572] text-white hover:bg-[#B89661] transition-colors text-lg px-8 py-3"
                size="lg"
              >
                Book a Viewing
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-24 bg-zinc-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#C5A572] mb-12 text-center">
            ABOUT US
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-300 text-lg">
                A Union of Agressov Group & Abbott Hotels. Both have been
                pioneers for almost 3 decades in Real Estate & Hospitality
                respectively. They have left a benchmark in their own fields &
                now have joined hands to make an alliance.
              </p>
              <p className="text-gray-300 text-lg">
                United Emperors is a perfect consolidation of Real Estate &
                Hospitality industry, offering unparalleled luxury and service.
              </p>
              <Button
                variant="outline"
                className="text-[#C5A572] border-[#C5A572] hover:bg-[#C5A572] hover:text-white text-lg"
              >
                Learn more
              </Button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/placeholder.svg?height=800&width=1200"
                alt="Luxurious cityscape"
                className="object-cover"
                fill
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center space-y-4 text-center">
              <Smile className="h-16 w-16 text-[#C5A572]" />
              <div>
                <h3 className="text-4xl font-bold">1000+</h3>
                <p className="text-gray-400 text-lg">Happy Clients</p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <Building2 className="h-16 w-16 text-[#C5A572]" />
              <div>
                <h3 className="text-4xl font-bold">12</h3>
                <p className="text-gray-400 text-lg">Luxury Properties</p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <h3 className="text-3xl font-bold text-[#C5A572]">
                Your Happiness
              </h3>
              <p className="text-2xl">Priceless</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-zinc-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#C5A572] mb-12 text-center">
            OUR PROJECTS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-lg shadow-xl"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={500}
                  className="object-cover w-full h-[300px] transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-[#C5A572] text-lg">{project.id}</div>
                    <h3 className="text-2xl font-bold">{project.title}</h3>
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
          <h2 className="text-4xl font-bold text-[#C5A572] mb-12 text-center">
            CONTACT US
          </h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <form className="space-y-6">
              <Input
                className="bg-transparent border-zinc-700 focus:border-[#C5A572] text-lg"
                placeholder="Name"
                type="text"
              />
              <Input
                className="bg-transparent border-zinc-700 focus:border-[#C5A572] text-lg"
                placeholder="Email"
                type="email"
              />
              <Input
                className="bg-transparent border-zinc-700 focus:border-[#C5A572] text-lg"
                placeholder="Phone"
                type="tel"
              />
              <Textarea
                className="bg-transparent border-zinc-700 focus:border-[#C5A572] text-lg"
                placeholder="Message"
                rows={4}
              />
              <Button className="w-full bg-[#C5A572] hover:bg-[#B89661] text-lg">
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </form>
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <Phone className="h-8 w-8 text-[#C5A572]" />
                <span className="text-lg">000 - XXXX4120 / 000 - XXXX4144</span>
              </div>
              <div className="flex items-start space-x-4">
                <MapPin className="h-8 w-8 text-[#C5A572] flex-shrink-0" />
                <span className="text-lg">
                  8th floor, The Allures, XYZ Beach road, Dreamland, Fantasy
                  Land, Unknown - 000 000
                </span>
              </div>
              <div className="flex space-x-6">
                <Link
                  href="#"
                  className="text-gray-400 hover:text-[#C5A572] transition-colors"
                >
                  <svg
                    className="h-8 w-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-[#C5A572] transition-colors"
                >
                  <svg
                    className="h-8 w-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-[#C5A572] transition-colors"
                >
                  <svg
                    className="h-8 w-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} Agressov Group. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <Link
                href="#"
                className="text-sm text-gray-400 hover:text-[#C5A572] transition-colors"
              >
                Site Map
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-400 hover:text-[#C5A572] transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-400 hover:text-[#C5A572] transition-colors"
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
