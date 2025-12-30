import { useState } from 'react';
import styles from "./App.module.css";
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import DartsScores from "./assets/darts-scores.png";
import DartsScores2 from "./assets/darts-scores-2.png";
import DartsScores3 from "./assets/darts-scores-3.png";
import GridSnap from "./assets/grid-snap.png";
import GridSnap2 from "./assets/grid-snap-2.png";
import MatchTrip from "./assets/matchtrip.png";
import Parking from "./assets/parking.png";
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const App = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex(prev => 
      prev === selectedProject.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex(prev => 
      prev === 0 ? selectedProject.images.length - 1 : prev - 1
    );
  };

  const openProject = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const scrollToTech = () => {
    const techSection = document.querySelector(`.${styles.tech}`);
    techSection.scrollIntoView({ behavior: 'smooth' });
  };


  const closeProject = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  const handleModalClick = (e) => {
    if (e.target === e.currentTarget) {
      closeProject();
    }
  };
  return (
    <div className={styles.app}>
      <div className={`${styles.about} ${styles.section}`}>
        <div className={styles.container}>
          <div className={styles.contentWrapper}>
            <div className={styles.heading}>VILLE'S PORTFOLIO</div>
            <div className={styles.line}></div>
            <div className={styles.description}>
              A collection of my personal projects built for learning and experimentation, including technologies I use.
              Scroll down to see more.
            </div>
          </div>
          <div className={styles.arrowContainer}>
            <ArrowCircleDownIcon 
              onClick={scrollToTech} 
              className={styles.arrowIcon}
            />
          </div>
        </div>
      </div>
      <div className={`${styles.tech} ${styles.section}`}>
        <div className={styles.container}>
          <div className={styles.heading}>Technologies</div>
          <div className={styles.line}></div>
          
          <div className={styles.techCategory}>
            <h3 className={styles.categoryTitle}>Languages & Frameworks</h3>
            <p className={styles.categoryDescription}>Core technologies I use to build applications.</p>
            <div className={styles.technologies}>
              <div className={`${styles.technology} ${styles.react}`}>React</div>
              <div className={`${styles.technology} ${styles.reactnative}`}>React Native</div>
              <div className={`${styles.technology} ${styles.typescript}`}>TypeScript</div>
              <div className={`${styles.technology} ${styles.css}`}>CSS</div>
              <div className={`${styles.technology} ${styles.django}`}>Django</div>
              <div className={`${styles.technology} ${styles.python}`}>Python</div>
              <div className={`${styles.technology} ${styles.postgresql}`}>PostgreSQL</div>
            </div>
          </div>

          <div className={styles.techCategory}>
            <h3 className={styles.categoryTitle}>CI/CD & Hosting</h3>
            <p className={styles.categoryDescription}>
              Tools I use for deployment, containerization, and version control.
              Most of my apps are deployed to Ubuntu VPS (running Docker) via automatic GitHub workflows.
              All of the codebases are hosted on GitHub repositories and some Frontend only projects such as this portfolio run on gh-pages.
            </p>
            <div className={styles.technologies}>
              <div className={`${styles.technology} ${styles.github}`}>GitHub</div>
              <div className={`${styles.technology} ${styles.docker}`}>Docker</div>
              <div className={`${styles.technology} ${styles.ubuntu}`}>Ubuntu (VPS)</div>
            </div>
          </div>

          <div className={styles.techCategory}>
            <h3 className={styles.categoryTitle}>Tools</h3>
            <p className={styles.categoryDescription}>
              Development tools and platforms I use. 
              Windsurf is my preferred IDE as it has built-in AI agent functionality with 100% free base model. While not as effective as other paid options, it works well for free agent.
              Jira for ticket management, Gemini 2.5 Flash for my projects AI features and latest Gemini for general assistance.
            </p>
            <div className={styles.technologies}>
              <div className={`${styles.technology} ${styles.windsurf}`}>Windsurf</div>
              <div className={`${styles.technology} ${styles.vscode}`}>VSCode</div>
              <div className={`${styles.technology} ${styles.copilot}`}>Copilot</div>
              <div className={`${styles.technology} ${styles.jira}`}>Jira</div>
              <div className={`${styles.technology} ${styles.geminiai}`}>Gemini AI</div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.projects} ${styles.section}`}>
        <div className={styles.container}>
          <div className={styles.heading}>Projects</div>
          <div className={styles.line}></div>
          <div className={styles.projectList}>
            
            {/* Darts Scores */}
            <div onClick={() => openProject({
              title: 'Darts Scores',
              images: [DartsScores, DartsScores2, DartsScores3],
              status: 'deployed',
              description: 'Web App for keeping count of personal darts matches, practice and viewing statistics',
              technologies: ['React', 'Typescript', 'CSS', 'Django', 'Python', 'PostgreSQL', 'Docker'],
              link: 'https://darts-scores.vtcoding.click'
            })} className={styles.project}>
              <div className={styles.projectTitle}>Darts Scores</div>
              <img className={styles.image} src={DartsScores} />
              <div className={`${styles.status} ${styles['status-deployed']}`}>Status: deployed</div>
              <div className={styles.projectDescription}>Web App for keeping count of personal darts matches, practice and viewing statistics</div>
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
            <div onClick={() => openProject({
              title: 'Gridsnap',
              images: [GridSnap, GridSnap2],
              status: 'deployed',
              description: 'Web App for configuring numbered grid over an image',
              technologies: ['React', 'Typescript', 'CSS'],
              link: 'https://vtcoding.github.io/gridsnap/'
            })} className={styles.project}>
              <div className={styles.projectTitle}>Gridsnap</div>
              <img className={styles.image} src={GridSnap} />
              <div className={`${styles.status} ${styles['status-deployed']}`}>Status: deployed</div>
              <div className={styles.projectDescription}>Web App for configuring numbered grid over an image</div>
              <div className={styles.projectTechnologies}>
                <div className={`${styles.projectTechnology} ${styles.react}`}>React</div>
                <div className={`${styles.projectTechnology} ${styles.typescript}`}>Typescript</div>
                <div className={`${styles.projectTechnology} ${styles.css}`}>CSS</div>
              </div>
            </div>

            {/* Matchtrip */}
            <div onClick={() => openProject({
              title: 'Matchtrip',
              images: [MatchTrip, MatchTrip, MatchTrip],
              status: 'under-development',
              description: 'Web App for searching sport fixtures inside specific kilometer range and timerange',
              technologies: ['React', 'Typescript', 'CSS', 'Django', 'Python', 'PostgreSQL'],
              link: null
            })} className={styles.project}>
              <div className={styles.projectTitle}>Matchtrip</div>
              <img className={styles.image} src={MatchTrip} />
              <div className={`${styles.status} ${styles['status-under-development']}`}>Status: under development</div>
              <div className={styles.projectDescription}>Web App for searching sport fixtures inside specific kilometer range and timerange</div>
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
            <div onClick={() => openProject({
              title: 'ParkCheck',
              images: [Parking],
              status: 'under-development',
              description: 'Mobile App for clarifying parking sign rules wherever you park',
              technologies: ['React Native', 'Typescript', 'CSS', 'Django', 'Gemini AI', 'Docker'],
              link: null
            })} className={styles.project}>
              <div className={styles.projectTitle}>ParkCheck</div>
              <img className={styles.image} src={Parking} />
              <div className={`${styles.status} ${styles['status-under-development']}`}>Status: under development</div>
              <div className={styles.projectDescription}>Mobile App for clarifying parking sign rules wherever you park</div>
              <div className={styles.projectTechnologies}>
                <div className={`${styles.projectTechnology} ${styles.reactnative}`}>React Native</div>
                <div className={`${styles.projectTechnology} ${styles.typescript}`}>Typescript</div>
                <div className={`${styles.projectTechnology} ${styles.css}`}>CSS</div>
                <div className={`${styles.projectTechnology} ${styles.django}`}>Django</div>
                <div className={`${styles.projectTechnology} ${styles.geminiai}`}>Gemini AI</div>
                <div className={`${styles.projectTechnology} ${styles.docker}`}>Docker</div>
              </div>
            </div>

          </div>
        </div>
      </div>
      
      {/* Project Modal */}
      {selectedProject && (
        <div className={styles.modalOverlay} onClick={handleModalClick}>
          <div className={styles.modal}>
            <button className={styles.closeButton} onClick={closeProject}>
              <CloseIcon />
            </button>
            <h2>{selectedProject.title}</h2>
            <div className={styles.modalContent}>
              <div className={styles.carouselContainer}>
                <div className={styles.carouselImageContainer}>
                  <img 
                    src={selectedProject.images[currentImageIndex]} 
                    alt={`${selectedProject.title} ${currentImageIndex + 1}`} 
                    className={styles.modalImage} 
                  />
                  {selectedProject.images.length > 1 && (
                    <>
                      <button 
                        className={`${styles.carouselButton} ${styles.carouselButtonLeft}`}
                        onClick={prevImage}
                      >
                        <ArrowBackIosNewIcon />
                      </button>
                      <button 
                        className={`${styles.carouselButton} ${styles.carouselButtonRight}`}
                        onClick={nextImage}
                      >
                        <ArrowForwardIosIcon />
                      </button>
                      <div className={styles.carouselDots}>
                        {selectedProject.images.map((_, index) => (
                          <button
                            key={index}
                            className={`${styles.carouselDot} ${index === currentImageIndex ? styles.activeDot : ''}`}
                            onClick={(e) => {
                              e.stopPropagation();
                              console.log(index);
                              setCurrentImageIndex(index);
                            }}
                            aria-label={`Go to image ${index + 1}`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
              <div className={`${styles.status} ${styles[`status-${selectedProject.status}`]}`}>
                Status: {selectedProject.status === 'deployed' ? 'deployed' : 'under development'}
              </div>
              <p className={styles.modalDescription}>{selectedProject.description}</p>
              <div className={styles.projectTechnologies}>
                {selectedProject.technologies.map((tech, index) => {
                  // Convert to lowercase and replace spaces with hyphens for CSS class names
                  const techClass = tech.toLowerCase().replace(/\s+/g, '');
                  return (
                    <div key={index} className={`${styles.projectTechnology} ${styles[techClass]}`}>
                      {tech}
                    </div>
                  );
                })}
              </div>
              {selectedProject.link && (
                <button 
                  className={styles.visitButton}
                  onClick={() => window.open(selectedProject.link, "_blank", "noopener,noreferrer")}
                >
                  Visit Project
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App
