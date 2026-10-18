'use strict';

(() => {
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
  let previousFocus = null;
  let currentProject = '';

  // No analytics SDK is loaded. These anonymous UI events can be connected later.
  const track = (name, properties = {}) => {
    window.dispatchEvent(new CustomEvent('itwebs:event', { detail: { name, ...properties } }));
  };

  function closeDialog(dialog, restoreFocus = true) {
    if (!dialog?.open) return;
    dialog.close();
    if (!document.querySelector('dialog[open]')) document.body.classList.remove('modal-open');
    if (restoreFocus && previousFocus?.isConnected) previousFocus.focus({ preventScroll: true });
  }

  function openDialog(dialog, focusSelector) {
    if (!dialog) return;
    const trigger = document.activeElement;
    $$('dialog[open]').forEach(item => closeDialog(item, false));
    if (!trigger?.closest('dialog')) previousFocus = trigger;
    dialog.showModal();
    document.body.classList.add('modal-open');
    requestAnimationFrame(() => {
      const target = focusSelector ? $(focusSelector, dialog) : $('[data-close]', dialog);
      target?.focus({ preventScroll: true });
    });
  }

  $$('dialog').forEach(dialog => {
    $$('[data-close]', dialog).forEach(button => button.addEventListener('click', () => closeDialog(dialog)));
    dialog.addEventListener('click', event => {
      if (event.target !== dialog) return;
      const rect = dialog.getBoundingClientRect();
      if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) closeDialog(dialog);
    });
    dialog.addEventListener('cancel', event => { event.preventDefault(); closeDialog(dialog); });
    dialog.addEventListener('close', () => {
      if (!document.querySelector('dialog[open]')) document.body.classList.remove('modal-open');
    });
  });

  function openLead(subject = '') {
    const dialog = $('#lead-dialog');
    const idea = $('[name="idea"]', dialog);
    if (subject && !idea.value.trim()) {
      idea.value = `Хочу обсудить: ${subject}.`;
      idea.dispatchEvent(new Event('input', { bubbles: true }));
    }
    openDialog(dialog, '[name="name"]');
    track('lead_form_open', { placement: subject ? 'service' : 'cta' });
  }

  $$('[data-lead]').forEach(button => button.addEventListener('click', () => openLead(button.dataset.lead)));
  $('[data-open-menu]').addEventListener('click', () => openDialog($('#menu-dialog')));
  $('[data-open-sources]').addEventListener('click', () => openDialog($('#sources-dialog')));
  $('[data-open-data]').addEventListener('click', () => openDialog($('#data-dialog')));
  $$('[data-menu-link]').forEach(link => link.addEventListener('click', () => closeDialog($('#menu-dialog'), false)));

  const projects = {
    integrations: {
      title: 'CRM и ERP для eCommerce-операций',
      image: 'assets/project-integrations.webp',
      category: 'eCommerce · Интеграции',
      description: 'В портфолио ITWEBS опубликован проект интеграции CRM и ERP для операций электронной коммерции. В карточке указан период разработки 8 месяцев и 2024 год.',
      duration: '8 месяцев', year: '2024'
    },
    paint: {
      title: 'Платформа для продажи красок',
      image: 'assets/project-paint.webp',
      category: 'eCommerce · Ритейл',
      description: 'Разработка eCommerce-платформы для розничной торговли красками представлена в портфолио ITWEBS. В карточке указаны 6 месяцев и 2023 год.',
      duration: '6 месяцев', year: '2023'
    },
    english: {
      title: 'Мобильный сервис для изучения языка',
      image: 'assets/project-english.webp',
      category: 'React Native · Образование',
      description: 'Образовательное мобильное приложение представлено в портфолио ITWEBS в категории React Native. В карточке указаны 4 месяца разработки и 2025 год.',
      duration: '4 месяца', year: '2025'
    }
  };

  $$('[data-project]').forEach(button => button.addEventListener('click', () => {
    const key = button.dataset.project;
    const project = projects[key];
    if (!project) return;
    currentProject = project.title;
    $('#project-modal-title').textContent = project.title;
    $('#project-modal-category').textContent = project.category;
    $('#project-modal-description').textContent = project.description;
    $('#project-modal-duration').textContent = project.duration;
    $('#project-modal-year').textContent = project.year;
    $('#project-modal-image').src = project.image;
    $('#project-modal-image').alt = project.title;
    openDialog($('#project-dialog'));
    track('project_open', { project: key });
  }));
  $('#project-discuss').addEventListener('click', () => openLead(currentProject));

  function getContactError(value) {
    const contact = value.trim();
    if (!contact) return 'Укажите Telegram или Email для связи.';
    if (/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(contact)) return '';
    const username = contact.replace(/^https?:\/\/(?:www\.)?t\.me\//i, '').replace(/^@/, '').replace(/\/$/, '');
    if (/^[a-z][a-z0-9_]{4,31}$/i.test(username)) return '';
    return 'Введите Email или Telegram, например @username.';
  }

  function validateField(field) {
    let error = '';
    if (field.name === 'name' && field.value.trim().length < 2) error = 'Укажите имя — не меньше двух символов.';
    if (field.name === 'contact') error = getContactError(field.value);
    field.setAttribute('aria-invalid', String(Boolean(error)));
    const message = $('.field-error', field.closest('.field'));
    if (message) message.textContent = error;
    return !error;
  }

  function prepareMessage(name, contact, idea) {
    return [
      'Никита, здравствуйте! Хочу обсудить бесплатный прототип.',
      '', `Имя: ${name}`, `Контакт: ${contact}`,
      ...(idea ? ['', `Идея: ${idea}`] : []),
      '', 'Обращение с личного сайта Никиты Морозика / ITWEBS.'
    ].join('\n');
  }

  $$('[data-lead-form]').forEach(form => {
    $$('input, textarea', form).forEach(field => {
      field.addEventListener('blur', () => { if (field.required) validateField(field); });
      field.addEventListener('input', () => {
        if (field.getAttribute('aria-invalid') === 'true') validateField(field);
        if (field.name === 'idea') {
          const counter = $('[data-counter]', field.closest('.field'));
          if (counter) counter.textContent = `${field.value.length} / 2000`;
        }
      });
    });
    form.addEventListener('submit', event => {
      event.preventDefault();
      const requiredFields = $$('input[required]', form);
      const invalid = requiredFields.filter(field => !validateField(field));
      if (invalid.length) { invalid[0].focus(); return; }
      const name = $('[name="name"]', form).value.trim();
      const contact = $('[name="contact"]', form).value.trim();
      const idea = $('[name="idea"]', form).value.trim();
      const message = prepareMessage(name, contact, idea);
      $('#prepared-message').value = message;
      $('#telegram-handoff').setAttribute('href', `https://t.me/timoshinski?text=${encodeURIComponent(message)}`);
      $('#email-handoff').setAttribute('href', `mailto:sales@itwebs.ru?subject=${encodeURIComponent('Запрос на прототип — Никита Морозик / ITWEBS')}&body=${encodeURIComponent(message)}`);
      $('[data-copy-status]').textContent = '';
      openDialog($('#message-dialog'), '#telegram-handoff');
      // Never include name, contact or message contents in analytics events.
      track('lead_message_prepared', { placement: form.closest('dialog') ? 'modal' : 'page' });
    });
  });

  $('[data-copy-message]').addEventListener('click', async () => {
    const messageField = $('#prepared-message');
    let copied = false;
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(messageField.value);
        copied = true;
      }
    } catch { /* Use a local selection fallback below. */ }
    if (!copied) {
      messageField.focus(); messageField.select();
      try { copied = document.execCommand('copy'); } catch { copied = false; }
    }
    $('[data-copy-status]').textContent = copied ? 'Сообщение скопировано.' : 'Текст выделен. Скопируйте его вручную.';
  });

  $('#telegram-handoff').addEventListener('click', () => track('contact_handoff', { channel: 'telegram' }));
  $('#email-handoff').addEventListener('click', () => track('contact_handoff', { channel: 'email' }));
  $$('.faq-list details').forEach(item => item.addEventListener('toggle', () => {
    if (item.open) track('faq_open', { question: $('summary', item).textContent.trim() });
  }));

  if ('IntersectionObserver' in window && !motionPreference.matches) {
    document.body.classList.add('motion-ready');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -18px 0px' });
    $$('.reveal').forEach(element => observer.observe(element));
    // Keep content readable if a host delays intersection notifications.
    window.setTimeout(() => $$('.reveal').forEach(element => element.classList.add('is-visible')), 3500);
  }

  const scene = $('.product-scene');
  let sceneFrame = 0;
  scene.addEventListener('pointermove', event => {
    if (event.pointerType === 'touch' || motionPreference.matches) return;
    cancelAnimationFrame(sceneFrame);
    sceneFrame = requestAnimationFrame(() => {
      const rect = scene.getBoundingClientRect();
      scene.style.setProperty('--parallax-x', `${((event.clientX - rect.left) / rect.width - .5) * 12}px`);
      scene.style.setProperty('--parallax-y', `${((event.clientY - rect.top) / rect.height - .5) * 10}px`);
    });
  }, { passive: true });
  scene.addEventListener('pointerleave', () => {
    cancelAnimationFrame(sceneFrame);
    scene.style.setProperty('--parallax-x', '0px');
    scene.style.setProperty('--parallax-y', '0px');
  });

  // The public prototype has no form endpoint, browser storage or tracking SDK.
  window.ITWEBSPrototype = Object.freeze({ getContactError, prepareMessage, openLead });
})();
