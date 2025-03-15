export default function SchemaTab({ schemaData }) {
  return (
    <div className="p-4 bg-black">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl text-white">Database Schema</h2>
        <span className="text-gray-400">{schemaData.length} tables</span>
      </div>

      <div className="space-y-6">
        {schemaData.map((table, index) => (
          <div key={index} className="bg-[#1a1a1a] rounded-lg overflow-hidden">
            <div className="bg-[#1a1a1a] px-4 py-2 border-b border-gray-800">
              <h3 className="text-white font-medium">{table.tableName}</h3>
            </div>
            <div className="p-4">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-gray-400 text-sm">
                    <th className="py-2">Column</th>
                    <th className="py-2">Type</th>
                    <th className="py-2">Attributes</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {table.columns.map((col, i) => (
                    <tr key={i}>
                      <td className="py-2 text-[#e6b450]">{col.name}</td>
                      <td className="py-2 text-gray-300">{col.type}</td>
                      <td className="py-2 text-gray-300">
                        {col.pk ? "PRIMARY KEY" : ""}
                        {col.notnull ? " NOT NULL" : ""}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
