import { Navbar, Typography, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export function Header() {
	const navList = (
		<ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
			<Typography
				as="li"
				variant="small"
				color="blue-gray"
				className="p-1 font-normal"
				placeholder="Pages"
			>
				<a href="#" className="flex items-center">
					Pages
				</a>
			</Typography>
			<Typography
				as="li"
				variant="small"
				color="blue-gray"
				className="p-1 font-normal"
				placeholder="Account"
			>
				<a href="#" className="flex items-center">
					Account
				</a>
			</Typography>
			<Typography
				as="li"
				variant="small"
				color="blue-gray"
				className="p-1 font-normal"
				placeholder="Blocks"
			>
				<a href="#" className="flex items-center">
					Blocks
				</a>
			</Typography>
			<Typography
				as="li"
				variant="small"
				color="blue-gray"
				className="p-1 font-normal"
				placeholder="Docs"
			>
				<a href="#" className="flex items-center">
					Docs
				</a>
			</Typography>
		</ul>
	);

	return (
		<div>
			<Navbar
				className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4"
				placeholder="NavBar"
			>
				<div className="flex items-center justify-between text-blue-gray-900">
					<Link to="/">
						<Typography
							as="a"
							href="#"
							className="mr-4 cursor-pointer py-1.5 font-normal font-thin"
							placeholder="Feanor"
						>
							Feanor
						</Typography>
					</Link>
					<div className="flex items-center gap-4">
						<div className="mr-4 hidden lg:block">{navList}</div>
						<div className="flex items-center gap-x-1">
							<Link to="/login">
								<Button
									variant="text"
									size="sm"
									className="hidden lg:inline-block"
									placeholder="Log In"
								>
									<span>Log In</span>
								</Button>
							</Link>
							<Link to="/signup">
								<Button
									variant="gradient"
									size="sm"
									className="hidden lg:inline-block"
									placeholder="Sign In"
								>
									<span>Sign Up</span>
								</Button>
							</Link>
						</div>
					</div>
				</div>
			</Navbar>
		</div>
	);
}

export default Header;
