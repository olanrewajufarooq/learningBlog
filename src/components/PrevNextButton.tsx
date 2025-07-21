import clsx from 'clsx';

type PrevNextButtonProps = {
  handlePrev: () => void;
  handleNext: () => void;
  disablePrev: boolean;
  disableNext: boolean;
}

const styles = {
  buttonContainer: clsx( 'mt-4 flex gap-4 justify-center' ),
  button: clsx(
    'bg-primary text-white px-6 py-2 rounded-xl transition duration-300',
    'disabled:opacity-50 disabled:cursor-not-allowed'
  ),
};

function PrevNextButton({handlePrev, handleNext, disablePrev, disableNext}: PrevNextButtonProps) {
  return (
    <div className={ styles.buttonContainer }>
      <button
        className={ styles.button }
        onClick={ handlePrev }
        disabled={ disablePrev }
      >
        Prev
      </button>
      <button
        className={ styles.button }
        onClick={ handleNext }
        disabled={ disableNext }
      >
        Next
      </button>
    </div>
  );
}

export default PrevNextButton;
