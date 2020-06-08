interface UrlMaterials {
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

export function urlBuilder(event: UrlMaterials): Urls {
  const base = urlBase(event.region);

  return {
    clusterUrl: `${base}/clusters/${event.cluster}/services`,
    serviceUrl: `${base}/clusters/${event.cluster}/services/${event.service}/details`,
    taskDefUrl: `${base}/taskDefinitions/${event.taskDef.replace(":", "/")}`,
    taskUrl: `${base}/clusters/${event.cluster}/tasks/${event.taskId}/details`,
  };
}
