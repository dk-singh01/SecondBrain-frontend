
import './App.css'
import { PlusIcon } from './components/icons/PlusIcon'
import { Button } from './components/ui/Button'
function App() {
  return(
 <>
  <Button variant="primary" size="sm" text="Share" startIcon={<PlusIcon/>}></Button>
  <Button variant="secondary" size="md" text="Add content"></Button>
  <Button variant="secondary" size="lg" text="Add content"></Button>
 </>
)}

export default App
