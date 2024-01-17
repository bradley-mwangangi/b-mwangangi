const INFO = {
	main: {
		title: "Bradley Mwangangi",
		name: "B. Mwangangi",
		email: "null",
		logo: "../logo.png",
	},

	socials: {
		twitter: "https://twitter.com/mwangangi_dev",
		github: "https://github.com/bradley-mwangangi",
		linkedin: "https://www.linkedin.com/in/bradley-mwangangi/",
	},

	homepage: {
		title: "Software Developer - Backend.",
		description:
			`
			I am a skilled and passionate API developer with a focus on Spring Boot.
			With a background in Business IT, I bring a blend of expertise and creativity to every project.
			My commitment to clean coding practices ensures that I deliver not only functional APIs but also
			the clarity to understand and maintain them.
			`
	},

	about: {
		title: "I’m Bradley Mwangangi. I solve business problems by writing software.",
		description:
			`
			As a dedicated backend developer with a strong focus on Java, I've spent the past year honing my coding skills while pursuing my education at ALX.
			I take pride in the progress I've made so far, evidenced by a blog API I created (BlogIt), a project whose depth demonstrate my proficiency in Java development.

			I'm committed to continuous learning and improvement and enthusiastic about embracing new ideas and challenges, leveraging each opportunity as a chance to
			further develop my skills and contribute meaningfully to the world of software engineering.
			`
	},

	articles: {
		title:
			`
			My commitment in the tech world goes beyong coding and systems development.
			`,
		description:
			`
			I'm equally passionate about expressing ideas through the art of technical writing.
			While I'm not a full-time writer, this is an interest I consider pursuing more in the future. Meanwhile, here's a glimpse into my writing.
			`,
	},

	projects: [
		{
			title: "BlogIt API",
			description:
				`
				This is a blog site API written in Spring Boot. I implemented auth features utilizing Spring Security.
				The project also has role-based access control baked in, ensuring that system users can only perform actions aligned with their assigned roles.
				For instance, only users with "Author" role have the privilege to create publications,
				and moderators have the authority to delete comments and posts that contravene the site's guidelines.
				`,
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/java/java.png",
			linkText: "View Project",
			link: "https://github.com/bradley-mwangangi/blogit-api",
		},

		{
			title: "BlogIt",
			description:
				`
				BlogIt is a React web application that utilizes the BlogIt API on the backend.
				Through this project I got to learn a lot about JavaScript and UI styling.
				`,
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			linkText: "View Project",
			link: "https://github.com/bradley-mwangangi/blogit",
		},

		{
			title: "Simple Shell",
			description:
				`
				Simple Shell is a project I built to fulfill course requirement as an ALX SE student.
				Diving deep into C programming, I got to learn about structs, effective memory management, and system calls.
				I got to improve on my collaboration skills too as this was a two-person team project.
				`,
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/c/c.png",
			linkText: "View Project",
			link: "https://github.com/bradley-mwangangi/simple_shell",
		},

		// {
		// 	title: "Project 4",
		// 	description:
		// 		"Lorem ipsum dolor sit amet. Et incidunt voluptatem ex tempore repellendus qui dicta nemo sit deleniti minima.",
		// 	logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
		// 	linkText: "View Project",
		// 	link: "https://github.com",
		// },

		// {
		// 	title: "Project 5",
		// 	description:
		// 		"Lorem ipsum dolor sit amet. Et incidunt voluptatem ex tempore repellendus qui dicta nemo sit deleniti minima.",
		// 	logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
		// 	linkText: "View Project",
		// 	link: "https://github.com",
		// },
	],
};

export default INFO;
