import { useState } from 'react';

type MessageType = 'success' | 'error' | 'info';

export function useDialogBox() { 
  const [ isOpen, setIsOpen ] = useState( false );
  const [ title, setTitle ] = useState( '' );
  const [ message, setMessage ] = useState( '' );
  const [ messageType, setMessageType ] = useState<MessageType>('info');

  const openDialog = (title: string, msg: string, type: MessageType = 'info') => {
    setTitle(title);
    setMessage(msg);
    setMessageType(type);
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen( false );
    setTitle('');
    setMessage('');
    setMessageType('info');
  };

  return [isOpen, title, message, messageType, openDialog, closeDialog] as const;

}