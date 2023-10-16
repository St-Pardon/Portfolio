import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ProjectService } from './projects.service';
import { Project } from './projects.entity';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';

@Controller('project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Get()
  async getAllProjects(): Promise<Project[]> {
    return this.projectService.getAllProjects();
  }

  @Get(':id')
  async getProjectById(@Param('id') id: string): Promise<Project> {
    return this.projectService.getProjectById(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async createProject(@Body() project: Project): Promise<Project> {
    return this.projectService.createProject(project);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async updateProject(
    @Param('id') id: string,
    @Body() project: Project,
  ): Promise<Project> {
    return this.projectService.updateProject(id, project);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async deleteProject(@Param('id') id: string): Promise<void> {
    return this.projectService.deleteProject(id);
  }
}
