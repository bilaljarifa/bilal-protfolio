document.addEventListener('DOMContentLoaded', () => {
    // Create cursor elements
    const cursor = document.createElement('div');
    cursor.classList.add('cursor-splash');
    document.body.appendChild(cursor);

    // Variables for trail effect
    const trails = [];
    const maxTrails = 5;
    let lastX = 0;
    let lastY = 0;

    // Update cursor position
    const updateCursorPosition = (e) => {
        const x = e.clientX;
        const y = e.clientY;
        
        cursor.style.left = x + 'px';
        cursor.style.top = y + 'px';

        // Create trail effect
        if (Math.abs(x - lastX) > 10 || Math.abs(y - lastY) > 10) {
            createTrail(x, y);
            lastX = x;
            lastY = y;
        }
    };

    // Create trail effect with colors
    const createTrail = (x, y) => {
        const trail = document.createElement('div');
        trail.classList.add('cursor-trail');
        trail.style.left = x + 'px';
        trail.style.top = y + 'px';
        
        // Random color from a pastel palette
        const colors = [
            'rgba(255, 182, 193, 0.7)',    // Pink
            'rgba(173, 216, 230, 0.7)',    // Light Blue
            'rgba(144, 238, 144, 0.7)',    // Light Green
            'rgba(255, 218, 185, 0.7)',    // Peach
            'rgba(221, 160, 221, 0.7)',    // Plum
            'rgba(255, 255, 224, 0.7)',    // Light Yellow
            'rgba(176, 224, 230, 0.7)'     // Powder Blue
        ];
        trail.style.background = colors[Math.floor(Math.random() * colors.length)];
        document.body.appendChild(trail);

        // Manage trail array
        trails.push(trail);
        if (trails.length > maxTrails) {
            const oldTrail = trails.shift();
            oldTrail.parentNode.removeChild(oldTrail);
        }
    };

    // Add hover effect on interactive elements
    const addHoverEffect = () => {
        cursor.classList.add('hover');
    };

    const removeHoverEffect = () => {
        cursor.classList.remove('hover');
    };

    // Event listeners
    document.addEventListener('mousemove', updateCursorPosition);
    
    // Add hover effect to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, input, [role="button"], .logo');
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', addHoverEffect);
        element.addEventListener('mouseleave', removeHoverEffect);
    });

    // Make sure cursor is visible when mouse enters window
    document.addEventListener('mouseenter', () => {
        cursor.style.opacity = '1';
    });

    // Handle mouse leaving window
    document.addEventListener('mouseleave', () => {
        cursor.style.opacity = '0';
    });

    // Hide default cursor
    document.body.style.cursor = 'none';
});