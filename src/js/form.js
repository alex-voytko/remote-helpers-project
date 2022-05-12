import fields from './fields.js';

window.addEventListener(
  'DOMContentLoaded',
  drowForm(fields, '.form .label-container'),
);

function drowForm(fields, selector) {
  const formRef = document.querySelector(selector);
  formRef.insertAdjacentHTML('beforeend', buildInputs(fields));
}

function buildInputs(fields) {
  let str = '';
  let openLabel = '';
  let closeLabel = '';

  fields.forEach(field => {
    if (field.label) {
      openLabel = `<label>${field.label}`;
      closeLabel = `</label>`;
    } else {
      openLabel = '';
      closeLabel = '';
    }
    switch (field.type) {
      case 'textarea':
        str += `${openLabel}<textarea type="${field.type}" ${
          field.name ? `name="${field.name}"` : ''
        } cols="30" rows="5" ${
          field.placeholder ? `placeholder="${field.placeholder}"` : ''
        } ${field.hidden ? `hidden` : ''} ${
          field.required ? 'required' : ''
        }></textarea>${closeLabel}`;
        break;

      case 'select':
        if (!field.options || !field.options.length) {
          break;
        }
        str += `<select ${field.name ? `name="${field.name}"` : ''} ${
          field.required ? 'required' : ''
        }>${field.options
          .map(option => `<option>${option.value}</option>`)
          .join('')}</select>`;
        break;

      default:
        str += `${openLabel}<input type="${field.type}" ${
          field.class ? `class="${field.class}"` : ''
        } ${field.id ? `id="${field.id}"` : ''} ${
          field.name ? `name="${field.name}"` : ''
        } ${field.value ? `value="${field.value}"` : ''} ${
          field.placeholder ? `placeholder="${field.placeholder}"` : ''
        } ${field.required ? 'required' : ''} ${
          field.pattern ? `pattern="${field.pattern}"` : ''
        } ${field.hidden ? 'hidden' : ''}>${closeLabel}`;
    }
  });
  return str;
}
