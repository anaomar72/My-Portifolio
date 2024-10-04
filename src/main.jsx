import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import Main from "./components/Main"
createRoot(document.getElementById('root')).render(
<BrowserRouter>
<Main/>
</BrowserRouter>    

  
)
