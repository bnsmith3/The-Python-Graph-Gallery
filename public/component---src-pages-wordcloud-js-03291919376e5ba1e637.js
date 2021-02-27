(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{"2mCb":function(e,a,t){},"59G+":function(e,a,t){"use strict";t.d(a,"a",(function(){return i}));var l=t("q1tI"),n=t.n(l),o=t("eynx"),r=t("JI6e"),c=t("Wbzz");function i(e){var a=e.imgName,t=e.caption,l=e.linkTo;return n.a.createElement(r.a,{xs:12,md:4},n.a.createElement(c.a,{to:l},n.a.createElement(o.a,{imgName:a,caption:t})))}},"Z6/s":function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return W}));var l=t("q1tI"),n=t.n(l),o=t("4/Vk"),r=t("7oih"),c=t("7vrA"),i=t("6+GL"),d=t("3Z9Z"),u=t("59G+"),m=t("pJaR"),s=t("Wbzz"),h=t("JI6e"),p=t("eynx"),w=t("2Bqf"),E=t("qXiB"),g=t("jhdv"),f=t("ZJrt"),y=t("gMBH"),b=["lollipop","barplot","treemap","circularPacking"],v=function(){var e=E.a.filter((function(e){return b.includes(e.id)})).map((function(e,a){var t=Object(g.a)(e.pythonURL);return n.a.createElement(h.a,{key:a,xs:4,md:2},n.a.createElement(w.a,{link:t,chartType:e.logo,caption:e.label}))}));return n.a.createElement("div",null,n.a.createElement(d.a,null,e))};function W(){return n.a.createElement(r.a,{title:"Wordcloud",isTocEnabled:!0},n.a.createElement(o.a,{title:"Wordcloud",description:"<p>A <a href='https://www.data-to-viz.com/graph/wordcloud.html'>word cloud</a> (also called <a href='https://www.data-to-viz.com/graph/wordcloud.html'>tag cloud</a> or <a href='https://www.data-to-viz.com/graph/wordcloud.html'>weighted list</a>) is a visual representation of text data. Words are usually single words, and the importance of each is shown with font size or color. <code>Python</code> fortunately has a <code>wordcloud</code> library allowing to build them.</p>"}),n.a.createElement(c.a,null,n.a.createElement("h2",{id:"Quick"},"⏱ Quick start"),n.a.createElement(d.a,{className:"align-items-center"},n.a.createElement(h.a,{md:6},n.a.createElement("p",null,"The ",n.a.createElement("code",null,"wordcloud")," library is here to help you build a wordcloud in minutes. Here is a basic code snippets using the ",n.a.createElement("code",null,"WordCloud()")," function to get you started.🔥")),n.a.createElement(h.a,{md:6},n.a.createElement(s.a,{to:"/260-basic-wordcloud"},n.a.createElement(p.a,{imgName:"260_Basic_Wordcloud",caption:"Most basic wordcloud with python and the wordcloud library."})))),n.a.createElement(f.a,null,'# Libraries\nfrom wordcloud import WordCloud\nimport matplotlib.pyplot as plt\n\n# Create a list of word\ntext=("Python Python Python Matplotlib")\n\n# Create the wordcloud object\nwordcloud = WordCloud(width=480, height=480, margin=0).generate(text)\n\n# Display the generated image:\nplt.imshow(wordcloud, interpolation=\'bilinear\')\nplt.axis("off")\nplt.margins(x=0, y=0)\nplt.show()\n')),n.a.createElement(y.a,null),n.a.createElement("div",{className:"greySection",id:"warning"},n.a.createElement(c.a,null,n.a.createElement("h2",{id:"Warning"},"⚠️ The issue with wordclouds"),n.a.createElement("p",null,"Wordclouds are aesthetically pleasing and people are used to it, what make sure readers will understand them quick."),n.a.createElement("p",null,"However, it is important to consider the caveats associated to them. For instance,",n.a.createElement("u",null,"longer words")," will t",n.a.createElement("u",null,"ake more space")," on the figure by construction which distorts reality. Moreover, it is impossible to ",n.a.createElement("u",null,"translate a font size")," to an accurate value."),n.a.createElement(v,null))),n.a.createElement(y.a,null),n.a.createElement(c.a,null,n.a.createElement("h2",{id:"Wordcloud"},"Wordclouds with.. the ",n.a.createElement("code",null,"wordcloud")," library 😀"),n.a.createElement("p",null,"The ",n.a.createElement("code",null,"wordcloud")," library takes as input a ",n.a.createElement("code",null,"string")," containing all the words you want to display. It passes it to the ",n.a.createElement("code",null,"Wordcloud()")," function that will compute the display an show it on the screen thanks to the ",n.a.createElement("code",null,"imshow()")," function."),n.a.createElement(d.a,null,n.a.createElement(u.a,{imgName:"261_Custom_Wordcloud1",caption:"Wordcloud customization: word size.",linkTo:"/261-custom-python-wordcloud"}),n.a.createElement(u.a,{imgName:"261_Custom_Wordcloud4",caption:"Wordcloud customization: background color.",linkTo:"/261-custom-python-wordcloud"}),n.a.createElement(u.a,{imgName:"261_Custom_Wordcloud5",caption:"Wordcloud customization: word color.",linkTo:"/261-custom-python-wordcloud"}))),n.a.createElement(y.a,null),n.a.createElement(c.a,null,n.a.createElement("h2",{id:"Custom shapes"},"Wordclouds and custom shapes"),n.a.createElement("p",null,"It is a common need to apply a specific shape to the wordcloud. TODO. Make a bette image. TODO: more proiminent link toward https://github.com/amueller/word_cloud"),n.a.createElement("div",{style:{maxWidth:"750px",margin:"auto"}},n.a.createElement(s.a,{to:"/262-worcloud-with-specific-shape"},n.a.createElement(p.a,{imgName:"262_Wordcloud_with_a_Mask",caption:"Use a mask to get a wordcloud with specific shape."})))),n.a.createElement(y.a,null),n.a.createElement("div",{className:"greySection",id:"related"},n.a.createElement(c.a,null,n.a.createElement(m.a,{chartFamily:"ranking"}))),n.a.createElement(y.a,null),n.a.createElement(c.a,null,n.a.createElement(i.a,null)),n.a.createElement(y.a,null))}},eynx:function(e,a,t){"use strict";t.d(a,"a",(function(){return d}));t("2mCb");var l=t("q1tI"),n=t.n(l),o=t("Wbzz"),r=t("9eSz"),c=t.n(r),i=["animated_chart","animated_gapminder.gif","animated_volcano.gif"];function d(e){var a=e.imgName,t=e.caption;if(i.includes(a))return n.a.createElement("p",null,"TODO");var l=Object(o.c)("3289484431").allFile.edges.find((function(e){return e.node.name.includes(a)}));return l?n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"chartImageContainer"},n.a.createElement(c.a,{alt:a,fluid:l.node.childImageSharp.fluid,className:"chartImageImg"}),n.a.createElement("div",{className:"chartImageOverlay"},n.a.createElement("div",{className:"chartImageOverlayText"},n.a.createElement("p",null,t))))):null}}}]);
//# sourceMappingURL=component---src-pages-wordcloud-js-03291919376e5ba1e637.js.map