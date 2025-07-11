document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('theme-toggle');
  const iconEl = toggleButton.querySelector('i');
  const html = document.documentElement;

  // 初始加载：根据 localStorage 设置主题
  const storedTheme = localStorage.getItem('theme');
  if (storedTheme === 'dark') {
    html.classList.add('dark');
    iconEl.className = 'fi fi-rr-sun';   // 太阳图标
  } else {
    html.classList.remove('dark');
    iconEl.className = 'fi fi-rr-moon';  // 月亮图标
  }

  // 切换主题
  toggleButton.addEventListener('click', () => {
    const isDark = html.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    // 切换图标
    iconEl.className = isDark ? 'fi fi-rr-sun' : 'fi fi-rr-moon';
  });

html.classList.remove('no-transition');
});
