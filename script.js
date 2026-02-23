//conta para fornecer idade ao index.

document.addEventListener('DOMContentLoaded', () => {
    const hoje = new Date();
    const nascimento = new Date('2001-12-26');

    let idade = hoje.getFullYear() - nascimento.getFullYear();

    if (
        hoje.getMonth() < nascimento.getMonth() ||
        (hoje.getMonth() === nascimento.getMonth() &&
            hoje.getDate() < nascimento.getDate())
    ) {
        idade--;
    }

    document.getElementById('idade').textContent = idade;
});