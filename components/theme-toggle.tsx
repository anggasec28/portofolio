"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <Button variant="ghost" size="icon" className="rounded-full w-10 h-10 bg-secondary opacity-0" />
  }

  return (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className={`rounded-full w-10 h-10 transition-all ${
          theme === "dark"
            ? "bg-gray-800 text-gray-200 hover:bg-gray-700 button-glow"
            : "bg-gray-100 text-gray-800 hover:bg-gray-200"
        }`}
        aria-label="Toggle theme"
      >
        {theme === "dark" ? <Sun className="h-5 w-5 transition-all" /> : <Moon className="h-5 w-5 transition-all" />}
      </Button>
    </motion.div>
  )
}

