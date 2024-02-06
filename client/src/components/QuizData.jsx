
const qBank = [
	{
		id: 1,
		question: "What does HTML stand for?",
		options: ["Hyperlinks and Text Markup Language", "Hyper Text Markup language", "both are right", "Hyper text Marked Languages"],
		answer: "Hyper Text Markup language",
		explaination:"HTML is a combination of Hypertext and Markup language.Hypertext defines the link between the web pages and markup language defines the text document within the tag. HTML is a markup language used by the browser to manipulate text, images, and other content, in order to display it in the required format. HTML was created by Tim Berners-Lee in 1991. The first-ever version of HTML was HTML 1.0, but the first standard version was HTML 2.0, published in 1995.",
	},
	{
		id: 2,
		question: "Choose the correct HTML element for the largest heading?",
		options: ["<h1>", "<h6>>", "<head>", "<header>"],
		answer: "<h1>",
		explaination:"In HTML, headings are represented by <h1> to <h6> tags, where <h1> is the largest and <h6> is the smallest. Therefore, for the largest heading, the correct HTML element is <h1>.",
	},
	{
		id: 3,
		question: "What is the correct HTML element for inserting a line break?",
		options: ["<br>", "<break>", "lb", "none"],
		answer: "<br>",
		explaination:"The correct HTML element for inserting a line break is the <br> tag. This tag is used to create a line break within text or other HTML elements, effectively moving the content that follows it to a new line.",
	},
	{
		id: 4,
		question: "Choose the correct HTML tag to define emphasized text?",
		options: ["<em>", "<i>", "<italic>", "<me>"],
		answer: "<em>",
		explaination:"<em> tag is used to emphasize text, <i> is used to italic text.",
	},
	{
		id: 5,
		question: "How can you make a numbered list?",
		options: ["<ul>", "<ol>", "<dl>", "<list>"],
		answer: "<ol>",
		explaination:"you can create lists using the <ul> (unordered list) and <ol> (ordered list) tags.",
	},
]

export default qBank;
