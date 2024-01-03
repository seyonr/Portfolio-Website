import React from 'react';
import { ButtonLink } from '../ButtonElement';
import {
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    Column2,
    TextWrapper,
    Heading,
    Subtitle,
    BtnWrap,
    ImgWrap,
    Img,
} from './InfoElements';
import Image from '../../images/svg-1.svg';
import Image2 from '../../images/logos.jpg';
import Resume from '../../files/Seyon_Resume.pdf';

const InfoSection = () => {
  return (
    <>
    <InfoContainer lightBg={false} id={'about'}>
        <InfoWrapper>
            <InfoRow imgStart={false}>
                <Column1>
                <TextWrapper>
                    <Heading lightText={true}>About Me</Heading>
                    <Subtitle darkText={false}>I am an undergraduate Computer Science student at Ontario Tech University. I picked up a minor interest in coding during my adolescence when I started to question how websites and computers work, that interest eventually turned into a passion. I'm passionate about creating websites for entertainment and problem-solving purposes. </Subtitle>
                    <BtnWrap>
                        <ButtonLink to={Resume} target='_blank' smooth={true} duration={500} spy={true} exact={true} offset={-80} primary={true} dark={true}>Resume</ButtonLink>
                    </BtnWrap>
                </TextWrapper>
                </Column1>
                <Column2>
                <ImgWrap>
                <Img src={Image} alt={'Coding Person'}/>
                </ImgWrap>
                </Column2>
            </InfoRow>
        </InfoWrapper>
    </InfoContainer>

    <InfoContainer lightBg={true} id={'experience'}>
        <InfoWrapper>
            <InfoRow imgStart={true}>
                <Column1>
                <TextWrapper>
                    <Heading lightText={false}>Experience</Heading>
                    <Subtitle darkText={true}>These are the languages which I have gained experience in.</Subtitle>
                </TextWrapper>
                </Column1>
                <Column2>
                <ImgWrap>
                <Img src={Image2} alt={'Coding Languages'}/>
                </ImgWrap>
                </Column2>
            </InfoRow>
        </InfoWrapper>
    </InfoContainer>
    </>
  )
}

export default InfoSection