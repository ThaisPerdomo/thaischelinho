/*** 
 * Função de ativar o menu da página em que o usuário está.  
 * 
 * Antes de tudo, você cria uma função (exportada) que vai receber um parâmetro 
 * Esse parâmetro é o menu que está ativo. Ou seja, a página que está sendo exibida
 * Mas, você precisa especificar que você só aceita alguns valores para esse parâmetro, por isso o type MenuAtivado
 * Esse type MenuAtivado pode ser uma string vazia (pra quando o usuário estiver numa página, por exemplo, de search) ou uma das opções de páginas que você tem
 * A função ativaMenu tem um objeto com as opções de menu, e o valor de cada uma delas é false
 * Depois, se o parâmetro que você recebeu for diferente de string vazia, você vai alterar uma das opções para true
 * E, por fim, você retorna o objeto com as opções de menu com uma delas ativada em true! 
***/
type MenuAtivado = '' |'home' | 'comes' | 'bebes' | 'passeios';

export const ativaMenu = (menuAtivado: MenuAtivado) => {

    let opcoesDoMenu = { 
        home: false, 
        comes: false, 
        bebes: false, 
        passeios: false 
    }

    if(menuAtivado !== ''){
        opcoesDoMenu[menuAtivado] = true;
    }

    return opcoesDoMenu;

}