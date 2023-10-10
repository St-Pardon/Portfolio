import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { ProjectService } from './projects.service';
import { Project } from './projects.entity';

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

  @Post()
  async createProject(@Body() project: Project): Promise<Project> {
    return this.projectService.createProject(project);
  }

  @Put(':id')
  async updateProject(
    @Param('id') id: string,
    @Body() project: Project,
  ): Promise<Project> {
    return this.projectService.updateProject(id, project);
  }

  @Delete(':id')
  async deleteProject(@Param('id') id: string): Promise<void> {
    return this.projectService.deleteProject(id);
  }
}
