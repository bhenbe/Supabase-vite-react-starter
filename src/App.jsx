import { createClient } from '@supabase/supabase-js'
import { Provider }     from 'react-supabase'
import RegisterForm     from './components/RegisterForm'
import LoginForm        from './components/LoginForm'
import Projects         from './components/Projects'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

function App() {
  return (
    <Provider value={supabase}>
      <LoginForm />
    </Provider>
  )
}

export default App