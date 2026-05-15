import './styles/main.css';

interface Link {
    title: string;
    description: string;
    url: string;
    icon: string;
    category: string;
    color: string;
}

const links: Link[] = [
    {
        title: 'Un mes gratis en Platzi',
        description: 'Ahorra en tu suscripción con este link de referido',
        url: 'https://platzi.com/r/jefred03salazar',
        icon: '💸',
        category: 'Comunidad & Aprendizaje',
        color: 'green'
    },
    {
        title: 'Mi Portafolio GitHub',
        description: 'Explora mis proyectos y contribuciones de código',
        url: 'https://github.com/JBedoyaSalazar',
        icon: '💻',
        category: 'Evolución Profesional',
        color: 'indigo'
    },
    {
        title: 'LinkedIn Profesional',
        description: 'Conectemos y hablemos de tecnología e IA',
        url: 'https://www.linkedin.com/in/jefred-erney-bedoya-salazar-150769164/',
        icon: '🤝',
        category: 'Evolución Profesional',
        color: 'sky'
    },
    {
        title: 'Instagram',
        description: 'Sígueme para actualizaciones y contenido diario',
        url: 'https://www.instagram.com/bedoyajefred/',
        icon: '📸',
        category: 'Social Media',
        color: 'rose'
    },
    {
        title: 'Canal de YouTube',
        description: 'Contenido sobre desarrollo y tecnología',
        url: 'https://www.youtube.com/@darksoulbs420',
        icon: '🎥',
        category: 'Social Media',
        color: 'red'
    }
];

const $linksContainer = document.getElementById('links');

function renderLinks(linkList: Link[]) {
    if (!$linksContainer) return;

    const categories = Array.from(new Set(linkList.map(link => link.category)));

    const html = categories.map(category => {
        const categoryLinks = linkList.filter(l => l.category === category);
        
        return `
            <div class="px-2 py-1 mt-6 first:mt-0 text-[10px] font-bold text-indigo-400 uppercase tracking-widest opacity-60 ml-1">
                ${category}
            </div>
            ${categoryLinks.map(link => `
                <a href="${link.url}" target="_blank" 
                   class="glass link-card group flex items-center justify-between p-5 rounded-2xl mb-4 last:mb-0">
                    <div class="flex items-center gap-4">
                        <div class="w-10 h-10 rounded-xl bg-${link.color}-500/20 flex items-center justify-center text-${link.color}-400 group-hover:scale-110 transition-transform">
                            ${link.icon}
                        </div>
                        <div>
                            <h3 class="text-white font-semibold group-hover:text-${link.color}-400 transition-colors">${link.title}</h3>
                            <p class="text-xs text-slate-500">${link.description}</p>
                        </div>
                    </div>
                    <svg class="w-5 h-5 text-slate-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                </a>
            `).join('')}
        `;
    }).join('');

    $linksContainer.innerHTML = html;
}


renderLinks(links);

console.log('Links dinámicos cargados con éxito 🚀');