import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import playIcon from '../public/gradient-play-icon.png'
import heroGraphic from '../public/home-banner-img.svg'
import EventCard from '../components/eventCard'

let eventData: { id: number, name: string }[] = [
    { "id": 0, "name": "Available" },
    { "id": 1, "name": "Ready" },
    { "id": 3, "name": "Started" },
    { "id": 4, "name": "Started" },
    { "id": 5, "name": "Started" },
    { "id": 6, "name": "Started" },
    { "id": 7, "name": "Started" },
];

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Nexus | Home</title>
                <meta name="Nexus presidency" content="Nexus presidency is an anual IT fest" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <section className="hero-section">
                <div className="hero-underlay"></div>
                <div className="container hero-banner-container">
                    <div className="hero-info-col">
                        <div className="hero-info-container">
                            <h1 className="section-title">
                                Enter the Nexus of Creativity
                            </h1>
                            <p className="hero-tagline">sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                            <div className="button-group">
                                <div className="gradient-button-container">
                                    <div className="gradient-btn-underlay"></div>
                                    <button>Sign up Now!!</button>
                                </div>
                                <button className="video-button">
                                    <Image
                                        src={playIcon}
                                        alt="Nexus"
                                        height={17}
                                        width={13}
                                    />
                                    Play Video
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="hero-graphics-col">
                        <div className="hero-graphics-wrapper">
                            <Image
                                src={heroGraphic}
                                alt="Nexus"
                                fill={true}
                                className="hero-graphics"
                            />
                        </div>
                        
                    </div>
                </div>
            </section>
            <section id="events" className="event-section">
                <div className="waves-container">
                    <img src="/wave.svg" alt="wave" />
                </div>
                <div className="event-section-inner">
                    <div className="container centered">
                        <h2 className="section-title">Events</h2>
                        <div className="event-grid">
                            <div className="card-container">
                                <EventCard/>
                            </div>
                            <div className="card-container">
                                <EventCard/>
                            </div>
                            <div className="card-container">
                                <EventCard/>
                            </div>
                            <div className="card-container">
                                <EventCard/>
                            </div>
                            <div className="card-container">
                                <EventCard/>
                            </div>
                            <div className="card-container">
                                <EventCard/>
                            </div>
                            <div className="card-container">
                                <EventCard/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home