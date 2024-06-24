import {FormItem} from './form'

const FormLine = ({item}: {item: FormItem}) => {
    return (
        <div className="flex flex-col gap-1">
            <label>{item.label}</label>
            <input type={item.type} placeholder={item.placeholder} />
        </div>
    );
}
export default FormLine;