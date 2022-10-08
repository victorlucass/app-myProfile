import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
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
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
	color: ${(props) => props.theme.c13};
	font-family: "Fira Sans", Arial, sans-serif;
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
img {
	max-width: 100%;
	display: block;
}
strong {
	color: ${(props) => props.theme.c13};
	font-weight: 700;
	line-height: 32px;
}

.paragraphStyleDefault {
	font-size: 1.5rem;
	line-height: 1.33;
	font-weight: 400;
	max-width: 40ch;
	margin-bottom: ${pixelToRem(60)};
    color: ${(props) => props.theme.c10};
	font-style: normal;
}
`;

// functions / consts

export function pixelToRem(valor: number): string {
  return valor / 16 + "rem";
}

export const containerDefault = `
padding: ${pixelToRem(40)} ${pixelToRem(20)};
max-width: ${pixelToRem(1200)}; margin: 0 auto; display: grid;
grid-template-columns: 1fr 2fr;
gap: ${pixelToRem(100)};
`;

export const subtitleDefault = `
	font-size: 8rem;
	line-height: 1;
	text-transform: uppercase;
	word-break: break-all;
	max-width: 4ch;
`;
