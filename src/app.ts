import { Router, router } from './router/handler';
export class Application {
    private router: Router
    constructor() {
        this.router = router
    }

    Run() {
        console.log(this.router)
    }
}