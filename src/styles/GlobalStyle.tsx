import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	vertical-align: baseline;
	box-sizing: border-box;
	font-family: 'Noto Sans KR', 'Roboto'; 
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section, main {
	display: block;
}
html{
	width: 100%;
	height: 100%;
}
body {
	line-height: normal;
	width: 100%;
	height: 100%;
	//드래그 불가능하게 설정
	-webkit-user-select: none; 
  	-moz-user-select: none;   
 	-ms-user-select: none;     
 	user-select: none;      
}
p{
	font-family: 'Noto Sans KR', 'Roboto'; 
}
a {
	text-decoration: none;
	color: inherit
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
#root{
	width: 100%;
	height: 100%;
	// background: #eee;
}
`;

export default GlobalStyle;
