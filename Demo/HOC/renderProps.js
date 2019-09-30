const RenderAll = props => {
  return <React.Fragment>{props.children(props)}</React.Fragment>;
};
<RenderAll>{() => <div>Hello World!</div>}</RenderAll>;

const Login = props => {
  const username = getUsername();
  if (username) {
    const allPorps = { username, ...props };
    reurn(<React.Fragment>{props.children(allPorps)}</React.Fragment>);
  } else {
    return null;
  }
};

const Auth = props => {
  const username = getUsername();
  if (username) {
    const allprops = { username, ...props };
    return <React.fragment>{props.login(allprops)}</React.fragment>;
  } else {
    <React.Fragment>{props.unlogin(allprops)}</React.Fragment>;
  }
};

<Auth
  login={({ username }) => <h1>Welcome to {username}</h1>}
  nologin={() => <h1>Please login!</h1>}
/>;
