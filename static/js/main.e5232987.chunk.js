(this["webpackJsonpangel-17dscs"]=this["webpackJsonpangel-17dscs"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),i=a.n(c),l=(a(14),a(1)),s=a(5),u=a(4),o=a(8),d=function(e,t){return"translate(".concat(e,", ").concat(t,")")},m=function(e){var t=e.value,a=e.label,c=e.fill,i=e.innerRadius,m=void 0===i?0:i,E=e.outerRadius,b=e.cornerRadius,f=e.padAngle,p=e.sectionNumber,v=e.setSectionNumber,g=e.isClicked,h=e.setIsClicked,y=Object(s.a)(e,["value","label","fill","innerRadius","outerRadius","cornerRadius","padAngle","sectionNumber","setSectionNumber","isClicked","setIsClicked"]),N=Object(n.useState)(!1),O=Object(l.a)(N,2),C=O[0],j=O[1];C&&(E*=1.1);var R=u.svg.arc().innerRadius(m).outerRadius(E).cornerRadius(b).padAngle(f);return r.a.createElement("g",Object.assign({onMouseOver:function(e){j(!0),!g&&v(parseInt(e.currentTarget.id))},onMouseOut:function(){j(!1),!g&&v(-1)},onClick:function(){3===p&&h(!g)}},y),r.a.createElement("path",{d:R(t),fill:c}),r.a.createElement("text",{transform:d.apply(void 0,Object(o.a)(R.centroid(t))),dy:".35em",className:"label"},a))},E=function(e){var t=e.x,a=e.y,n=e.data,c=Object(s.a)(e,["x","y","data"]),i=u.layout.pie();return r.a.createElement("g",{transform:d(t,a)},i(n.scale).map((function(e,t){return function(e,t,a,n){return r.a.createElement(m,Object.assign({key:t,id:t,value:e,label:a,fill:n},c))}(e,t,n.label[t],n.color[t])})))},b=["No poverty","Zero hunger","Good Health and Well-being","Quality Education","Gender Equality","Clean Water and Sanitation","Affordable and Clean Energy","Decent Work and Economy Growth","Industry, Innovation, and Infrastructure","Reduced Inequalities","Sustainable cities and communities","Responsible Consumption and Production","Climate Action","Life Below Water","Life on Land","Peace, Justice and Strong Institutions","Partnerships"],f=["#EB1C2D","#D2A12A","#279B48","#C32136","#EF4128","#06ADD9","#FEB614","#8F1838","#F36E29","#E11284","#F99E29","#CF8E2A","#3F7E45","#1C97D3","#59BA47","#136A9F","#14496B"],p=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"quality-education"},r.a.createElement("div",{className:"chart"},r.a.createElement("div",{className:"past"},"#past"),r.a.createElement("div",{className:"present"},"#present"),r.a.createElement("div",{className:"future"},"#future")),r.a.createElement("div",null,"#placeholder"),r.a.createElement("div",{className:"user-action"},"#user-action")))},v=function(){var e=window.innerWidth,t=window.innerHeight,a=.98*Math.min(e,t)/2,c=e/2,i=t/2,s=Object(n.useState)(-1),u=Object(l.a)(s,2),o=u[0],d=u[1],m=Object(n.useState)(!1),v=Object(l.a)(m,2),g=v[0],h=v[1],y=Object(n.useState)(.7),N=Object(l.a)(y,2),O=N[0],C=N[1];return Object(n.useEffect)((function(){C(g?.95:.7)}),[g]),r.a.createElement(r.a.Fragment,null,r.a.createElement("svg",{width:"100%",height:"100%"},r.a.createElement(E,{x:c,y:i,data:{scale:Array(17).fill(1),label:b,color:f},innerRadius:a*O,outerRadius:a,cornerRadius:6,padAngle:.01,sectionNumber:o,setSectionNumber:d,isClicked:g,setIsClicked:h})),o>-1?3===o?g?r.a.createElement(p,null):r.a.createElement("section",{className:"preview qe"},r.a.createElement("h1",null,"Preview of QE")):r.a.createElement("section",{className:"preview"},r.a.createElement("h1",null,"Preparing...")):null)};i.a.render(r.a.createElement(v,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.e5232987.chunk.js.map