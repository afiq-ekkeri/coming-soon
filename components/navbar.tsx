import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router';
import logo from '../public/nexus-logo-white.svg'
import homeIcon from '../public/home-icon.svg'
import eventsIcon from '../public/events-icon.svg'
import registerIcon from '../public/account-icon.svg'
import aboutIcon from '../public/sheet-icon.svg'
import layout from './layout';


type Props = {}

export default function navbar({}: Props) {
    const router = useRouter();
    return (
        <section className="nav-section">
            <div className="container">
                <div className="nav-wrapper">
                    <div className="nav-underlay"></div>
                    <div className="nav">
                        <Link href="/" className="logo-container">
                            <Image
                                src={logo}
                                className="contain-image"
                                alt="Nexus"
                                fill={true}
                            />
                        </Link>
                        <div className="nav-list" id="mainListDiv">
                            <ul className="navbar-nav">
                                <div className="nav-list-underlay"></div>
                                <li className="nav-item">
                                    <Link href="/" className={router.pathname == "/" ? "nav-link active" : "nav-link"}>
                                        <span className="nav-link-icon">
                                            <Image
                                                src={homeIcon}
                                                className="contain-image"
                                                alt="Nexus"
                                                fill={true}
                                            />
                                        </span>
                                        <span>Home</span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" href="#events">
                                        <span className="nav-link-icon">
                                            <Image
                                                src={eventsIcon}
                                                className="contain-image"
                                                alt="Nexus"
                                                fill={true}
                                            />
                                        </span>
                                        <span>Events</span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" href="#">
                                        <span className="nav-link-icon">
                                            <Image
                                                src={aboutIcon}
                                                className="contain-image"
                                                alt="Nexus"
                                                fill={true}
                                            />
                                        </span>
                                        <span>About</span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="/register" className={router.pathname == "/register" ? "nav-link active" : "nav-link"}>
                                        <span className="nav-link-icon">
                                            <Image
                                                src={registerIcon}
                                                className="contain-image"
                                                alt="Nexus"
                                                fill={true}
                                            />
                                        </span>
                                        <span>Register</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}