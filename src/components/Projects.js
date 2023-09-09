import React from "react";
import { useTranslation } from "react-i18next";
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import { ProjectsContsiner, SectionTitle, ProjectsSection, SingleProjectContainer, ProjectTitle, ProjectIcon, SubtitlesLink } from "./styled/ProjectsStyled";
import './projects.css';
import projectIcon from '../img/project.png'
import formSlider1 from '../img/form1.png';
import formSlider2 from '../img/form2.png';
import post1 from '../img/post1.png'
import post2 from '../img/post2.png'
import events1 from '../img/events1.png'
import events2 from '../img/events2.png'
import gen1 from '../img/generator1.png'
import gen2 from '../img/generator2.png'

const Projects = () => {

	const {t} = useTranslation();

	const signLink = 'https://mast3rp1ece.github.io/react20/';
	const postLink = 'https://mast3rp1ece.github.io/react21/';
	const generatorLink = 'https://mast3rp1ece.github.io/cursor-ed-advanced/homework13/index.html';
	const eventLink = 'https://mast3rp1ece.github.io/cursor-ed-advanced/homework10/index.html';

	return (
		<ProjectsContsiner>
			<div className="wrapper">
				<SectionTitle>
					<div className="project_title">
						<ProjectTitle var='projects_title'>{t('projects.title')}</ProjectTitle>
						<ProjectIcon src={projectIcon} alt="Projects icon"/>
					</div>
				</SectionTitle>
				<ProjectsSection>
					<SingleProjectContainer>
						<ReactCompareSlider className="project_slider"
						itemOne={<ReactCompareSliderImage src={formSlider1} alt="Image one" />}
						itemTwo={<ReactCompareSliderImage src={formSlider2} alt="Image two" />}
						/>
						<div className="project_subtitles_container">
							<div className="subtitles_text">
								<ProjectTitle var='projects_subtitle'>{t('projects1.subtitle')}</ProjectTitle>
								<ProjectTitle var='projects_description'>{t('projects1.description')}</ProjectTitle>
							</div>
							<div className="subtitles_links">
								<SubtitlesLink to='/signform' var='more'>{t('projects.more')}</SubtitlesLink>
								<SubtitlesLink to={signLink} target="_blank" var='visit'>{t('projects.visit')}</SubtitlesLink>
							</div>
						</div>
					</SingleProjectContainer>
					<SingleProjectContainer>
						<ReactCompareSlider className="project_slider"
							itemOne={<ReactCompareSliderImage src={post1} alt="Image one" />}
							itemTwo={<ReactCompareSliderImage src={post2} alt="Image two" />}
							/>
							<div className="project_subtitles_container">
								<div className="subtitles_text">
									<ProjectTitle var='projects_subtitle'>{t('projects2.subtitle')}</ProjectTitle>
									<ProjectTitle var='projects_description'>{t('projects2.description')}</ProjectTitle>
								</div>
								<div className="subtitles_links">
									<SubtitlesLink to='/publication' var='more'>{t('projects.more')}</SubtitlesLink>
									<SubtitlesLink to={postLink} target="_blank" var='visit'>{t('projects.visit')}</SubtitlesLink>
								</div>
							</div>
					</SingleProjectContainer>
					<SingleProjectContainer>
						<ReactCompareSlider className="project_slider"
							itemOne={<ReactCompareSliderImage src={events1} alt="Image one" />}
							itemTwo={<ReactCompareSliderImage src={events2} alt="Image two" />}
							/>
							<div className="project_subtitles_container">
								<div className="subtitles_text">
									<ProjectTitle var='projects_subtitle'>{t('projects3.subtitle')}</ProjectTitle>
									<ProjectTitle var='projects_description'>{t('projects3.description')}</ProjectTitle>
								</div>
								<div className="subtitles_links">
									<SubtitlesLink to='eventer' var='more'>{t('projects.more')}</SubtitlesLink>
									<SubtitlesLink to={eventLink} target="_blank" var='visit'>{t('projects.visit')}</SubtitlesLink>
								</div>
							</div>
					</SingleProjectContainer>
					<SingleProjectContainer>
						<ReactCompareSlider className="project_slider"
							itemOne={<ReactCompareSliderImage src={gen1} alt="Image one" />}
							itemTwo={<ReactCompareSliderImage src={gen2} alt="Image two" />}
							/>
							<div className="project_subtitles_container">
								<div className="subtitles_text">
									<ProjectTitle var='projects_subtitle'>{t('projects4.subtitle')}</ProjectTitle>
									<ProjectTitle var='projects_description'>{t('projects4.description')}</ProjectTitle>
								</div>
								<div className="subtitles_links">
									<SubtitlesLink to='/generator' var='more'>{t('projects.more')}</SubtitlesLink>
									<SubtitlesLink to={generatorLink} target="_blank" var='visit'>{t('projects.visit')}</SubtitlesLink>
								</div>
							</div>
					</SingleProjectContainer>
				</ProjectsSection>
			</div>
		</ProjectsContsiner>
	)
}

export default Projects;