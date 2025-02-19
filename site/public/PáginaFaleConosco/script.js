function clickMenuLeft() {
    if (menuleft1.style.display == "flex") {
        menuleft1.style.display = 'none'
        menuleft2.style.display = 'none'
        menuleft3.style.display = 'none'
        menuleft4.style.display = 'none'
        iconmenuleft.style.transform = 'rotate(360deg)'
    } else {
        menuleft1.style.display = 'flex'
        menuleft2.style.display = 'flex'
        menuleft3.style.display = 'flex'
        menuleft4.style.display = 'flex'
        iconmenuleft.style.transform = 'rotate(180deg)'
    }
}

function clickMenu() {
    if (menumenu.style.display == "flex") {
        menumenu.style.display = 'none'
        iconmenumenu.innerHTML = 'menu'
    } else {
        menumenu.style.display = "flex"
        iconmenumenu.innerHTML = "close"
    }
}

function formatarTelefone() {
    const telefoneInput = document.getElementById('input_telefone');
    let telefone = telefoneInput.value;

    // Remove todos os caracteres não numéricos
    telefone = telefone.replace(/\D/g, '');

    // Verifica se há um DDD no início do número e adiciona os parênteses
    if (telefone.length > 2) {
        telefone = `(${telefone.substring(0, 2)}) ${telefone.substring(2)}`;
    }

    // Atualiza o valor da input com o telefone formatado
    telefoneInput.value = telefone;
}



document.getElementById('faleConosco').addEventListener('click', function (event) {
    event.preventDefault();
    contatar();
});

function contatar() {
    const nome = input_nome.value
    const remetente = input_email.value;
    const telefone = input_telefone.value;
    const corpo = input_mensagem.value;

    if (nome == "" || remetente == "" || telefone == "" || corpo == "") {
        input_nome.style.color = "red"
        input_email.style.color = "red"
        input_telefone.style.color = "red"
        input_mensagem.style.color = "red"
    } else if (remetente.indexOf("@") == -1){
        input_email.style.color = "red"
    } else if (telefone.length < 10) {
        input_telefone.style.color = "red"
    } else {

    fetch('/enviar-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nome, remetente, telefone, corpo }),
    })
        .then(function (response) {
            if (response.ok) {
                console.log('E-mail enviado com sucesso!');
                alert('E-mail enviado com sucesso!')
                limparInputs()
            } else {
                console.log('Erro ao enviar o e-mail.');
            }
        })
        .catch(function (error) {
            console.log('Erro ao enviar o e-mail:', error);
        });
    }
}


function limparInputs() {
    var inputs = document.getElementsByTagName('input'); // Obtém todas as inputs da página
    var textarea = document.getElementById("i_msg")

    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].type !== 'button' && inputs[i].type !== 'submit') { // Ignora botões de tipo submit e button
            inputs[i].value = ''; // Limpa o valor da input
        }
    }

    textarea.value = "";
}

function clickBloco1() {
    if (dashdash1.style.display == 'none') {

        menuleft2.style.backgroundColor = '#2E2109'
        menuleft3.style.backgroundColor = '#2E2109'
        menuleft4.style.backgroundColor = '#2E2109'

        dashdash2.style.display = 'none'
        dashdash3.style.display = 'none'
        dashdash4.style.display = 'none'
        dashdash1.style.display = 'flex'
        dashstandby.style.display = 'none'

        menuleft1.style.backgroundColor = '#775201'
        dashdashtexto.innerHTML = `DASHBOARD DA ALA 1`
    } else {
        dashdash1.style.display = 'none'
        menuleft1.style.backgroundColor = '#2E2109'
        dashstandby.style.display = 'flex'
        dashdashtexto.innerHTML = ` `
    }

}

function clickBloco2() {

    if (dashdash2.style.display == 'none') {
        menuleft1.style.backgroundColor = '#2E2109'
        menuleft3.style.backgroundColor = '#2E2109'
        menuleft4.style.backgroundColor = '#2E2109'
        menuleft2.style.backgroundColor = '#775201'

        dashdash1.style.display = 'none'
        dashdash3.style.display = 'none'
        dashdash4.style.display = 'none'
        dashdash2.style.display = 'flex'
        dashstandby.style.display = 'none'
        dashdashtexto.innerHTML = `DASHBOARD DA ALA 2`

    } else {
        menuleft2.style.backgroundColor = '#2E2109'
        dashdash2.style.display = 'none'
        dashstandby.style.display = 'flex'
        dashdashtexto.innerHTML = ` `
    }

}

function clickBloco3() {

    if (dashdash3.style.display == 'none') {
        menuleft1.style.backgroundColor = '#2E2109'
        menuleft2.style.backgroundColor = '#2E2109'
        menuleft4.style.backgroundColor = '#2E2109'
        dashdash1.style.display = 'none'
        dashdash2.style.display = 'none'
        dashdash4.style.display = 'none'
        dashdash3.style.display = 'flex'
        dashstandby.style.display = 'none'
        menuleft3.style.backgroundColor = '#775201'
        dashdashtexto.innerHTML = `DASHBOARD DA ALA 3`
    } else {
        dashdash3.style.display = 'none'
        menuleft3.style.backgroundColor = '#2E2109'
        dashstandby.style.display = 'flex'
        dashdashtexto.innerHTML = ` `
    }

}

function clickBloco4() {
    if (dashdash4.style.display == 'none') {
        menuleft1.style.backgroundColor = '#2E2109'
        menuleft2.style.backgroundColor = '#2E2109'
        menuleft3.style.backgroundColor = '#2E2109'
        dashdash1.style.display = 'none'
        dashdash2.style.display = 'none'
        dashdash3.style.display = 'none'
        dashdash4.style.display = 'flex'
        dashstandby.style.display = 'none'
        menuleft4.style.backgroundColor = '#775201'
        dashdashtexto.innerHTML = `DASHBOARD DA ALA 4`
    } else {
        dashdash4.style.display = 'none'
        menuleft4.style.backgroundColor = '#2E2109'
        dashstandby.style.display = 'flex'
        dashdashtexto.innerHTML = ` `
    }

}

function clickPerfil() {
    if (subsub.style.display == 'flex') {
        subsub.style.display = 'none'
    } else {
        subsub.style.display = 'flex'
    }


}


function dashboard() {
    window.location.href = "../PaginadeConsulta/consulta.html"
}

function gerenciarconta() {
    window.location.href = '../PaginaGerenciarConta/gerenciar.html'
}

function logout() {
    window.location.href = "../PáginaInicial/home.html"
    sessionStorage.clear()
}
function home() {
    window.location.href = "../PáginaInicial/home.html"
}

function cadastrar() {
    window.location.href = "../PáginaCadastro/cadastro.html"
}

function entrar() {
    window.location.href = "../PáginaLogin/login.html";
}

