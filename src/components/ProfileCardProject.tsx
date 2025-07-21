import { styles } from "@styles/profileCard";
import { handleDate } from "@utils/date";
import { type ProfileCardProjectProps } from "@customtypes/profileTypes";

function ProfileCardProject( { title, client, company, start, end, description, skills }: ProfileCardProjectProps ) {
  const date = handleDate( start, end );
  return (
    <div className={ styles.card }>
      <div className={ styles.cardHead }>
        <div className={ styles.cardTitle }>{ title }</div>
        <div className={ styles.cardDate }>{ date }</div>
      </div>
      <div className={ styles.cardContent }>For { client } at { company }.</div>
      <div className={ styles.cardContent }>{ description }</div>
      { skills && skills.length > 0 && <div className={ styles.cardSkills }>{ skills.join( ", " ) }</div> }
    </div>
  );
}

export default ProfileCardProject;
