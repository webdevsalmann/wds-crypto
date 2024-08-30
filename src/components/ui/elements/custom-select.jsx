import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Circle } from "lucide-react"

export default function CustomSelect({ children, name, data, placeholder, handleSelectChange }) {
    return (
        <Select
            defaultValue={data[0].value || "Select"}
            onValueChange={(value) => handleSelectChange(name, value)}
        >
            <SelectTrigger className="inline-flex w-fit">
                {children
                    ? children
                    : <SelectValue placeholder={placeholder || "Select"} />
                }
            </SelectTrigger>
            <SelectContent>
                {data.map((item, i) => (
                    <SelectItem value={item.value} key={item + i}>
                        <div className="w-full flex items-center gap-2">
                            <div className="size-4 shrink-0">
                                {item.icon || <Circle className="size-full" />}
                            </div>
                            <div>{item.label}</div>
                        </div>
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    )
}
