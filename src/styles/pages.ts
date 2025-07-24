import clsx from "clsx";

export const pageStyle = {
  container: clsx( 'container mx-auto px-4 py-10' ),
};

export const cardStyle = {
  card: clsx( 'bg-white dark:bg-gray-800 shadow-md rounded-xl p-4 mb-4' ),
  cardHead: clsx( 'flex flex-col md:flex-row justify-between item-center' ),
  cardTitle: clsx( 'text-xl font-extrabold text-gray-900 dark:text-gray-100' ),
  cardSubtitle: clsx( 'text-lg font-semibold text-gray-700 dark:text-gray-100' ),
  cardContent: clsx( 'text-base text-gray-500 dark:text-gray-400 mt-2' ),
  cardChildrenContent: clsx( 'text-base text-gray-900 dark:text-gray-100' ),
  cardDate: clsx( 'text-sm text-gray-500 dark:text-gray-400' ),
  cardSkills: clsx( 'flex flex-row gap-2 mt-4 text-sm text-gray-500 dark:text-gray-400 mt-2' ),
};

export const sectionStyle = {
  section: clsx( 'mb-8' ),
  title: clsx( 'text-2xl text-secondary font-bold mb-4 dark:text-gray-900' ),
  subtitle: clsx( 'text-lg text-secondary font-semibold mb-2 dark:text-gray-900' ),
  buttonContainer: clsx( 'mt-4 flex gap-4 justify-center' ),
  button: clsx(
    'bg-primary text-white px-6 py-2 rounded-xl transition duration-300',
    'disabled:opacity-50 disabled:cursor-not-allowed'
  ),
};

export const formStyle = {
  container: clsx( 'space-y-4' ),
  group: clsx( 'flex flex-col mb-4' ),
  label: clsx( 'text-sm font-medium text-gray-700 dark:text-gray-300 mb-1' ),
  error: clsx( 'text-red-500 text-sm mt-1' ),
  input: clsx( 'w-full p-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:text-white' ),
  textarea: clsx( 'w-full p-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:text-white h-32' ),
  button: clsx(
    'bg-primary text-white px-6 py-2 rounded-xl transition duration-300',
    'disabled:opacity-50 disabled:cursor-not-allowed'
  ),
};