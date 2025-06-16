import React, { useState } from "react";
import PhotoUpload from "@/components/PhotoUpload";
import PhotoPreview from "@/components/PhotoPreview";
import PhotoResults from "@/components/PhotoResults";

type WorkflowStep = "upload" | "preview" | "results";

const Index = () => {
  const [currentStep, setCurrentStep] = useState<WorkflowStep>("upload");
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileUpload = async (files: FileList) => {
    const fileArray = Array.from(files);
    setSelectedFiles(fileArray);
    setCurrentStep("preview");
    setIsUploading(true);
    setUploadProgress(0);

    // Симуляция загрузки на сервер
    const uploadSimulation = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(uploadSimulation);
          setIsUploading(false);
          setCurrentStep("results");
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const handleReset = () => {
    setCurrentStep("upload");
    setSelectedFiles([]);
    setUploadProgress(0);
    setIsUploading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-8">
      <div className="container mx-auto px-4">
        {currentStep === "upload" && (
          <PhotoUpload
            onUpload={handleFileUpload}
            isUploading={isUploading}
            progress={uploadProgress}
          />
        )}

        {currentStep === "preview" && (
          <PhotoPreview
            files={selectedFiles}
            progress={uploadProgress}
            isUploading={isUploading}
          />
        )}

        {currentStep === "results" && (
          <PhotoResults photos={selectedFiles} onReset={handleReset} />
        )}
      </div>
    </div>
  );
};

export default Index;
