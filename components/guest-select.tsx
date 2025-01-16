import {
  Select,
  SelectGroup,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const GuestSelect = () => {
  return (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="How many guests?" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Guests</SelectLabel>
          <SelectItem value="1">1</SelectItem>
          <SelectItem value="2">2</SelectItem>
          <SelectItem value="3">3</SelectItem>
          <SelectItem value="4">4</SelectItem>
          <SelectItem value="5">5</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
