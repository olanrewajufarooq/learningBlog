import type {
  dataEducation, dbEducation,
  dataMOOC, dbMOOC,
  dataProject, dbProject,
  dataWork, dbWork
} from "@customtypes/data";

function processSkills( skills: string ): string[] { 
  // If has no comma, return an array with the single skill
  if ( !skills.includes( "," ) ) {
    return [ skills ];
  }
  else if ( skills.includes( "," ) ) {
    // Split by comma and trim whitespace
    return skills.split( "," ).map( skill => skill.trim() );
  }
  return [];
};

export function processEducation( data: dbEducation[] ): dataEducation[] {
  return data.map(item => ({
    school: item.school,
    degree: item.degree,
    course: item.course,
    start: {month: item.startmonth, year: item.startyear},
    end: {month: item.endmonth, year: item.endyear},
  }));
};

export function processWork( data: dbWork[] ): dataWork[] {
  return data.map(item => ({
    company: item.company,
    title: item.title,
    start: {month: item.startmonth, year: item.startyear},
    end: { month: item.endmonth, year: item.endyear },
    description: item.description,
    skills: processSkills(item.skills),
  }));
};

export function processMOOC(data: dbMOOC[] ): dataMOOC[] {
  return data.map(item => ({
    platform: item.platform,
    course: item.course,
    institute: item.institute,
    start: { month: item.startmonth, year: item.startyear },
    end: { month: item.endmonth, year: item.endyear },
    skills: processSkills(item.skills),
  }));
};

export function processProject(data: dbProject[] ): dataProject[] {
  return data.map(item => ({
    title: item.title,
    client: item.client,
    company: item.company,
    description: item.description,
    start: { month: item.startmonth, year: item.startyear },
    end: { month: item.endmonth, year: item.endyear },
    skills: processSkills(item.skills),
  }));
};