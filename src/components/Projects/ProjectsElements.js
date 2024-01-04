import styled from "styled-components";

export const ProjectsContainer = styled.div`    
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #212529;

    @media screen and (max-width: 768px) {
        height: 1100px;
    }

    @media screen and (max-width: 80px) {
        height: 1300px;
    }
`;

export const ProjectsWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    /* This is what shows how many columns there are  */
    grid-template-columns: 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`;

export const ProjectsCard = styled.div`
    background: #48ACF0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    height: 500px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover{
        background: #85CEFF;
        transform: scale(1.02);
        /* cursor: pointer; */
    }

    @media screen and (max-width: 768px) {
        height: 400px;
    }
`;

export const ProjectsIcon = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;

    @media screen and (max-width: 768px) {
        height: 80px;
    }
`;

export const ProjectsH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 64px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;

export const ProjectsH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
    font-weight: bold;
`;

export const ProjectsP = styled.p`
    font-size: 0.9rem;
    text-align: center;
    margin-bottom: 20px;

    @media screen and (max-width: 480px) {
        font-size: 0.7rem;
    }
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100px;
  color: black;
  transition: 0.3s ease-out;
`;

export const SocialIconLink = styled.a`
  color: black;
  font-size: 22px;
  size: 50px;
  transition: 0.3s ease-out;

    &:hover {
    transform: scale(1.3);
  }
`;