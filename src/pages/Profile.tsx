import { useState } from "react";
import { useFetchData } from "@hooks/useFetchData";
import { useShowButton } from "@hooks/useShowButton";
import { handleDate } from "@utils/date";
import type { StartIndex } from "@customtypes/utils";
import type {
  dataEducation, dataMOOC, dataProject, dataWork, dataAll
} from "@customtypes/data";
import clsx from "clsx";
import ProfileSection from "@components/ProfileSection";
import ProfileCard from "@components/ProfileCard";
import PrevNextButton from "@components/PrevNextButton";
import type { ProfileCardProps } from "@customtypes/profileTypes";

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

  const showButtonsEducation = useShowButton( { data: eduData as dataEducation[], maxDisplay: maxDisplay.education } );
  const showButtonsWork = useShowButton( { data: workData as dataWork[], maxDisplay: maxDisplay.work } );
  const showButtonsMOOC = useShowButton( { data: moocData as dataMOOC[], maxDisplay: maxDisplay.mooc } );
  const showButtonsProject = useShowButton( { data: projectData as dataProject[], maxDisplay: maxDisplay.project } );

  // Handlers for Prev/Next buttons
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

  const sections = [
    {
      key: 'education' as optionsType,
      title: 'Education',
      data: eduData,
      visibleData: visibleEduData as dataEducation[],
      showButtons: showButtonsEducation,
      renderCard: ( edu: dataEducation ): ProfileCardProps => ( {
        title: edu.school,
        subtitle: `${edu.degree} in ${edu.course}`,
        date: handleDate( edu.start, edu.end ),
      } ),
    },
    {
      key: 'work' as optionsType,
      title: 'Work Experience',
      data: workData,
      visibleData: visibleWorkData as dataWork[],
      showButtons: showButtonsWork,
      renderCard: ( work: dataWork ): ProfileCardProps => ( {
        title: `${work.title}, ${work.company}`,
        description: work.description,
        date: handleDate( work.start, work.end ),
        skills: work.skills,
      } ),
    },
    {
      key: 'project' as optionsType,
      title: 'Projects',
      data: projectData,
      visibleData: visibleProjectData as dataProject[],
      showButtons: showButtonsProject,
      renderCard: ( project: dataProject ): ProfileCardProps => ( {
        title: project.title,
        subtitle: `For ${project.client} at ${project.company}.`,
        description: project.description,
        date: handleDate( project.start, project.end ),
        skills: project.skills,
      } ),
    },
    {
      key: 'mooc' as optionsType,
      title: 'MOOC Courses',
      data: moocData,
      visibleData: visibleMOOCData as dataMOOC[],
      showButtons: showButtonsMOOC,
      renderCard: ( mooc: dataMOOC ): ProfileCardProps => ( {
        title: `${mooc.course} by ${mooc.institute}`,
        subtitle: `Learning Platform: ${mooc.platform}`,
        date: handleDate( mooc.start, mooc.end ),
        skills: mooc.skills,
      } ),
    },
  ];

  // Component
  return (
    <div className={ styles.container }>

      <ProfileSection title="About Me">
        <ProfileCard>
          Farooq is a <strong>Fullstack Intern at Luxa</strong> with a passion for <strong>building web applications</strong> that power business and commerce.
          He specializes in frontend development using <strong>React</strong> and <strong>Next.js</strong>, and also works with <strong>Node.js</strong>, <strong>Express</strong>, and various databases for backend and fullstack projects.
          Farooq is <strong>open to collaboration</strong> and new opportunities to create impactful digital solutions.
        </ProfileCard>
      </ProfileSection>

      { sections.map( ( { key, title, data, visibleData, showButtons, renderCard } ) => (
        visibleData.length > 0 && (
          <ProfileSection key={ key } title={ title }>
            { visibleData.map( ( item, index ) => (
              <ProfileCard key={ index } { ...renderCard( item as dataEducation & dataWork & dataProject & dataMOOC ) } />
            ) ) }

            { showButtons && (
              <PrevNextButton
                handlePrev={ () => handlePrev( key ) }
                handleNext={ () => handleNext( key, data ) }
                disablePrev={ startIndex[ key ] === 0 }
                disableNext={ startIndex[ key ] + maxDisplay[ key ] >= data.length }
              />
            ) }
          </ProfileSection>
        )
      ) ) }

    </div>
  );
}

export default Profile;
