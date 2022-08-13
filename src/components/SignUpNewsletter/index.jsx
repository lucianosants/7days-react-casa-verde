import { 
    Newsletter, ColA, ColB, FormArea, 
    EmailContainer, Button, Subtitle, Title, 
    TextContent 
} from './styled';


import { MdOutlineEmail } from 'react-icons/md';

import TreeImage from './TreeImage';
import ShapeBackground from './ShapeBackground';

export default function SignUpNewsletter() {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const messageTitle = 'Digite seu email para assinar newsletter';
    
    return(
        <div>
            <Newsletter>
                <ColA>
                    <div className="w-only">
                        <Subtitle>
                            Sua casa com as
                        </Subtitle>
                        
                        <Title>
                            Melhores plantas
                        </Title>

                        <TextContent>
                            Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.
                        </TextContent>

                        <div className="input-area">
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
                        </div>
                    </div>
                </ColA>

                <ColB>
                    <div className="w-only">
                        <TreeImage />
                    </div>
                </ColB>

                <ShapeBackground />
            </Newsletter>
        </div>
    )
};