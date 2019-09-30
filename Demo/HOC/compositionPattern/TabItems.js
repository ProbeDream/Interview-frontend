const TabItem = props => {
  const { active, onclick } = props;
  const tabStyle = {
    'max-width': '150px',
    color: active ? 'red' : 'green',
    border: active ? '1px solid red' : '0px'
  };
  return (
    <h1 style={tabStyle} onClick={onclick}>
      {props.children}
    </h1>
  );
};


