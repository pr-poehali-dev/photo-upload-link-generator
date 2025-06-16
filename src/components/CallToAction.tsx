import React from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-amber-500 to-amber-600">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-6">
            Готовы начать работу с ImageSpot?
          </h2>

          <p className="text-xl text-amber-100 mb-8">
            Присоединяйтесь к тысячам пользователей, которые уже оценили
            удобство нашего сервиса
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-amber-600 hover:bg-amber-50 font-semibold px-8 py-3 text-lg"
            >
              <Icon name="Upload" className="mr-2" size={20} />
              Загрузить первую фотографию
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-amber-600 px-8 py-3 text-lg"
            >
              <Icon name="Info" className="mr-2" size={20} />
              Узнать больше
            </Button>
          </div>

          <p className="text-amber-100 mt-6 text-sm">
            Бесплатная регистрация • Без скрытых платежей • Начните прямо сейчас
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
