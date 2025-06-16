import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface PhotoPreviewProps {
  files: File[];
  onRemove: (index: number) => void;
}

const PhotoPreview: React.FC<PhotoPreviewProps> = ({ files, onRemove }) => {
  if (files.length === 0) return null;

  return (
    <div className="w-full max-w-4xl mx-auto mt-8">
      <h3 className="text-xl font-semibold mb-4 text-slate-800">
        Предварительный просмотр ({files.length} фото)
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {files.map((file, index) => (
          <Card key={index} className="relative overflow-hidden">
            <CardContent className="p-0">
              <div className="aspect-square bg-slate-100 flex items-center justify-center relative">
                <img
                  src={URL.createObjectURL(file)}
                  alt={`Preview ${index + 1}`}
                  className="max-w-full max-h-full object-cover"
                />
                <button
                  onClick={() => onRemove(index)}
                  className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
                >
                  <Icon name="X" size={16} />
                </button>
              </div>
              <div className="p-3">
                <p className="text-sm text-slate-600 truncate">{file.name}</p>
                <p className="text-xs text-slate-400">
                  {(file.size / 1024 / 1024).toFixed(1)} MB
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PhotoPreview;
