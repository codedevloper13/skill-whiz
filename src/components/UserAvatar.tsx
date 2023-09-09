/** @format */

import React from "react";
import { User } from "next-auth";
import { Avatar } from "./ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";
import Image from "next/image";
type Props = {
	user: User;
};

const UserAvatar = ({ user }: Props) => {
	return (
		<Avatar>
			{user.image ? (
				<div className='relative w-full h-full aspect-square'>
					<Image fill src={user.image} alt='user_profile' referrerPolicy='no-referrer' />
				</div>
			) : (
				<AvatarFallback>
					<span className='sr-only'>{user?.name}</span>
				</AvatarFallback>
			)}
		</Avatar>
	);
};

export default UserAvatar;