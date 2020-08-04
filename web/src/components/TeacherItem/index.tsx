import React from 'react'

import whatsAppIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img
                    src="https://avatars0.githubusercontent.com/u/43425195?s=460&u=d3b90389df0dda3f8fb72a14857e217178e22b91&v=4"
                    alt="GledsonDev"
                />
                <div>
                    <strong>GledsonDev</strong>
                    <span>Química</span>

                    <p>
                        Entusiasta das melhores tecnologias de química avançada.
                        <br />
                        <br />
                        Apaixonado por explodir coisas em laboratório e por
                        mudar a vida das pessoas através de experiências. Mais
                        de 200.000 pessoas já passaram por uma das minhas
                        explosões.
                    </p>
                </div>
            </header>
            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 150,00</strong>
                </p>
                <button type="button">
                    <img src={whatsAppIcon} alt="Whatsapp" />
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem
