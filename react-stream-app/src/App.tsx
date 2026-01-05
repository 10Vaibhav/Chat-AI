import { ThemeProvider } from "./providers/theme-provider"

function App() {


  return (
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="h-screen bg-background">
          Welcome to Stream Chat AI
        </div>
      </ThemeProvider>

  )
}

export default App
