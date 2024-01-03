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
                <ProjectsP>By utilizing Youtube to MP3 API and Node JS this project allows the conversion of youtube videos to an MP3 file by using the youtube id link. Once converted the download page provides infomation about the video name and a button to download the video. Once downloaded users are able to change the file name and make use of the MP3 audio file. </ProjectsP>
                <SocialIcons>
                    <SocialIconLink href="https://relieved-mite-leotard.cyclic.app/" target="_blank" arial-label="Link"><FaLink /></SocialIconLink>
                    <SocialIconLink href="https://github.com/seyonr/YT-to-Mp3.git" target="_blank" arial-label="Github"><FaGithub /></SocialIconLink>
                </SocialIcons>
            </ProjectsCard>

            <ProjectsCard>
                <ProjectsIcon src={Icon2} />
                <ProjectsH2>Expense Tracker</ProjectsH2>
                <ProjectsP>By utilizing React JS, this project allows users to track their expenses. With the ability to add the type of expense/income, users can accurately track their expenses for a given period. Furthermore, a pie chart is also provided to allow a simple visualization to see the incomes/expenses which are the greatest. </ProjectsP>
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