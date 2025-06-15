document.addEventListener('DOMContentLoaded', function() {
    // Accordion functionality
    const accordionContainer = document.getElementById('faq-accordion');
    if(accordionContainer) {
        accordionContainer.addEventListener('click', (e) => {
            const button = e.target.closest('.accordion-button');
            if (button) {
                const currentlyActive = document.querySelector('.accordion-button.active');
                if (currentlyActive && currentlyActive !== button) {
                    currentlyActive.classList.remove('active');
                    currentlyActive.querySelector('i').style.transform = 'rotate(0deg)';
                    currentlyActive.nextElementSibling.style.maxHeight = 0;
                }

                button.classList.toggle('active');
                const icon = button.querySelector('i');
                const content = button.nextElementSibling;

                if (button.classList.contains('active')) {
                    icon.style.transform = 'rotate(180deg)';
                    content.style.maxHeight = content.scrollHeight + 'px';
                } else {
                    icon.style.transform = 'rotate(0deg)';
                    content.style.maxHeight = 0;
                }
            }
        });
    }
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- DATA ---
    const forWhoData = [
        { icon: 'award', title: 'Garantir suas questões no ENEM', description: 'Você está cansado de perder pontos em questões que se repetem todos os anos? Aprenda a identificar e resolver essas questões modelo e garanta pontos preciosos na sua prova.' },
        { icon: 'graduation-cap', title: 'Passar em medicina ou outros cursos concorridos', description: 'Você sonha em ser aprovado em um curso de alta concorrência, como Medicina? Domine as técnicas e estratégias que farão a diferença na sua preparação e aumente suas chances de conquistar essa vaga tão desejada.' },
        { icon: 'clock', title: 'Otimizar seu tempo de estudo', description: 'Você sente que está perdendo tempo com métodos de estudo ineficazes? Utilize nossas planilhas de organização e metrificação para acompanhar seu progresso e estudar de forma mais eficiente e focada.' },
        { icon: 'shield-check', title: 'Ter mais segurança na Hora da Prova', description: 'Você quer se sentir mais confiante e preparado no dia do ENEM? Com o conhecimento das questões modelo e uma preparação sólida, você terá mais segurança para enfrentar a prova e alcançar seus objetivos.' },
        { icon: 'trending-up', title: 'Maximizar seu desempenho', description: 'Você quer um plano de estudos que realmente funcione? Aprenda a montar um horário de estudos realista e eficiente, garantindo que você esteja sempre no caminho certo para a aprovação.' },
        { icon: 'calculator', title: 'Alcançar 800+ em matemática', description: 'Você quer se destacar na prova de matemática do ENEM? Com as questões modelo, você chegará na prova sabendo resolver um bom número de questões, aumentando significativamente suas chances de atingir uma pontuação elevada.' }
    ];

    const bonusData = [
        { title: 'Bônus 1: Mentoria gravada (para os 20 primeiros)', description: 'Aprenda TUDO que precisa saber sobre essa parte crucial da preparação, na qual a maior parte dos estudantes comete erros que custa a aprovação.', icon: 'video', special: true },
        { title: 'Bônus 2: Aula de cálculo mental', description: 'Aprenda técnicas para aumentar a velocidade e a precisão na resolução de questões de matemática e ciências exatas, sem o uso de calculadora.', icon: 'brain-circuit' },
        { title: 'Bônus 3: Listas de Revisão Global', description: 'Listas com questões selecionadas a dedo que podem ser utilizadas em praticamente todas as revisões ao longo do ano.', icon: 'list-checks' },
        { title: 'Bônus 4: Guia para montar um horário de estudos eficiente', description: 'Aprenda a criar um cronograma realista que maximiza sua produtividade e evita sobrecargas.', icon: 'calendar-check' },
        { title: 'Bônus 5: Planilhas para organização e metrificação dos estudos', description: 'Ferramentas poderosas para acompanhar seu progresso de forma detalhada e organizada.', icon: 'table' },
        { title: 'Bônus 6: Mentoria: Reta final de aprovado!', description: 'Aprenda exatamente o que fazer (e o que não fazer) para ter uma reta final para o ENEM de alto desempenho!', icon: 'star' },
        { title: 'Bônus 7: A Última Revisão (para os 30 primeiros)', description: 'Material com 1000 questões por assunto, cronograma de revisão e planilha para análise de resultados.', icon: 'file-check-2', special: true }
    ];

    const faqData = [
        { q: 'Por quanto tempo terei acesso ao curso?', a: 'Para esta oferta insana, o acesso será vitalício!' },
        { q: 'Quais são as formas de pagamento?', a: 'O pagamento pode ser efetuado com cartão de crédito, cartão de débito ou PIX.' },
        { q: 'A plataforma de pagamentos é segura?', a: 'Sim! Utilizamos a Kiwify, plataforma 100% segura!' },
        { q: 'Posso parcelar o pagamento?', a: 'Sim, o pagamento pode ser parcelado em até 12x no cartão de crédito.' },
        { q: 'Como funciona a garantia?', a: 'Você pode solicitar o reembolso do seu investimento em até 7 dias após a data da compra.' },
        { q: 'Como ter acesso às aulas?', a: 'As aulas serão disponibilizadas pela plataforma Kiwify, em aulas gravadas em vídeo.' },
        { q: 'É online ou presencial?', a: 'O curso é 100% online para que você possa assistir às aulas a qualquer momento, evoluindo de acordo com o seu ritmo individual de aprendizado.' },
        { q: 'Como recebo o meu acesso?', a: 'Assim que a sua compra for aprovada, você receberá um e-mail automaticamente no endereço cadastrado com as instruções de acesso.' }
    ];

    // --- RENDER FUNCTIONS ---
    const insertHTML = (selector, data, template) => {
        const container = document.querySelector(selector);
        if(container) container.innerHTML = data.map(template).join('');
    };

    insertHTML('#for-who-section', forWhoData, item => `
        <div class="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-blue-500 transition-colors duration-300">
            <i data-lucide="${item.icon}" class="w-12 h-12 gradient-text mb-6"></i>
            <h3 class="text-xl font-bold text-white mb-3">${item.title}</h3>
            <p class="text-gray-400">${item.description}</p>
        </div>
    `);

    insertHTML('#bonus-section', bonusData, bonus => `
        <div class="bonus-card bg-gray-900 p-6 rounded-xl ${bonus.special ? 'special-bonus' : ''}">
            <div class="flex items-start gap-4">
                <i data-lucide="${bonus.icon}" class="w-8 h-8 ${bonus.special ? 'text-yellow-400' : 'text-blue-500'} mt-1 flex-shrink-0"></i>
                <div>
                    <h3 class="text-lg font-bold text-white mb-1">${bonus.title}</h3>
                    <p class="text-sm text-gray-400">${bonus.description}</p>
                </div>
            </div>
        </div>
    `);

    insertHTML('#faq-accordion', faqData, item => `
        <div class="bg-gray-900 rounded-lg border border-gray-800">
            <button class="accordion-button w-full flex justify-between items-center text-left p-6 focus:outline-none">
                <span class="text-lg font-semibold text-white">${item.q}</span>
                <i data-lucide="chevron-down" class="w-6 h-6 text-gray-500 transform transition-transform duration-300"></i>
            </button>
            <div class="accordion-content px-6 text-gray-400">
                <p class="pb-6">${item.a}</p>
            </div>
        </div>
    `);

    // --- Live View Counter ---
    function initLiveViews() {
        const viewCounter = document.getElementById('view-counter');
        if (!viewCounter) return;

        let baseViews = Math.floor(Math.random() * (197 - 83 + 1)) + 83;
        let currentViews = baseViews;
        viewCounter.textContent = currentViews;
        lucide.createIcons(); // Criar ícones iniciais

        setInterval(() => {
            const change = Math.floor(Math.random() * 5) - 2; // -2, -1, 0, 1, 2
            currentViews += change;

            // Garante que o número não se afaste muito da base
            if (currentViews < baseViews - 15) {
                currentViews = baseViews - 15;
            } else if (currentViews > baseViews + 20) {
                currentViews = baseViews + 20;
            }

            viewCounter.classList.add('updated');
            setTimeout(() => {
                viewCounter.textContent = currentViews;
                viewCounter.classList.remove('updated');
            }, 150);

        }, Math.random() * (5000 - 2500) + 2500); // Intervalo aleatório entre 2.5 e 5 segundos
    }

    initLiveViews();
    lucide.createIcons();
});
