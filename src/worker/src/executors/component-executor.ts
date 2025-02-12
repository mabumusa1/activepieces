import {ConfigurationValue} from "../components/framework/config/configuration-value.model";
import {Component} from "../components/framework/component";
import {apps} from "../components/apps";
import {Worker} from "../components/framework/worker";

export class ComponentExecutor {
    public async exec(componentName: string, actionName: string, config: ConfigurationValue) {
        const component = this.getComponent(componentName);

        // TODO FIX
        let worker = new Worker();
        return await component.runAction(worker, actionName, config);
    }

    private getComponent(componentName: string): Component {
        const component = apps.find(app => app.name === componentName);

        if (!component) {
            throw new Error(`error=component_not_found component=${componentName}`);
        }

        return component;
    }
}
