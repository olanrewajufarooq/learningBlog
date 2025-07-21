import { styles } from "@/styles/profileCard";
import { handleDate } from "@utils/date";
import { type ProfileCardWorkProps } from "@customtypes/profileTypes";

function ProfileCardWork( { company, title, start, end, description, skills }: ProfileCardWorkProps ) {
  const date = handleDate( start, end );
  return (
    <div className={ styles.card }>
      <div className={ styles.cardHead }>
        <div className={ styles.cardTitle }>{ title }, { company }</div>
        <div className={ styles.cardDate }>{ date }</div>
      </div>
      <div className={ styles.cardContent }>{ description }</div>
      {skills && <div className={ styles.cardSkills }>{ skills.join( ", " ) }</div> }
    </div>
  );
}

export default ProfileCardWork;
