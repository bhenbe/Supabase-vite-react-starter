import { createClient } from '@supabase/supabase-js'
import { Provider }     from 'react-supabase'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterForm     from './components/RegisterForm'
import LoginForm        from './components/LoginForm'
import Projects         from './components/Projects'
import LogOut           from './components/LogOut'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

function App() {
  return (
    <Provider value={supabase}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginForm />}></Route>
          <Route path="/register" element={<RegisterForm />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/disconnect" element={<LogOut />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App