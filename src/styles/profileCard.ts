import clsx from "clsx";

export const styles = {
  card: clsx( 'bg-white dark:bg-gray-800 shadow-md rounded-xl p-4 mb-4' ),
  cardHead: clsx( 'flex flex-col md:flex-row justify-between item-center' ),
  cardTitle: clsx( 'text-xl font-bold text-gray-900 dark:text-gray-100' ),
  cardSubtitle: clsx( 'text-lg text-gray-500 dark:text-gray-300' ),
  cardContent: clsx( 'text-sm text-gray-500 dark:text-gray-400 mt-2' ),
  cardDate: clsx( 'text-sm text-gray-500 dark:text-gray-400' ),
  cardSkills: clsx( 'flex flex-row gap-2 mt-4 text-sm text-gray-500 dark:text-gray-400 mt-2' ),
};