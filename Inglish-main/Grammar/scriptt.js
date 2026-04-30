// ===== МОБИЛЬНОЕ МЕНЮ =====
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const nav = document.querySelector('.nav-right');

mobileMenuBtn?.addEventListener('click', () => {
    nav.classList.toggle('active');
    const icon = mobileMenuBtn.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

 // Toggle level accordion
 function toggleLevel(levelId) {
    const content = document.getElementById(levelId);
    const levelItem = content.parentElement;
    const icon = levelItem.querySelector('.level-header i');
    
    // Close all other levels
    document.querySelectorAll('.level-item').forEach(item => {
        if (item !== levelItem) {
            item.classList.remove('active');
            item.querySelector('.level-content').style.display = 'none';
            item.querySelector('i').classList.remove('fa-chevron-up');
            item.querySelector('i').classList.add('fa-chevron-down');
        }
    });
    
    // Toggle current level
    if (levelItem.classList.contains('active')) {
        levelItem.classList.remove('active');
        content.style.display = 'none';
        icon.classList.remove('fa-chevron-up');
        icon.classList.add('fa-chevron-down');
    } else {
        levelItem.classList.add('active');
        content.style.display = 'block';
        icon.classList.remove('fa-chevron-down');
        icon.classList.add('fa-chevron-up');
    }
}


        // Initialize - keep A1 open by default
        document.addEventListener('DOMContentLoaded', function() {
            const a1Content = document.getElementById('a1');
            const a1Item = a1Content.parentElement;
            a1Item.classList.add('active');
        });
