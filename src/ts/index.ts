// index.ts
document.addEventListener('DOMContentLoaded', () => {
    console.log('Not UI Kit loaded');

    // Light/Dark mode toggle functionality
    const modeSwitcher = document.getElementById('mode-switcher');
    if (modeSwitcher) {
        modeSwitcher.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            modeSwitcher.classList.toggle('btn-toggle');

            // Update local storage
            localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
        });

        // Set initial state based on local storage or prefers-color-scheme
        const storedTheme = localStorage.getItem('theme');
        const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

        if (storedTheme === 'dark' || (!storedTheme && preferredTheme === 'dark')) {
            document.body.classList.add('dark-mode');
            modeSwitcher.classList.add('btn-toggle');
        }
    }
});

interface BadgeProps {
    color: string;
    text: string;
}

function createBadge({ color, text }: BadgeProps): HTMLSpanElement {
    const badge = document.createElement('span');
    badge.className = `badge bg-${color} text-secondary`;
    badge.textContent = text;
    return badge;
}

// Usage example
const badgesContainer = document.querySelector('.badges-container');
if (badgesContainer) {
    const primaryBadge = createBadge({ color: 'primary', text: 'Primary' });
    const secondaryBadge = createBadge({ color: 'secondary', text: 'Secondary' });
    badgesContainer.appendChild(primaryBadge);
    badgesContainer.appendChild(secondaryBadge);
}