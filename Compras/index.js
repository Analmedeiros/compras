document.addEventListener("DOMContentLoaded", function () {
    // Seleciona os botões de aumento, botões de diminuição, quantidades e preços
    const botoesMais = document.querySelectorAll(".bx-plus");
    const botoesMenos = document.querySelectorAll(".bx-minus");
    const quantidades = document.querySelectorAll(".contador span");
    const precos = document.querySelectorAll(".preco p");
    const totalCompra = document.getElementById("total-compra");

    // Adiciona eventos de clique aos botões de aumento e diminuição
    for (let i = 0; i < botoesMais.length; i++) {
        // Aumenta a quantidade quando o botão de aumento é clicado
        botoesMais[i].addEventListener("click", function () {
            let quantidade = parseInt(quantidades[i].textContent);
            quantidade++;
            quantidades[i].textContent = quantidade;
            atualizarTotalCompra();
        });

        // Diminui a quantidade quando o botão de diminuição é clicado
        botoesMenos[i].addEventListener("click", function () {
            let quantidade = parseInt(quantidades[i].textContent);
            if (quantidade > 0) {
                quantidade--;
                quantidades[i].textContent = quantidade;
                atualizarTotalCompra();
            }
        });
    }

    // Função para atualizar o total da compra
    function atualizarTotalCompra() {
        let total = 0;
        for (let i = 0; i < precos.length; i++) {
            // Extrai o valor do preço e a quantidade de cada item
            const preco = parseFloat(precos[i].textContent.replace("R$ ", "").replace(",", "."));
            const quantidade = parseInt(quantidades[i].textContent);
            // Calcula o subtotal para cada item e adiciona ao total
            total += preco * quantidade;
        }
        // Exibe o total da compra com duas casas decimais e vírgula para os centavos
        totalCompra.textContent = "Total da Compra: R$ " + total.toFixed(2).replace(".", ",");
    }
});


   //tema claro e escuro// 
  document.addEventListener("DOMContentLoaded", function () {
    const lightThemeButton = document.getElementById("light-theme");
    const darkThemeButton = document.getElementById("dark-theme");

    lightThemeButton.addEventListener("click", function () {
        document.body.classList.remove("dark-mode");
    });

    darkThemeButton.addEventListener("click", function () {
        document.body.classList.add("dark-mode");
    });
});

  