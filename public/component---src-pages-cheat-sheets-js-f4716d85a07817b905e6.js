(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"2Bqf":function(e,a,t){"use strict";t.d(a,"a",(function(){return o}));t("AK/e");var n=t("Wbzz"),l=t("q1tI"),c=t.n(l),r=t("NDdm"),i=t("qXiB").a.filter((function(e){return"general"===e.family})).map((function(e){return e.logo}));function o(e){var a=e.chartType,t=e.caption,l=e.link,o=i.includes(a);return c.a.createElement(c.a.Fragment,null,o?c.a.createElement(c.a.Fragment,null,c.a.createElement(n.a,{to:l},c.a.createElement(r.a,{chartType:a})),c.a.createElement("p",{className:"distributionSection sectionLogoCaption"},t)):c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"sectionLogoContainer"},c.a.createElement(n.a,{to:l},c.a.createElement(r.a,{chartType:a}),c.a.createElement("div",{className:"sectionLogoOverlay"},c.a.createElement("div",{className:"sectionLogoOverlayText"},"+")))),c.a.createElement("p",{className:"distributionSection sectionLogoCaption"},t)))}},"2mCb":function(e,a,t){},"59G+":function(e,a,t){"use strict";t.d(a,"a",(function(){return o}));var n=t("q1tI"),l=t.n(n),c=t("eynx"),r=t("JI6e"),i=t("Wbzz");function o(e){var a=e.imgName,t=e.caption,n=e.linkTo;return l.a.createElement(r.a,{xs:12,md:4},l.a.createElement(i.a,{to:n},l.a.createElement(c.a,{imgName:a,caption:t})))}},"9d5C":function(e,a,t){},"AK/e":function(e,a,t){},IUho:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return p}));var n=t("q1tI"),l=t.n(n),c=t("4/Vk"),r=t("7oih"),i=t("7vrA"),o=t("6+GL"),m=t("3Z9Z"),s=t("pJaR"),u=(t("Wbzz"),t("Hrqu"),t("gMBH")),d=(t("lrgy"),t("qQFk"),t("59G+"),t("eynx")),h=t("JI6e");function p(){return l.a.createElement(r.a,{title:"Animation",isTocEnabled:!0},l.a.createElement(c.a,{title:"Cheat Sheets",description:"<p>This section provides a few cheat sheets related with <code>python</code>, data wrangling and data visualization. Even with a perfect understanding of <code>python</code> and its libraries, it's almost impossible to remember the syntax of each function of the ecosystem. That's where cheatsheets are useful 🔥!</p>"}),l.a.createElement(u.a,null),l.a.createElement(i.a,null,l.a.createElement("h2",{id:"Datacamp sheets"},"🔥 Datacamp cheat sheets"),l.a.createElement("p",null,"Datacamp provides 3 cheatsheets describing the basics of ",l.a.createElement("code",null,"matplotlib"),", ",l.a.createElement("code",null,"seaborn")," and ",l.a.createElement("code",null,"pandas"),": the 3 most commonly used library for data analysis with python:"),l.a.createElement(m.a,null,l.a.createElement(h.a,{xs:12,md:4},l.a.createElement("a",{href:"https://s3.amazonaws.com/assets.datacamp.com/blog_assets/Python_Matplotlib_Cheat_Sheet.pdf"},l.a.createElement(d.a,{imgName:"matplotlib_cheat_sheet",caption:"Matplotlib cheat sheet"}))),l.a.createElement(h.a,{xs:12,md:4},l.a.createElement("a",{href:"http://datacamp-community-prod.s3.amazonaws.com/dbed353d-2757-4617-8206-8767ab379ab3"},l.a.createElement(d.a,{imgName:"pandas_cheat_sheet",caption:"Pandas cheat sheet"}))),l.a.createElement(h.a,{xs:12,md:4},l.a.createElement("a",{href:"https://s3.amazonaws.com/assets.datacamp.com/blog_assets/Python_Seaborn_Cheat_Sheet.pdf"},l.a.createElement(d.a,{imgName:"seaborn_cheat_sheet",caption:"Seaborn cheat sheet"}))))),l.a.createElement(u.a,null),l.a.createElement("div",{className:"greySection",id:"related"},l.a.createElement(i.a,null,l.a.createElement(s.a,{chartFamily:"general"}))),l.a.createElement(u.a,null),l.a.createElement(i.a,null,l.a.createElement(o.a,null)),l.a.createElement(u.a,null))}},eynx:function(e,a,t){"use strict";t.d(a,"a",(function(){return m}));t("2mCb");var n=t("q1tI"),l=t.n(n),c=t("Wbzz"),r=t("9eSz"),i=t.n(r),o=["animated_chart","animated_gapminder.gif","animated_volcano.gif"];function m(e){var a=e.imgName,t=e.caption;if(o.includes(a))return l.a.createElement("p",null,"TODO");var n=Object(c.c)("3289484431").allFile.edges.find((function(e){return e.node.name.includes(a)}));return n?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"chartImageContainer"},l.a.createElement(i.a,{alt:a,fluid:n.node.childImageSharp.fluid,className:"chartImageImg"}),l.a.createElement("div",{className:"chartImageOverlay"},l.a.createElement("div",{className:"chartImageOverlayText"},l.a.createElement("p",null,t))))):null}},lrgy:function(e,a,t){e.exports=t.p+"static/animated_chart-44a8ddec407b87779aafe6917c54c18f.gif"},pJaR:function(e,a,t){"use strict";t.d(a,"a",(function(){return u}));t("9d5C");var n=t("q1tI"),l=t.n(n),c=t("3Z9Z"),r=t("JI6e"),i=t("2Bqf"),o=t("qXiB"),m=t("jhdv"),s={distribution:"Distribution",correlation:"Correlation",ranking:"Ranking",partOfAWhole:"Part Of A Whole",evolution:"Evolution",map:"Map",flow:"Flow",general:"General Knowledge"};function u(e){var a=e.chartFamily,t=o.a.filter((function(e){return e.family===a})).map((function(e,a){var t=Object(m.a)(e.pythonURL);return l.a.createElement(r.a,{key:a,xs:4,md:2},l.a.createElement(i.a,{link:t,chartType:e.logo,caption:e.label}))}));return l.a.createElement("div",null,l.a.createElement("h2",{id:"Related charts",className:"sectionTitle "+a},null==s?void 0:s[a]),l.a.createElement(c.a,null,t))}},qQFk:function(e,a,t){e.exports=t.p+"static/animated_volcano-9b154eaa7e16ebe494011669b12787db.gif"}}]);
//# sourceMappingURL=component---src-pages-cheat-sheets-js-f4716d85a07817b905e6.js.map