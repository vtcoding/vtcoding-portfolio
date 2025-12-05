import styles from "./App.module.css";
import DartsScores from "./assets/darts-scores.png";
import GridSnap from "./assets/grid-snap.png";
import MatchTrip from "./assets/matchtrip.png";

const App = () => {
  return (
    <div className={styles.app}>
      <div className={`${styles.about} ${styles.section}`}>
        <div className={styles.container}>
          <div className={styles.heading}>VILLE'S PORTFOLIO</div>
          <div className={styles.line}></div>
          <div className={styles.description}>
            A collection of my personal projects built for learning and experimentation, including technologies I use.
            Scroll down to see more.
          </div>
        </div>
      </div>
      <div className={`${styles.tech} ${styles.section}`}>
        <div className={styles.container}>
          <div className={styles.heading}>Technologies</div>
          <div className={styles.line}></div>
          <div className={styles.technologies}>
            <div className={`${styles.technology} ${styles.react}`}>React</div>
            <div className={`${styles.technology} ${styles.typescript}`}>Typescript</div>
            <div className={`${styles.technology} ${styles.css}`}>CSS</div>
            <div className={`${styles.technology} ${styles.django}`}>Django</div>
            <div className={`${styles.technology} ${styles.python}`}>Python</div>
            <div className={`${styles.technology} ${styles.postgresql}`}>PostgreSQL</div>

            <div className={`${styles.technology} ${styles.github}`}>GitHub</div>
            <div className={`${styles.technology} ${styles.docker}`}>Docker</div>
            <div className={`${styles.technology} ${styles.jira}`}>Jira</div>

            <div className={`${styles.technology} ${styles.copilot}`}>Copilot</div>
            <div className={`${styles.technology} ${styles.vscode}`}>VSCode</div>

            <div className={`${styles.technology} ${styles.chatgpt}`}>ChatGPT</div>
            <div className={`${styles.technology} ${styles.gemini}`}>Gemini AI</div>
          </div>
        </div>
      </div>
      <div className={`${styles.projects} ${styles.section}`}>
        <div className={styles.container}>
          <div className={styles.heading}>Projects</div>
          <div className={styles.line}></div>
          <div className={styles.projectList}>
            
            {/* Darts Scores */}
            <div onClick={() => window.open("https://darts-scores.vtcoding.click", "_blank", "noopener,noreferrer")} className={styles.project}>
              <div className={styles.projectTitle}>Darts Scores</div>
              <img className={styles.image} src={DartsScores} />
              <div className={`${styles.status} ${styles['status-deployed']}`}>Status: deployed</div>
              <div className={styles.projectDescription}>App for keeping count of personal darts matches, practice and viewing statistics</div>
              <div className={styles.projectTechnologies}>
                <div className={`${styles.projectTechnology} ${styles.react}`}>React</div>
                <div className={`${styles.projectTechnology} ${styles.typescript}`}>Typescript</div>
                <div className={`${styles.projectTechnology} ${styles.css}`}>CSS</div>
                <div className={`${styles.projectTechnology} ${styles.django}`}>Django</div>
                <div className={`${styles.projectTechnology} ${styles.python}`}>Python</div>
                <div className={`${styles.projectTechnology} ${styles.postgresql}`}>PostgreSQL</div>
                <div className={`${styles.projectTechnology} ${styles.docker}`}>Docker</div>
              </div>
            </div>

            {/* Gridsnap */}
            <div onClick={() => window.open("https://vtcoding.github.io/gridsnap/", "_blank", "noopener,noreferrer")} className={styles.project}>
              <div className={styles.projectTitle}>Gridsnap</div>
              <img className={styles.image} src={GridSnap} />
              <div className={`${styles.status} ${styles['status-deployed']}`}>Status: deployed</div>
              <div className={styles.projectDescription}>App for configuring numbered grid over an image</div>
              <div className={styles.projectTechnologies}>
                <div className={`${styles.projectTechnology} ${styles.react}`}>React</div>
                <div className={`${styles.projectTechnology} ${styles.typescript}`}>Typescript</div>
                <div className={`${styles.projectTechnology} ${styles.css}`}>CSS</div>
              </div>
            </div>

            {/* Matchtrip */}
            <div className={styles.project}>
              <div className={styles.projectTitle}>Matchtrip</div>
              <img className={styles.image} src={MatchTrip} />
              <div className={`${styles.status} ${styles['status-under-development']}`}>Status: under development</div>
              <div className={styles.projectDescription}>App for searching sport fixtures inside specific kilometer range and timerange</div>
              <div className={styles.projectTechnologies}>
                <div className={`${styles.projectTechnology} ${styles.react}`}>React</div>
                <div className={`${styles.projectTechnology} ${styles.typescript}`}>Typescript</div>
                <div className={`${styles.projectTechnology} ${styles.css}`}>CSS</div>
                <div className={`${styles.projectTechnology} ${styles.django}`}>Django</div>
                <div className={`${styles.projectTechnology} ${styles.python}`}>Python</div>
                <div className={`${styles.projectTechnology} ${styles.postgresql}`}>PostgreSQL</div>
              </div>
            </div>

            {/* ParkCheck */}
            <div className={styles.project}>
              <div className={styles.projectTitle}>ParkCheck</div>
              <div className={`${styles.status} ${styles['status-planning']}`}>Status: planning</div>
              <div className={styles.projectDescription}>App for clarifying parking sign rules wherever you park</div>
              <div className={styles.projectTechnologies}>
                <div className={`${styles.projectTechnology} ${styles.django}`}>Django</div>
                <div className={`${styles.projectTechnology} ${styles.gemini}`}>Gemini AI</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default App
