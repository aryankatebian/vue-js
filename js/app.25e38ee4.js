(function(t){function e(e){for(var s,o,i=e[0],l=e[1],c=e[2],d=0,p=[];d<i.length;d++)o=i[d],n[o]&&p.push(n[o][0]),n[o]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,i=1;i<a.length;i++){var l=a[i];0!==n[l]&&(s=!1)}s&&(r.splice(e--,1),t=o(o.s=a[0]))}return t}var s={},n={app:0},r=[];function o(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=s,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(a,s,function(e){return t[e]}.bind(null,s));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var u=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var s=a("64a9"),n=a.n(s);n.a},"17fb":function(t,e,a){t.exports=a.p+"img/4160.791bdc6e.jpg"},3589:function(t,e,a){},"3b6a":function(t,e,a){"use strict";var s=a("3589"),n=a.n(s);n.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Home")],1)},r=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Header"),a("Blog",{attrs:{blogs:t.blogs}}),a("Footer")],1)},i=[],l=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},c=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",[s("img",{attrs:{src:a("973d"),alt:"logo"}})])}],u={name:"Header"},d=u,p=(a("3b6a"),a("2877")),h=Object(p["a"])(d,l,c,!1,null,"6259df19",null),f=h.exports,m=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("section",[s("BlogHeader",{attrs:{blogs:t.blogs}}),s("div",{staticClass:"container"},[s("h1",{staticClass:"title"},[t._v(t._s(t.blogs.title))]),s("h2",{staticClass:"title2"},[t._v(t._s(t.blogs.description))])]),s("img",{staticClass:"first-img",attrs:{src:a("edfc"),alt:"pic1"}}),s("div",{staticClass:"container"},[s("p",{domProps:{innerHTML:t._s(t.blogs.p1)}}),s("p",{domProps:{innerHTML:t._s(t.blogs.p2)}}),s("p",{domProps:{innerHTML:t._s(t.blogs.p3)}}),s("div",{attrs:{id:"imgBox"}},[s("img",{staticClass:"second-img",attrs:{alt:"pic2",src:a("17fb")}}),s("img",{attrs:{id:"myImg",alt:"pic3",src:a("d2ec")},on:{click:t.openImg}})]),s("div",{ref:"myModal",staticClass:"modal",attrs:{id:"myModal"}},[s("span",{staticClass:"close",on:{click:t.closeImg}},[t._v("×")]),s("img",{ref:"img01",staticClass:"modal-content",attrs:{id:"img01",src:a("17fb")}})]),s("p",{domProps:{innerHTML:t._s(t.blogs.p4)}}),s("p",{domProps:{innerHTML:t._s(t.blogs.p5)}}),s("p",{domProps:{innerHTML:t._s(t.blogs.p6)}})]),s("BlogFooter",{attrs:{blogs:t.blogs}})],1)])},g=[],b=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"section-header"},[s("div",{staticClass:"header-left"},[s("p",[t._v(t._s(t.blogs.category))]),s("img",{attrs:{src:a("82f9"),alt:"arrow"}})]),s("div",{staticClass:"header-right"},[s("p",[t._v("by "+t._s(t.blogs.author)+" , "+t._s(t.blogs.date)+" ")])])])},v=[],y={name:"BlogHeader",props:["blogs"]},w=y,A=(a("ef50"),Object(p["a"])(w,b,v,!1,null,null,null)),C=A.exports,_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"section-footer"},[a("h2",[t._v("We’d like to hear your opinion")]),a("p",[t._v("How would you rate this article?")]),a("div",{staticClass:"star-rating"},[a("input",{attrs:{type:"radio",id:"10-stars",name:"rating",value:"10"},on:{click:t.rate}}),a("label",{staticClass:"star",attrs:{for:"10-stars"}},[t._v("10")]),a("input",{attrs:{type:"radio",id:"9-stars",name:"rating",value:"9"},on:{click:t.rate}}),a("label",{staticClass:"star",attrs:{for:"9-stars"}},[t._v("9")]),a("input",{attrs:{type:"radio",id:"8-stars",name:"rating",value:"8"},on:{click:t.rate}}),a("label",{staticClass:"star",attrs:{for:"8-stars"}},[t._v("8")]),a("input",{attrs:{type:"radio",id:"7-stars",name:"rating",value:"7"},on:{click:t.rate}}),a("label",{staticClass:"star",attrs:{for:"7-stars"}},[t._v("7")]),a("input",{attrs:{type:"radio",id:"6-stars",name:"rating",value:"6"},on:{click:t.rate}}),a("label",{staticClass:"star",attrs:{for:"6-stars"}},[t._v("6")]),a("input",{attrs:{type:"radio",id:"5-stars",name:"rating",value:"5"},on:{click:t.rate}}),a("label",{staticClass:"star",attrs:{for:"5-stars"}},[t._v("5")]),a("input",{attrs:{type:"radio",id:"4-stars",name:"rating",value:"4"},on:{click:t.rate}}),a("label",{staticClass:"star",attrs:{for:"4-stars"}},[t._v("4")]),a("input",{attrs:{type:"radio",id:"3-stars",name:"rating",value:"3"},on:{click:t.rate}}),a("label",{staticClass:"star",attrs:{for:"3-stars"}},[t._v("3")]),a("input",{attrs:{type:"radio",id:"2-stars",name:"rating",value:"2"},on:{click:t.rate}}),a("label",{staticClass:"star",attrs:{for:"2-stars"}},[t._v("2")]),a("input",{attrs:{type:"radio",id:"1-star",name:"rating",value:"1"},on:{click:t.rate}}),a("label",{staticClass:"star",attrs:{for:"1-star"}},[t._v("1")])]),t._m(0)])},P=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"button-title"},[a("p",[a("span",{staticClass:"button-title-span"},[t._v(" Waste of time")])]),a("p",[a("span",{staticClass:"button-title-span"},[t._v(" Excellent reads")])])])}],k={name:"BlogFooter",props:["blogs"],methods:{rate:function(t){this.blogs.rating=t.target.value,console.log(this.blogs.rating)}}},x=k,M=(a("f298"),Object(p["a"])(x,_,P,!1,null,"6bd3903c",null)),B=M.exports,F={name:"Blog",components:{BlogHeader:C,BlogFooter:B},props:["blogs"],methods:{openImg:function(){this.$refs.myModal.style.display="block"},closeImg:function(){this.$refs.myModal.style.display="none"}}},I=F,H=(a("73c5"),Object(p["a"])(I,m,g,!1,null,"0d4a67d6",null)),O=H.exports,E=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},W=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",[a("p",[t._v("© 2018 Artically Media Limited. All rights reserved.")])])}],L={name:"Footer"},D=L,j=(a("760c"),Object(p["a"])(D,E,W,!1,null,null,null)),T=j.exports,K={name:"Home",components:{Header:f,Blog:O,Footer:T},data:function(){return{blogs:{id:"1",category:"Animals",author:"Philio Hoare",date:"11 Dec 2018",title:"Blue Planet II: can the show help with conservation?",description:"The stunning nature programme has opened people’s eyes to the wonders of the ocean, but there have been calls for it to be much more forthright in defending it",p1:' Make no mistake: the honest premise of Blue Planet II is entertainment. And just as some of us go to zoos to be entertained by animals, we are encouraged by the notion that we are also <span style="color: #3F43FF">educating ourselves.</span>',p2:"Film and television are passive. And at their best: hypnotic. Sit in front of your screen, and the world’s oceans and their denizens wash past you. Coral reefs, benthic depths, coastal shallows: we travel through them all. But in the last episode of Blue Planet II, we are confronted with the terrible prospect: that magical world becoming a warmed up, acidified, plastic-clogged morass. It’s as if that’s the price we must pay for paradise. What we observe, we destroy.",p3:' What raises the series above panacea at best or “nature porn” at worst is The Voice. The Voice of God, for this atheistic age. Sir David Attenborough is as unique and possibly <span style="color: #3F43FF">as endangered as many of the animals</span> he describes. In an age in which the expert is discredited, fake news runs rife, and presidents dictate policy by tweet, he is a sainted presence, a saving grace.',p4:'How important, then, that the medium for his great and glorious talent should match up to his gravitas. Appearing at a nature conference last month, I was slightly shocked at vociferous criticism of BPII for its lack of focus on the parlous state of the oceans. When an audience member voiced the opinion that the expense, talent and effort that have been swallowed by that leviathan would have been better used to sustain more ‘realistic’ documentaries made closer to home, he got a loud round of applause. The point was that these were truly interested parties: the people who do the groundwork.<span style="color: #3F43FF">November’s announcement</span> of the Blue Belt scheme to protect seabird habitats in two sections of the UK coastline seabirds caught the Blue Planet wave - indeed, environment minister, Thérèse Coffey,<span style="color: #3F43FF"> cited the series </span>in her announcement. But these piecemeal projects often only underline their paltry provision and our impotence.',p5:'I was in Paris yesterday, and visited its Natural History Museum: a great art nouveau hall under whose ribbed iron roof is assembled a ghostly, bony collection of every kind of whale and other sea creatures, reduced to their grey skeletal remains. In the silence of an early morning in December, the stillness was chilling. The dead animals seemed to dumbly <span style="color: #3F43FF">evoke a personal reproach</span>. Then suddenly, a school party flooded in, and the animals came to life. Kids poked and filmed and grimaced and laughed; their imaginations had reanimated the marine denizens.',p6:"That, at its best, is what Blue Planet does. It sparks our imagination. It makes us see the impossible sea; it enables a narrative we have forgotten. As to whether its almost hallucinogenic, technically miraculous and narratively moving sequences turn out to be any more lasting than a dream is another matter. The nightmare is that if its well-intentioned message becomes just another way of selling a high-quality product to the globe, then those children’s children may only have reruns of a TV series to look at.",rating:0}}}},N=K,S=Object(p["a"])(N,o,i,!1,null,"4c8fdc31",null),z=S.exports,q={name:"app",components:{Home:z}},Q=q,R=(a("034f"),Object(p["a"])(Q,n,r,!1,null,null,null)),X=R.exports;s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(X)}}).$mount("#app")},"64a9":function(t,e,a){},"73c5":function(t,e,a){"use strict";var s=a("caab"),n=a.n(s);n.a},"760c":function(t,e,a){"use strict";var s=a("b675"),n=a.n(s);n.a},"82f9":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAAGWB6gOAAAAAXNSR0IArs4c6QAABOVJREFUWAm1WF1sVEUU/uYCKun6QxESCb6BicafFxJi/WFLu7xUIxDhSXzxSQ2xAqIhxsQHEzWa0DQaX/yhEjUQEH/KA5eyS8SmMfpANKn6gmIiBLQauzXFlB3PmXvPOPfuzN1tsZNs5vyfc8/8nDkLpGNdr/5BYMXAuh6thcBz5EoIwy8pXJlPjigjiL4+vaTcq6vMUE0ORLx2PIEiIbz5VgJlvBEykFglZt6WaLJnxV7r05gQItsv9wqWzNHUJRwWkgTA864dQqWQGQy5Yh7HxLMdlLN95R49Wa7oRyyRALF0jOCKy2BYXYsltSPqz6i7ou/xCbCQnsQfPDelcdmNwMXfmJUMcjVjMynEvyaBVasEI2vAwoWCyucL7uaqyZ0nmVX5usz+EWs887KYmJZ3wrrNCzBuLLkMTkmjgVMuzQOPkgdOnR3WEC2fN+lWMgBwpAcPqsstvy2gnyEviLA56u7VQxlqDil1AJzdlStzDAe93MDhqKGx0aE1gfWpZL+fO5cYvOP2JhFDiBDhST8rSz12FPjgI+Db77J0wSRHXxKhS4j5udIDxCN56n+4ObqCljfqG2THC63lrDB+8ri6jeXs8rtK6yt6E+2lA7z5XXoKVymC9Xm61xALmROu8RgdpTVa4VcijZWuRv/wsDLntKUh2piF+WIDUYR7q7FiOTtsRHPIUUyfuEEsmQO5ZYteMOtE0x2WHitjyxi6MIEZsTzLuZLee4h4hWapnBGXmyLiZc5wHOTBPuD9dx1CAOQyEgX2ilH5bBiYrAMHPgxYSMl/X8KAyVGR2BPbgbNngSOHwlINYG1LQ6y+61ng9Gng6KcBYxo3+Y6AuX8CKuCann0i0DlT+KapRPgMbKCqt4eicmuLK0flYRt/WtUl5uGHNxcbYflarPZHvpPsGvvq63AkqdwozybZ9NnZIu9Y4hUrGhSIKUvGUG1E9dPNNF6k4OPx+0DoxhAjfNMVRSYKMnM940eG4PYaEQLPdKpP0NTt0hgm4Rm6i7aeiNXHHl6e5Mf5cFP92k7G7is6Vq42OybZL6iADvqcu7ICk45/8F13cQKvk8Gn/BJzo5LDgWWd2MnPBZ+FpoDMzV3HKNWOW30K/xuNNpsqoctdd7ZtNxEj9FzdayrAfAfDzsgH+2KfjMqwGWqnKIrSPMz2GWkylJ6G4IumKIBNDwGd9tQWSRbyutIY6Nlf0dvQwFCheIB5/XXAa68Aq1cD/Ch8+hng/PmAcDvkCI8q7uuoHJTbkQ/JLF4MvPwScNedwO/Ur+2kwH76OSQdplMZqinuu+hol8Ji7XMWLQJefIFes3cnJX73c8D49+3r04auK9NAa9zSSi3ff7WSF/70NPA4PRvOnBFKwazwI1f8Mfq1DChUpPPmy/cDz+9JWslDVBgG38hLFOJjplOfmsYFWjbvc6RQ3WHyk25Hv3mO4J33gKH9DrMNkJZrpuMaLDf3UFqn7L8DbehbkQ7q4fa9DSxdCuwdBD4JPcCshh/ghpHrnQmIRdrsg/3WrpDqdiG2dHBbknbz8RXan416zD7dlshmyLWStkbcAtC7c15GTK+yrfnCyp68AbkhpEv5KtHmVFocW6O0NLvdbDg8C7YMyEqmgPn/7B88QM1PhU7mzfRboTRWMJtbXTLIv18aCnHpKnweannzdgX/F7zclP1R+U7VAAAAAElFTkSuQmCC"},"973d":function(t,e,a){t.exports=a.p+"img/Logo.c7fc8ec3.svg"},9956:function(t,e,a){},a6b4:function(t,e,a){},b675:function(t,e,a){},caab:function(t,e,a){},d2ec:function(t,e,a){t.exports=a.p+"img/Expand Arrow.f7391530.png"},edfc:function(t,e,a){t.exports=a.p+"img/4097.a03d01b9.jpg"},ef50:function(t,e,a){"use strict";var s=a("9956"),n=a.n(s);n.a},f298:function(t,e,a){"use strict";var s=a("a6b4"),n=a.n(s);n.a}});
//# sourceMappingURL=app.25e38ee4.js.map