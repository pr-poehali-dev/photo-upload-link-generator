import React from "react";
import Icon from "@/components/ui/icon";
import { Card, CardContent } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: "CloudUpload",
      title: "Быстрая загрузка",
      description:
        "Загружайте изображения в высоком качестве без ограничений по размеру файла",
    },
    {
      icon: "Lock",
      title: "Безопасное хранение",
      description:
        "Все ваши файлы защищены и доступны только по уникальным ссылкам",
    },
    {
      icon: "Share2",
      title: "Легкий обмен",
      description: "Делитесь изображениями с друзьями и коллегами в один клик",
    },
    {
      icon: "FolderOpen",
      title: "Упорядочивание в альбомы",
      description:
        "Создавайте альбомы и организуйте свои фотографии по категориям",
    },
    {
      icon: "Edit",
      title: "Редактирование",
      description:
        "Базовые инструменты для редактирования изображений прямо на платформе",
    },
    {
      icon: "Smartphone",
      title: "Мобильная версия",
      description: "Полный доступ к вашим изображениям с любого устройства",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Наши возможности
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
              className="hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-slate-200"
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon
                    name={feature.icon}
                    size={32}
                    className="text-blue-600"
                  />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
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
