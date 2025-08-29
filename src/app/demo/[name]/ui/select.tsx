import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

/**
 * Select Component
 *
 * A dropdown select component built with Radix UI primitives. Allows users to choose
 * from a list of options with keyboard navigation and screen reader support.
 *
 * Features:
 * - Single selection from predefined options
 * - Keyboard navigation (arrow keys, Enter, Escape)
 * - Screen reader accessible
 * - Customizable styling with Tailwind CSS
 * - Support for groups, labels, and separators
 * - Custom height variant (h-8) vs official shadcn/ui (h-10)
 *
 * Use cases:
 * - Form inputs requiring single selection
 * - Navigation menus with categorized options
 * - Settings and configuration panels
 * - Data filtering and sorting controls
 * - Language or region selection
 *
 * @example
 * <Select>
 *   <SelectTrigger className="w-[180px]">
 *     <SelectValue placeholder="Select an option" />
 *   </SelectTrigger>
 *   <SelectContent>
 *     <SelectItem value="option1">Option 1</SelectItem>
 *     <SelectItem value="option2">Option 2</SelectItem>
 *   </SelectContent>
 * </Select>
 */
export const select = {
  name: "select",
  components: {
    Default: (
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
            <SelectItem value="grapes">Grapes</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    ),

    WithGroups: (
      <Select>
        <SelectTrigger className="w-[200px]">
          <SelectValue placeholder="Select a category" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="orange">Orange</SelectItem>
          </SelectGroup>
          <SelectGroup>
            <SelectLabel>Vegetables</SelectLabel>
            <SelectItem value="carrot">Carrot</SelectItem>
            <SelectItem value="broccoli">Broccoli</SelectItem>
            <SelectItem value="spinach">Spinach</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    ),

    Simple: (
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Choose an option" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
          <SelectItem value="option3">Option 3</SelectItem>
        </SelectContent>
      </Select>
    ),
  },
};
