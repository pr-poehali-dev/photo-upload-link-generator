import React from "react";
import Hero from "@/components/Hero";
import PhotoUpload from "@/components/PhotoUpload";
import Features from "@/components/Features";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Hero />
      <PhotoUpload />
      <Features />
    </div>
  );
};

export default Index;
