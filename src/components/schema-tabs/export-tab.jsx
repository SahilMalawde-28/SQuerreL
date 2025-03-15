
import { useState } from "react"

export default function ExportTab() {
  const [framework, setFramework] = useState("Django")

  return (
    <div className="p-4">
      <div className="flex items-center mb-6">
        <div className="flex items-center mr-4">
          <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center mr-2">
            <span className="text-white font-mono">dj</span>
          </div>
          <div className="relative">
            <select
              value={framework}
              onChange={(e) => setFramework(e.target.value)}
              className="appearance-none bg-gray-900 text-white text-sm rounded px-3 py-2 pr-8 border border-gray-700 focus:outline-none focus:border-green-500"
            >
              <option>Django</option>
              <option>Prisma</option>
              <option>Sequelize</option>
              <option>TypeORM</option>
              <option>SQLAlchemy</option>
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

        <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-sm">Regenerate</button>
      </div>

      <div className="font-mono text-sm">
        <div className="flex">
          <div className="text-gray-500 text-right pr-4 select-none" style={{ minWidth: "30px" }}>
            {Array.from({ length: 40 }).map((_, i) => (
              <div key={i} className="h-6">
                {i + 1}
              </div>
            ))}
          </div>

          <div className="flex-1 overflow-x-auto">
            <pre className="text-gray-300">
              <code>
                <div className="text-blue-400">from</div> <span className="text-white">django.db</span>{" "}
                <span className="text-blue-400">import</span> <span className="text-white">models</span>
                <div className="mt-2 text-green-500"># 1. Customers Table</div>
                <div className="text-blue-400">class</div> <span className="text-white">Customer</span>
                <span className="text-white">(models.Model):</span>
                <div className="ml-4 text-yellow-500">"""</div>
                <div className="ml-4 text-yellow-500">Unique identifier for each customer.</div>
                <div className="ml-4 text-yellow-500">"""</div>
                <div className="ml-4 text-white">customer_id = models.AutoField(primary_key=</div>
                <span className="text-blue-400">True</span>
                <span className="text-white">)</span>
                <div className="ml-4 text-yellow-500">"""</div>
                <div className="ml-4 text-yellow-500">Unique identifier for each customer</div>
                <div className="ml-4 text-yellow-500">"""</div>
                <div className="ml-4 text-white">name = models.CharField(max_length=</div>
                <span className="text-orange-500">100</span>
                <span className="text-white">)</span>
                <div className="ml-4 text-yellow-500">"""</div>
                <div className="ml-4 text-yellow-500">Customer's name</div>
                <div className="ml-4 text-yellow-500">"""</div>
                <div className="ml-4 text-white">email = models.EmailField(max_length=</div>
                <span className="text-orange-500">255</span>
                <span className="text-white">, unique=</span>
                <span className="text-blue-400">True</span>
                <span className="text-white">)</span>
                <div className="ml-4 text-yellow-500">"""</div>
                <div className="ml-4 text-yellow-500">Customer's email (must be unique)</div>
                <div className="ml-4 text-yellow-500">"""</div>
                <div className="ml-4 text-white">address = models.CharField(max_length=</div>
                <span className="text-orange-500">255</span>
                <span className="text-white">, blank=</span>
                <span className="text-blue-400">True</span>
                <span className="text-white">, null=</span>
                <span className="text-blue-400">True</span>
                <span className="text-white">)</span>
                <div className="ml-4 text-yellow-500">"""</div>
                <div className="ml-4 text-yellow-500">Customer's physical address</div>
                <div className="ml-4 text-yellow-500">"""</div>
                <div className="mt-4 text-green-500"># 2. Products Table</div>
                <div className="text-blue-400">class</div> <span className="text-white">Product</span>
                <span className="text-white">(models.Model):</span>
                <div className="ml-4 text-yellow-500">"""</div>
                <div className="ml-4 text-yellow-500">Unique identifier for each product.</div>
                <div className="ml-4 text-yellow-500">"""</div>
                <div className="ml-4 text-white">product_id = models.AutoField(primary_key=</div>
                <span className="text-blue-400">True</span>
                <span className="text-white">)</span>
              </code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  )
}

