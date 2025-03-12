document.addEventListener('DOMContentLoaded', function() {
    // Exemplo de carregamento de transações
    const transactions = [
        { date: '12/03/2025', description: 'Transferência recebida', amount: 'R$ 100,00' },
        { date: '11/03/2025', description: 'Pagamento de conta', amount: '-R$ 50,00' }
    ];

    const tbody = document.querySelector('.transactions tbody');
    transactions.forEach(transaction => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${transaction.date}</td>
            <td>${transaction.description}</td>
            <td>${transaction.amount}</td>
        `;
        tbody.appendChild(row);
    });
});