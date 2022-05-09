export default [
  {
    type: "text",
    name: "client_name",
    placeholder: "Your name",
    required: true,
  },
  {
    type: "email",
    name: "client_email",
    placeholder: "Email",
    required: true,
  },
  {
    type: "tel",
    name: "client_phone",
    placeholder: "+xxxxxxxxxxxx",
    required: false,
    pattern: "",
  },
  {
    type: "textarea",
    name: "note",
    placeholder: "Your message",
    required: false,
  },
  {
    type: "text",
    name: "global_company_name",
    placeholder: "Your company",
    required: false,
    hidden: true,
    value: "Worksuite Demo Company",
  },
  {
    type: "text",
    name: "project_company",
    placeholder: "Your company",
    required: false,
    hidden: true,
    value: "RHS",
  },
  {
    type: "select",
    name: "selected_item",
    options: [{ value: "111" }, { value: "222" }, { value: "333" }],
    required: true,
  },
];
