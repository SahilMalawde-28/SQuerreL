"use client"

import { useState } from "react"
import { Sparkles } from "lucide-react"

export default function PromptInput({ onSubmit }) {
  const [prompt, setPrompt] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (prompt.trim()) {
      onSubmit(prompt)
      setPrompt("")
    }
  }

  return (
    <div className="border-t border-gray-800 p-4">
      <form onSubmit={handleSubmit} className="flex items-center">
        <div className="text-green-500 mr-2">
          <Sparkles size={20} />
        </div>
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Ask a question about your database..."
          className="flex-1 bg-transparent text-white outline-none"
        />
        <button type="submit" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-sm">
          Generate SQL
        </button>
      </form>
    </div>
  )
}