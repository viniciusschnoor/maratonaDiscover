const Modal = {
    open(){
        // // Abrir modal
        // const modalOverlay = document.querySelector('.modal-overlay')
        // // console.log(modalOverlay) --> Apenas para consultar div
        // // Adicionar classe active ao modal
        // modalOverlay.classList.add('active')
        document.querySelector('.modal-overlay').classList.add('active')
    },
    close(){
        // // Fechar modal
        // const modalOverlay = document.querySelector('.modal-overlay')
        // // Remover classe active do modal
        // modalOverlay.classList.remove('active')
        document.querySelector('.modal-overlay').classList.remove('active')
    },
}

const transactions = [
    {
        id: 1,
        description: 'Luz',
        amount: -50000,
        date: '23/01/2021',
    },
    {
        id: 2,
        description: 'Criação de Website',
        amount: 500000,
        date: '23/01/2021',
    },
    {
        id: 3,
        description: 'Internet',
        amount: -20000,
        date: '23/01/2021',
    },
    {
        id: 4,
        description: 'App',
        amount: 200000,
        date: '23/01/2021',
    },
]

const Transaction = {
    
    all: transactions,

    incomes() {
        let income = 0;
        // Pegar todas as transações
        Transaction.all.forEach((transaction) => {
            // para cada transação se ela for maior que zero
            if( transaction.amount > 0 ) {
                // Somar a uma variável e retornar como variável
                income += transaction.amount;
            }
        })
        return income;
    },

    expenses() {
        let expense = 0;
        // Pegar todas as transações
        Transaction.all.forEach((transaction) => {
            // para cada transação se ela for menor que zero
            if( transaction.amount < 0 ) {
                // Somar a uma variável e retornar como variável
                expense += transaction.amount;
            }
        })
        return expense;
    },

    total() {
        // Entradas - Saídas
        return Transaction.incomes() + Transaction.expenses();
    },

}

// Pegar dados do JS e colocar no HTML

const DOM = {
    transactionsContainer: document.querySelector('#data-table tbody'),
    
    addTransaction(transaction, index) {
        const tr = document.createElement('tr')
        tr.innerHTML = DOM.innerHTMLTransaction(transaction)
        
        DOM.transactionsContainer.appendChild(tr)
    },

    innerHTMLTransaction(transaction) {
        const CSSClass = transaction.amount >= 0 ? 'income' : 'expense'
        const amount = Utils.formatCurrency(transaction.amount)
        const html = `
            <td class="description">${transaction.description}</td>
            <td class="${CSSClass}">${amount}</td>
            <td class="date">${transaction.date}</td>
            <td>
                <img src="./assets/minus.svg" alt="Remover Transação" />
            </td>
        `
        return html
    },

    updateBalance() {
        document.getElementById('incomeDisplay').innerHTML = Utils.formatCurrency(Transaction.incomes())
        document.getElementById('expenseDisplay').innerHTML = Utils.formatCurrency(Transaction.expenses())
        document.getElementById('totalDisplay').innerHTML = Utils.formatCurrency(Transaction.total())
    }
}

const Utils = {
    formatCurrency(value) {
        const signal = Number(value) < 0 ? "-" : ""

        value = String(value).replace(/\D/g, "")

        value = Number(value) / 100

        value = value.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        })

        return signal + value
    }
}

transactions.forEach( function(transaction) {
    DOM.addTransaction(transaction)
} )

DOM.updateBalance()

// 01:16:00