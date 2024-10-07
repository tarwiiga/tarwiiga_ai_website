import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/logo.svg";

export default function Logo() {
    return (
        <Link href="/" className="inline-flex shrink-0 items-center" aria-label="Tarwiiga AI">
            <p className="text-green-200 font-bold text-[25px]">Tarwiiga AI</p>
        </Link>
    );
}
