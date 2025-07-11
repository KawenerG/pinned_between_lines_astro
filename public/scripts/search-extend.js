(function(){
  const containerSel = '.pagefind-ui';
  const inputSel = `${containerSel} input`;

  document.addEventListener('focusin', e => {
    if (e.target.matches(inputSel)) {
      console.log('focusin 命中');
      document.querySelector(containerSel)?.classList.add('expanded');
    }
  });
  document.addEventListener('input', e => {
    if (e.target.matches(inputSel)) {
      console.log('input 事件，value=', e.target.value);
      const hasText = e.target.value.trim() !== '';
      document
        .querySelector(containerSel)
        ?.classList.toggle('expanded', hasText || document.activeElement === e.target);
    }
  });
  document.addEventListener('focusout', e => {
    if (e.target.matches(inputSel) && e.target.value.trim() === '') {
      console.log('focusout 且无文字，收回 expanded');
      document.querySelector(containerSel)?.classList.remove('expanded');
    }
  });
  
  document.addEventListener('click', (e) => {
    // 如果点击目标不在 .pagefind-ui 组件内部，且输入框内容为空
    const container = document.querySelector(containerSel);
    const input = document.querySelector(inputSel);
    if (
      container &&
      input &&
      !e.target.closest(containerSel) &&         // 点的是外面
      input.value.trim() === ''                  // 且当前无文字
    ) {
      container.classList.remove('expanded');
    }
  });
})();
