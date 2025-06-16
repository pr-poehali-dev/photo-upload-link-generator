import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface PhotoResultsProps {
  photos: File[];
  onReset: () => void;
}

const PhotoResults: React.FC<PhotoResultsProps> = ({ photos, onReset }) => {
  if (photos.length === 0) return null;

  const generateShareLink = (filename: string) => {
    const randomId = Math.random().toString(36).substring(2, 15);
    return `https://imagespot.ru/photo/${randomId}`;
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="w-full max-w-4xl mx-auto mt-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-center text-2xl text-slate-800 flex items-center justify-center gap-2">
            <Icon name="CheckCircle" size={24} className="text-green-500" />
            Обработка завершена!
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {photos.map((photo, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-slate-50 rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <Icon name="Image" size={20} className="text-slate-500" />
                  <div>
                    <p className="font-medium text-slate-800">{photo.name}</p>
                    <p className="text-sm text-slate-500">
                      {generateShareLink(photo.name)}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Icon name="Download" size={16} />
                    Скачать
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      copyToClipboard(generateShareLink(photo.name))
                    }
                  >
                    <Icon name="Copy" size={16} />
                    Копировать ссылку
                  </Button>
                  <Button variant="outline" size="sm">
                    <Icon name="Share" size={16} />
                    Поделиться
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <Button
              onClick={onReset}
              className="bg-slate-700 hover:bg-slate-800"
            >
              <Icon name="RotateCcw" size={16} />
              Загрузить новые фотографии
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PhotoResults;
