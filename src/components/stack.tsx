import { Badge } from "./ui/badge"


function TechStack() {
    return (
        <>
            <h1 className="pt-3 font-bold text-xl">Stack</h1>
            <div className="w-full">
                <h2 className="font-semibold pt-2">Frontend</h2>
                <div className="flex gap-2 pt-2 flex-wrap">
                    <Badge variant="secondary">
                        <div className="w-3 h-3">
                            <img data-icon="inline-end" src="./typescript.svg" alt="TypeScript" />
                        </div>
                        TyeScript
                    </Badge>
                    <Badge variant="secondary">
                        <div className="w-3 h-3">
                            <img data-icon="inline-end" src="./javascript.svg" alt="JavaScript" />
                        </div>
                        JavaScript
                    </Badge>
                    <Badge variant="secondary">
                        <div className="w-3 h-3">
                            <img data-icon="inline-end" src="./react.svg" alt="React" />
                        </div>
                        React
                    </Badge>
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
                </div>
            </div>

            <div className="w-full">
                <h2 className="font-semibold pt-2">Backend</h2>
                <div className="flex gap-2 pt-2 flex-wrap">
                    <Badge variant="secondary">
                        <div className="w-3 h-3">
                            <img data-icon="inline-end" src="./node.svg" alt="Node.js" />
                        </div>
                        Npde.js
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
                    <Badge variant="secondary">
                        <div className="w-3 h-3">
                            <img data-icon="inline-end" src="./postgre.svg" alt="PostgreSQL" />
                        </div>
                        PostgreSQL
                    </Badge>
                </div>
            </div>

            <div className="w-full">
                <h2 className="font-semibold pt-2">Tools</h2>
                <div className="flex gap-2 pt-2 flex-wrap">
                    <Badge variant="secondary">
                        <div className="w-3 h-3">
                            <img data-icon="inline-end" src="./git.svg" alt="Git" />
                        </div>
                        Git
                    </Badge>
                    <Badge variant="secondary">
                        <div className="w-3 h-3">
                            <img data-icon="inline-end" src="./vscode.svg" alt="VS Code" />
                        </div>
                        VS Code
                    </Badge>
                    <Badge variant="secondary">
                        <div className="w-3 h-3">
                            <img data-icon="inline-end" src="./arduino.svg" alt="Arduino" />
                        </div>
                        Arduino
                    </Badge>
                </div>
            </div>
        </>
    )
}

export default TechStack