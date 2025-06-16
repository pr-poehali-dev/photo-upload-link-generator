import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

interface PhotoPreviewProps {
  files: File[];
  progress: number;
  isUploading: boolean;
}

const PhotoPreview: React.FC<PhotoPreviewProps> = ({
  files,
  progress,
  isUploading,
}) => {
  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-center text-2xl text-slate-800 flex items-center justify-center gap-2">
          <Icon name="Upload" size={24} className="text-amber-500" />
          Загрузка фотографий
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {files.map((file, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg"
            >
              <Icon name="Image" size={20} className="text-slate-500" />
              <div className="flex-1">
                <p className="font-medium text-slate-800">{file.name}</p>
                <p className="text-sm text-slate-500">
                  {(file.size / 1024 / 1024).toFixed(2)} МБ
                </p>
              </div>
              {progress === 100 ? (
                <Icon name="CheckCircle" size={20} className="text-green-500" />
              ) : (
                <Icon name="Clock" size={20} className="text-amber-500" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-slate-600">
              {isUploading ? "Загрузка и обработка..." : "Завершено"}
            </span>
            <span className="text-sm text-slate-600">{progress}%</span>
          </div>
          <Progress value={progress} className="h-3" />
        </div>

        {progress === 100 && (
          <div className="mt-4 text-center text-green-600 font-medium">
            Все файлы успешно загружены и обработаны!
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default PhotoPreview;
