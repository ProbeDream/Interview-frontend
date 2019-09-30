const withDoNothing = Component => {
  const newComponent = props => <Component {...props} />;
  return newComponent;
};


const  withLoginAndLogOut = (LoginComponent,LogoutComponent)=>{
    const newComponent = props=> getUserId() ?  <LoginComponent {...porps}/> : <LogoutComponent {...props}/> 
    return newComponent;
}

//将对应的高阶组件包装成为一个参数!
export default function Composition(...funcs){
    if (funcs.length === 0) {
        return arg => arg;
    }
    if (funcs.length === 1) {
        return arg[0];
    }
    return funcs.reduce((a,b)=>(...args)=>a(b(...args)));
}