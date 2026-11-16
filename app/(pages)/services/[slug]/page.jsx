import React from "react";
import { notFound } from "next/navigation";
import servicesData from "@/app/data/services.json";
import ServiceDetail from "@/app/components/serviceDetail.jsx";

export function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

const ServiceDetailPage = ({ params }) => {
  const service = servicesData.find((item) => item.slug === params.slug);

  if (!service) {
    notFound();
  }

  return <ServiceDetail service={service} />;
};

export default ServiceDetailPage;
