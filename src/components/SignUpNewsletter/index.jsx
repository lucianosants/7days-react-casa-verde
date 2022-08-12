import { Newsletter } from './styled'
import { MdOutlineEmail } from 'react-icons/md'
import treeImg from '../../assets/tree-1.png'
import bubble from '../../assets/bubble.svg'

export default function SignUpNewsletter() {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    
    return(
        <div>
            <Newsletter>
                <section className="col-a">
                    <div className="w-only">
                        <h4 className="subtitle">Sua casa com as</h4>
                        <h2 className="title">Melhores plantas</h2>

                        <p className="text-content opacity-text">
                        Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.
                        </p>

                        <div className="input-area">
                            <form className="form-area">
                                <div className="input-container" role="search">
                                    <MdOutlineEmail className="opacity-text" />
                                    <input 
                                    className="email-input"
                                    type="email" 
                                    placeholder="Insira seu e-mail"/>
                                </div>
                                <button onClick={handleSubmit} className="btn">Assinar newsletter</button>
                            </form>
                        </div>
                    </div>
                </section>

                <section className="col-b">
                    <div className="w-only">
                        <img src={treeImg} alt="" />
                    </div>
                </section>

                <img src={bubble} alt="" className="float-bubble" />
            </Newsletter>
            
        </div>
    )
};