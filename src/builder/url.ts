interface Urls {
  clusterUrl: string;
  serviceUrl: string;
  taskDefUrl: string;
  taskUrl: string;
}

export interface UrlBuildElements {
  region: string;
  cluster: string;
  service: string;
  taskDef: string;
  taskId: string;
}

function urlBase(region: string): string {
  return `https://${region}.console.aws.amazon.com/ecs/home?region=${region}#`;
}

export function urlBuilder(items: UrlBuildElements): Urls {
  return {
    clusterUrl: `${urlBase(items.region)}/clusters/${items.cluster}/services`,
    serviceUrl: `${urlBase(items.region)}/clusters/${items.cluster}/services/${
      items.service
    }/details`,
    taskDefUrl: `${urlBase(
      items.region
    )}/taskDefinitions/${items.taskDef.replace(":", "/")}`,
    taskUrl: `${urlBase(items.region)}/clusters/${items.cluster}/tasks/${
      items.taskId
    }/details`,
  };
}
