import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Health')
@Controller('/health/readiness')
export class ReadinessController {
  @Get()
  getReadiness() {
    const response = { Readiness: { status: 'up' } };
    return response;
  }
}
