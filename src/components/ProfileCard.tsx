import clsx from "clsx";

type ProfileCardProps = {
  title?: string;
  subtitle?: string;
  description?: string;
  date?: string;
};

const styles = {
  card: clsx( 'bg-white dark:bg-gray-800 shadow-md rounded-xl p-4 mb-4' ),
  cardHead: clsx('flex flex-row justify-between item-center'),
  title: clsx( 'text-xl font-bold text-gray-900 dark:text-gray-100' ),
  subtitle: clsx( 'text-lg text-gray-700 dark:text-gray-300' ),
  description: clsx( 'text-lg text-gray-700 dark:text-gray-300' ),
  date: clsx( 'text-sm text-gray-500 dark:text-gray-400' ),
};

function ProfileCard( { title, subtitle, description, date}:ProfileCardProps) {
  return (
    <div className={styles.card}>
      <div className={ styles.cardHead }>
        <div className={ styles.title }>{ title }</div>
        { date && <div className={ styles.date }>{ date }</div> }
      </div>
      { subtitle && <div className={ styles.subtitle }>{ subtitle }</div>}
      { description && <div className={ styles.description }>{ description }</div> }
    </div>
  );
}

export default ProfileCard;
