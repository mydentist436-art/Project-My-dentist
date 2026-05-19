import { services } from '@/data/services'
import ServiceCard from './ServiceCard'
import { StaggerContainer, StaggerItem } from '@/components/common/MotionWrapper'

export default function ServicesGrid() {
  return (
    <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service, index) => (
        <StaggerItem key={service.id}>
          <ServiceCard service={service} index={index} />
        </StaggerItem>
      ))}
    </StaggerContainer>
  )
}
