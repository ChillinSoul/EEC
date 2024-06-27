import { FormItem } from "./form";

const FormLine: React.FC<{ item: FormItem }> = ({ item }) => {
  return (
    <div className="form-line">
      <label className="font-bold">
        {item.label}
        {item.required && <span className="text-red-500"> *</span>}
      </label>
      {item.type === "textarea" ? (
        <textarea
          placeholder={item.placeholder}
          name={item.label.toLowerCase().replace(/\s+/g, "_")}
          required={item.required}
          className="p-2 border rounded"
        />
      ) : item.type === "select" ? (
        <select
          name={item.label.toLowerCase().replace(/\s+/g, "_")}
          required={item.required}
          className="p-2 border rounded"
        >
          {item.options?.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : item.isPhone ? (
        <div className="flex items-stretch">
          <select
            name={`${item.label.toLowerCase().replace(/\s+/g, "_")}_code`}
            className="p-2 border rounded-l"
          >
            <option value="+32">+32</option>
            <option value="+1">+1</option>
            <option value="+44">+44</option>
            <option value="+33">+33</option>
            <option value="+49">+49</option>
            <option value="+61">+61</option>
            <option value="+91">+91</option>
            {/* Add more country codes as needed */}
          </select>
          <input
            type="tel"
            placeholder={item.placeholder}
            name={item.label.toLowerCase().replace(/\s+/g, "_")}
            required={item.required}
            className="p-2 border rounded-r flex-grow"
          />
        </div>
      ) : (
        <input
          type={item.type}
          placeholder={item.placeholder}
          name={item.label.toLowerCase().replace(/\s+/g, "_")}
          required={item.required}
          className="p-2 border rounded"
        />
      )}
    </div>
  );
};

export default FormLine;
