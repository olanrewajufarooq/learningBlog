import { cardStyle } from "@styles/pages";
import type { ProfileCardProps } from "@customtypes/props";
import Skills from "@components/Skills";


function ProfileCard( { title, date, subtitle, description, skills, children }: ProfileCardProps ) {
  return (
    <div className={ cardStyle.card }>
      <div className={ cardStyle.cardHead }>
        <div className={ cardStyle.cardTitle }>{ title }</div>
        { date && <div className={ cardStyle.cardDate }>{ date }</div> }
      </div>

      { subtitle && <div className={ cardStyle.cardSubtitle }>{ subtitle }</div> }
      { description && <div className={ cardStyle.cardContent }>{ description }</div> }

      { skills && skills.length > 0 && (
        <div className={ cardStyle.cardSkills }><Skills skills={ skills } /></div>
      ) }

      { children && <div className={ cardStyle.cardChildrenContent }>{ children }</div> }
    </div>
  );
}

export default ProfileCard;
