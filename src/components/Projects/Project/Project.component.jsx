import { useState } from 'react';
import {
    ProjectWrapper,
    ProjectContainer,
    ProjectDetailsContainer,
    ProjectTitle,
    ProjectStack,
    ProjectBottomContainer,
    ProjectButton,
    ProjectDetailTop,
    ButtonsContainer,
} from './Project.styles';

// TODO: desktop view

const Project = (props) => {
    const [showInfo, setShowInfo] = useState(false);
    // console.log(props);
    return (
        <ProjectContainer>
            <ProjectWrapper
                onMouseEnter={() => setShowInfo(true)}
                onMouseLeave={() => setShowInfo(false)}
                background={props.image}
            >
                {true && (
                    <ProjectDetailsContainer toFadeIn={showInfo}>
                        <ProjectDetailTop toFadeIn={showInfo}>
                            <ProjectTitle>{props.title}</ProjectTitle>
                            <ProjectStack>{[...props.stack]}</ProjectStack>
                        </ProjectDetailTop>
                        <ProjectBottomContainer toFadeIn={showInfo}>
                            <ProjectStack>{props.description}</ProjectStack>
                            <ButtonsContainer show={showInfo}>
                                <ProjectButton href={props.code}>
                                    View Code
                                </ProjectButton>
                                {props.link && (
                                    <ProjectButton href={props.link}>
                                        View Website
                                    </ProjectButton>
                                )}
                            </ButtonsContainer>
                        </ProjectBottomContainer>
                    </ProjectDetailsContainer>
                )}
            </ProjectWrapper>
        </ProjectContainer>
    );
};

export default Project;
