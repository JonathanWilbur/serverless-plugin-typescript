export interface ServerlessInstance {
  cli: {
    log(str: string)
  }
  config: {
    servicePath: string
  }
  service: {
    provider: {
      name: string
      stage: string
      region: string
      runtime?: string
      timeout?: number
      versionFunctions: boolean
    }
    functions: { [key: string]: ServerlessFunction }
    package: ServerlessPackage
    load(rawOptions: {}): Promise<any>;
    setFunctionNames(rawOptions: {}): void;
    getServiceName(): string;
    getAllFunctions(): string[];
    getAllFunctionsNames(): string[];
    getFunction(functionName: string): ServerlessFunction;
    getEventInFunction(eventName: string, functionName: string): ServerlessEvent;
    getAllEventsInFunction(functionName: string): ServerlessEvent[];
    mergeResourceArrays(): void;
    update(data: {}): {};
  }
  pluginManager: PluginManager
}

export interface ServerlessOptions {
  function?: string
  watch?: boolean
  extraServicePath?: string
}

export interface ServerlessFunction {
  runtime?: string,
  handler: string,
  timeout?: number,
  memorySize?: number,
  environment?: { [ name: string ]: string },
  name: string,
  package: ServerlessPackage
}

export interface ServerlessPackage {
  include: string[]
  exclude: string[]
  artifact?: string
  individually?: boolean
}

export interface PluginManager {
  spawn(command: string): Promise<void>
}

export interface ServerlessEvent {
  name: string
}