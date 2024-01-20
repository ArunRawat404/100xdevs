import { styles } from "../css.js"

export function Social(props) {
    return <div style={styles.socialLinks}>
        {props.socials.map((social) => {
            return <a href={social.link} target="_blank">
                <button style={styles.link}>{social.socialName}</button>
            </a>
        })}
    </div>
}