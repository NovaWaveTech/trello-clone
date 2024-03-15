import Link from "next/link";
import localFont from "next/font/local";
import { Medal } from "lucide-react";

import { Button } from "@/components/ui/button";

const headingFont = localFont({
    src: "../../public/fonts/font.woff2"
});

const MarketingPage = () => {
    return (
        <div className="flex items-center justify-center flex-col">
            <div className="flex items-center justify-center flex-col">
                <div className="mb-4 flex items-center border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full uppercase">
                    <Medal className="h-6 w-6 mr-2" />
                    Aplicativo de gerenciamento de tarefas nº 1
                </div>
                <h1 className="text-3xl md:text-6xl text-center text-neutral-800 mb-6">
                    AnyTask ajuda a equipe a se mover
                </h1>
                <div className="text-3xl md:text-6xl bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-4 p-2 rounded-md pb-4 w-fit">
                    trabalhe adiante.
                </div>
            </div>
            <div className="text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto">
                colabore, gerencie projetos e alcance novos picos de produtividade. Dos arranha-céus ao home office, a forma como sua equipe trabalha é única - realize tudo com AnyTask
            </div>
            <Button className="mt-6" size="lg" asChild>
                <Link href="/sign-in">
                    Obtenha AnyTask gratuitamente
                </Link>
            </Button>
        </div>
    );
};

export default MarketingPage;