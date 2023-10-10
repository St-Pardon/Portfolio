import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Project, ProjectSchema } from './projects.entity';
import { ProjectController } from './projects.controller';
import { ProjectService } from './projects.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Project.name, schema: ProjectSchema }]),
  ],
  controllers: [ProjectController],
  providers: [ProjectService],
})
export class ProjectsModule {}
