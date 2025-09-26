import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from './component/theme-provider.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './router/home.tsx'
import Contact from './router/contact.tsx'
import About from './router/about.tsx'
import Project from './router/project.tsx'
import Services from './router/services.tsx'
import SmokeyCursor from './component/animation/smokey-cursor.tsx'



const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "/",
        Component: Home
      },
      {
        path: "contact",
        Component: Contact
      },
      {
        path: "about",
        Component: About
      },
      {
        path: "project",
        Component: Project
      },
      {
        path: "services",
        Component: Services
      }
    ]

  },

])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SmokeyCursor />
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
)
