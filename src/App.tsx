// import Hero from "./components/hero"

import { Globe, Mail, MapPin, Mars, Moon, Phone, Sun } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar"
import Education from "./components/education"
import TechStack from "./components/stack"
import Projects from "./components/projects"
import { useEffect, useState } from "react"

function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    (() => {
      const theme = localStorage.getItem("theme")
      if (theme === "dark") {
        setDarkMode(true)
      } else {
        setDarkMode(false)
      }
    })()
  }, [])

  const handleDarkModeToggle = () => {
    setDarkMode(prev => {
      localStorage.setItem("theme", prev ? "light" : "dark")
      return !prev
    })
  }

  return (
    <div className={`bg-background w-full min-h-screen flex transition-colors duration-300 justify-center p-6 ${darkMode ? "dark" : ""}`}>
      <div className="w-full max-w-5xl px-4">
        {/* <Hero /> */}

        <div className="flex w-full p-2">
          <div>
            <Avatar className="w-40 h-40">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <div className="flex w-full px-4">
            <div className="grow flex flex-col justify-center">
              <span className="grow"></span>
              <h1 className="text-4xl font-bold">Arnel Lopena</h1>
              <p className="text-muted-foreground">Web Developer</p>
            </div>
            <div>
              <div onClick={handleDarkModeToggle} className="cursor-pointer relative bg-secondary p-1.25 rounded-full flex gap-1.5">
                <Sun size={15} className="relative z-10 astext opacity-70" />
                <Moon size={15} className="relative z-10 astext" />
                <span className={`block h-4.25 w-4.25 rounded-full absolute top-1 transition-all duration-300 ${darkMode ? "left-6.25 bg-green-400" : "left-1 bg-green-100"}`} />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row w-full mt-4 border-t border-b border-muted p-2 py-4 gap-2">
          <div className="w-1/2 flex flex-col gap-2">
            {/* <div className="flex gap-2">
              <div className="p-1 rounded-sm bg-accent-foreground/5">
                <GraduationCap size={18} className="text-muted-foreground" />
              </div>
              <h1 className="opacity-70">BS Information Technology</h1>
            </div> */}
            <div className="flex gap-2">
              <div className="p-1 rounded-sm bg-accent-foreground/5">
                <MapPin size={18} className="text-muted-foreground" />
              </div>
              <h1 className="opacity-70 text-nowrap">Pagadian City, Philippines</h1>
            </div>
            <div className="flex gap-2">
              <div className="p-1.25 rounded-sm bg-accent-foreground/5">
                <Phone size={16} className="text-muted-foreground" />
              </div>
              <h1 className="opacity-70 text-nowrap">+63 961 457 77195</h1>
            </div>
            <div className="flex gap-2">
              <div className="p-1.25 rounded-sm bg-accent-foreground/5">
                <Globe size={16} className="text-muted-foreground" />
              </div>
              <a href="https://nel.is-a.dev" target="_blank" rel="noopener noreferrer" className="opacity-70 text-nowrap hover:underline">
                https://nel.is-a.dev
              </a>
            </div>
          </div>
          <div className="w-1/2 flex flex-col gap-2">
            <div className="flex gap-2">
              <div className="p-1 rounded-sm bg-accent-foreground/5">
                <Mail size={18} className="text-muted-foreground" />
              </div>
              <h1 className="opacity-70">alopena55555@gmail.com</h1>
            </div>
            <div className="flex gap-2">
              <div className="p-1.25 rounded-sm bg-accent-foreground/5">
                <Mars size={16} className="text-muted-foreground" />
              </div>
              <h1 className="opacity-70">he/him</h1>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row w-full border-b border-muted h-auto">
          <div className="w-full md:w-[65%] md:pr-8 py-4 border-b md:border-b-0 md:border-r border-muted">
            <h1 className="pb-3 font-bold text-xl"> About</h1>
            <ul className="list-disc pl-5 space-y-3">
              <li>Bachelor of Science in Information Technology graduate with a strong foundation in full-stack web development and a passion for building practical software solutions.</li>
              <li>Skilled in JavaScript, TypeScript, React, Next.js, Tailwind CSS, Node.js, Express.js, MySQL, and PostgreSQL, with experience developing responsive and user-friendly web applications.</li>
              <li>Knowledgeable in computer systems servicing and basic embedded systems programming using C++, with an interest in combining software and hardware technologies.</li>
              <li>Experienced in designing REST APIs, managing databases, implementing authentication, and creating responsive user interfaces using modern development tools and best practices.</li>
              <li>Passionate about writing clean, maintainable code, solving technical problems, and continuously learning new technologies to improve development skills.</li>
            </ul>
          </div>
          <div className="w-full md:w-[35%] p-4">
            <h1 className="pb-3 font-bold text-xl">Education</h1>
            <Education />
          </div>
        </div>

        <div className="w-full flex flex-col md:flex-row pb-8">
          <div className="w-full md:w-[60%] border-b md:border-b-0 md:border-r border-muted">
            <Projects />
          </div>
          <div className="w-full md:w-[40%] md:pl-4">
            <TechStack />
          </div>
        </div>


        <div className="w-full flex justify-center">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Arnel Lopena. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default App
