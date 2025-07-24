import type {DialogBoxProps} from '@customtypes/props';

function DialogBox ( { isOpen, onClose, title, message, type = 'success' }: DialogBoxProps ) {
  if ( !isOpen ) return null;

  const typeStyles = {
    success: 'border-green-500 text-green-800',
    error: 'border-red-500 text-red-800',
    info: 'border-blue-500 text-blue-800',
  };

  const dialogStyles = {
    container: 'fixed inset-0 z-50 flex items-center justify-center bg-white/50 dark:bg-gray-900/50',
    dialog: 'w-[90%] max-w-md rounded-lg border p-6 shadow-xl bg-white/100 dark:bg-gray-900/100',
    title: 'text-xl font-semibold mb-2',
    message: 'mb-4',
    button: 'px-4 py-2 rounded font-medium',
  }

  return (
    <div className={ dialogStyles.container }>
      <div className={ `${dialogStyles.dialog} ${typeStyles[ type ]}` }>
        <h2 className={ dialogStyles.title }>{ title }</h2>
        <p className={ dialogStyles.message }>{ message }</p>
        <button
          onClick={ onClose }
          className={ `${dialogStyles.button} ${typeStyles[ type ]} hover:opacity-80 transition` }
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default DialogBox;
