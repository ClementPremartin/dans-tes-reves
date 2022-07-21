/* eslint-disable react/prop-types */
function AdminForm({
  name,
  label,
  placeholder = "",
  handleChange,
  type = "text",
}) {
  return (
    <label htmlFor={name} className="flex flex-col">
      {label}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={(e) => handleChange(e)}
      />
    </label>
  );
}

export default AdminForm;
