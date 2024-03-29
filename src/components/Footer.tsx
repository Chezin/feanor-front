import { Typography } from "@material-tailwind/react";

export function Footer() {
	return (
		<footer className="w-full bg-white p-8 mt-10">
			<div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
				<img
					src="https://docs.material-tailwind.com/img/logo-ct-dark.png"
					alt="logo-ct"
					className="w-10"
				/>
				<ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
					<li>
						<Typography
							as="a"
							href="#"
							color="blue-gray"
							className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
							placeholder="About Us"
						>
							About Us
						</Typography>
					</li>
					<li>
						<Typography
							as="a"
							href="#"
							color="blue-gray"
							className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
							placeholder="License"
						>
							License
						</Typography>
					</li>
					<li>
						<Typography
							as="a"
							href="#"
							color="blue-gray"
							className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
							placeholder="Contribute"
						>
							Contribute
						</Typography>
					</li>
					<li>
						<Typography
							as="a"
							href="#"
							color="blue-gray"
							className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
							placeholder="Contact Us"
						>
							Contact Us
						</Typography>
					</li>
				</ul>
			</div>
			<hr className="my-8 border-blue-gray-50" />
			<Typography
				color="blue-gray"
				className="text-center font-normal"
				placeholder="Company Name"
			>
				&copy; Feanor
			</Typography>
		</footer>
	);
}

export default Footer;
