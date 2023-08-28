import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Project, ProjectDocument } from './projects.entity';

@Injectable()
export class ProjectService {
  constructor(
    @InjectModel(Project.name) private projectModel: Model<ProjectDocument>,
  ) {}

  async getAllProjects(): Promise<Project[]> {
    return this.projectModel.find().exec();
  }
  async getProjectById(id: string): Promise<Project[]> {
    return this.projectModel.find({ _id: id }).exec();
  }

  async createProject(project: Project): Promise<Project> {
    const newProject = new this.projectModel(project);
    return newProject.save();
  }

  async updateProject(id: string, project: Project): Promise<Project> {
    return this.projectModel
      .findByIdAndUpdate(id, project, { new: true })
      .exec();
  }

  async deleteProject(id: string): Promise<void> {
    await this.projectModel.findByIdAndDelete(id).exec();
  }
}
