'use client'

import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import {
	FacebookIcon,
	GlobeIcon,
	InstagramIcon,
	YoutubeIcon,
	Github,
	Music2,
	Twitter,
	Share2,
} from 'lucide-react'

interface FooterLink {
	title: string
	href: string
}

interface FooterLinkGroup {
	label: string
	links: FooterLink[]
}

export default function Footer() {
	const currentYear = new Date().getFullYear()

	const socialLinks = [
		{ title: 'Website', href: 'https://santri.dev', icon: GlobeIcon },
		{ title: 'Facebook', href: 'https://www.facebook.com/santricyber.dev/', icon: FacebookIcon },
		{ title: 'X', href: 'https://x.com/santricyber', icon: Twitter },
		{ title: 'Instagram', href: 'https://www.instagram.com/santricyber.dev', icon: InstagramIcon },
		{ title: 'YouTube', href: 'https://youtube.com/@santricyberdev', icon: YoutubeIcon },
		{ title: 'TikTok', href: 'https://www.tiktok.com/@santricyber.dev', icon: Music2 },
		{ title: 'GitHub', href: 'https://github.com/santricyber', icon: Github },
		{ title: 'Threads', href: 'https://www.threads.com/@santricyber.dev', icon: Share2 },
	]

	const footerLinkGroups: FooterLinkGroup[] = [
		{
			label: 'Community',
			links: [
				{ title: 'Forum', href: 'https://forum.santricyber.dev' },
				{ title: 'GitHub', href: 'https://github.com/SantriCyber' },
				{ title: 'Blog', href: 'https://santricyber.org' },
				{ title: 'Contact Us', href: '#' },
			],
		},
		{
			label: 'Learning',
			links: [
				{ title: 'Programming', href: 'https://forum.santricyber.dev' },
				{ title: 'Cybersecurity', href: 'https://forum.santricyber.dev' },
				{ title: 'Islamic Tech', href: 'https://forum.santricyber.dev' },
				{ title: 'AI & Innovation', href: 'https://forum.santricyber.dev' },
			],
		},
		{
			label: 'Resources',
			links: [
				{ title: 'Quran', href: 'https://quran.com' },
				{ title: 'Sunnah', href: 'https://sunnah.com' },
				{ title: 'Prayer Times', href: 'http://salah.com' },
				{ title: 'Islamic Knowledge', href: '#' },
			],
		},
		{
			label: 'About',
			links: [
				{ title: 'About Us', href: 'https://forum.santricyber.dev/about' },
				{ title: 'Privacy Policy', href: 'https://forum.santricyber.dev/privacy' },
				{ title: 'Terms of Service', href: 'https://forum.santricyber.dev/tos' },
				{ title: 'Contact Us', href: 'https://forum.santricyber.dev' },
			],
		},
	]

	return (
		<footer
			className="relative w-full bg-gray-900"
			style={{ clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)' }}
		>
			<div className="relative w-full bg-gray-900">
				<div className="w-full overflow-y-auto">
					<div className="relative flex size-full flex-col justify-between gap-5 border-t border-gray-800 px-4 py-8 md:px-12 bg-gray-900">
						{/* Decorative gradients */}
						<div
							aria-hidden
							className="absolute inset-0 isolate z-0 contain-strict overflow-hidden"
						>
							<div className="absolute top-0 left-0 h-80 w-140 -translate-y-1/2 -rotate-45 rounded-full opacity-10 bg-gradient-to-b from-accent/30 to-transparent blur-3xl" />
							<div className="absolute top-0 right-0 h-96 w-96 -translate-y-1/2 -rotate-45 rounded-full opacity-10 bg-gradient-to-b from-accent/20 to-transparent blur-3xl" />
						</div>

						<div className="mt-10 flex flex-col gap-8 md:flex-row xl:mt-0 relative z-10">
							{/* Brand section */}
							<AnimatedContainer className="w-full max-w-sm space-y-4">
								<img
									src="/assets/img/logo.png"
									alt="SantriCyber"
									className="h-36 mb-4"
									loading="lazy"
								/>
								<p className="text-gray-400 text-sm leading-relaxed">
									A community uniting Islamic knowledge with cutting-edge technology. Empowering the next generation of Muslim tech innovators.
								</p>
								<div className="flex gap-3 flex-wrap">
									{socialLinks.map((link) => {
										const Icon = link.icon
										return (
											<a
												key={link.title}
												href={link.href}
												target="_blank"
												rel="noopener noreferrer"
												className="p-2 rounded-lg border border-gray-700 hover:border-accent hover:text-accent hover:bg-accent/10 transition-all duration-300"
												aria-label={link.title}
											>
												<Icon className="w-4 h-4" />
											</a>
										)
									})}
								</div>
							</AnimatedContainer>

							{/* Link groups */}
							{footerLinkGroups.map((group, index) => (
								<AnimatedContainer
									key={group.label}
									delay={0.1 + index * 0.1}
									className="w-full"
								>
									<div>
										<h3 className="text-sm font-semibold uppercase text-white tracking-wide mb-4">
											{group.label}
										</h3>
										<ul className="text-gray-400 space-y-3 text-sm">
											{group.links.map((link) => (
												<li key={link.title}>
													<a
														href={link.href}
														target={link.href.startsWith('http') ? '_blank' : undefined}
														rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
														className="hover:text-accent inline-flex items-center transition-all duration-300 hover:translate-x-1"
													>
														{link.title}
													</a>
												</li>
											))}
										</ul>
									</div>
								</AnimatedContainer>
							))}
						</div>

						{/* Footer bottom */}
						<div className="text-gray-400 flex flex-col items-center justify-between gap-4 border-t border-gray-800 pt-6 text-xs md:flex-row relative z-10">
							<p>&copy; {currentYear} SantriCyber. All rights reserved.</p>
							<p>Designed with care by <a href="https://github.com/syafmovic" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">syafmovic</a></p>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

interface AnimatedContainerProps extends React.ComponentProps<typeof motion.div> {
	children?: React.ReactNode
	delay?: number
}

function AnimatedContainer({
	delay = 0.1,
	children,
	className,
	...props
}: AnimatedContainerProps) {
	const shouldReduceMotion = useReducedMotion()

	if (shouldReduceMotion) {
		return <div className={className}>{children}</div>
	}

	return (
		<motion.div
			initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
			whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
			viewport={{ once: true }}
			transition={{ delay, duration: 0.8, ease: 'easeOut' }}
			className={className}
			{...props}
		>
			{children}
		</motion.div>
	)
}
