import './auth.css';
import Button from '../../components/general/Button';
import Input from '../../components/general/Input';
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons';

export default function Login({ username, password, setUsername, setPassword }) {
  return (
    <div className="content">
      <h1>Sign in with your account</h1>
      <Input type="text" label="Username" value={username} setValue={setUsername} icon={faUser} />
      <Input type="password" label="Password" value={password} setValue={setPassword} icon={faKey} />
      {/* <Button label="Sign In" icon="key" className="squareButton" />
       */}
       <div className="button-container">
        <Button label="Sign In" icon="key" className="squareButton" />
      </div>
    </div>
  )
}
