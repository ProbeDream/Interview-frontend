import React,{Component} from "react";
class Tabs  extends  Component{
    constructor(props){
        this.super(porps);
        this.state = {activeIndex:0};
    }
    render(){
        const newChildren = React.children.map(this.props.children,(child,index)=>{
            if(child.type){
                return React.cloneElement(child,{
                    active:this.state.activeIndex === index,
                    onClick:()=>this.setState({activeIndex:index})
                })
            }else{
                return child;
            }
        })
        return (
            <React.Fragment >
                {newChildren}
            </React.Fragment>
        );
    }
}
export default Tabs;