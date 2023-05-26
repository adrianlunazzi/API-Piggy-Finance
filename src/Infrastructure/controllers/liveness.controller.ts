import { Controller, Get } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { HealthCheck, HealthCheckService, HttpHealthIndicator, MemoryHealthIndicator } from "@nestjs/terminus";

@ApiTags('Health')
@Controller("/health/liveness")
export class LivenessController {
    constructor(
        private healthCheckService: HealthCheckService,
        private http: HttpHealthIndicator,
    ) { }

    @Get()
    @HealthCheck()
    checkHealth() {
        return this.healthCheckService.check([
            () => this.http.pingCheck('Basic Check', 'http://localhost:3000/'),
        ]);
    }
}