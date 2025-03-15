"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { cn } from "../lib/utils";
import CodeTab from "./schema-tabs/code-tab";
import SchemaTab from "./schema-tabs/schema-tab";
import DocumentationTab from "./schema-tabs/documentation-tab";
import MockDataTab from "./schema-tabs/mock-data-tab";
import ExportTab from "./schema-tabs/export-tab";
import SqlEditor from "./sql-editor";

export default function SchemaInspector({ onClose, currentPrompt, isOpen ,sqlCode,setSqlCode,schemaData,setSchemaData,setTableData}) {
  const [activeTab, setActiveTab] = useState("code");
  
  const [generatedCode, setGeneratedCode] = useState("");

  // Automatically update generatedCode when currentPrompt changes
  useEffect(() => {
    if (sqlCode) {
      setGeneratedCode(sqlCode);
    }
  }, [sqlCode]);

  return (
    <>
      <div
        className={cn(
          "fixed right-0 top-0 bottom-0 w-[45%] bg-black border-l border-gray-800 flex flex-col z-20 transition-transform duration-300",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-800">
          <div>
            <h2 className="text-green-500 font-semibold text-xl">Schema Inspector</h2>
            <p className="text-gray-400 text-sm">View AI-generated schema of your prompts</p>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X size={18} />
          </button>
        </div>

        {generatedCode ? (
          <>
            <div className="flex border-b border-gray-800">
              <button
                onClick={() => setActiveTab("code")}
                className={cn(
                  "px-4 py-3 text-sm border-b-2 transition-colors",
                  activeTab === "code" ? "text-white border-green-500" : "text-gray-400 border-transparent"
                )}
              >
                Code
              </button>
              <button
                onClick={() => setActiveTab("schema")}
                className={cn(
                  "px-4 py-3 text-sm border-b-2 transition-colors",
                  activeTab === "schema" ? "text-white border-green-500" : "text-gray-400 border-transparent"
                )}
              >
                Schema
              </button>
              <button
                onClick={() => setActiveTab("documentation")}
                className={cn(
                  "px-4 py-3 text-sm border-b-2 transition-colors",
                  activeTab === "documentation" ? "text-white border-green-500" : "text-gray-400 border-transparent"
                )}
              >
                Documentation
              </button>
              <button
                onClick={() => setActiveTab("mockData")}
                className={cn(
                  "px-4 py-3 text-sm border-b-2 transition-colors",
                  activeTab === "mockData" ? "text-white border-green-500" : "text-gray-400 border-transparent"
                )}
              >
                Mock Data
              </button>
              <button
                onClick={() => setActiveTab("export")}
                className={cn(
                  "px-4 py-3 text-sm border-b-2 transition-colors",
                  activeTab === "export" ? "text-white border-green-500" : "text-gray-400 border-transparent"
                )}
              >
                Export
              </button>
            </div>

            <div className="flex-1 overflow-auto">
              {activeTab === "code" && <CodeTab code={generatedCode} setCode={setGeneratedCode} setSchemaData = {setSchemaData} setTableData ={setTableData} onEdit={() => setShowSqlEditor(true)} />}
              {activeTab === "schema" && <SchemaTab schemaData={schemaData}/>}
              {activeTab === "documentation" && <DocumentationTab />}
              {activeTab === "mockData" && <MockDataTab />}
              {activeTab === "export" && <ExportTab />}
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-gray-500">
            No SQL generated yet.
          </div>
        )}
      </div>

      
    </>
  );
}
