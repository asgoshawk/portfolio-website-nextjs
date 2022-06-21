import Link from "next/link"
import { FaLinkedin, FaGithub, FaCopyright } from "react-icons/fa"
import Logo from "../public/assets/svg/AGLogo.svg"

const Footer = () => {
    const year = new Date().getFullYear()

    return (
        <footer className="w-full mt-auto flex flex-col items-center justify-center bg-background">
            <div className="w-4/5 lg:w-3/5 py-4 sm:py-6 ">
                <div className="flex items-center justify-between md:flex-row">
                    <Link href='/' >
                        <a className="flex items-center mb-4 sm:mb-0">
                            <Logo className="mr-3 h-6 w-6 md:h-8 md:w-8" />
                            <span className="self-center text-2xl whitespace-nowrap text-surface">AsGoshawk</span>
                        </a>
                    </Link>
                    <ul className="flex flex-wrap items-center mb-4 text-sm sm:mb-0 text-gray-400">
                        <li className="mr-4 md:mr-6 py-[auto]">
                            <a
                                href="https://github.com/asgoshawk"
                                className="block hover:text-primary transition-color ease-in-out duration-300"
                                target="_blank"
                                rel="noreferrer noopener">
                                <FaGithub className="text-2xl" />
                            </a>
                        </li>
                        <li className="mr-4 md:mr-6">
                            <a
                                href="https://linkedin.com/in/asgoshawk"
                                className="block hover:text-primary transition-color ease-in-out duration-300"
                                target="_blank"
                                rel="noreferrer noopener">
                                <FaLinkedin className="text-2xl" />
                            </a>
                        </li>
                        <li className="">
                            <a
                                href="https://cakeresume.com/me/asgoshawk"
                                className="block hover:text-primary transition-color ease-in-out duration-300"
                                target="_blank"
                                rel="noreferrer noopener">
                                <FaCopyright className="text-2xl" />
                            </a>
                        </li>
                    </ul>
                </div>
                <hr className="w-full my-6 border-gray-400 sm:mx-auto lg:my-8" />
                <div className="block text-sm text-gray-400 text-center">
                    Copyright &copy; {year} AsGoshawk. All rights Reserved.
                    <br />
                    Powered by <span>
                        <a href="https://nextjs.org"
                            className="underline hover:text-primary transition-color ease-in-out duration-300"
                            target="_blank"
                            rel="noreferrer noopener">
                            Next.js
                        </a>
                    </span>

                </div>
            </div>
        </footer>
    )
}

export default Footer