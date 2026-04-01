import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';

const HomePage = () => {

  const companyName = "S Tech";

  const [currentSlide, setCurrentSlide] = useState(0);

  const bgImages = [
    "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    "https://images.unsplash.com/photo-1620712943543-bcc4688e7485",
    "https://images.unsplash.com/photo-1550751827-4bd374c3f58b"
  ];

  // 🔁 AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bgImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      name: "Rani Aghav",
      role: "Frontend Engineer",
      quote: "Amazing work culture and innovation.",
      rating: 5
    },
    {
      name: "Suhani Yadav",
      role: "Product Manager",
      quote: "Supportive and growth-oriented team.",
      rating: 5
    },
    {
      name: "Tejashree Torave",
      role: "Backend Developer",
      quote: "Great code quality and learning.",
      rating: 5
    }
  ];

  const domains = [
    { title: "Web Development", img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085" },
    { title: "Artificial Intelligence", img: "https://images.unsplash.com/photo-1677442136019-21780ecad995" },
    { title: "Machine Learning", img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485" },
    { title: "Data Science", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71" },
    { title: "Power BI", img: "https://images.unsplash.com/photo-1581090700227-1e8a6e9f8a2b" },
    { title: "Full Stack", img: "https://images.unsplash.com/photo-1537432376769-00a2c5f8d1c6" }
  ];

  return (
    <div className="min-h-screen bg-[#fdf6f0] text-gray-800">

      {/* 🔥 HERO SLIDER */}
      <section className="relative min-h-screen flex items-center justify-center text-center text-white">

        {/* Background Slider */}
        {bgImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        ))}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 px-6">

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Shape the Future at{" "}
            <span className="text-[#f5d0a9]">{companyName}</span>
          </h1>

          <p className="text-lg max-w-2xl mx-auto mb-10">
            Build intelligent AI-driven solutions with modern technologies.
          </p>

          <div className="flex justify-center gap-4">
            <Link to="/positions"
              className="px-6 py-3 bg-[#e6b98c] text-black rounded-lg hover:scale-105 transition">
              Explore Jobs
            </Link>

            <Link to="/apply"
              className="px-6 py-3 border border-white rounded-lg hover:bg-white hover:text-black transition">
              Apply Now
            </Link>
          </div>

        </div>
      </section>

      {/* 🤖 INFO SECTION */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">AI Powered Innovation</h2>
        <p className="max-w-3xl mx-auto text-gray-600">
          We create smart, scalable solutions using Artificial Intelligence,
          Machine Learning and Data Science.
        </p>
      </section>

      {/* 💡 DOMAINS */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-12">
            Our Expertise Domains
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {domains.map((d, i) => (
              <div key={i}
                className="bg-[#fffaf5] rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-2 transition">

                <img src={d.img} className="h-40 w-full object-cover" />

                <div className="p-5 text-center">
                  <h3 className="font-bold text-lg">{d.title}</h3>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ⭐ TESTIMONIALS */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-10">What Our Team Says</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          {testimonials.map((t, i) => (
            <div key={i}
              className="bg-[#fffaf5] p-6 rounded-xl shadow hover:shadow-lg transition">

              <div className="flex justify-center mb-3">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <p>"{t.quote}"</p>
              <h4 className="mt-3 font-bold">{t.name}</h4>
              <p className="text-sm text-gray-500">{t.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🚀 CTA */}
      <section className="py-20 text-center">
        <h3 className="text-2xl font-bold mb-4">
          Ready to join {companyName}?
        </h3>

        <Link to="/apply"
          className="px-8 py-3 bg-[#e6b98c] rounded-lg hover:scale-105 transition">
          Start Your Journey
        </Link>
      </section>

    </div>
  );
};

export default HomePage;