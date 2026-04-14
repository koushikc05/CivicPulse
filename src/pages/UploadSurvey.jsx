import React from "react";
import Card from "../components/ui/Card";
import { Upload, FileSearch, ScanLine, FileText } from "lucide-react";

export default function UploadSurvey() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-gray-400 mb-1">
          <Upload className="w-3.5 h-3.5" />
          OCR Upload
        </div>
        <h1 className="text-2xl font-bold font-display text-gray-800">
          Upload Survey Document
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Upload handwritten or printed survey forms for automatic data
          extraction
        </p>
      </div>

      <Card className="text-center">
        <div className="py-10">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center mx-auto mb-4 shadow-lg animate-float">
            <ScanLine className="w-7 h-7 text-white" />
          </div>
          <h2 className="text-lg font-bold font-display text-gray-800 mb-2">
            OCR Survey Upload — Day 4
          </h2>
          <p className="text-sm text-gray-500 max-w-md mx-auto mb-6">
            Tesseract.js-powered OCR will scan your uploaded surveys, extract
            text, and auto-populate need reports.
          </p>

          {/* Process preview */}
          <div className="flex items-center justify-center gap-2 text-xs text-gray-400 max-w-sm mx-auto">
            <div className="flex flex-col items-center gap-1 flex-1">
              <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center">
                <Upload className="w-4 h-4 text-purple-500" />
              </div>
              <span>Upload</span>
            </div>
            <div className="w-8 h-px bg-gray-200" />
            <div className="flex flex-col items-center gap-1 flex-1">
              <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center">
                <FileSearch className="w-4 h-4 text-purple-500" />
              </div>
              <span>OCR Scan</span>
            </div>
            <div className="w-8 h-px bg-gray-200" />
            <div className="flex flex-col items-center gap-1 flex-1">
              <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center">
                <FileText className="w-4 h-4 text-purple-500" />
              </div>
              <span>Auto-fill</span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
