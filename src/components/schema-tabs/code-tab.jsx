import { Copy, Play, Save } from "lucide-react";
import { useState, useEffect } from "react";

export default function CodeTab({ code, setCode, setSchemaData ,setTableData}) {
  const [editedCode, setEditedCode] = useState(code);

  useEffect(() => {
    setEditedCode(code); // Ensure editedCode updates when switching tabs
  }, [code]);

  // Copy to clipboard
  const handleCopy = () => {
    navigator.clipboard.writeText(editedCode);
    alert("Copied to clipboard!"); // Replace with toast later
  };

  // Save function - updates the parent state to retain changes
  const handleSave = () => {
    setCode(editedCode);
    alert("SQL saved! (Later, store in backend)");
  };

  // Function to determine which API to call
  const handleRun = async () => {
  const endpoint = editedCode.trim().toLowerCase().startsWith("select")
    ? "get-table"
    : "execute-sql";

  try {
    const response = await fetch(`https://eventsphere-backend.vercel.app/${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({ prompt: editedCode }),
    });

    const data = await response.json();

    // ✅ 1. If table data returned (SELECT)
    if (data.data && data.columns && data.tableName) {
      setTableData([
        {
          name: data.tableName,
          columns: data.columns,
          rows: data.data
        }
      ]);
    }

    // ✅ 2. If schema is returned (CREATE TABLE etc.)
    else if (data.schema && data.tableName) {
      setSchemaData(prev => [
        ...prev,
        {
          tableName: data.tableName,
          columns: data.schema
        }
      ]);
    }

    // ✅ 3. Show status message
    alert(data.message || "Query executed.");

    console.log("Query Result:", data);
  } catch (error) {
    alert("Error: " + error.message);
    console.error("Execution error:", error);
  }
};

  return (
    <div className="p-4 w-full h-screen flex flex-col">
      {/* Buttons Section */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-2">
          <button
            className="flex items-center gap-2 px-3 py-1.5 bg-gray-800 hover:bg-gray-700 text-white rounded text-sm"
            onClick={handleCopy}
          >
            <Copy size={16} />
            Copy
          </button>

          <button
            className="flex items-center gap-2 px-3 py-1.5 bg-gray-800 hover:bg-green-600 text-white rounded text-sm"
            onClick={handleRun}
          >
            <Play size={16} />
            Run
          </button>

          <button
            className="flex items-center gap-2 px-3 py-1.5 bg-gray-800 hover:bg-gray-700 text-white rounded text-sm"
            onClick={handleSave}
          >
            <Save size={16} />
            Save
          </button>
        </div>
      </div>

      {/* Full-Screen Code Editor */}
      <div className="flex-1 bg-black rounded-lg p-4 border border-gray-700 overflow-auto">
        <textarea
          className="w-full h-full bg-transparent text-white font-mono text-sm outline-none resize-none"
          value={editedCode}
          onChange={(e) => setEditedCode(e.target.value)}
        />
      </div>
    </div>
  );
}
