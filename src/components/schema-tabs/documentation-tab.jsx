export default function DocumentationTab() {
  return (
    <div className="p-4">
      <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-sm mb-4">
        Regenerate documentation
      </button>
      <p className="text-gray-400 text-sm mb-6">Regenerate documnetation for the current schema</p>

      <h2 className="text-pink-500 text-2xl font-semibold mb-6">Database Schema Documentation</h2>

      <section className="mb-8">
        <h3 className="text-green-500 text-xl mb-4">Overview</h3>
        <p className="text-white mb-4">
          This documentation provides a comprehensive overview of the database schema designed for an e-commerce
          application. The schema includes tables for managing customers, products, orders, and payments. Each table is
          structured to facilitate efficient data storage and retrieval while ensuring data integrity through
          constraints and relationships.
        </p>
      </section>

      <section className="mb-8">
        <h3 className="text-green-500 text-xl mb-4">Tables</h3>

        <div className="mb-6">
          <h4 className="text-white text-lg font-semibold mb-2 underline">Customers Table</h4>
          <p className="text-white mb-3">
            The <code className="bg-gray-800 px-1 rounded">customers</code> table stores information about the customers
            who register on the platform.
          </p>

          <div className="bg-[#1a1a1a] rounded-lg overflow-hidden mb-4">
            <table className="w-full">
              <thead>
                <tr className="text-left border-b border-gray-800">
                  <th className="p-4 text-gray-400">Column Name</th>
                  <th className="p-4 text-gray-400">Data Type</th>
                  <th className="p-4 text-gray-400">Constraints</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-800">
                  <td className="py-2 px-4 text-white">customer_id</td>
                  <td className="py-2 px-4 text-white">SERIAL</td>
                  <td className="py-2 px-4 text-white">PRIMARY KEY</td>
                </tr>
                <tr className="border-t border-gray-800">
                  <td className="py-2 px-4 text-white">name</td>
                  <td className="py-2 px-4 text-white">VARCHAR(100)</td>
                  <td className="py-2 px-4 text-white">NOT NULL</td>
                </tr>
                <tr className="border-t border-gray-800">
                  <td className="py-2 px-4 text-white">email</td>
                  <td className="py-2 px-4 text-white">VARCHAR(255)</td>
                  <td className="py-2 px-4 text-white">NOT NULL, UNIQUE</td>
                </tr>
                <tr className="border-t border-gray-800">
                  <td className="py-2 px-4 text-white">address</td>
                  <td className="py-2 px-4 text-white">VARCHAR(255)</td>
                  <td className="py-2 px-4 text-white"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-white text-lg font-semibold mb-2 underline">Products Table</h4>
          <p className="text-white mb-3">
            The <code className="bg-gray-800 px-1 rounded">products</code> table contains details about the products
            available for sale.
          </p>

          <div className="bg-[#1a1a1a] rounded-lg overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="text-left border-b border-gray-800">
                  <th className="p-4 text-gray-400">Column Name</th>
                  <th className="p-4 text-gray-400">Data Type</th>
                  <th className="p-4 text-gray-400">Constraints</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-800">
                  <td className="py-2 px-4 text-white">product_id</td>
                  <td className="py-2 px-4 text-white">SERIAL</td>
                  <td className="py-2 px-4 text-white">PRIMARY KEY</td>
                </tr>
                <tr className="border-t border-gray-800">
                  <td className="py-2 px-4 text-white">category</td>
                  <td className="py-2 px-4 text-white">VARCHAR(100)</td>
                  <td className="py-2 px-4 text-white">NOT NULL</td>
                </tr>
                <tr className="border-t border-gray-800">
                  <td className="py-2 px-4 text-white">price</td>
                  <td className="py-2 px-4 text-white">NUMERIC(10,2)</td>
                  <td className="py-2 px-4 text-white">NOT NULL</td>
                </tr>
                <tr className="border-t border-gray-800">
                  <td className="py-2 px-4 text-white">stock_quantity</td>
                  <td className="py-2 px-4 text-white">INT</td>
                  <td className="py-2 px-4 text-white">NOT NULL, DEFAULT 0</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  )
}

