// App bootstrap
class App {

    constructor(){

        this.init();

    }

    async init(){

        await this.loadComponents();

        this.initNavigation();

        this.initAnimations();

    }

    async loadComponents(){}

    initNavigation(){}

    initAnimations(){}

}

new App();