import React, { useState } from "react";
import PhotoHeader from "@/components/PhotoHeader";
import PhotoUpload from "@/components/PhotoUpload";
import PhotoPreview from "@/components/PhotoPreview";
import PhotoResults from "@/components/PhotoResults";

const Index = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isProcessed, setIsProcessed] = useState(false);

  const handleFileUpload = (files: FileList) => {
    const fileArray = Array.from(files).filter((file) =>
      file.type.startsWith("image/"),
    );
    setSelectedFiles(fileArray);
    setIsProcessed(false);

    // Имитация процесса загрузки
    setIsUploading(true);
    setUploadProgress(0);

    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          setIsProcessed(true);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const handleRemoveFile = (index: number) => {
    setSelectedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleReset = () => {
    setSelectedFiles([]);
    setIsProcessed(false);
    setUploadProgress(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <PhotoHeader />

      <main className="container mx-auto px-4 py-12">
        {!isProcessed ? (
          <>
            <PhotoUpload
              onUpload={handleFileUpload}
              isUploading={isUploading}
              progress={uploadProgress}
            />

            <PhotoPreview files={selectedFiles} onRemove={handleRemoveFile} />
          </>
        ) : (
          <PhotoResults photos={selectedFiles} onReset={handleReset} />
        )}
      </main>
    </div>
  );
};

export default Index;
