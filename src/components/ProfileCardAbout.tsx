import { type ProfileCardAboutProps } from "@customtypes/profileTypes";
import { styles } from "@/styles/profileCard";

function ProfileCardEducation( { children }: ProfileCardAboutProps ) {
  return (
    <div className={ styles.card }>
      {children}
    </div>
  );
}



export default ProfileCardEducation;
