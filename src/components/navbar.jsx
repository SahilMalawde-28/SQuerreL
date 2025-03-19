"use client"

import { Button } from "./ui/Button"
import { Bot, Menu } from "lucide-react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import squerrelLogo from "../public/squerrel_logo.png";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="flex items-center justify-between px-6 py-4 backdrop-blur-sm border-b border-white/10"
    >
      <Link to="/" className="flex items-center space-x-2">
        <img src={squerrelLogo} alt="SQuerrel Logo" className="w-8 h-8" />
        <span className="text-white font-medium text-xl">SQuerrel</span>
      </Link>

      <div className="hidden md:flex items-center space-x-8">
        <NavLink href="/features">Features</NavLink>
        <NavLink href="/how-it-works">How it Works</NavLink>
        <NavLink href="/examples">Examples</NavLink>
        <NavLink href="/pricing">Pricing</NavLink>
      </div>

      <div className="hidden md:flex items-center space-x-4">
        <Button variant="ghost" className="text-white hover:text-green-400">
          Sign In
        </Button>
        <Link to="/page">
        <Button className="bg-green-600 hover:bg-green-700 text-white">Get Started</Button>
        </Link>
      </div>

      <Button variant="ghost" size="icon" className="md:hidden text-white">
        <Menu className="w-6 h-6" />
      </Button>
    </motion.nav>
  )
}

function NavLink({ href, children }) {
  return (
    <Link to={href} className="text-gray-300 hover:text-white transition-colors relative group">
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 transition-all group-hover:w-full" />
    </Link>
  )
}

