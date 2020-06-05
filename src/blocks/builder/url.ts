export interface UrlMaterials {
  region: string;
  cluster: string;
  service: string;
  taskDef: string;
  taskId: string;
}

interface Urls {
  clusterUrl: string;
  serviceUrl: string;
  taskDefUrl: string;
  taskUrl: string;
}

function urlBase(region: string): string {
  return `https://${region}.console.aws.amazon.com/ecs/home?region=${region}#`;
}

export function urlBuilder(items: UrlMaterials): Urls {
  const base = urlBase(items.region);

  return {
    clusterUrl: `${base}/clusters/${items.cluster}/services`,
    serviceUrl: `${base}/clusters/${items.cluster}/services/${items.service}/details`,
    taskDefUrl: `${base}/taskDefinitions/${items.taskDef.replace(":", "/")}`,
    taskUrl: `${base}/clusters/${items.cluster}/tasks/${items.taskId}/details`,
  };
}
