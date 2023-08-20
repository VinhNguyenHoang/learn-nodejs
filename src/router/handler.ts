import { IncomingMessage, ServerResponse } from "http";

type HTTPHandler = (req: IncomingMessage, res: ServerResponse) => void;

class Router {
    controllerList: Map<string, Map<string,HTTPHandler>>;

    constructor() {
        this.controllerList = new Map(
            [
                ["GET", new Map()],
                ["POST", new Map()],
                ["PUT", new Map()],
                ["DELETE", new Map()]
            ]
        );
    }

    SetRoute(method: string, name: string, handler: HTTPHandler) {
        if (this.controllerList.has(method)) {
            let methodHandlers = this.controllerList.get(method)
            methodHandlers.set(name, handler)
            this.controllerList.set(method, methodHandlers)
        } else {
            throw new Error(`method ${method} is not supported`)
        }
    }

    HandleRouting(req: IncomingMessage, res: ServerResponse) {
        try {
            let segments = req.url.split("/")
            let controlerName = segments[2]

            console.log(`receiving ${req.method} request for ${controlerName}`)
            let methodHandlers = this.controllerList.get(req.method)
            if (methodHandlers.has(controlerName)) {
                methodHandlers.get(controlerName)(req, res)
            } else {
                // return 404 not found
                res.writeHead(404, {
                    'Content-Type': 'application/json'
                });
                res.end(JSON.stringify({ error: "route not found"}))
            }

        } catch (error) {
            console.log(error)
        }
    }
}

const router = new Router()

export {
    router,
    Router
}