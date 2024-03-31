"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"


export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <div>
      <div >
        {theme === "dark" ?
          <button className="bg-sky-900 p-2 rounded-md hover:bg-sky-700 hover:text-black transition delay-75" onClick={() => setTheme("light")}>
            <Sun />
          </button>
          :
          <button className="bg-sky-500 p-2 rounded-md hover:bg-sky-700 transition delay-75 hover:text-yellow-400" onClick={() => setTheme("dark")}>
            <Moon />
          </button>
        }
      </div>
    </div>
  )
}
