document.addEventListener('DOMContentLoaded', () => {
    // 1. Header scroll effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 2. Data Definitions for Marketplace
    const professionalsData = [
        {
            id: 'prof1',
            name: 'Edenilson Silva',
            category: 'pedreiro',
            rating: 4.9,
            specialty: 'Construção Civil & Acabamento',
            desc: 'Pedreiro com 15 anos de experiência. Especializado em alvenaria estrutural, contrapiso, colocação de cerâmica e assentamento de tijolos com alto padrão.',
            price: 220,
            unit: '/dia',
            badge: 'Recomendado',
            img: 'assets/construction_materials.jpg'
        },
        {
            id: 'prof2',
            name: 'Marcos Oliveira',
            category: 'pintor',
            rating: 4.8,
            specialty: 'Pintura Residencial & Comercial',
            desc: 'Especialista em pintura interna e externa, aplicação de texturas, grafiato, massa corrida e restauração de fachadas prediais.',
            price: 180,
            unit: '/dia',
            badge: 'Destaque',
            img: 'assets/painter_service.jpg'
        },
        {
            id: 'prof3',
            name: 'Ricardo Souza',
            category: 'funileiro',
            rating: 4.7,
            specialty: 'Funilaria e Pintura Automotiva',
            desc: 'Serviços de martelinho de ouro, lanternagem, restauração de parachoques e pintura especializada em carros e motos.',
            price: 250,
            unit: '/serviço',
            badge: 'Premium',
            img: 'assets/hero_banner.jpg'
        },
        {
            id: 'prof4',
            name: 'Cláudio Rocha',
            category: 'pedreiro',
            rating: 4.6,
            specialty: 'Instalações & Reformas de Telhados',
            desc: 'Construção de telhados, coberturas de madeira ou metal, reparação de vazamentos e infiltrações residenciais.',
            price: 200,
            unit: '/dia',
            badge: 'Verificado',
            img: 'assets/construction_materials.jpg'
        },
        {
            id: 'prof5',
            name: 'Carlos Antunes',
            category: 'pintor',
            rating: 4.9,
            specialty: 'Pintura Airless & Fina',
            desc: 'Pintura industrial de alta produtividade usando tecnologia de spray airless e acabamento de alto brilho.',
            price: 240,
            unit: '/dia',
            badge: 'Novo',
            img: 'assets/painter_service.jpg'
        }
    ];

    const materialsData = [
        {
            id: 'mat1',
            name: 'Cimento Votoran Todas as Obras 50kg',
            category: 'cimento',
            rating: 4.9,
            specialty: 'Votorantim Cimentos',
            desc: 'Cimento multiuso ideal para reboco, concreto, contrapiso e assentamento de blocos. Alta resistência.',
            price: 36.90,
            unit: '/saco',
            badge: 'Melhor Preço',
            img: 'assets/construction_materials.jpg'
        },
        {
            id: 'mat2',
            name: 'Tinta Acrílica Coral Rende Muito Branca 18L',
            category: 'tintas',
            rating: 4.8,
            specialty: 'Coral Tintas',
            desc: 'Tinta acrílica fosca concentrada com altíssimo rendimento e cobertura. Baixo odor e secagem rápida.',
            price: 289.90,
            unit: '/lata',
            badge: 'Mais Vendido',
            img: 'assets/painter_service.jpg'
        },
        {
            id: 'mat3',
            name: 'Bloco de Cerâmica 8 Furos 9x19x19cm (Milheiro)',
            category: 'tijolos',
            rating: 4.7,
            specialty: 'Cerâmica Central',
            desc: 'Tijolos cerâmicos ideais para fechamento de alvenaria. Excelente isolamento térmico e acústico.',
            price: 890.00,
            unit: '/milheiro',
            badge: 'Destaque',
            img: 'assets/construction_materials.jpg'
        },
        {
            id: 'mat4',
            name: 'Massa Corrida Suvinil PVA 25kg',
            category: 'tintas',
            rating: 4.7,
            specialty: 'Suvinil',
            desc: 'Massa corrida niveladora para superfícies internas de reboco, concreto e gesso. Fácil de lixar.',
            price: 84.90,
            unit: '/balde',
            badge: 'Verificado',
            img: 'assets/painter_service.jpg'
        }
    ];

    // All resources for simulator select list
    const simulatorOptions = [
        { id: 'prof1', name: 'Edenilson Silva (Pedreiro) - R$ 220,00/dia', price: 220, type: 'prof' },
        { id: 'prof2', name: 'Marcos Oliveira (Pintor) - R$ 180,00/dia', price: 180, type: 'prof' },
        { id: 'prof3', name: 'Ricardo Souza (Funileiro) - R$ 250,00/serviço', price: 250, type: 'prof' },
        { id: 'prof4', name: 'Cláudio Rocha (Pedreiro) - R$ 200,00/dia', price: 200, type: 'prof' },
        { id: 'prof5', name: 'Carlos Antunes (Pintor) - R$ 240,00/dia', price: 240, type: 'prof' },
        { id: 'mat1', name: 'Cimento Votoran 50kg - R$ 36,90/saco', price: 36.90, type: 'mat' },
        { id: 'mat2', name: 'Tinta Coral Branca 18L - R$ 289,90/lata', price: 289.90, type: 'mat' },
        { id: 'mat3', name: 'Bloco Cerâmica (Milheiro) - R$ 890,00/milh', price: 890, type: 'mat' },
        { id: 'mat4', name: 'Massa Corrida Suvinil 25kg - R$ 84,90/balde', price: 84.90, type: 'mat' }
    ];

    let currentTab = 'profissionais'; // default tab
    let selectedCategoryFilter = 'all';
    let searchQuery = '';

    // Elements
    const tabProfissionaisBtn = document.getElementById('tab-profissionais');
    const tabMateriaisBtn = document.getElementById('tab-materiais');
    const searchInput = document.getElementById('search-input');
    const categorySelect = document.getElementById('category-select');
    const searchBtn = document.getElementById('search-btn');
    const itemsGrid = document.getElementById('items-grid');
    const marketplaceSubtitle = document.getElementById('marketplace-subtitle');

    // 3. Render Marketplace Cards
    function renderMarketplace() {
        itemsGrid.innerHTML = '';
        const data = currentTab === 'profissionais' ? professionalsData : materialsData;
        
        // Filter by Search Query & Select Category
        const filteredData = data.filter(item => {
            const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                                  item.specialty.toLowerCase().includes(searchQuery.toLowerCase()) || 
                                  item.desc.toLowerCase().includes(searchQuery.toLowerCase());
            
            const matchesCategory = selectedCategoryFilter === 'all' || item.category === selectedCategoryFilter;
            
            return matchesSearch && matchesCategory;
        });

        if (filteredData.length === 0) {
            itemsGrid.innerHTML = `
                <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-secondary);">
                    <i class="fa fa-search" style="font-size: 40px; margin-bottom: 16px; color: var(--accent-orange);"></i>
                    <p>Nenhum resultado encontrado para a pesquisa.</p>
                </div>
            `;
            return;
        }

        filteredData.forEach(item => {
            const card = document.createElement('div');
            card.className = 'item-card';
            
            const badgeClass = currentTab === 'profissionais' ? 'badge-orange' : 'badge-teal';
            const subtitleClass = currentTab === 'profissionais' ? 'orange-sub' : '';
            const btnClass = currentTab === 'profissionais' ? 'btn-primary' : 'btn-teal';
            const actionText = currentTab === 'profissionais' ? 'Contratar' : 'Comprar';

            card.innerHTML = `
                <div class="card-img-wrapper">
                    <img src="${item.img}" alt="${item.name}">
                    <span class="card-badge ${badgeClass}">${item.badge}</span>
                </div>
                <div class="card-info">
                    <div class="card-title-row">
                        <h4 class="card-title">${item.name}</h4>
                        <span class="card-rating"><i class="fa fa-star" style="color: #f59e0b"></i> ${item.rating}</span>
                    </div>
                    <p class="card-subtitle ${subtitleClass}">${item.specialty}</p>
                    <p class="card-desc">${item.desc}</p>
                    <div class="card-footer">
                        <div class="card-price">R$ ${item.price.toFixed(2).replace('.', ',')} <span>${item.unit}</span></div>
                        <button class="btn ${btnClass} btn-sm card-action-btn" data-id="${item.id}" data-type="${currentTab}">
                            ${actionText}
                        </button>
                    </div>
                </div>
            `;
            itemsGrid.appendChild(card);
        });

        // Add action listeners
        document.querySelectorAll('.card-action-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = e.target.getAttribute('data-id');
                const type = e.target.getAttribute('data-type');
                openBookingModal(id, type);
            });
        });
    }

    // 4. Tab Switching Event
    function switchTab(tab) {
        currentTab = tab;
        selectedCategoryFilter = 'all';
        searchQuery = '';
        searchInput.value = '';

        if (tab === 'profissionais') {
            tabProfissionaisBtn.classList.add('active');
            tabProfissionaisBtn.classList.remove('teal-style');
            tabMateriaisBtn.classList.remove('active', 'teal-style');
            marketplaceSubtitle.textContent = 'Encontre pintores, pedreiros, funileiros e outros profissionais perto de você';
            
            // Re-populate categories select
            categorySelect.innerHTML = `
                <option value="all">Todas as Profissões</option>
                <option value="pedreiro">Pedreiro / Mestre</option>
                <option value="pintor">Pintor Profissional</option>
                <option value="funileiro">Funilaria / Pintura Automotiva</option>
            `;
        } else {
            tabMateriaisBtn.classList.add('active', 'teal-style');
            tabProfissionaisBtn.classList.remove('active');
            marketplaceSubtitle.textContent = 'Adquira cimento, tijolos, tintas e tudo o que sua reforma precisa';
            
            // Re-populate categories select
            categorySelect.innerHTML = `
                <option value="all">Todos os Materiais</option>
                <option value="cimento">Cimentos & Massas</option>
                <option value="tintas">Tintas & Acessórios</option>
                <option value="tijolos">Tijolos & Cerâmicas</option>
            `;
        }
        renderMarketplace();
    }

    tabProfissionaisBtn.addEventListener('click', () => switchTab('profissionais'));
    tabMateriaisBtn.addEventListener('click', () => switchTab('materiais'));

    // Category and search events
    categorySelect.addEventListener('change', (e) => {
        selectedCategoryFilter = e.target.value;
        renderMarketplace();
    });

    searchBtn.addEventListener('click', () => {
        searchQuery = searchInput.value;
        renderMarketplace();
    });

    searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            searchQuery = searchInput.value;
            renderMarketplace();
        }
    });

    // Initial render
    switchTab('profissionais');


    // 5. Budget Simulator Logic
    const simProductSelect = document.getElementById('sim-product-select');
    const simProductQty = document.getElementById('sim-product-qty');
    const simBtnAdd = document.getElementById('sim-btn-add');
    const summaryList = document.getElementById('summary-list');
    const summarySubtotal = document.getElementById('summary-subtotal');
    const summaryTax = document.getElementById('summary-tax');
    const summaryTotal = document.getElementById('summary-total');

    let simulatorCart = [];

    // Populate Simulator Select Options
    function populateSimulatorSelect() {
        simProductSelect.innerHTML = '';
        simulatorOptions.forEach(opt => {
            const option = document.createElement('option');
            option.value = opt.id;
            option.textContent = opt.name;
            simProductSelect.appendChild(option);
        });
    }

    function updateSimulatorSummary() {
        summaryList.innerHTML = '';
        if (simulatorCart.length === 0) {
            summaryList.innerHTML = `
                <div style="text-align: center; padding: 20px 0; color: var(--text-muted); font-size: 14px;">
                    Nenhum item adicionado ao orçamento simulado.
                </div>
            `;
            summarySubtotal.textContent = 'R$ 0,00';
            summaryTax.textContent = 'R$ 0,00';
            summaryTotal.textContent = 'R$ 0,00';
            return;
        }

        let subtotal = 0;

        simulatorCart.forEach((item, index) => {
            const itemCost = item.price * item.quantity;
            subtotal += itemCost;

            const div = document.createElement('div');
            div.className = 'summary-item';
            div.innerHTML = `
                <div>
                    <span class="summary-item-name">${item.name}</span>
                    <div style="font-size: 11px; color: var(--text-muted)">Qtd: ${item.quantity} x R$ ${item.price.toFixed(2).replace('.', ',')}</div>
                </div>
                <div>
                    <span class="summary-item-price">R$ ${itemCost.toFixed(2).replace('.', ',')}</span>
                    <button class="summary-remove-btn" data-index="${index}">
                        <i class="fa fa-trash"></i> Excluir
                    </button>
                </div>
            `;
            summaryList.appendChild(div);
        });

        // 5% commission marketplace fee
        const marketplaceFee = subtotal * 0.05;
        const total = subtotal + marketplaceFee;

        summarySubtotal.textContent = `R$ ${subtotal.toFixed(2).replace('.', ',')}`;
        summaryTax.textContent = `R$ ${marketplaceFee.toFixed(2).replace('.', ',')}`;
        summaryTotal.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;

        // Add remove listener
        document.querySelectorAll('.summary-remove-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const index = parseInt(e.currentTarget.getAttribute('data-index'));
                simulatorCart.splice(index, 1);
                updateSimulatorSummary();
            });
        });
    }

    // Add item to simulator cart
    simBtnAdd.addEventListener('click', () => {
        const selectedId = simProductSelect.value;
        const qty = parseInt(simProductQty.value);
        if (!selectedId || qty <= 0) return;

        const originalItem = simulatorOptions.find(o => o.id === selectedId);
        if (!originalItem) return;

        // Check if already in cart
        const existingCartItem = simulatorCart.find(i => i.id === selectedId);
        if (existingCartItem) {
            existingCartItem.quantity += qty;
        } else {
            // Clean up name for display
            let cleanName = originalItem.name.split(' - ')[0];
            simulatorCart.push({
                id: originalItem.id,
                name: cleanName,
                price: originalItem.price,
                quantity: qty
            });
        }

        updateSimulatorSummary();
        // reset qty input
        simProductQty.value = 1;
    });

    populateSimulatorSelect();
    updateSimulatorSummary();


    // 6. Modal / Form submission simulator
    const modal = document.getElementById('booking-modal');
    const modalClose = document.getElementById('modal-close');
    const modalTitle = document.getElementById('modal-title-text');
    const modalDesc = document.getElementById('modal-desc-text');
    const bookingForm = document.getElementById('booking-form');
    const formItemInput = document.getElementById('form-item-id');
    const formTypeInput = document.getElementById('form-item-type');
    const modalInputFields = document.getElementById('modal-input-fields');

    function openBookingModal(id, type) {
        formItemInput.value = id;
        formTypeInput.value = type;

        if (type === 'profissionais') {
            const prof = professionalsData.find(p => p.id === id);
            modalTitle.textContent = `Contratar: ${prof.name}`;
            modalDesc.textContent = `Envie uma proposta de serviço e agendamento para o profissional. Valor base: R$ ${prof.price.toFixed(2).replace('.', ',')}${prof.unit}`;
            
            modalInputFields.innerHTML = `
                <div class="form-group">
                    <label for="booking-date">Data do Serviço</label>
                    <input type="date" id="booking-date" class="form-control" required>
                </div>
                <div class="form-group">
                    <label for="booking-days">Quantidade de dias estimada</label>
                    <input type="number" id="booking-days" class="form-control" value="1" min="1" required>
                </div>
                <div class="form-group">
                    <label for="booking-notes">Instruções para o serviço</label>
                    <textarea id="booking-notes" class="form-control" rows="3" placeholder="Descreva brevemente o trabalho a ser feito..."></textarea>
                </div>
            `;
        } else {
            const mat = materialsData.find(m => m.id === id);
            modalTitle.textContent = `Comprar: ${mat.name}`;
            modalDesc.textContent = `Selecione a quantidade para comprar da loja ${mat.specialty}. Preço unitário: R$ ${mat.price.toFixed(2).replace('.', ',')}`;
            
            modalInputFields.innerHTML = `
                <div class="form-group">
                    <label for="purchase-qty">Quantidade</label>
                    <input type="number" id="purchase-qty" class="form-control" value="1" min="1" required>
                </div>
                <div class="form-group">
                    <label for="shipping-address">Endereço de Entrega</label>
                    <input type="text" id="shipping-address" class="form-control" placeholder="Rua, número, bairro..." required>
                </div>
            `;
        }

        modal.classList.add('active');
    }

    modalClose.addEventListener('click', () => {
        modal.classList.remove('active');
    });

    // Close modal clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });

    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        modal.classList.remove('active');
        
        // Show customized alert
        alert('🎉 Sucesso! Seu pedido/solicitação foi enviado com sucesso para a plataforma ConstruInfra. O parceiro entrará em contato em breve.');
        
        bookingForm.reset();
    });

    // Simulator Checkout Button
    const btnSimulateCheckout = document.getElementById('btn-simulate-checkout');
    btnSimulateCheckout.addEventListener('click', () => {
        if (simulatorCart.length === 0) {
            alert('Por favor, adicione itens ao carrinho de simulação primeiro.');
            return;
        }
        
        const summary = simulatorCart.map(item => `- ${item.name} (Qtd: ${item.quantity})`).join('\n');
        const grandTotal = summaryTotal.textContent;
        
        alert(`🛒 Simulação de Pedido Fechada!\n\nItens Selecionados:\n${summary}\n\nTotal com Taxa de Marketplace: ${grandTotal}\n\nNo aplicativo real, isso geraria os pedidos de compra para as lojas e a solicitação de agenda para os profissionais de forma unificada!`);
        simulatorCart = [];
        updateSimulatorSummary();
    });
});
