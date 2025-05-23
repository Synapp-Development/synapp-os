import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface EmailInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function EmailInput({ value, onChange }: EmailInputProps) {
  return (
    <div className="grid gap-2">
      <Label htmlFor="email" className="text-xs text-muted-foreground pl-1">
        Email
      </Label>
      <Input
        id="email"
        type="email"
        placeholder="m@example.com"
        required
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
