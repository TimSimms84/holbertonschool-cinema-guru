import Input from './components/general/Input';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="App">
      <Input
        label="Username"
        type="text"
        className="form-control"
        value=""
        setValue={() => {}}
        icon={faUser}
      />
    </div>
  );
}

export default App;
