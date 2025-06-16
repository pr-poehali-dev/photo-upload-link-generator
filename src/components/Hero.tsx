import React from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-serif">
            Image<span className="text-amber-400">Spot</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
            Удобный онлайн-сервис для загрузки, хранения и обмена фотографиями
          </p>

          <p className="text-lg text-slate-400 mb-12 max-w-3xl mx-auto">
            Легко загружайте изображения в облако, редактируйте их, создавайте
            альбомы и делитесь с друзьями и коллегами
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-8 py-3 text-lg"
            >
              <Icon name="Upload" className="mr-2" size={20} />
              Выбрать изображение
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-3 text-lg"
            >
              <Icon name="Play" className="mr-2" size={20} />
              Посмотреть демо
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
