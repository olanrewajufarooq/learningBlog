import { useState, useEffect } from "react";
import { useFetchData } from "@hooks/useFetchData";
import type { StartIndex, ShowButtons } from "@customtypes/utils";
import type {
  dataEducation, dataMOOC, dataProject, dataWork, dataAll
} from "@customtypes/data";
import clsx from "clsx";
import ProfileSection from "@components/ProfileSection";
import ProfileCardEducation from "@components/ProfileCardEducation";
import ProfileCardWork from "@components/ProfileCardWork";
import ProfileCardMOOC from "@components/ProfileCardMOOC";
import ProfileCardProject from "@components/ProfileCardProject";
import ProfileCardAbout from "@components/ProfileCardAbout";
import PrevNextButton from "@components/PrevNextButton";


const styles = {
  container: clsx( 'container mx-auto px-4 py-10' ),
};

const maxDisplay = {
  education: 2, mooc: 2, work: 2, project: 2,
};

type optionsType = 'education' | 'work' | 'mooc' | 'project';

function Profile() {
  // Data handlers
  const [ startIndex, setStartIndex ] = useState<StartIndex>( {
    education: 0, work: 0, mooc: 0, project: 0,
  } );

  // Show buttons handlers
  const [ showButtonsEducation, setShowButtonsEdu ] = useState<boolean>( false );
  const [ showButtonsWork, setShowButtonsWork ] = useState<boolean>( false );
  const [ showButtonsMOOC, setShowButtonsMOOC ] = useState<boolean>( false );
  const [ showButtonsProject, setShowButtonsProject ] = useState<boolean>( false );

  // Fetch data using custom hook
  const eduData = useFetchData( 'education' );
  const moocData = useFetchData( 'mooc' );
  const projectData = useFetchData( 'project' );
  const workData = useFetchData( 'work' );

  // Visible items
  const visibleEduData = eduData.slice( startIndex.education, startIndex.education + maxDisplay.education ) as dataEducation[];
  const visibleWorkData = workData?.slice( startIndex.work, startIndex.work + maxDisplay.work ) as dataWork[];
  const visibleMOOCData = moocData?.slice( startIndex.mooc, startIndex.mooc + maxDisplay.mooc ) as dataMOOC[];
  const visibleProjectData = projectData?.slice( startIndex.project, startIndex.project + maxDisplay.project ) as dataProject[];

  useEffect( () => {
    const showButtonsEducation = startIndex.education + maxDisplay.education < eduData.length;
    setShowButtonsEdu( showButtonsEducation );
  }, [ eduData ] );
  useEffect( () => {
    const showButtonsWork = startIndex.work + maxDisplay.work < workData.length;
    setShowButtonsWork( showButtonsWork );
  }, [ workData ] );
  useEffect( () => {
    const showButtonsMOOC = startIndex.mooc + maxDisplay.mooc < moocData.length;
    setShowButtonsMOOC( showButtonsMOOC );
  }, [ moocData ] );
  useEffect( () => {
    const showButtonsProject = startIndex.project + maxDisplay.project < projectData.length;
    setShowButtonsProject( showButtonsProject );
  }, [ projectData ] );


  const handlePrev = ( section: optionsType ) => {
    if ( startIndex[ section ] > 0 ) {
      setStartIndex( { ...startIndex, [ section ]: startIndex[ section ] - 1 } );
    }
  };

  const handleNext = ( section: optionsType, data: dataAll ) => {
    if ( startIndex[ section ] + maxDisplay[ section ] < data.length ) {
      setStartIndex( { ...startIndex, [ section ]: startIndex[ section ] + 1 } );
    }
  };

  // Component
  return (
    <div className={ styles.container }>

      <ProfileSection title="About Me">
        <ProfileCardAbout />
      </ProfileSection>

      { visibleEduData.length > 0 && (
        <ProfileSection title="Education">
          { visibleEduData.map( ( edu, index ) => (
            <ProfileCardEducation
              key={ index }
              school={ edu.school }
              course={ edu.course }
              degree={ edu.degree }
              start={ edu.start }
              end={ edu.end }
            />
          ) ) }
          { showButtonsEducation && (
            <PrevNextButton
              handlePrev={ () => handlePrev( 'education' ) }
              handleNext={ () => handleNext( 'education', eduData ) }
              disablePrev={ startIndex.education === 0 }
              disableNext={ startIndex.education + maxDisplay.education >= eduData.length }
            />
          ) }
        </ProfileSection>
      ) }

      { visibleWorkData.length > 0 && (
        <ProfileSection title="Work Experience">
          { visibleWorkData.map( ( work, index ) => (
            <ProfileCardWork
              key={ index }
              company={ work.company }
              title={ work.title }
              start={ work.start }
              description={ work.description }
              skills={ work.skills }
              end={ work.end }
            />
          ) ) }
          { showButtonsWork && (
            <PrevNextButton
              handlePrev={ () => handlePrev( 'work' ) }
              handleNext={ () => handleNext( 'work', workData ) }
              disablePrev={ startIndex.work === 0 }
              disableNext={ startIndex.work + maxDisplay.work >= workData.length }
            />
          ) }
        </ProfileSection>
      ) }

      { visibleProjectData.length > 0 && (
        <ProfileSection title="Projects">
          { visibleProjectData.map( ( project, index ) => (
            <ProfileCardWork
              key={ index }
              company={ project.company }
              title={ project.title }
              start={ project.start }
              description={ project.description }
              skills={ project.skills }
              end={ project.end }
            />
          ) ) }
          { showButtonsProject && (
            <PrevNextButton
              handlePrev={ () => handlePrev( 'project' ) }
              handleNext={ () => handleNext( 'project', projectData ) }
              disablePrev={ startIndex.project === 0 }
              disableNext={ startIndex.project + maxDisplay.project >= projectData.length }
            />
          ) }
        </ProfileSection>
      ) }

      { visibleMOOCData.length > 0 && (
        <ProfileSection title="MOOC Courses">
          { visibleMOOCData.map( ( mooc, index ) => (
            <ProfileCardMOOC
              key={ index }
              platform={ mooc.platform }
              course={ mooc.course }
              start={ mooc.start }
              end={ mooc.end }
            />
          ) ) }
          { showButtonsMOOC && (
            <PrevNextButton
              handlePrev={ () => handlePrev( 'mooc' ) }
              handleNext={ () => handleNext( 'mooc', moocData ) }
              disablePrev={ startIndex.mooc === 0 }
              disableNext={ startIndex.mooc + maxDisplay.mooc >= moocData.length }
            />
          ) }
        </ProfileSection>
      ) }

    </div>
  );
}

export default Profile;
