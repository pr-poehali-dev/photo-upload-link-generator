import React, { useState, useCallback } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

interface PhotoUploadProps {
  onUpload: (files: FileList) => void;
  isUploading: boolean;
  progress: number;
}

const PhotoUpload: React.FC<PhotoUploadProps> = ({
  onUpload,
  isUploading,
  progress,
}) => {
  const [isDragOver, setIsDragOver] = useState(false);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragOver(false);
      const files = e.dataTransfer.files;
      if (files.length > 0) {
        onUpload(files);
      }
    },
    [onUpload],
  );

  const handleFileSelect = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files;
      if (files && files.length > 0) {
        onUpload(files);
      }
    },
    [onUpload],
  );

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-center text-2xl text-slate-800">
          Загрузите ваши фотографии
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div
          className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
            isDragOver
              ? "border-amber-400 bg-amber-50"
              : "border-slate-300 hover:border-amber-400"
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <Icon
            name="Upload"
            size={48}
            className="mx-auto mb-4 text-slate-400"
          />
          <p className="text-lg mb-4 text-slate-600">
            Перетащите фотографии сюда или нажмите для выбора
          </p>
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleFileSelect}
            className="hidden"
            id="photo-upload"
          />
          <Button asChild className="bg-amber-600 hover:bg-amber-700">
            <label htmlFor="photo-upload" className="cursor-pointer">
              <Icon name="Camera" size={20} />
              Выбрать фотографии
            </label>
          </Button>
        </div>

        {isUploading && (
          <div className="mt-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-slate-600">Обработка...</span>
              <span className="text-sm text-slate-600">{progress}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default PhotoUpload;
