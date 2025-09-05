import React from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-gradient-to-r from-orange-500 to-yellow-400 shadow-md">
        <nav className="container mx-auto flex items-center justify-center py-4">
          <h1 className="text-3xl font-bold tracking-wider">Designer’s Prints & Art Shop</h1>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative w-full h-[70vh] overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
        </video>
        <div className="relative z-10 flex flex-col items-center justify-center h-full bg-black/40 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">Playful Nerd Vibes</h2>
          <a
            href="#products"
            className="bg-white text-orange-600 px-6 py-3 rounded-2xl shadow font-semibold"
          >
            Explore Prints
          </a>
        </div>
      </section>

      {/* Image/Text Split */}
      <section className="container mx-auto py-16 px-4 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <img
            src="https://via.placeholder.com/500"
            alt="Art example"
            className="rounded-2xl shadow-lg"
          />
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-yellow-300 rounded-lg shadow-lg -z-10" />
        </div>
        <div>
          <h3 className="text-3xl font-bold mb-4">Retro Meets Modern</h3>
          <p>
            Unique prints, hand-crafted visuals, and nerdy vibes combined in a fresh monochrome look.
          </p>
        </div>
      </section>

      {/* Product Highlights */}
      <section id="products" className="container mx-auto py-16 px-4">
        <h3 className="text-3xl font-bold text-center mb-10">Product Highlights</h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-white/10 p-6 rounded-2xl shadow text-center">
              <img
                src={`https://via.placeholder.com/300x200?text=Item+${i}`}
                alt={`Item ${i}`}
                className="mb-4 rounded-lg"
              />
              <h4 className="font-semibold mb-2">Cool Print {i}</h4>
              <div className="flex justify-center gap-4">
                <a
                  href="https://amazon.com"
                  className="px-4 py-2 rounded-lg bg-orange-600 text-white"
                  target="_blank"
                >
                  Amazon
                </a>
                <a
                  href="https://redbubble.com"
                  className="px-4 py-2 rounded-lg bg-yellow-500 text-black"
                  target="_blank"
                >
                  Redbubble
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="bg-white/10 py-16 px-4">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-10">Our Process</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {["Imagine", "Create", "Deliver"].map((step, i) => (
              <motion.div
                key={i}
                className="p-6 bg-white/10 rounded-2xl shadow"
                whileHover={{ scale: 1.05 }}
              >
                <h4 className="font-semibold text-xl mb-2">{step}</h4>
                <p>Step {i + 1} of our playful nerd workflow.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto py-16 px-4">
        <h3 className="text-3xl font-bold text-center mb-10">Testimonials</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <blockquote className="bg-white/10 p-6 rounded-2xl shadow">
            <p>“The prints are pure joy — nerdy, fresh, and unique.”</p>
            <footer className="mt-2">– Happy Customer</footer>
          </blockquote>
          <blockquote className="bg-white/10 p-6 rounded-2xl shadow">
            <p>“Exactly what my studio needed — playful but modern.”</p>
            <footer className="mt-2">– Designer</footer>
          </blockquote>
        </div>
      </section>

      {/* Blog Teasers */}
      <section className="bg-white/10 py-16 px-4">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-10">From the Blog</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white/10 p-6 rounded-2xl shadow">
                <h4 className="font-semibold text-xl mb-2">Blog Post {i}</h4>
                <p>Some teaser text for post {i}...</p>
                <a href="#" className="text-yellow-300 font-semibold">
                  Read more →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Soft CTA */}
      <section className="container mx-auto py-16 px-4 text-center">
        <h3 className="text-3xl font-bold mb-6">Request a Print</h3>
        <form className="max-w-md mx-auto space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg text-black"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-lg text-black"
          />
          <textarea
            placeholder="What are you looking for?"
            className="w-full p-3 rounded-lg text-black"
            rows="4"
          />
          <button className="bg-orange-600 px-6 py-3 rounded-2xl text-white font-semibold">
            Send Request
          </button>
        </form>
      </section>

      <footer className="bg-gradient-to-r from-orange-500 to-yellow-400 py-6 text-center">
        <p className="text-sm">&copy; 2025 Designer’s Prints & Art Shop</p>
      </footer>
    </div>
  );
}
