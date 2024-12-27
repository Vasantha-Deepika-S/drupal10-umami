((Drupal, once) => {
  Drupal.behaviors.umamiSDCHeader = {
    attach(context) {
      once(
        'header',
        '[aria-controls="header__dropdown"]',
        context,
      ).forEach((button) => {
        button.addEventListener('click', (e) => {
          button.setAttribute(
            'aria-expanded',
            e.currentTarget.getAttribute('aria-expanded') === 'false',
          );
        });
      });
    },
  };
})(Drupal, once);
