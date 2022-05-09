function buildInputs(fields) {
  let str = "";

  fields.forEach((field) => {
    switch (field.type) {
      case "textarea":
        str += `<textarea type="${field.type}" ${
          field.name ? `name="${field.name}"` : ""
        } cols="30" rows="5" ${
          field.placeholder ? `placeholder="${field.placeholder}"` : ""
        } ${field.hidden ? `hidden` : ""} ${
          field.required ? "required" : ""
        }></textarea>`;
        break;

      case "select":
        if (!field.options || !field.options.length) {
          break;
        }
        str += `<select ${field.name ? `name="${field.name}"` : ""} ${
          field.required ? "required" : ""
        }>${field.options
          .map((option) => `<option>${option.value}</option>`)
          .join("")}</select>`;
        break;

      default:
        str += `<input type="${field.type}" ${
          field.class ? `class="${field.class}"` : ""
        } ${field.id ? `id="${field.id}"` : ""} ${
          field.name ? `name="${field.name}"` : ""
        } ${field.value ? `value="${field.value}"` : ""} ${
          field.placeholder ? `placeholder="${field.placeholder}"` : ""
        } ${field.required ? "required" : ""} ${
          field.pattern ? `pattern="${field.pattern}"` : ""
        } ${field.hidden ? "hidden" : ""}>`;
    }
  });
  return str;
}

export default buildInputs