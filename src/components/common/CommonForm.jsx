import { SelectContent } from "@redix-ui/react-select";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Select, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

function CommonForm({
  formControls,
  formData,
  setFormData,
  onSubmit,
  buttonText,
}) {
  function inputsByComponentType(getControlItem) {
    let element = null;
    switch (getControlItem?.componentType) {
      case "input":
        element = (
          <Input
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
            id={getControlItem.name}
            type={getControlItem.type}
          />
        );
        break;
      case "select":
        element = (
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder={getControlItem.placeholder} />
            </SelectTrigger>
            <SelectContent>
              {getControlItem?.options && getControlItem?.options?.length > 0
                ? getControlItem?.options.map((optionItem) => (
                    <SelectItem key={optionItem?.id} value={optionItem?.id}>
                      {optionItem.label}
                    </SelectItem>
                  ))
                : null}
            </SelectContent>
          </Select>
        );
        break;
      case "textarea":
        element = (
          <Textarea
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
            id={getControlItem.id}
          />
        );
        break;

      default:
        element = (
          <Input
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
            id={getControlItem.name}
            type={getControlItem.type}
          />
        );
        break;
    }
    return element;
  }
  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-col gap-3">
        {formControls?.map((controlItem, index) => {
          return (
            <div className="grid w-full gap-1.5" key={index}>
              <Label htmlFor={controlItem?.name} className="mb-1">
                {controlItem.label}
              </Label>
              {inputsByComponentType(controlItem)}
            </div>
          );
        })}
      </div>
      <Button type="submit" className="mt-2 w-full">
        {buttonText || "Submit"}
      </Button>
    </form>
  );
}

export default CommonForm;
