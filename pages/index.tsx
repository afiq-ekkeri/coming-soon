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
                                Coming Soon
                            </h1>
                            <p className="hero-tagline">Registrations will start from 7th Nov, Stay tuned.</p>
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

                </div>
            </section>
        </>
    )
}

export default Home