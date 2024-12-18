import { Input } from "../ui/input";
import { Label } from "../ui/label";

function CommonForm({ formControls }) {
    function inputsByComponentType(getControlItem){
        let element = null;
        switch (getControlItem?.componentType) {
            case 'input':
                element=<Input
                 name={getControlItem.name}

                    placeholder={getControlItem.placeholder}
                    id={getControlItem.name}
                    type={getControlItem.type}
                
                />
                break;
            case 'select':
                element=(
                    <Select>
                        
                    </Select>
                )
                break;
            case 'textarea':
                element=<Input
                 name={getControlItem.name}

                    placeholder={getControlItem.placeholder}
                    id={getControlItem.name}
                    type={getControlItem.type}
                
                />
                break;
        
            default:
                element=<Input
                 name={getControlItem.name}

                    placeholder={getControlItem.placeholder}
                    id={getControlItem.name}
                    type={getControlItem.type}
                
                />
                break;
        }
        return element;
    }
  return (
    <form>
      <div className="flex flex-col gap-3">
        {formControls?.map((controlItem, index) => {
          return (
            <div className="grid w-full gap-1.5" key={index}>
              <Label
                htmlFor={controlItem?.name}
                className="mb-1"
              >
                {controlItem.label}
              </Label>
             {
                inputsByComponentType[controlItem]()
             }
            </div>
          );
        })}
      </div>
    </form>
  );
}

export default CommonForm;
