const html = [
    {
        questionNumber: 1,
        questionTitle: "What is the purpose of the <track> tag, and when should it be used?",
        answer: [
            "The <track> tag is used for specifying subtitles. It is typically applied as a child of the <audio> and <video> tags.",
            "The <track> tag is used for specifying subtitles. It is typically applied as a child of the <video> tag.",
            "The <track> tag is used for specifying subtitles, captions, and other types of time-based text. It is typically applied as a child of the <video> tag.",
            "The <track> tag is used for specifying subtitles, captions, and other types of time-based text. It is typically applied as a child of the <audio> and <video> tag.",
        ],
        correctAnswer: "The <track> tag is used for specifying subtitles, captions, and other types of time-based text. It is typically applied as a child of the <audio> and <video> tag."
    },
    {
        questionNumber: 2,
        questionTitle: "What are the best examples of void elements?",
        answer: [
            "<br><base><source>",
            "<link><meta><title>",
            "<input><br><p>",
            "<area><embed><strong>",
        ],
        correctAnswer: "<br><base><source>"
    },
    {
        questionNumber: 3,
        questionTitle: "In HTML5, which tag or tags embed a webpage inside of a webpage?",
        answer: [
            "<iframe>, <frame>, and <frameset>",
            "<frame>",
            "<iframe>",
            "<frame> and <frameset>",
        ],
        correctAnswer: "<iframe>"
    },
    {
        questionNumber: 4,
        questionTitle: "Where do <header> and <footer> tags typically occur?",
        answer: [
            "as children of <body>, <article>, <aside>, and <section> tags",
            "as children of <body>, <article>, and <section> tags",
            "as children of <body>, <article>, <aside>, <nav>, and <section> tags",
            "as children of <body>, <article>, <table>, and <section> tags",
        ],
        correctAnswer: "as children of <body>, <article>, and <section> tags"
    },
    {
        questionNumber: 5,
        questionTitle: "What is the best way to apply bold styling to text?",
        answer: [
            "<strong>",
            "Use CSS.",
            "<bold>",
            "<b>",
        ],
        correctAnswer: "<strong>"
    },
]

const css = [
    {
        questionNumber: 1,
        questionTitle: "Using an attribute selector, how would you select an <a> element with a 'title' attribute?",
        answer: [
            "a[title]{...}",
            "a > title {...}",
            "a.title {...}",
            "a=title {...}",
        ],
        correctAnswer: "a[title]{...}"
    },
    {
        questionNumber: 2,
        questionTitle: "CSS grid and flexbox are now becoming a more popular way to create page layouts. However, floats are still commonly used, especially when working with an older code base, or if you need to support older browser version. What are two valid techniques used to clear floats?",
        answer: [
            "Use the 'clearfix hack' on the floated element and add a float to the parent element.",
            "Use the overflow property on the floated element or the 'clearfix hack' on either the floated or parent element.",
            "Use the 'clearfix hack' on the floated element or the overflow property on the parent element.",
            "Use the 'clearfix hack' on the parent element or use the overflow property with a value other than 'visible.",
        ],
        correctAnswer: "Use the 'clearfix hack' on the parent element or use the overflow property with a value other than 'visible."
    },
    {
        questionNumber: 3,
        questionTitle: "What is true of block and inline elements? (Alternative: Which statement about block and inline elements is true?)",
        answer: [
            "By default, block elements are the same height and width as the content container between their tags; inline elements span the entire width of its container.",
            "By default, block elements span the entire width of its container; inline elements are the same height and width as the content contained between their tags.",
            "A <nav> element is an example of an inline element. <header> is an example of a block element.",
            "A <span> is an example of a block element. <div> is an example of an inline element.",
        ],
        correctAnswer: "By default, block elements span the entire width of its container; inline elements are the same height and width as the content contained between their tags."
    },
    {
        questionNumber: 4,
        questionTitle: "What is the line-height property primarily used for?",
        answer: [
            "to control the height of the space between two lines of content",
            "to control the height of the space between heading elements",
            "to control the height of the character size",
            "to control the width of the space between characters",
        ],
        correctAnswer: "to control the height of the space between two lines of content"
    },
    {
        questionNumber: 5,
        questionTitle: "Three of these choices are true about class selectors. Which is NOT true?",
        answer: [
            "Multiple classes can be used within the same element.",
            "The same class can be used multiple times per page.",
            "Class selectors with a leading period",
            "Classes can be used multiple times per page but not within the same element.",
        ],
        correctAnswer: "Classes can be used multiple times per page but not within the same element."
    },
]
const js = [
    {
        questionNumber: 1,
        questionTitle: "Which operator returns true if the two compared values are not equal?",
        answer: [
            "<>",
            "~",
            "==!",
            "!==",
        ],
        correctAnswer: "!=="
    },
    {
        questionNumber: 2,
        questionTitle: "How is a forEach statement different from a for statement?",
        answer: [
            "Only a for statement uses a callback function.",
            "A for statement is generic, but a forEach statement can be used only with an array.",
            "Only a forEach statement lets you specify your own iterator.",
            "A forEach statement is generic, but a for statement can be used only with an array.",
        ],
        correctAnswer: "A for statement is generic, but a forEach statement can be used only with an array."
    },
    {
        questionNumber: 3,
        questionTitle: "Which statement is the correct way to create a variable called rate and assign it the value 100?",
        answer: [
            "let rate = 100;",
            "let 100 = rate;",
            "100 = let rate;",
            "rate = 100;",
        ],
        correctAnswer: "let rate = 100;"
    },
    {
        questionNumber: 4,
        questionTitle: "Which statement creates a new object using the Person constructor? Which statement creates a new Person object called 'student'?",
        answer: [
            "var student = new Person();",
            "var student = construct Person;",
            "var student = Person();",
            "var student = construct Person();",
        ],
        correctAnswer: "var student = new Person();"
    },
    {
        questionNumber: 5,
        questionTitle: "You need to match a time value such as 12:00:32. Which of the following regular expressions would work for your code?",
        answer: [
            "/[0-9]{2,}:[0-9]{2,}:[0-9]{2,}/",
            "/\d\d:\d\d:\d\d/",
            "/[0-9]+:[0-9]+:[0-9]+/",
            "/ : : /",
        ],
        correctAnswer: "/\d\d:\d\d:\d\d/"
    },
]

export { html, css, js };


