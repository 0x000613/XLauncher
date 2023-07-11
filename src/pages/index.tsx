import { FC } from "react";
import { Layout } from "../components/Layout";

export const IndexPage: FC = () => {
	return (
		<Layout>
			<div className='w-full h-full bg-[#080302] opacity-90 p-[0.1rem] rounded-2xl overflow-hidden'>
				<div className='p-2'>
					<div className='w-full flex bg-[#101223] px-1 py-2 rounded-xl overflow-hidden'>
						<img src='/assets/images/UI/logo.svg' alt='XLauncher' width='38px' height='38px' />
						<h1 className='text-[1rem] font-extrabold text-white my-auto ml-3'>XLauncher</h1>
					</div>
					<div className='flex text-white cursor-pointer my-3'>
						<div className='bg-[#101223] p-2 rounded-2xl overflow-hidden'>
							<img src='/assets/images/UI/Steam.png' alt='Steam' width='100px' height='100px' />
						</div>
					</div>
					<div className='flex text-white cursor-pointer my-3'>
						<div className='bg-[#ffe812] p-2 rounded-2xl overflow-hidden'>
							<img src='/assets/images/UI/KakaoTalk.png' alt='KakaoTalk' width='100px' height='100px' />
						</div>
					</div>
					<div className='flex text-white cursor-pointer my-3'>
						<div className='bg-[#FFFFFF] p-2 rounded-2xl overflow-hidden'>
							<img src='/assets/images/UI/YoutubeMusic.png' alt='Youtube Music' width='100px' height='100px' />
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};
