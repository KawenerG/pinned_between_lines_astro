window.addEventListener('DOMContentLoaded', () => {
  const openBtn = document.getElementById('mobile-search-btn');
  const backBtn = document.getElementById('mobile-search-back');

  openBtn?.addEventListener('click', () => {
    console.log("1")
    history.pushState({ mobileSearch: true }, '');
    document.body.classList.add('mobile-search-active');
  });

  backBtn?.addEventListener('click', () => {
    console.log("2")
    history.back();
  });

  window.addEventListener('popstate', (e) => {
    console.log("3")
    if (!e.state?.mobileSearch) {
      document.body.classList.remove('mobile-search-active');
    }
  });
});
