import { 
    Newsletter, ColA, 
    ColB, Subtitle, 
    Title, TextContent 
} from './styled';

import TreeImage from './TreeImage';
import ShapeBackground from './ShapeBackground';
import Form from './Form';

export default function SignUpNewsletter() {
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
                            <Form />
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
