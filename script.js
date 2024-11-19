// script.js
function sendMessage() {
    // Dados do produto
    const productName = "Produto Exemplo";
    const productDescription = "Este é um produto de exemplo para testar a funcionalidade de compra simulada. Ideal para testar integrações.";
    const productPrice = "R$ 199,99";
    const productImage = "https://static.cdnlive.com.br/uploads/707/unidade/17213032177032_zoom.jpg";

    // Obter o tamanho selecionado
    const selectedSize = document.getElementById('sizeSelect').value;

    // Mensagem formatada para WhatsApp
    const message = `
        *Produto:* ${productName}
        *Descrição:* ${productDescription}
        *Preço:* ${productPrice}
        *Tamanho:* ${selectedSize}
        
        ![Imagem do Produto](${productImage})
        
        Está disponível?
    `;

    // Codificando a mensagem para ser enviada via URL
    const whatsappUrl = `https://wa.me/5531985079718?text=${encodeURIComponent(message)}`;

    // Abrir o WhatsApp
    window.open(whatsappUrl, '_blank');
}
