import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import Profilephoto from "./shared/Profilephoto";
import { Textarea } from "./ui/textarea";

export function Postdialog({
  setOpen,
  open,
  src,
}: {
  setOpen: any;
  open: boolean;
  src: string;
}) {
  return (
    <Dialog open={open}>
      <DialogContent
        onInteractOutside={() => setOpen(false)}
        className="sm:max-w-[550px] sm:max-h-[80vh] md:max-w-[800px] md:max-h-100vh overflow-y-auto"
      >
        <DialogHeader>
          <DialogTitle className="flex gap-2">
            <Profilephoto src={src} />
            <div>
              <h1>Divyansh Sharma</h1>
              <p className="text-xs text-gray-500 pt-1">Post to anyone</p>
            </div>
          </DialogTitle>
         
        </DialogHeader>
        <form action="">
          <div className="flex flex-col">
            <Textarea 
            id="name"
            name="inputText"
            className="border-none text-lg focus-visible:ring min-h-[150px]"
            placeholder="What do you want to talk about?" />
          </div>
        </form>
        <DialogFooter>
          <Button type="submit">Post</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}