export default {
	async fetch(request): Promise<Response> {
		const html = `<!DOCTYPE html>
		<body>
		  <h1>Writing the next chapter.</h1>
		  <p>Thanks for stopping by! Nickepcot.com or nicholascastiglione.com is currently under maintainence at the moment, so please check back later!</p>
		</body>`;

		return new Response(html, {
			headers: {
				"content-type": "text/html;charset=UTF-8",
			},
		});
	},
} satisfies ExportedHandler;
