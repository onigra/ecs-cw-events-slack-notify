interface Urls {
  clusterUrl: string;
  serviceUrl: string;
  taskDefUrl: string;
  taskUrl: string;
}

function urlBase(region: string): string {
  return `https://${region}.console.aws.amazon.com/ecs/home?region=${region}#`;
}

export function urlBuilder(
  region: string,
  cluster: string,
  service: string,
  taskDef: string,
  taskId: string
): Urls {
  return {
    clusterUrl: `${urlBase(region)}/${cluster}/services`,
    serviceUrl: `${urlBase(region)}/${cluster}/services/${service}/details`,
    taskDefUrl: `${urlBase(region)}/taskDefinitions/${taskDef.replace(
      ":",
      "/"
    )}`,
    taskUrl: `${urlBase(region)}/${cluster}/tasks/${taskId}/details`,
  };
}
