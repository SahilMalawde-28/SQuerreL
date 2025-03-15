import { useState } from "react";
import { Grid3X3, Plus, Minus } from "lucide-react";
import Header from "../components/header";
import SchemaInspector from "../components/schema-inspector";
import PromptInput from "../components/prompt-input";
import DiagramArea from "../components/diagram-area";

export default function Home() {
  const [zoom, setZoom] = useState(50);
  const [showSchemaInspector, setShowSchemaInspector] = useState(false);
  const [showSqlEditor, setShowSqlEditor] = useState(false);
  const [currentPrompt, setCurrentPrompt] = useState("");
  const [sqlCode, setSqlCode] = useState(""); // Stores SQL code from backend
  const [schemaData, setSchemaData] = useState([])
  const [tableData, setTableData] = useState([]);

  const handlePromptSubmit = async (prompt) => {
    setCurrentPrompt(prompt);
    

    try {
      const response = await fetch("https://s-querre-l-backend.vercel.app/generate-sql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        "Accept": "application/json",
        },
        body: JSON.stringify({ prompt:prompt,schema:schemaData }),
      });

      if (!response.ok) throw new Error("Failed to fetch SQL");

      const data = await response.json();
      console.log(data.sql)
      setSqlCode(data.sql); // Update SQL code from backend response
      setShowSchemaInspector(true);
      setShowSqlEditor(true);
    } catch (error) {
      console.error("Error fetching SQL:", error);
    }
  };

  const toggleSchemaInspector = () => {
    setShowSchemaInspector((prev) => !prev);
  };

  return (
    <div className="flex flex-col h-screen bg-black">
      <Header onSchemaInspectorToggle={toggleSchemaInspector} />

      <div className="flex flex-1 relative overflow-hidden">
        {/* Left sidebar with zoom controls */}
        <div className="absolute left-0 top-0 bottom-0 flex flex-col items-center justify-center p-4 z-10">
          <button
            onClick={() => setZoom((prev) => Math.min(prev + 10, 100))}
            className="w-8 h-8 mb-2 flex items-center justify-center text-green-500 hover:bg-gray-800 rounded"
          >
            <Plus size={20} />
          </button>
          <button className="w-8 h-8 mb-2 flex items-center justify-center text-white hover:bg-gray-800 rounded">
            <Grid3X3 size={20} />
          </button>
          <button className="w-8 h-8 mb-2 flex items-center justify-center text-white hover:bg-gray-800 rounded">
            <span className="text-xs">{zoom}%</span>
          </button>
          <button
            onClick={() => setZoom((prev) => Math.max(prev - 10, 10))}
            className="w-8 h-8 flex items-center justify-center text-green-500 hover:bg-gray-800 rounded"
          >
            <Minus size={20} />
          </button>
        </div>

        {/* Main diagram area */}
        <DiagramArea zoom={zoom} tableData={tableData} />

        {/* Schema Inspector */}
        <SchemaInspector
          onClose={() => setShowSchemaInspector(false)}
          currentPrompt={currentPrompt}
          isOpen={showSchemaInspector}
          sqlCode={sqlCode} // Pass SQL code to SchemaInspector
          setSqlCode={setSqlCode} // Allow updates from child components
          schemaData = {schemaData}
          setSchemaData = {setSchemaData}
          setTableData = {setTableData}
        />
      </div>

      {/* Bottom prompt input */}
      <PromptInput onSubmit={handlePromptSubmit} />
    </div>
  );
}
