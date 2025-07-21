import { styles } from "@/styles/profileCard";
import { handleDate } from "@utils/date";
import { type ProfileCardEducationProps } from "@customtypes/profileTypes";

function ProfileCardEducation( { school, course, degree, start, end }: ProfileCardEducationProps ) {
  const date = handleDate( start, end );
  return (
    <div className={ styles.card }>
      <div className={ styles.cardHead }>
        <div className={ styles.cardTitle }>{ school }</div>
        <div className={ styles.cardDate }>{ date }</div>
      </div>
      <div className={ styles.cardContent }>{ degree } in { course }</div>
    </div>
  );
}



export default ProfileCardEducation;
