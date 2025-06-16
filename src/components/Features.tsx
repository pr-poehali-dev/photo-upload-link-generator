import React from "react";
import Icon from "@/components/ui/icon";
import { Card, CardContent } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: "CloudUpload",
      title: "Облачное хранение",
      description:
        "Безопасно храните тысячи фотографий в облаке с доступом из любой точки мира",
    },
    {
      icon: "Edit",
      title: "Простое редактирование",
      description:
        "Обрезайте, поворачивайте и улучшайте фотографии прямо в браузере",
    },
    {
      icon: "FolderOpen",
      title: "Умные альбомы",
      description:
        "Организуйте фотографии в альбомы и находите нужные снимки мгновенно",
    },
    {
      icon: "Share2",
      title: "Легкий обмен",
      description: "Делитесь фотографиями и альбомами с друзьями одним кликом",
    },
    {
      icon: "Shield",
      title: "Надежная защита",
      description: "Ваши фотографии защищены современными методами шифрования",
    },
    {
      icon: "Smartphone",
      title: "Доступ везде",
      description:
        "Работайте с фотографиями с любого устройства через веб-браузер",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Всё для ваших фотографий
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Мощные инструменты для работы с изображениями в одном удобном
            сервисе
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow duration-300 border-slate-200"
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon
                    name={feature.icon}
                    size={32}
                    className="text-amber-600"
                  />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
