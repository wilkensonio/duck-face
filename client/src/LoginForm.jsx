import { userPrefs } from './context/userPrefs';
import { useContext } from 'react';

function LoginForm(props) {
  const prefs = useContext(userPrefs);

  return <p className={prefs.theme}>Login</p>;
}

export default LoginForm;
