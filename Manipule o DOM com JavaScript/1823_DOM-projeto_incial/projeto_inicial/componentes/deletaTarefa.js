const BotaoDeleta = () => {
    const botaoDeleta = document.createElement('button')


    botaoDeleta.innerText = 'Apagar'

    botaoDeleta.addEventListener('click', apagarTarefa)

    return botaoDeleta

}

const apagarTarefa = (evento) => {
    const botaoDeleta = evento.target

    const tarefaDeletada = botaoDeleta.parentElement

    tarefaDeletada.remove()
}

export default BotaoDeleta