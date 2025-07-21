import {useState, useEffect} from 'react';
import supabase from '@utils/supabase';
import { sortDataByDate } from '@utils/date';
import {
  processEducation, processWork,
  processMOOC, processProject,
} from '@utils/dataProcess';
import type {
  dbEducation, dbWork, dbMOOC, dbProject,
  dataEducation, dataWork, dataMOOC, dataProject, dataAll
} from '@customtypes/data';

type optionsType = 'education' | 'work' | 'mooc' | 'project';

export function useFetchData( type: optionsType ) {

  const [data, setData] = useState<dataAll>([]);

  useEffect(() => {
    async function fetchData() {

      const res = await supabase.from( type ).select();
      const obtainedData = res.data;

      console.log( `Fetched ${type} data:`, obtainedData );

      let processedData = [];

      switch ( type ) {
        case 'education': {
          processedData = processEducation( obtainedData as dbEducation[] ) as dataEducation[];
          break;
        }
        case 'work': {
          processedData = processWork( obtainedData as dbWork[] ) as dataWork[];
          break;
        }
        case 'mooc': {
          processedData = processMOOC( obtainedData as dbMOOC[] ) as dataMOOC[];
          break;
        }
        case 'project': {
          processedData = processProject( obtainedData as dbProject[] ) as dataProject[];
          break;
        }
      }

      console.log( `Processed ${type} data:`, processedData );

      setData( processedData.sort(sortDataByDate) )
    }

    fetchData();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return data;
};