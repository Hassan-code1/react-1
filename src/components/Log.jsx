import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

const Log = (props) => {
  if (props.isLoggedIn) {
    return <LogoutButton isLoggedIn={props.isLoggedIn} useState={props.useState} />;
  } else {
    return <LoginButton isLoggedIn={props.isLoggedIn} useState={props.useState} />;
  }
};

export default Log;
