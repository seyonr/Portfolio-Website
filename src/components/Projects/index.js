import React from 'react';
import Icon1 from '../../images/Icon1.svg'
import Icon2 from '../../images/Icon2.svg'
import { FaLink, FaGithub } from 'react-icons/fa';
import { 
    ProjectsContainer, 
    ProjectsH1, 
    ProjectsWrapper, 
    ProjectsCard, 
    ProjectsIcon, 
    ProjectsH2, 
    ProjectsP,
    SocialIcons,
    SocialIconLink 
} from './ProjectsElements';

const Projects = () => {
  return (
    <ProjectsContainer id="projects">
        <ProjectsH1>Projects</ProjectsH1>
        <ProjectsWrapper>
            <ProjectsCard>
                <ProjectsIcon src={Icon1} />
                <ProjectsH2>Youtube to Mp3</ProjectsH2>
                <ProjectsP>This project employs a combination of the Youtube to MP3 API and Node.js to facilitate the seamless conversion of YouTube videos into MP3 audio files via their respective YouTube IDs. Upon conversion, users are provided with a downloadable link enabling the capability to download and modify the file name and leverage the resultant MP3 audio file for their desired purposes.</ProjectsP>
                <SocialIcons>
                    <SocialIconLink href="https://relieved-mite-leotard.cyclic.app/" target="_blank" arial-label="Link"><FaLink /></SocialIconLink>
                    <SocialIconLink href="https://github.com/seyonr/YT-to-Mp3.git" target="_blank" arial-label="Github"><FaGithub /></SocialIconLink>
                </SocialIcons>
            </ProjectsCard>

            <ProjectsCard>
                <ProjectsIcon src={Icon2} />
                <ProjectsH2>Expense Tracker</ProjectsH2>
                <ProjectsP>Built on React JS, this project empowers users to meticulously monitor their expenses. Offering the functionality to categorize expenses and income types enables precise tracking over defined periods. Moreover, the inclusion of a donut chart provides a streamlined visual representation, facilitating effortless identification of the most significant income and expense categories.</ProjectsP>
                <SocialIcons>
                    <SocialIconLink href="https://eloquent-mermaid-171bb5.netlify.app/" target="_blank" arial-label="Link"><FaLink /></SocialIconLink>
                    <SocialIconLink href="https://github.com/seyonr/Expense-Tracker.git" target="_blank" arial-label="Github"><FaGithub /></SocialIconLink>
                </SocialIcons>
            </ProjectsCard>
        </ProjectsWrapper>
    </ProjectsContainer>
  )
}

export default Projects