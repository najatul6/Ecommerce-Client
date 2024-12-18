function CommonForm({ formControls }) {
  return (
    <form>
      <div className="flex flex-col gap-3">
        {formControls?.map((controlItem, index) => {
          return (
            <div key={index}>
              <label
                htmlFor={controlItem.name}
                className="text-sm font-semibold text-gray-600"
              >
                {controlItem.label}
              </label>
              <input
                type={controlItem.type}
                id={controlItem.id}
                className="w-full px-4 py-2 mt-2 border rounded-lg"
                placeholder={controlItem.placeholder}
              />
            </div>
          );
        })}
      </div>
    </form>
  );
}

export default CommonForm;
