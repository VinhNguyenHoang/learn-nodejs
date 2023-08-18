import { IncomingMessage, ServerResponse } from "http";

const controllerList = new Map<string, (req: IncomingMessage, res: ServerResponse) => void>();

function RegisterController(name: string, handler: (req: IncomingMessage, res: ServerResponse) => void) {
    console.log("registering controller")
    controllerList.set(name, handler)
}

function HandleRouting(req: IncomingMessage, res: ServerResponse) {
    try {
        let segments = req.url.split("/")
        let controlerName = segments[2]
        console.log("having list")
        console.log(controllerList)
        // check HTTP METHOD
        switch (req.method) {
            case "GET":
                console.log("receiving GET request")
                break;
            default:
                break;
        }

        res.writeHead(404, {
            'Content-Type': 'application/json'
        });
        res.end(JSON.stringify({ error: "route not found"}))
    } catch (error) {
        console.log(error)
    }
}

export {
    HandleRouting,
    RegisterController
}