import { useState } from 'react';

import { FormArea ,EmailContainer, Button, ButtonSuccess, Error, ErrorContainer } from './styled';

import { MdOutlineEmail } from 'react-icons/md';

export default function Form() {
    const messages = {
        messageTitle: 'Digite seu email para assinar newsletter',
        errorsMessages: {
            invalid: 'Por favor, digite um e-mail válido.',
            needSymbol: `E-mail precisa de um " @ "`,
            needMail: `E-mail precisa de um " mail "`,
            needDomain: `E-mail precisa de um domínio " .com "`
        }
    };

    const [email, setEmail] = useState();
    const [errors, setErrors ] = useState(['E-mail não pode ficar vazio.']);

    
    const validate = () => {
        const successMessage = `Obrigado pela sua assinatura, você receberá nossas novidades no e-mail ${email}`;

        if(!email.includes('@')) {
            setErrors(`${messages.errorsMessages.needSymbol}`);
            return
        };

        if(!email.includes('mail')) {
            setErrors(`${messages.errorsMessages.needMail}`);
            return
        };

        if(!email.includes('.com')) {
            setErrors(`${messages.errorsMessages.needDomain}`);
            return
        };

        if(email) alert(`${successMessage}`);
    };
    
    const onHandleSubmit = (e) => {
        e.preventDefault();
        validate();
    };

    return(
        <>
            <FormArea onSubmit={onHandleSubmit}>
                <EmailContainer>
                    <label htmlFor="email" className='sr-only'>Email</label>
                    <input 
                    className="email-input"
                    type="text" 
                    required
                    placeholder="Insira seu e-mail"
                    id="email"
                    onChange={(e) => setEmail(e.target.value)}
                    />
                    <MdOutlineEmail />
                </EmailContainer>
                {!email && <Button disabled title={messages.messageTitle} type="submit">Assinar newsletter</Button>}
                {email && <ButtonSuccess type="submit">Assinar newsletter</ButtonSuccess>}
            </FormArea>
            <ErrorContainer className="error__span">
                {validate && <Error>{errors}</Error>}
            </ErrorContainer>
        </>
    )
};
