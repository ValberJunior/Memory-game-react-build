(this["webpackJsonpmemory-game"]=this["webpackJsonpmemory-game"]||[]).push([[0],{12:function(t,e,c){},14:function(t,e,c){"use strict";c.r(e);var a=c(1),r=c.n(a),i=c(8),s=c.n(i),n=(c(12),c(7)),d=c(4),o={lockMode:!1,firstCard:null,secondCard:null,items:["image1","image2","image3","image4","image5","image6","image7","image8","image9","image10"],cards:null,setCard:function(t){var e=this.cards.filter((function(e){return e.id===t}))[0];return console.log(e),!e.flipped&&!this.lockMode&&(this.firstCard?(this.secondCard=e,this.secondCard.flipped=!0,this.lockMode=!0,!0):(this.firstCard=e,this.firstCard.flipped=!0,!0))},checkMatch:function(){return!(!this.firstCard||!this.secondCard)&&this.firstCard.icon===this.secondCard.icon},clearCards:function(){this.firstCard=null,this.secondCard=null,this.lockMode=!1},unflipCards:function(){this.firstCard.flipped=!1,this.secondCard.flipped=!1,this.clearCards()},checkGameOver:function(){return 0===this.cards.filter((function(t){return!t.flipped})).length},createCards:function(t){var e=this;return this.cards=[],this.items.forEach((function(t){e.cards.push(e.createPair(t))})),this.cards=this.cards.flatMap((function(t){return t})),this.shuffleCards(),this.cards},createPair:function(t){return[{id:this.createId(t),icon:t,flipped:!1},{id:this.createId(t),icon:t,flipped:!1}]},createId:function(t){return t+parseInt(1e3*Math.random())},shuffleCards:function(t){for(var e=this.cards.length,c=0;0!==e;){c=Math.floor(Math.random()*e),e--;var a=[this.cards[e],this.cards[c]];this.cards[c]=a[0],this.cards[e]=a[1]}},flipcard:function(t,e,c){var a=this;this.setCard(t)&&this.secondCard&&(this.checkMatch()?(this.clearCards(),this.checkGameOver()&&e()):setTimeout((function(){a.unflipCards(),c()}),1e3))}},h=c(0);var l=function(t){return t.show?Object(h.jsxs)("div",{id:"gameOver",children:[Object(h.jsxs)("div",{children:["Parab\xe9ns!!!",Object(h.jsx)("br",{})," Voc\xea completou o Jogo!"]}),Object(h.jsx)("button",{id:"btn",onClick:t.handleRestart,children:"Jogue novamente"})]}):Object(h.jsx)(a.Fragment,{})},u=c(2);var f=function(t){return t.show?Object(h.jsx)("div",{id:"gameHome",children:Object(h.jsx)("button",{id:"start",onClick:t.handleStart,children:"START GAME"})}):Object(h.jsx)(u.Fragment,{})};var j=function(t){return Object(h.jsxs)("div",{onClick:function(){t.handleFlip(t.card)},id:t.card.id,className:"card ".concat(t.card.flipped?"flip":""),children:[Object(h.jsx)("div",{className:"card_front",children:Object(h.jsx)("img",{className:"icon",src:"assets/".concat(t.card.icon,".png"),alt:t.card.icon})}),Object(h.jsx)("div",{className:"card_back",children:Object(h.jsx)("img",{className:"icon",src:"assets/back.png",alt:"Back Card"})})]})};var m=function(t){return t.show?Object(h.jsx)("div",{className:"game",id:"gameBoard",children:t.cards.map((function(e,c){return Object(h.jsx)(j,{handleFlip:t.handleFlip,card:e},c)}))}):Object(h.jsx)(u.Fragment,{})};var b=function(){var t=Object(a.useState)(!0),e=Object(d.a)(t,2),c=e[0],r=e[1],i=Object(a.useState)(!1),s=Object(d.a)(i,2),u=s[0],j=s[1],b=Object(a.useState)([]),p=Object(d.a)(b,2),C=p[0],O=p[1];Object(a.useEffect)((function(){O(o.createCards())}),[]);var g=Object(a.useState)(!1),v=Object(d.a)(g,2),x=v[0],k=v[1];return Object(h.jsxs)("div",{children:[Object(h.jsx)(f,{show:c,handleStart:function(){r(!1),j(!0)}}),Object(h.jsx)(m,{handleFlip:function(t){o.flipcard(t.id,(function(){k(!0)}),(function(){O(Object(n.a)(o.cards))})),O(Object(n.a)(o.cards))},show:u,cards:C}),Object(h.jsx)(l,{show:x,handleRestart:function(){o.clearCards(),O(o.createCards()),k(!1)}})]})},p=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,15)).then((function(e){var c=e.getCLS,a=e.getFID,r=e.getFCP,i=e.getLCP,s=e.getTTFB;c(t),a(t),r(t),i(t),s(t)}))};s.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(b,{})}),document.getElementById("root")),p()}},[[14,1,2]]]);
//# sourceMappingURL=main.9d12171c.chunk.js.map