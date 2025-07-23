import { styles } from "@styles/profileCard";
import type { ProfileCardProps } from "@customtypes/profileTypes";
import Skills from "@components/Skills";


function ProfileCard( { title, date, subtitle, description, skills, children }: ProfileCardProps ) {
  return (
    <div className={ styles.card }>
      <div className={ styles.cardHead }>
        <div className={ styles.cardTitle }>{ title }</div>
        { date && <div className={ styles.cardDate }>{ date }</div> }
      </div>

      { subtitle && <div className={ styles.cardSubtitle }>{ subtitle }</div> }
      { description && <div className={ styles.cardContent }>{ description }</div> }

      { skills && skills.length > 0 && (
        <div className={ styles.cardSkills }><Skills skills={ skills } /></div>
      ) }

      { children }
    </div>
  );
}

export default ProfileCard;
