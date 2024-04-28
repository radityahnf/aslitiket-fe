import { cn } from "@/lib/utils";
import { MobileSidebar } from "./MobileSidebar";
import Link from "next/link";
import { Boxes } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Header() {
  return (
    <div className="supports-backdrop-blur:bg-background/60 bg-secondaryBlue fixed left-0 right-0 top-0 z-20 border-b  backdrop-blur">
      <nav className="flex h-16 items-center justify-between px-4">
        <Link
          href={"/"}
          className="hidden items-center justify-between gap-2 md:flex"
        >
          <Image src="/images/logo.png" alt="" width={150} height={36}></Image>
        </Link>
        <div className={cn("block md:!hidden")}>
          <MobileSidebar />
        </div>

        <div className="flex items-center gap-2">
          <Link href="/auth/register">
            <Button size="sm" className="bg-white text-secondaryBlue hover:bg-white/90 ">
              Daftar
            </Button>
          </Link>
          <Link href="/auth/login">
            <Button size="sm" className="bg-primaryBlue">
              Masuk
            </Button>
          </Link>
        </div>
      </nav>
    </div>
  );
}
