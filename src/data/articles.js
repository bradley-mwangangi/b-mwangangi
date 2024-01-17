import React from "react";

function article_1() {
	return {
		date: "7 May 2023",
		title: "JPA Shortcomings",
		description:
			"While JPA is a great tool for database ...",
		keywords: [
			"JPA",
			"Database"
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">Content of article 1</div>
					<img
						src="https://picsum.photos/200/300"
						alt="random"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "7 May 2023",
		title: "Advice to new developers",
		description:
			`
			You just learned about software development. You're all excited and adrenaline is rushing in
			your anticipation to dive into this world of writing computer instructions...
			`,
		style: ``,
		keywords: [
			"",
			"",
			"",
		],
		body: (
			<React.Fragment>
				<h1>Content of article 2</h1>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;
