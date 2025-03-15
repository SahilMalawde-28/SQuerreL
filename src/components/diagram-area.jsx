"use client";

import { useEffect, useRef } from "react";

export default function DiagramArea({ zoom, tableData = [] }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw grid dots
    const dotSize = 1;
    const spacing = 20;
    const scale = zoom / 50;
    const adjustedSpacing = spacing * scale;

    ctx.fillStyle = "#333";

    for (let x = 0; x < canvas.width; x += adjustedSpacing) {
      for (let y = 0; y < canvas.height; y += adjustedSpacing) {
        ctx.beginPath();
        ctx.arc(x, y, dotSize, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Draw watermark
    ctx.font = `${Math.max(48 * scale, 20)}px Arial`;
    ctx.fillStyle = "rgba(30, 30, 30, 0.3)";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("SQurreL", canvas.width / 2, canvas.height / 2);
  }, [zoom]);

  return (
    <div className="flex-1 relative overflow-hidden">
      {/* Canvas with Grid Background */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ transform: `scale(${zoom / 50})` }} />

      {/* Table Display */}
      <div className="absolute inset-0 p-4 flex flex-wrap gap-6 items-center justify-center">
  {tableData.length > 0 ? (
    tableData.map((table, index) => (
      <div
        key={index}
        className="bg-black bg-opacity-90 p-4 rounded-lg shadow-lg border border-gray-700 w-80 text-center"
      >
        <h3 className="text-white text-lg font-semibold border-b border-gray-600 pb-2">
          {table.name || "Unnamed Table"}
        </h3>

        {table.columns && table.columns.length > 0 ? (
          <table className="w-full text-white mt-3 text-sm border border-gray-700 rounded-md overflow-hidden">
            <thead>
              <tr className="bg-gray-800">
                {table.columns.map((col, i) => (
                  <th key={i} className="border border-gray-700 p-2">{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {table.rows && table.rows.length > 0 ? (
                table.rows.map((row, i) => (
                  <tr key={i} className="bg-gray-850 hover:bg-gray-800 transition">
                    {row.map((cell, j) => (
                      <td key={j} className="border border-gray-700 p-2">{cell}</td>
                    ))}
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={table.columns.length} className="text-gray-500 p-3 text-center">
                    No Data Available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        ) : (
          <p className="text-gray-400">No columns found</p>
        )}
      </div>
    ))
  ) : (
    <p className="text-gray-500 text-lg font-semibold">Run a SELECT command to see tables</p>
  )}
</div>

    </div>
  );
}
