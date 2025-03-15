import { cn } from "@/lib/utils"
export default function ProgressIndicator({ steps }) {
  return (
    <div className="fixed left-4 bottom-4 space-y-2 z-50">
      {steps.map((step, index) => (
        <div key={index} className="flex items-center gap-2">
          <div
            className={cn(
              "w-5 h-5 rounded-full flex items-center justify-center",
              step.completed ? "bg-green-500" : "bg-gray-700",
            )}
          >
            {step.completed && "✓"}
          </div>
          <span className="text-white">{step.label}</span>
        </div>
      ))}
    </div>
  )
}

