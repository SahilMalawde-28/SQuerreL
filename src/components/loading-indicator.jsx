import { cn } from "@/lib/utils"
export default function LoadingIndicator({ steps }) {
  return (
    <div className="fixed left-4 bottom-4 space-y-3 z-50">
      {steps.map((step, index) => (
        <div key={index} className="flex items-center gap-2">
          <div
            className={cn(
              "w-5 h-5 rounded-full flex items-center justify-center",
              step.completed ? "bg-green-500 text-white" : "bg-gray-800",
            )}
          >
            {step.completed && "✓"}
          </div>
          <span className="text-white text-sm">{step.label}</span>
        </div>
      ))}
    </div>
  )
}

