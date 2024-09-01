import { cn } from "@/lib/utils";

export function logo({className}:{className:string}) 
{
    return (
        <img className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                className
            )}
            src="https://cdn.pixabay.com/photo/2016/12/27/13/10/logo-1933884_640.png" 
            alt="Logo" 
        />
    )
}

export let Icons = {
    logo
};
