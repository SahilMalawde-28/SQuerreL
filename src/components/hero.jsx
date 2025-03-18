"use client"

import { Button } from "./ui/Button"
import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"
import { FloatingPaper } from "./floating-paper"
import { RoboAnimation } from "./robo-animation"
import {Link} from "react-router-dom"

export default function Hero() {
  return (
    <div className="relative min-h-[calc(100vh-76px)] flex items-center">
      {/* Floating papers background */}
      <div className="absolute inset-0 overflow-hidden">
        <FloatingPaper count={6} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Query in English,
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
                {" "}
                Execute in SQL
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 text-xl mb-8 max-w-2xl mx-auto"
          >
            Interact with databases using natural language - Generate, optimize and execute SQL queries effortlessly.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <div className="relative w-full sm:w-auto flex-1 max-w-xl">
              <input
                type="text"
                placeholder="Enter your research question..."
                className="w-full px-4 py-3 rounded-lg bg-black/50 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <Link to="/page">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 whitespace-nowrap">
              <Sparkles className="mr-2 h-5 w-5" />
              Generate
            </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Animated robot */}
      <div className="absolute bottom-0 right-0 w-96 h-96">
        <RoboAnimation />
      </div>
    </div>
  )
}

