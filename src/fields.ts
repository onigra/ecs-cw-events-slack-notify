interface Field {
  title: string;
  value: string;
  short: boolean;
}

export function fields(event: any): Field[] {
  return [
    {
      title: "Cluster",
      value: "cluster-1",
      short: true,
    },
    {
      title: "Service",
      value: "service-1",
      short: true,
    },
    {
      title: "Task Definition",
      value: "10",
      short: true,
    },
    {
      title: "Status",
      value: "SUCCESS",
      short: true,
    },
  ];
}
