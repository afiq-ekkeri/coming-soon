import React from 'react'
import Image from 'next/image';
import arrowRight from '../public/arroe-right.svg'
import eventImage from '../public/events/runtime-error.webp'
import styles from '../styles/EventCard.module.css'

type Props = {}

export default function eventCard({}: Props) {
    return (
        <div className={styles.cardContainer}>
            <div className={styles.cardImageContainer}>
                <Image
                    src={eventImage}
                    alt="go"
                    fill={true}
                />
            </div>
            <div className={styles.cardInfoContainer}>
                <div className={styles.cardTitleRow}>
                    <h4 className={styles.cardTitle}>Runtime Error</h4>
                    <Image
                        src={arrowRight}
                        alt="go"
                        className={styles.icon}
                        height={8}
                        width={14}
                    />
                </div>
                <p>The perfect platform for you to express your love for coding, test your critical thinking and also flex your skills too. </p>
            </div>
        </div>
    )
}