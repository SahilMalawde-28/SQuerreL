"use client"

import { useState } from "react"
import { Copy, Save, X } from "lucide-react"

export default function SqlEditor({ sql, onClose }) {
  const [editorSql, setEditorSql] = useState(sql)

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-30">
      <div className="bg-[#1a1a1a] w-[85%] h-[85%] rounded-lg shadow-lg flex flex-col">
        <div className="flex items-center justify-between p-4 border-b border-gray-800">
          <h2 className="text-white font-medium">Edit SQL Code</h2>
          <div className="flex items-center gap-4">
            <button className="text-gray-400 hover:text-white flex items-center gap-2">
              <Copy size={16} />
              Copy
            </button>
            <button className="text-gray-400 hover:text-white flex items-center gap-2">
              <Save size={16} />
              Save
            </button>
            <button onClick={onClose} className="text-gray-400 hover:text-white flex items-center gap-2">
              <X size={16} />
              Close
            </button>
          </div>
        </div>

        <div className="flex-1 bg-black overflow-auto">
          <div className="flex h-full">
            <div className="pr-4 pl-4 py-4 text-right text-gray-500 select-none border-r border-gray-800 bg-black">
              {Array.from({ length: 50 }).map((_, i) => (
                <div key={i} className="h-6">
                  {i + 1}
                </div>
              ))}
            </div>
            <textarea
              value={editorSql}
              onChange={(e) => setEditorSql(e.target.value)}
              className="flex-1 bg-black text-white font-mono text-sm outline-none resize-none p-4"
              spellCheck="false"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

