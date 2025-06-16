import React from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              ImageSpot
            </h1>

            <p className="text-xl text-slate-300 mb-8 max-w-2xl">
              {" "}
              удобный онлайн-сервис для загрузки, хранения и обмена
              фотографиями. Он позволяет легко загружать изображения в облако,
              редактировать их, создавать альбомы и делиться с друзьями и
              коллегами
            </p>

            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 text-lg"
            >
              Начать бесплатно
            </Button>
          </div>

          <div className="flex-1 flex justify-center">
            <div className="grid grid-cols-3 gap-4 max-w-md">
              <img
                src="https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500"
                alt="Nature"
                className="col-span-2 w-full h-32 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              />
              <img
                src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=500"
                alt="Mountains"
                className="row-span-2 w-full h-full object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              />
              <img
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500"
                alt="Landscape"
                className="w-full h-20 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              />
              <img
                src="https://images.unsplash.com/photo-1505142468610-359e7d316be0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500"
                alt="Forest"
                className="w-full h-20 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
