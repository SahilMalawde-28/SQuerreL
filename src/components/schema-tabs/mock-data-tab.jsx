

import { useState } from "react"

export default function MockDataTab() {
  const [rowCount, setRowCount] = useState("5 rows")
  const [viewType, setViewType] = useState("Table View")

  return (
    <div className="p-4">
      <div className="flex justify-between mb-6">
        <div className="relative">
          <select
            value={rowCount}
            onChange={(e) => setRowCount(e.target.value)}
            className="appearance-none bg-gray-900 text-white text-sm rounded px-3 py-2 pr-8 border border-gray-700 focus:outline-none focus:border-green-500"
          >
            <option>5 rows</option>
            <option>10 rows</option>
            <option>20 rows</option>
            <option>50 rows</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
        </div>

        <div className="flex items-center">
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-sm mr-4">
            Regenerate
          </button>

          <div className="relative">
            <select
              value={viewType}
              onChange={(e) => setViewType(e.target.value)}
              className="appearance-none bg-gray-900 text-white text-sm rounded px-3 py-2 pr-8 border border-gray-700 focus:outline-none focus:border-green-500"
            >
              <option>Table View</option>
              <option>JSON View</option>
              <option>CSV View</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-white text-lg font-semibold mb-2">Customers</h3>
        <p className="text-gray-400 text-sm mb-2">Generated mock data for the schema customers</p>

        <div className="bg-[#1a1a1a] rounded-lg overflow-hidden mb-4">
          <table className="w-full">
            <thead>
              <tr className="text-left border-b border-gray-800">
                <th className="p-4 text-gray-400">Column</th>
                <th className="p-4 text-gray-400">Sample Data</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-white text-lg font-semibold mb-2">Products</h3>
        <p className="text-gray-400 text-sm mb-2">Generated mock data for the schema products</p>

        <div className="bg-[#1a1a1a] rounded-lg overflow-hidden mb-4">
          <table className="w-full">
            <thead>
              <tr className="text-left border-b border-gray-800">
                <th className="p-4 text-gray-400">Column</th>
                <th className="p-4 text-gray-400">Sample Data</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-white text-lg font-semibold mb-2">Orders</h3>
        <p className="text-gray-400 text-sm mb-2">Generated mock data for the schema orders</p>

        <div className="bg-[#1a1a1a] rounded-lg overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="text-left border-b border-gray-800">
                <th className="p-4 text-gray-400">Column</th>
                <th className="p-4 text-gray-400">Sample Data</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

