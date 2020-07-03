import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AiOutlineCheckCircle } from 'react-icons/ai';

import actions from '../../store/actions/Toast';

import { Container } from './styles'

interface RootState {
  toastReducer: {
    visible: any
    message: any
    error: any
  }
}

const Toast: React.FC = () => {
  const dispatch = useDispatch();
  const visible = useSelector((state: RootState) => state.toastReducer.visible);
  const message = useSelector((state: RootState) => state.toastReducer.message);
  const error = useSelector((state: RootState)=> state.toastReducer.error);

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(actions.removeToast());
    }, 1800);

    return () => {
      clearTimeout(timer);
    };
  }, [visible, dispatch]);

  return (
    <>
      {visible &&
        <Container style={{ background: `${ error ? '#FF4500' : 'var(--primary)'}`}}>
          {error
            ? <div >
                <AiOutlineCheckCircle size={18} color='#FFF' />
                <label>{message}</label>
              </div>
            : <div>
                <AiOutlineCheckCircle size={18} color='#FFF' />
                <label>{message}</label>
              </div>
          }
        </Container>
      }
    </>
  );
};

export default Toast
