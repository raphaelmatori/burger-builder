(this["webpackJsonpburger-builder"]=this["webpackJsonpburger-builder"]||[]).push([[5],{109:function(e,r,n){e.exports={Order:"Order_Order__EbaF-"}},113:function(e,r,n){"use strict";n.r(r);var t=n(5),a=n(6),i=n(8),o=n(7),u=n(0),c=n.n(u),s=n(109),d=n.n(s),p=function(e){var r=[];for(var n in e.ingredients)r.push({name:n,amount:e.ingredients[n]});var t=r.map((function(e){return c.a.createElement("span",{style:{textTransform:"capitalize",display:"inline-block",margin:"0 8px",border:"1px solid #ccc",padding:"5px"},key:e.name},e.name," (",e.amount,")")}));return c.a.createElement("div",{className:d.a.Order},c.a.createElement("p",null,"Ingredients: ",t),c.a.createElement("p",null,"Price: ",c.a.createElement("strong",null,"USD ",Number.parseFloat(e.price).toFixed(2))))},l=n(20),m=n(43),b=n(17),f=n(18),h=n(42),g=function(e){Object(i.a)(n,e);var r=Object(o.a)(n);function n(){return Object(t.a)(this,n),r.apply(this,arguments)}return Object(a.a)(n,[{key:"componentDidMount",value:function(){this.props.onFetchOrder(this.props.token,this.props.userId)}},{key:"render",value:function(){var e=c.a.createElement(h.a,null);return this.props.loading||(e=this.props.orders.map((function(e){return c.a.createElement(p,{key:e.id,ingredients:e.ingredients,price:e.price})}))),c.a.createElement("div",{style:{marginTop:66}},e)}}]),n}(u.Component);r.default=Object(b.b)((function(e){return{orders:e.order.orders,loading:e.order.loading,token:e.auth.token,userId:e.auth.userId}}),(function(e){return{onFetchOrder:function(r,n){return e(f.d(r,n))}}}))(Object(m.a)(g,l.a))}}]);
//# sourceMappingURL=5.c56bac4b.chunk.js.map