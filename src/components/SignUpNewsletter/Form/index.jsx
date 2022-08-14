import { FormArea ,EmailContainer, Button } from './styled';

import { MdOutlineEmail } from 'react-icons/md';

export default function Form() {
    const messageTitle = 'Digite seu email para assinar newsletter';

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return(
        <>
            <FormArea action={'/'}>
                <EmailContainer>
                    <label htmlFor="email" className='sr-only'>Email</label>
                    <input 
                    className="email-input"
                    type="email" 
                    placeholder="Insira seu e-mail"
                    id="email"
                    title={messageTitle}
                    />
                    <MdOutlineEmail />
                </EmailContainer>
                <Button onClick={handleSubmit}>Assinar newsletter</Button>
            </FormArea>
        </>
    )
};
