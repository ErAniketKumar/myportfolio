import React from "react";

function About() {
	return (
		<>
			<div
				name="About"
				className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-12"
			>
				<div className="space-y-4">
					<div>
						<h1 className="text-3xl font-bold mb-2">About Me</h1>
						<p className="text-sm md:text-md text-justify">
							<span className="font-semibold text-lg">I am Aniket Kumar</span> A
							passionate full-stack web developer skilled in creating dynamic
							and responsive web applications using technologies like HTML, CSS,
							JavaScript, React.js, and Node.js. My strong problem-solving
							abilities and expertise in both front-end and back-end development
							enable me to deliver good-quality, scalable solutions.
						</p>
					</div>

					<div>
						<h1 className="text-xl font-semibold text-blue-500">Education</h1>
						<ul>
							<ul>
								<li>
									<strong>
										Bachelor of Engineering (B.E.), Computer Science
									</strong>
									<p>Chitkara University Hp.</p>
									<p>Current (3rd Year)</p>
									<p>CGPA: 9.57/10</p>
								</li>
								<li>
									<strong>Higher Secondary School (12th Grade)</strong>
									<p>P.M.V.S Ramnagar, West Champaran, Bihar</p>
									<p>Percentage: 77.6%</p>
								</li>
							</ul>
						</ul>
					</div>

					<div>
						<h1 className="text-xl font-semibold text-blue-500">
							Skills & Expertise
						</h1>
						<ul>
							<li>
								<strong>Programming Languages:</strong> JavaScript, Python, C++
							</li>
							<li>
								<strong>Web Development:</strong> HTML, CSS, React, Node.js,
								Express.js
							</li>
							<li>
								<strong>Database Management:</strong> MongoDB, MySQL
							</li>
							<li>
								<strong>Tools & Platforms:</strong> Git, GitHub, VS Code,
								IntelliJ IDEA
							</li>
							<li>
								<strong>Algorithms & Data Structures:</strong> Sorting,
								Searching, Dynamic Programming
							</li>
							<li>
								<strong>Soft Skills:</strong> Problem-Solving, Teamwork,
								Communication,Leadership
							</li>
						</ul>
					</div>

					<div>
						<h1 className="text-xl font-semibold text-blue-500">Achievment</h1>
						<ul>
							<li>
								<strong>Problems Solved:</strong> Solved 400+ DSA problems on
								various online platforms, including LeetCode, CodeChef,
								CodeStudio, and GeeksforGeeks.
							</li>
							<li>
								<strong>100 Days of Code Challenge:</strong> Completed the 100
								Days of Code challenge, focusing on solving DSA problems daily,
								contributing to GitHub, and sharing progress on LinkedIn.
								(Jan-April 2024)
							</li>
							<li>
								<strong>Explore AI 2.0 Hackathon with Yamaha:</strong>{" "}
								Shortlisted as a finalist in the national AI 2.0 Hackathon with
								Yamaha for developing a facial recognition system. (April 2023)
							</li>
						</ul>
					</div>

					<div>
						<h1 className="text-xl font-semibold text-blue-500">Extra Work</h1>
						<h3>IEEE Volunteer (Winter 2022 – Present)</h3>
						<p>
							<strong>Chitkara University</strong>
						</p>
						<ul>
							<li>
								Organized tech events and workshops. and coordinated seminars
								and hackathons.
							</li>
						</ul>

						<h3>NSS Volunteer (Spring 2023 – Present)</h3>
						<p>
							<strong>Chitkara University</strong>
						</p>
						<ul>
							<li>Led community service and awareness campaigns.</li>
						</ul>
					</div>
				</div>
			</div>
			<hr />
		</>
	);
}

export default About;
