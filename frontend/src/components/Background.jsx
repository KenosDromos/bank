import { useEffect } from 'react'
import gsap from 'gsap'

export const Background = () => {
	useEffect(() => {
		gsap.to('.blur-spot-1', {
			duration: 4,
			x: 50,
			y: -30,
			scale: 1.1,
			opacity: 0.3,
			repeat: -1,
			yoyo: true,
			ease: 'power1.inOut',
		})

		gsap.to('.blur-spot-2', {
			duration: 6,
			x: -40,
			y: 30,
			scale: 1.2,
			opacity: 0.5,
			repeat: -1,
			yoyo: true,
			ease: 'power1.inOut',
		})
	}, [])

	return (
		<div className='bg-black background-blur absolute inset-0 overflow-hidden -z-10'>
			<div
				className='blur-spot-1 absolute bottom-[20%] -left-[10%] w-[400px] h-[400px] bg-green rounded-full opacity-20'
				style={{ filter: 'blur(100px)' }}
			></div>

			<div
				className='blur-spot-2 absolute top-0 -right-[10%] w-[500px] h-[500px] bg-green rounded-full opacity-40'
				style={{ filter: 'blur(125px)' }}
			></div>
		</div>
	)
}
