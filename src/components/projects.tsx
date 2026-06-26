import { Box, ChevronsUpDown } from "lucide-react"
import { Button } from "./ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible"
import { Badge } from "./ui/badge"


function Projects() {
    return (
        <>
            <h1 className="pt-3 font-bold text-xl pb-2">Projects</h1>

            <div className="border-t border-muted">
                <Collapsible>
                    <div className="flex py-2 pr-2">
                        <h1 className="font-semibold grow flex"> <Box size={18} className="opacity-40 mt-0.5 mr-1" /> SmartLiving</h1>

                        <CollapsibleTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <ChevronsUpDown />
                            </Button>
                        </CollapsibleTrigger>
                    </div>
                    <CollapsibleContent className="pr-2 pl-6">
                        <p className="text-sm text-muted-foreground pb-2">
                            A home automation system that simplifies and automates everyday home control.
                        </p>
                        <div>
                            <Badge variant="secondary">
                                <div className="w-3 h-3">
                                    <img data-icon="inline-end" src="./react.svg" alt="React" />
                                </div>
                                React
                            </Badge>
                            <Badge variant="secondary">
                                <div className="w-3 h-3">
                                    <img data-icon="inline-end" src="./tailwind.svg" alt="Tailwind CSS" />
                                </div>
                                Tailwind CSS
                            </Badge>
                            <Badge variant="secondary">
                                <div className="w-3 h-3">
                                    <img data-icon="inline-end" src="./express.svg" alt="Express.js" />
                                </div>
                                Express.js
                            </Badge>
                            <Badge variant="secondary">
                                <div className="w-3 h-3">
                                    <img data-icon="inline-end" src="./mysql.svg" alt="MySQL" />
                                </div>
                                MySQL
                            </Badge>
                        </div>
                    </CollapsibleContent>
                </Collapsible>
            </div>

            <div className="border-t border-muted">
                <Collapsible>
                    <div className="flex py-2 pr-2">
                        <h1 className="font-semibold grow flex"> <Box size={18} className="opacity-40 mt-0.5 mr-1" /> WiFi Vendo </h1>

                        <CollapsibleTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <ChevronsUpDown />
                            </Button>
                        </CollapsibleTrigger>
                    </div>
                    <CollapsibleContent className="pr-2 pl-6">
                        <p className="text-sm text-muted-foreground pb-2">
                            A WiFi vending system for managing and selling internet access with ease.
                        </p>
                        <div>
                            <Badge variant="secondary">
                                <div className="w-3 h-3">
                                    <img data-icon="inline-end" src="./next.svg" alt="Next.js" />
                                </div>
                                Next.js
                            </Badge>
                            <Badge variant="secondary">
                                <div className="w-3 h-3">
                                    <img data-icon="inline-end" src="./tailwind.svg" alt="Tailwind CSS" />
                                </div>
                                Tailwind CSS
                            </Badge>
                            <Badge variant="secondary">
                                <div className="w-3 h-3">
                                    <img data-icon="inline-end" src="./mysql.svg" alt="MySQL" />
                                </div>
                                MySQL
                            </Badge>
                            <Badge variant="secondary">
                                <div className="w-3 h-3">
                                    <img data-icon="inline-end" src="./arduino.svg" alt="Arduino" />
                                </div>
                                Arduino
                            </Badge>
                        </div>
                    </CollapsibleContent>
                </Collapsible>
            </div>

            <div className="border-t border-muted">
                <Collapsible>
                    <div className="flex py-2 pr-2">
                        <h1 className="font-semibold grow flex"> <Box size={18} className="opacity-40 mt-0.5 mr-1" />ShopEase</h1>

                        <CollapsibleTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <ChevronsUpDown />
                            </Button>
                        </CollapsibleTrigger>
                    </div>
                    <CollapsibleContent className="pr-2 pl-6">
                        <p className="text-sm text-muted-foreground pb-2">
                            A user-friendly online shopping platform for buying, selling, and managing products online.
                        </p>
                        <div>
                            <Badge variant="secondary">
                                <div className="w-3 h-3">
                                    <img data-icon="inline-end" src="./next.svg" alt="Next.js" />
                                </div>
                                Next.js
                            </Badge>
                            <Badge variant="secondary">
                                <div className="w-3 h-3">
                                    <img data-icon="inline-end" src="./tailwind.svg" alt="Tailwind CSS" />
                                </div>
                                Tailwind CSS
                            </Badge>
                            <Badge variant="secondary">
                                <div className="w-3 h-3">
                                    <img data-icon="inline-end" src="./mysql.svg" alt="MySQL" />
                                </div>
                                MySQL
                            </Badge>
                        </div>
                    </CollapsibleContent>
                </Collapsible>
            </div>

            <div className="border-t border-b border-muted">
                <Collapsible>
                    <div className="flex py-2 pr-2">
                        <h1 className="font-semibold grow flex"> <Box size={18} className="opacity-40 mt-0.5 mr-1" />School Asset and Inventory Management System</h1>

                        <CollapsibleTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <ChevronsUpDown />
                            </Button>
                        </CollapsibleTrigger>
                    </div>
                    <CollapsibleContent className="pr-2 pl-6">
                        <p className="text-sm text-muted-foreground pb-2">
                            An asset and inventory management platform that helps schools efficiently monitor, organize, and maintain their resources.
                        </p>
                        <div>
                            <Badge variant="secondary">
                                <div className="w-3 h-3">
                                    <img data-icon="inline-end" src="./react.svg" alt="React" />
                                </div>
                                React
                            </Badge>
                            <Badge variant="secondary">
                                <div className="w-3 h-3">
                                    <img data-icon="inline-end" src="./tailwind.svg" alt="Tailwind CSS" />
                                </div>
                                Tailwind CSS
                            </Badge>
                            <Badge variant="secondary">
                                <div className="w-3 h-3">
                                    <img data-icon="inline-end" src="./express.svg" alt="Express.js" />
                                </div>
                                Express.js
                            </Badge>
                            <Badge variant="secondary">
                                <div className="w-3 h-3">
                                    <img data-icon="inline-end" src="./mysql.svg" alt="MySQL" />
                                </div>
                                MySQL
                            </Badge>
                        </div>
                    </CollapsibleContent>
                </Collapsible>
            </div>
        </>
    )
}

export default Projects