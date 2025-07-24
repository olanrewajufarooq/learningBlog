import { 
  SiJavascript, SiTypescript, SiPython,
  SiNumpy, SiPandas, SiScikitlearn,
  SiTensorflow, SiKeras, SiScipy,
  SiReact, SiNextdotjs, SiNodedotjs,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiMysql,
  SiGit,
  SiGithub,
  SiLinux
} from 'react-icons/si';

import { styles } from "@styles/skills";

const skillComponentMap: Record<string, React.ReactNode> = {
  javascript: <SiJavascript />,
  typescript: <SiTypescript />,
  python: <SiPython />,
  react: <SiReact />,
  nextjs: <SiNextdotjs />,
  nodejs: <SiNodedotjs />,
  tailwind: <SiTailwindcss />,
  numpy: <SiNumpy />,
  pandas: <SiPandas />,
  scikitlearn: <SiScikitlearn />,
  tensorflow: <SiTensorflow />,
  keras: <SiKeras />,
  scipy: <SiScipy />,
  html: <SiHtml5 />,
  css: <SiCss3 />,
  sql: <SiMysql />,
  git: <SiGit />,
  github: <SiGithub />,
  linux: <SiLinux />,
};

function processSkillName( skill: string ): string {
  return skill.toLowerCase().replace( /[\s-]/g, "" );
}


const Skill = ( { skill }: { skill: string } ) => { 
  const skillKey = processSkillName(skill);
  return (
    <div className={ styles.skillDiv }>
      <p className={ styles.skillIcon }>
        { skillComponentMap[ skillKey ] }
      </p>
      <p className={ styles.skillText }>{ skill }</p>
    </div>
  )
}

function Skills( { skills }: { skills: string[] } ) {
  return (
    <>
      {skills
      .filter(skill => skillComponentMap[processSkillName(skill)])
      .map(skill => (
        <Skill key={skill} skill={skill} />
      ))}
    </>
  );
}

export default Skills;
