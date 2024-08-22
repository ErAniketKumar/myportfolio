import React from "react";
import {
	FaHeart,
	FaInstagram,
	FaGithub,
	FaReact,
	FaNodeJs,
	FaLinkedin,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
function Contact() {

	const {
		register,
		handleSubmit,
		formState: { errors },
	  } = useForm()

	  const onSubmit = async (data) => {
		const userInfo = {
			name:data.name,
			email:data.email,
			message:data.message,
		}
		try{
			await axios.post("https://getform.io/f/apjmlnxa",userInfo);
			toast.success("Your message has been sent");
		} catch(err) {
			toast.error('Somthing went wrong')
		}
	  }

	const mediaIcon = [
		{
			id: 1,
			url: "https://github.com/ErAniketKumar",
			icon: <FaGithub />,
		},
		{
			id: 2,
			url: "https://linkedin.com/in/eraniket",
			icon: <FaLinkedin />,
		},
		{
			id: 3,
			url: "https://instagram.com/eraniket95",
			icon: <FaInstagram />,
		},
		{
			id: 4,
			url: "",
			icon: <FaSquareXTwitter />,
		},
	];
	return (
		<>
			<div name="Contact" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-12">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<div className="shadow-md p-4">
					<div className="flex flex-col">
						<h1 className="text-3xl font-semibold mb-4 text-green-400">Connect with me</h1>
						<p className="flex text-xl space-x-2 mb-5">
							<MdEmail className="mt-1" /> <span>eraniket95@hotmail.com</span> 
						</p>
					</div>
					
					<div className="flex text-2xl space-x-4">
						{mediaIcon.map(({ id, url, icon }) => (
							<NavLink
								key={id}
								to={url}
								target="_blank"
								rel="noopener noreferrer"
							>
								{icon}
							</NavLink>
						))}
					</div>

					</div>
					

					<div className="shadow-md p-4 border">
						<h1 className="mb-3 text-3xl font-bold text-green-400">Send Your Message</h1>
						<form
						 onSubmit={handleSubmit(onSubmit)}
						//  className="" action="https://getform.io/f/apjmlnxa" 
						//  method="POST"
						 >
							<label
								htmlFor="uname"
								className="block mb-2 text-sm font-medium text-gray-900"
							>
								Full Name
							</label>
							<input
								{...register("name", { required: true })}
								type="input"
								name="name"
								id="uname"
								aria-describedby="helper-text-explanation"
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder="Aniket"
							/>
							    {errors.name  && <span>This field is required</span>}

							<label
								htmlFor="email"
								className="block mb-2 text-sm font-medium text-gray-900"
							>
								Your email
							</label>
							<input
								{...register("email", { required: true })}
								type="email"
								name="email"
								id="email"
								aria-describedby="helper-text-explanation"
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder="name@flowbite.com"
							/>
							{errors.email && <span>This field is required</span>}

							<label
								htmlFor="message"
								className="block mb-2 text-sm font-medium text-gray-900"
							>
								Your message
							</label>
							<textarea
								{...register("message", { required: true })}
								id="message"
								name="message"
								rows="4"
								className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder="Leave a comment..."
							></textarea>
							{errors.message && <span>This field is required</span>}


							<button
								type="submit"
								className="mt-2 bg-blue-500 text-white font-medium py-2 px-5 rounded-md hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
							>
								Send
							</button>
						</form>
					</div>
				</div>
						{/* footer */}
				<div className="flex flex-col items-center mt-5">
					<p>©2024 Aniket. All rights reserved</p>
					<p className="flex space-x-2">
						<span className="text-sm">Web Development</span>
						<span className="text-red-700">
							<FaHeart />
						</span>
					</p>
				</div>
			</div>
		</>
	);
}

export default Contact;
