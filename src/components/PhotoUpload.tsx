import React, { useState, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Card, CardContent } from "@/components/ui/card";

interface UploadedFile {
  file: File;
  preview: string;
  id: string;
  link: string;
}

const PhotoUpload = () => {
  const [uploadedFile, setUploadedFile] = useState<UploadedFile | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const generateUniqueId = () => {
    return "img_" + Math.random().toString(36).substr(2, 9);
  };

  const handleFiles = useCallback((files: FileList) => {
    if (files.length > 0) {
      const file = files[0];

      if (!file.type.match("image.*")) {
        alert("Пожалуйста, выберите файл изображения!");
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        const uniqueId = generateUniqueId();
        const newFile: UploadedFile = {
          file,
          preview: e.target?.result as string,
          id: uniqueId,
          link: `https://imagespot.com/view/${uniqueId}`,
        };

        setUploadedFile(newFile);
      };

      reader.readAsDataURL(file);
    }
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragOver(false);

      const files = e.dataTransfer.files;
      handleFiles(files);
    },
    [handleFiles],
  );

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(false);
  }, []);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      handleFiles(e.target.files);
    }
  };

  const copyToClipboard = async () => {
    if (uploadedFile) {
      try {
        await navigator.clipboard.writeText(uploadedFile.link);
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 2000);
      } catch (err) {
        console.error("Failed to copy: ", err);
      }
    }
  };

  const resetUpload = () => {
    setUploadedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  if (uploadedFile) {
    return (
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">
                Ваше изображение успешно загружено!
              </h2>

              <img
                src={uploadedFile.preview}
                alt="Uploaded"
                className="max-w-full max-h-96 mx-auto rounded-lg shadow-lg mb-8"
              />

              <p className="text-lg text-slate-600 mb-6">
                Ваша уникальная ссылка для доступа к изображению:
              </p>

              <div className="flex bg-slate-100 rounded-lg p-3 mb-8 max-w-2xl mx-auto">
                <input
                  type="text"
                  value={uploadedFile.link}
                  readOnly
                  className="flex-1 bg-transparent border-none outline-none px-3 text-slate-700"
                />
                <Button
                  onClick={copyToClipboard}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  <Icon
                    name={copySuccess ? "Check" : "Copy"}
                    className="mr-2"
                    size={16}
                  />
                  {copySuccess ? "Скопировано!" : "Копировать"}
                </Button>
              </div>

              <Button
                onClick={resetUpload}
                size="lg"
                className="bg-blue-600 hover:bg-blue-700"
              >
                <Icon name="Upload" className="mr-2" size={20} />
                Загрузить новое изображение
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-12">
            <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
              Загрузите ваше изображение
            </h2>

            <div
              className={`border-3 border-dashed rounded-xl p-12 text-center transition-all duration-300 ${
                isDragOver
                  ? "border-blue-500 bg-blue-50"
                  : "border-slate-300 bg-slate-50"
              }`}
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
            >
              <div className="text-6xl text-blue-500 mb-6">
                <Icon name="CloudUpload" size={80} className="mx-auto" />
              </div>

              <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                Выберите изображение
              </h3>

              <p className="text-slate-600 mb-8">
                Перетащите сюда файлы или нажмите кнопку ниже
              </p>

              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileSelect}
                className="hidden"
                id="file-upload"
              />

              <label htmlFor="file-upload">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 cursor-pointer"
                  asChild
                >
                  <span>
                    <Icon name="Upload" className="mr-2" size={20} />
                    Выбрать файл
                  </span>
                </Button>
              </label>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default PhotoUpload;
