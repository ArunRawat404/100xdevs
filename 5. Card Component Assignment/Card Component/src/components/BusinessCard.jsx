import { styles } from "../css.js"
import { Social } from "./Socials.jsx"

export function BusinessCard(props) {
    return (
        <div style={styles.card} >
            <h2 style={styles.name}>{props.cards.name}</h2>
            <p style={styles.description}>{props.cards.description}</p>
            <h3 style={styles.interestsHeader}>Interests</h3>
            <ul style={styles.interestsList}>
                {props.cards.interests.map((interest) => {
                    return <li style={styles.interestItem}>{interest}</li>
                })}
            </ul>
            <Social socials={props.cards.socials} ></Social>
        </div>
    )
}
