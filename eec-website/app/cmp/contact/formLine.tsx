import {FormItem} from './form'

const FormLine: React.FC<{ item: FormItem }> = ({ item }) => {
    return (
        <div className="form-line">
            <label>
                {item.label}
                
            </label>
            <input
                    type={item.type}
                    placeholder={item.placeholder}
                    name={item.label.toLowerCase().replace(/\s+/g, '_')}
                />
        </div>
    );
};

export default FormLine;