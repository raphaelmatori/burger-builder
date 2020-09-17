(this["webpackJsonpburger-builder"]=this["webpackJsonpburger-builder"]||[]).push([[4],{104:function(e,t,n){"use strict";var a=n(0),i=n.n(a),l=n(105),u=n.n(l);t.a=function(e){var t=null,n=[u.a.InputElement];switch(e.invalid&&e.shouldValidate&&e.touched&&n.push(u.a.Invalid),e.elementType){case"input":t=i.a.createElement("input",Object.assign({className:n.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"textarea":t=i.a.createElement("textarea",Object.assign({className:n.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"select":t=i.a.createElement("select",{className:n.join(" "),value:e.value,onChange:e.changed},e.elementConfig.options.map((function(e){return i.a.createElement("option",{key:e.value,value:e.value},e.displayValue)})));break;default:t=i.a.createElement("input",Object.assign({className:n.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}))}return i.a.createElement("div",{className:u.a.Input},i.a.createElement("label",{className:u.a.Label},e.label),t)}},105:function(e,t,n){e.exports={Input:"Input_Input__SNRl4",Label:"Input_Label__3w96u",InputElement:"Input_InputElement__pO52w",Invalid:"Input_Invalid__3aeyU"}},110:function(e,t,n){e.exports={Auth:"Auth_Auth__7JmWy",Box:"Auth_Box__3S6L7",Input:"Auth_Input__2gAsG"}},111:function(e,t,n){"use strict";n.r(t);var a=n(24),i=n(5),l=n(6),u=n(8),r=n(7),o=n(0),s=n.n(o),c=n(17),p=n(3),d=n(104),h=n(33),m=n(42),g=n(110),v=n.n(g),f=n(18),b=n(4),_=function(e){Object(u.a)(n,e);var t=Object(r.a)(n);function n(){var e;Object(i.a)(this,n);for(var l=arguments.length,u=new Array(l),r=0;r<l;r++)u[r]=arguments[r];return(e=t.call.apply(t,[this].concat(u))).state={controls:{email:{elementType:"input",elementConfig:{type:"email",placeholder:"Mail Address"},value:"",validation:{required:!0,isEmail:!0},valid:!1,touched:!1},password:{elementType:"input",elementConfig:{type:"password",placeholder:"Password"},value:"",validation:{required:!0,minLength:6},valid:!1,touched:!1}},isSignup:!0},e.inputChangedHandler=function(t,n){var i=Object(b.b)(e.state.controls,Object(a.a)({},n,Object(b.b)(e.state.controls[n],{value:t.target.value,valid:Object(b.a)(t.target.value,e.state.controls[n].validation),touched:!0})));e.setState({controls:i})},e.submitHandler=function(t){t.preventDefault(),e.props.onAuth(e.state.controls.email.value,e.state.controls.password.value,e.state.isSignup)},e.switchAuthModeHandler=function(){e.setState((function(e){return{isSignup:!e.isSignup}}))},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.buildingBurger||"/"===this.props.authRedirectPath||this.props.onSetAuthRedirectPath()}},{key:"render",value:function(){var e=this,t=[];for(var n in this.state.controls)t.push({id:n,config:this.state.controls[n]});var a=t.map((function(t){return s.a.createElement(d.a,{key:t.id,elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,invalid:!t.config.valid,shouldValidate:t.config.validation,touched:t.config.touched,changed:function(n){return e.inputChangedHandler(n,t.id)}})}));this.props.loading&&(a=s.a.createElement(m.a,null));var i=null;this.props.error&&(i=s.a.createElement("p",null,this.props.error.message));var l=null;return this.props.isAuthenticated&&(l=s.a.createElement(p.a,{to:this.props.authRedirectPath})),s.a.createElement("div",{className:[v.a.Auth,v.a.Box].join(" ")},l,i,s.a.createElement("form",{onSubmit:this.submitHandler},a,s.a.createElement(h.a,{btnType:"Success"},"SUBMIT")),s.a.createElement(h.a,{clicked:this.switchAuthModeHandler,btnType:"Danger"},"SWITCH TO ",this.state.isSignup?"SIGNIN":"SIGNUP"))}}]),n}(o.Component);t.default=Object(c.b)((function(e){return{loading:e.auth.loading,error:e.auth.error,isAuthenticated:null!==e.auth.token,buildingBurger:e.burgerBuilder.building,authRedirectPath:e.auth.authRedirectPath}}),(function(e){return{onAuth:function(t,n,a){return e(f.b(t,n,a))},onSetAuthRedirectPath:function(){return e(f.j("/"))}}}))(_)}}]);
//# sourceMappingURL=4.ec603f2d.chunk.js.map