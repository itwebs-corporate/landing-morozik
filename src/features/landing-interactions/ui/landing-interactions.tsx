'use client';

import { useEffect } from 'react';
import content from '../model/content.json';
import { getContactError, getNameError, prepareMessage } from '../model/lead';

type ProjectKey = keyof typeof content.projects;

function select<T extends Element>(selector: string, root: ParentNode = document): T | null {
  return root.querySelector<T>(selector);
}

function setText(id: string, value: string) {
  const element = document.getElementById(id);
  if (element) element.textContent = value;
}

export function LandingInteractions() {
  useEffect(() => {
    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
    let previousFocus: HTMLElement | null = null;
    let currentProject = '';
    let sceneFrame = 0;
    let revealTimeout = 0;
    const scene = select<HTMLElement>('.product-scene');
    const dialogs = [...document.querySelectorAll<HTMLDialogElement>('dialog')];

    function closeDialog(dialog: HTMLDialogElement | null, restoreFocus = true) {
      if (!dialog?.open) return;
      dialog.close();
      if (!document.querySelector('dialog[open]')) document.body.classList.remove('modal-open');
      if (restoreFocus && previousFocus?.isConnected) previousFocus.focus({ preventScroll: true });
    }

    function openDialog(dialog: HTMLDialogElement | null, focusSelector?: string) {
      if (!dialog) return;
      const trigger = document.activeElement;
      dialogs.forEach((item) => closeDialog(item, false));
      if (!(trigger instanceof Element && trigger.closest('dialog')) && trigger instanceof HTMLElement) {
        previousFocus = trigger;
      }
      dialog.showModal();
      document.body.classList.add('modal-open');
      window.requestAnimationFrame(() => {
        select<HTMLElement>(focusSelector || '[data-close]', dialog)?.focus({ preventScroll: true });
      });
    }

    function openLead(subject = '') {
      const dialog = select<HTMLDialogElement>('#lead-dialog');
      const idea = dialog && select<HTMLTextAreaElement>('[name="idea"]', dialog);
      if (subject && idea && !idea.value.trim()) {
        idea.value = `${content.message.projectPrefix}${subject}.`;
        idea.dispatchEvent(new Event('input', { bubbles: true }));
      }
      openDialog(dialog, '[name="name"]');
    }

    function openProject(key: string) {
      if (!(key in content.projects)) return;
      const project = content.projects[key as ProjectKey];
      currentProject = project.title;
      setText('project-modal-title', project.title);
      setText('project-modal-category', project.category);
      setText('project-modal-description', project.description);
      setText('project-modal-duration', project.duration);
      setText('project-modal-year', project.year);
      const image = select<HTMLImageElement>('#project-modal-image');
      if (image) {
        image.removeAttribute('srcset');
        image.src = `/images/${project.image}`;
        image.alt = project.title;
      }
      openDialog(select<HTMLDialogElement>('#project-dialog'));
    }

    function validateField(field: HTMLInputElement): boolean {
      const error = field.name === 'name' ? getNameError(field.value) : getContactError(field.value);
      field.setAttribute('aria-invalid', String(Boolean(error)));
      const message = select<HTMLElement>('.field-error', field.closest('.field') || document);
      if (message) message.textContent = error;
      return !error;
    }

    async function copyMessage() {
      const messageField = select<HTMLTextAreaElement>('#prepared-message');
      if (!messageField) return;
      let copied = false;
      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(messageField.value);
          copied = true;
        }
      } catch {
        // Browser permissions may deny Clipboard API access.
      }
      if (!copied) {
        messageField.focus();
        messageField.select();
        try {
          copied = document.execCommand('copy');
        } catch {
          copied = false;
        }
      }
      const status = select<HTMLElement>('[data-copy-status]');
      if (status) status.textContent = copied ? content.message.copied : content.message.copyFallback;
    }

    function handleClick(event: MouseEvent) {
      if (!(event.target instanceof Element)) return;
      const target = event.target;
      const close = target.closest<HTMLElement>('[data-close]');
      if (close) {
        closeDialog(close.closest('dialog'));
        return;
      }
      const lead = target.closest<HTMLElement>('[data-lead]');
      if (lead) {
        openLead(lead.dataset.lead || '');
        return;
      }
      const project = target.closest<HTMLElement>('[data-project]');
      if (project) {
        openProject(project.dataset.project || '');
        return;
      }
      if (target.closest('[data-open-menu]')) openDialog(select('#menu-dialog'));
      if (target.closest('[data-open-sources]')) openDialog(select('#sources-dialog'));
      if (target.closest('[data-open-data]')) openDialog(select('#data-dialog'));
      if (target.closest('[data-menu-link]')) closeDialog(select('#menu-dialog'), false);
      if (target.closest('#project-discuss')) openLead(currentProject);
      if (target.closest('[data-copy-message]')) void copyMessage();
    }

    function handleDialogClick(event: MouseEvent) {
      if (!(event.currentTarget instanceof HTMLDialogElement) || event.target !== event.currentTarget) return;
      const dialog = event.currentTarget;
      const rect = dialog.getBoundingClientRect();
      if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) {
        closeDialog(dialog);
      }
    }

    function handleCancel(event: Event) {
      event.preventDefault();
      closeDialog(event.currentTarget as HTMLDialogElement);
    }

    function handleSubmit(event: SubmitEvent) {
      if (!(event.target instanceof HTMLFormElement) || !event.target.matches('[data-lead-form]')) return;
      event.preventDefault();
      const form = event.target;
      const fields = [...form.querySelectorAll<HTMLInputElement>('input[required]')];
      const invalid = fields.filter((field) => !validateField(field));
      if (invalid.length) {
        invalid[0].focus();
        return;
      }
      const name = select<HTMLInputElement>('[name="name"]', form)?.value || '';
      const contact = select<HTMLInputElement>('[name="contact"]', form)?.value || '';
      const idea = select<HTMLTextAreaElement>('[name="idea"]', form)?.value || '';
      const message = prepareMessage(name, contact, idea);
      const preview = select<HTMLTextAreaElement>('#prepared-message');
      if (preview) preview.value = message;
      const telegram = select<HTMLAnchorElement>('#telegram-handoff');
      if (telegram) telegram.href = `${content.handoff.telegramUrl}?text=${encodeURIComponent(message)}`;
      const email = select<HTMLAnchorElement>('#email-handoff');
      if (email) email.href = `mailto:${content.handoff.emailAddress}?subject=${encodeURIComponent(content.message.emailSubject)}&body=${encodeURIComponent(message)}`;
      const copyStatus = select<HTMLElement>('[data-copy-status]');
      if (copyStatus) copyStatus.textContent = '';
      openDialog(select('#message-dialog'), '#telegram-handoff');
    }

    function handleInput(event: Event) {
      if (!(event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement)) return;
      const field = event.target;
      if (!field.closest('[data-lead-form]')) return;
      if (field instanceof HTMLInputElement && field.required && field.getAttribute('aria-invalid') === 'true') validateField(field);
      if (field.name === 'idea') {
        const counter = select<HTMLElement>('[data-counter]', field.closest('.field') || document);
        if (counter) counter.textContent = `${field.value.length} / 2000`;
      }
    }

    function handleBlur(event: FocusEvent) {
      if (event.target instanceof HTMLInputElement && event.target.required && event.target.closest('[data-lead-form]')) {
        validateField(event.target);
      }
    }

    function handlePointerMove(event: PointerEvent) {
      if (!scene || event.pointerType === 'touch' || motionPreference.matches) return;
      window.cancelAnimationFrame(sceneFrame);
      sceneFrame = window.requestAnimationFrame(() => {
        const rect = scene.getBoundingClientRect();
        scene.style.setProperty('--parallax-x', `${((event.clientX - rect.left) / rect.width - 0.5) * 16}px`);
        scene.style.setProperty('--parallax-y', `${((event.clientY - rect.top) / rect.height - 0.5) * 13}px`);
      });
    }

    function handlePointerLeave() {
      window.cancelAnimationFrame(sceneFrame);
      scene?.style.setProperty('--parallax-x', '0px');
      scene?.style.setProperty('--parallax-y', '0px');
    }

    document.addEventListener('click', handleClick);
    document.addEventListener('submit', handleSubmit);
    document.addEventListener('input', handleInput);
    document.addEventListener('focusout', handleBlur);
    dialogs.forEach((dialog) => {
      dialog.addEventListener('click', handleDialogClick);
      dialog.addEventListener('cancel', handleCancel);
    });
    scene?.addEventListener('pointermove', handlePointerMove, { passive: true });
    scene?.addEventListener('pointerleave', handlePointerLeave);

    let observer: IntersectionObserver | null = null;
    if ('IntersectionObserver' in window && !motionPreference.matches) {
      document.body.classList.add('motion-ready');
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          observer?.unobserve(entry.target);
        });
      }, { threshold: 0.08, rootMargin: '0px 0px -18px 0px' });
      document.querySelectorAll('.reveal').forEach((element) => observer?.observe(element));
      revealTimeout = window.setTimeout(() => {
        document.querySelectorAll('.reveal').forEach((element) => element.classList.add('is-visible'));
      }, 3500);
    }

    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('submit', handleSubmit);
      document.removeEventListener('input', handleInput);
      document.removeEventListener('focusout', handleBlur);
      dialogs.forEach((dialog) => {
        dialog.removeEventListener('click', handleDialogClick);
        dialog.removeEventListener('cancel', handleCancel);
      });
      scene?.removeEventListener('pointermove', handlePointerMove);
      scene?.removeEventListener('pointerleave', handlePointerLeave);
      window.cancelAnimationFrame(sceneFrame);
      window.clearTimeout(revealTimeout);
      observer?.disconnect();
      document.body.classList.remove('motion-ready', 'modal-open');
    };
  }, []);

  return null;
}
