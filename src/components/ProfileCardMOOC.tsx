import { styles } from "@/styles/profileCard";
import { handleDate } from "@utils/date";
import { type ProfileCardMOOCProps } from "@customtypes/profileTypes";

function ProfileCardMOOC( { platform, course, institute, start, end, skills }: ProfileCardMOOCProps ) {
  const date = handleDate( start, end );
  return (
    <div className={ styles.card }>
      <div className={ styles.cardHead }>
        <div className={ styles.cardTitle }>{ course } by { institute }</div>
        <div className={ styles.cardDate }>{ date }</div>
      </div>
      <div className={ styles.cardContent }>Learning Platform: { platform }</div>
      { skills && skills.length > 0 && <div className={ styles.cardSkills }>Skills: { skills.join( ", " ) }</div> }
    </div>
  );
}



export default ProfileCardMOOC;
