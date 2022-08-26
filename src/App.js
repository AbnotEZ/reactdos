import './App.css';
import './index.css';
import ComponenteInput from './components/ComponenteInput'
import {useState} from 'react';	


function App () {
    const [password, setPassword] = useState('')
    const [user, setUser] = useState('')
    return (
        <>
        <ComponenteInput password ={password} setPassword={setPassword} user ={user} setUser={setUser}/>
        </>
    
        

    )
}
export default App;
