
import './App.css'
import  {PlusIcon} from './components/icons/PlusIcon'
import  {ShareIcon}  from './components/icons/shareIcon'
import { Button } from './components/ui/Button'
function App() {
  return(
 <>
  <Button variant="primary" size="lg" text="Share" startIcon={<ShareIcon size='lg'/>}></Button>
  <Button variant="secondary" size="lg" text="Add content" startIcon={<PlusIcon size='lg'/>}></Button>
  <Button variant="secondary" size="md" text="Add content" startIcon={<PlusIcon size="md"/>}></Button>

 </>
)}

export default App
