document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('theme-toggle');
  const html = document.documentElement;

  // 初始加载：根据 localStorage 设置主题
  const storedTheme = localStorage.getItem('theme');
  if (storedTheme === 'dark') {
    html.classList.add('dark');
    toggleButton.textContent = '🌞';
  } else {
    html.classList.remove('dark');
    toggleButton.textContent = '🌙';
  }

  // 切换主题
  toggleButton.addEventListener('click', () => {
    const isDark = html.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    toggleButton.textContent = isDark ? '🌞' : '🌙';
  });

html.classList.remove('no-transition');
});
