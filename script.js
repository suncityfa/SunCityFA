    // Menu déroulant cliquable
    const menus = [
      { button: 'sunCityBtn', menu: 'sunCityMenu' },
      { button: 'jouerBtn', menu: 'jouerMenu' },
      { button: 'boutiqueBtn', menu: 'boutiqueMenu' }
    ];

    menus.forEach(({ button, menu }) => {
      const btn = document.getElementById(button);
      const menuEl = document.getElementById(menu);

      btn.addEventListener('click', (e) => {
        e.preventDefault();

        // Ferme tous les autres menus
        menus.forEach(({ menu: otherMenu }) => {
          if (otherMenu !== menu) {
            document.getElementById(otherMenu).style.display = 'none';
          }
        });

        // Toggle le menu actuel
        if (menuEl.style.display === 'block') {
          menuEl.style.display = 'none';
        } else {
          menuEl.style.display = 'block';
          menuEl.classList.add('fadeIn');
        }
      });
    });

    // Fermer les menus si clic ailleurs
    document.addEventListener('click', (e) => {
      if (!e.target.closest('nav')) {
        menus.forEach(({ menu }) => {
          document.getElementById(menu).style.display = 'none';
        });
      }
    });