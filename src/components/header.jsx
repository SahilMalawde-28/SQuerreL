"use client"

import { Settings } from "lucide-react"
import { cn } from "../lib/utils"

export default function Header({ onSchemaInspectorToggle }) {
  return (
    <header className="flex items-center justify-between px-4 py-2 border-b border-gray-800">
      <div className="flex items-center">
        <div className="text-green-500 mr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M8 9h8"></path>
            <path d="M8 13h6"></path>
            <path d="M18 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"></path>
          </svg>
        </div>
        <h1 className={cn("text-green-500 font-bold text-xl")}>SQurreL</h1>
        <div className="flex items-center ml-4">
          <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
          <span className="text-white text-sm">
            Connected: <span className="text-green-500">ecommerce</span>
          </span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button className="p-2 text-gray-400 hover:text-white">
          <Settings size={20} />
        </button>
        <button
          onClick={onSchemaInspectorToggle}
          className="px-3 py-1.5 bg-green-600 hover:bg-green-700 text-white rounded text-sm transition-colors"
        >
          Schema Inspector
        </button>
      </div>
    </header>
  )
}

