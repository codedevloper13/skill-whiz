/** @format */
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getAuthSession } from "@/lib/auth";
import SignInButton from "./SignInButton";
import UserAccountNav from "./UserAccountNav";

type Props = {};

const Navbar = async (props: Props) => {
	const session = await getAuthSession();

	return (
		<div>
			{/* Navigation */}
			<nav className='fixed inset-x-0 bg-white dark:bg-gray-950 z-[10] h-fit border-b border-zinc-350 py-2 shadow'>
				<div className='flex items-center justify-between px-4 sm:px-8 mx-auto max-w-7xl'>
					{/* Logo */}
					<Link href='/' className='flex items-center gap-2'>
						<Image src='/SkillWhiz.png' alt='logo' width={210} height={30} unoptimized className='pt-5 pb-5' />
					</Link>
					<div className=' sm:flex items-center space-x-4'>
						<Link href='/gallery' className='text-gray-500 hover:text-gray-700'>
							Gallery
						</Link>
						{session?.user && (
							<>
								<Link href='/create' className='text-gray-500 hover:text-gray-700'>
									Create Course
								</Link>
								<Link href='/settings' className='text-gray-500 hover:text-gray-700'>
									Settings
								</Link>
							</>
						)}

						<div className='flex items-center'>{session?.user ? <UserAccountNav user={session.user} /> : <SignInButton />}</div>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
