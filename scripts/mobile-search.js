(function() {
  const openBtn = document.getElementById('mobile-search-btn');
  const backBtn = document.getElementById('mobile-search-back');

  openBtn?.addEventListener('click', () => {
    // 推入一个新的 history state
    history.pushState({ mobileSearch: true }, '');
    document.body.classList.add('mobile-search-active');
  });

  backBtn?.addEventListener('click', () => {
    // 回到上一个 history state，触发 popstate
    history.back();
  });

  // 监听浏览器“后退”按钮或 history.back()
  window.addEventListener('popstate', (e) => {
    // 如果不是我们的 mobileSearch state，就关闭 overlay
    if (!e.state?.mobileSearch) {
      document.body.classList.remove('mobile-search-active');
    }
  });
})();
