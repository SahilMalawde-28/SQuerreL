export function cn(...classes) {
  return classes.filter(Boolean).join(" ")
}

export function generateDiagramFromSql(sql) {
  // In a real implementation, this would parse the SQL and extract tables and relationships
  // For now, return a simple example diagram

  return {
    tables: [
      {
        id: "customers",
        name: "customers",
        columns: [
          { name: "id", type: "int", isPrimaryKey: true, isForeignKey: false },
          { name: "name", type: "varchar", isPrimaryKey: false, isForeignKey: false },
          { name: "email", type: "varchar", isPrimaryKey: false, isForeignKey: false },
        ],
        x: 100,
        y: 100,
        width: 200,
        height: 150,
      },
      {
        id: "orders",
        name: "orders",
        columns: [
          { name: "id", type: "int", isPrimaryKey: true, isForeignKey: false },
          {
            name: "customer_id",
            type: "int",
            isPrimaryKey: false,
            isForeignKey: true,
            references: { table: "customers", column: "id" },
          },
          { name: "total", type: "decimal", isPrimaryKey: false, isForeignKey: false },
        ],
        x: 400,
        y: 100,
        width: 200,
        height: 150,
      },
    ],
    relationships: [
      {
        id: "customers_orders",
        fromTable: "customers",
        fromColumn: "id",
        toTable: "orders",
        toColumn: "customer_id",
        type: "one-to-many",
      },
    ],
  }
}

